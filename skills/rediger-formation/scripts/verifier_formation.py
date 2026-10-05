#!/usr/bin/env python3
"""Outil du skill « rediger-formation » (VIV Formation).

    python scripts/verifier_formation.py --annoter <fichier.md>
        Écrit dans le fichier les commentaires « fiche : … » : valeurs résolues dont Claude Design a
        besoin pour la fiche programme (libellés du domaine, du type et des outils, durée, tarifs,
        ligne de référence, formateur). Le site ignore les commentaires. À lancer après chaque
        modification du fichier, avant le contrôle.

    python scripts/verifier_formation.py <fichier.md>
        Contrôle le fichier : tout ce que le site refuserait au build, la mise en forme exigée par
        sa vérification automatique, la typographie et les interdits de la charte, les commentaires
        « fiche : ». ERREUR = à corriger avant de remettre le fichier ; À VÉRIFIER = à relire ou à
        faire confirmer. Code de sortie 1 s'il reste une erreur.

    python scripts/verifier_formation.py --prochaine-reference <id-domaine>
        Référence libre suivante du domaine (ex. TRL02), d'après references/donnees-site.json.

Les identifiants valides et les références déjà attribuées viennent de references/donnees-site.json,
exporté du site (date dans « exporteLe »).
"""
import json
import re
import sys
from datetime import date, datetime
from pathlib import Path

try:
    import yaml
except ImportError:  # pragma: no cover
    sys.exit("PyYAML manque : pip install pyyaml")

sys.stdout.reconfigure(encoding="utf-8")

DONNEES = json.loads(
    (Path(__file__).resolve().parent.parent / "references" / "donnees-site.json").read_text("utf-8")
)
DOMAINES = {d["id"]: d for d in DONNEES["domaines"]}
TYPES = {t["id"]: t for t in DONNEES["types"]}
OUTILS = {o["id"]: o for o in DONNEES["outils"]}
FORMATEURS = {p["id"]: p for p in DONNEES["formateurs"]}
VERBES_REFUSES = DONNEES["verbesRefuses"]
MOIS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre",
        "octobre", "novembre", "décembre"]
PARCOURS = "# fiche, parcours du formateur : "


class Chargeur(yaml.SafeLoader):
    """YAML comme le site (js-yaml) : seuls true/false sont des booléens, « Oui » ou « Non » restent du texte."""


Chargeur.yaml_implicit_resolvers = {
    k: [(tag, rx) for tag, rx in v if tag != "tag:yaml.org,2002:bool"]
    for k, v in yaml.SafeLoader.yaml_implicit_resolvers.items()
}
Chargeur.add_implicit_resolver(
    "tag:yaml.org,2002:bool", re.compile(r"^(?:true|True|TRUE|false|False|FALSE)$"), list("tTfF")
)


def lire_texte(chemin):
    return Path(chemin).read_text("utf-8").replace("\r\n", "\n")


def decouper(texte):
    """(frontmatter, corps) ; erreur si le frontmatter manque ou ne se lit pas."""
    m = re.match(r"^---\n(.*?)\n---\n?(.*)$", texte, re.S)
    if not m:
        raise ValueError("frontmatter introuvable : le fichier commence par « --- » et le ferme par « --- ».")
    try:
        donnees = yaml.load(m.group(1), Loader=Chargeur) or {}
    except yaml.YAMLError as e:
        raise ValueError(
            f"syntaxe YAML invalide ({e}). Cause fréquente : un texte qui contient « : » doit être "
            "entre apostrophes droites, ex. 'Configuration d’un projet : unités'."
        )
    return donnees, m.group(2)


def en_date(v):
    if isinstance(v, datetime):
        return v.date()
    if isinstance(v, date):
        return v
    return date.fromisoformat(str(v))


def pluriel(n, mot):
    return f"{n} {mot}{'s' if n > 1 else ''}"


def euros(n):
    return f"{int(n):,}".replace(",", " ") + " €"


# ---------- Commentaires « fiche : » pour Claude Design ----------

def commentaires_attendus(f):
    """Commentaire de fin de ligne attendu pour chaque clé, et lignes de parcours du formateur."""
    fin = {}
    try:
        rev = en_date(f["revision"])
        fin["reference"] = (
            f"fiche : {f['reference']}-PRO • Révisé le : {MOIS[rev.month - 1]} {rev.year} • "
            f"Version : {f['version']} • Déclaration d'activité : {DONNEES['declarationActivite']}"
        )
    except (KeyError, ValueError, TypeError):
        pass
    if f.get("type") in TYPES:
        fin["type"] = f"fiche : {TYPES[f['type']]['label']}"
    if f.get("domaine") in DOMAINES:
        label = DOMAINES[f["domaine"]]["label"]
        fin["domaine"] = f"fiche : {label} (surtitre de la page 1 : « Fiche programme · {label} »)"
    outils = [OUTILS[o]["label"] for o in f.get("outils") or [] if o in OUTILS]
    fin["outils"] = f"fiche : {', '.join(outils)}" if outils else "fiche : sans outil imposé"
    duree = f.get("duree") or {}
    if isinstance(duree.get("heures"), int) and isinstance(duree.get("jours"), int):
        fin["duree"] = f"fiche : {pluriel(duree['heures'], 'heure')} — {pluriel(duree['jours'], 'jour')}"
    if isinstance(f.get("tarif"), (int, float)) and not isinstance(f.get("tarif"), bool):
        fin["tarif"] = f"fiche : Inter-entreprises : {euros(f['tarif'])} HT/pers.* · Intra-entreprise : sur devis"
    parcours = []
    formateur = FORMATEURS.get(f.get("formateur"))
    if formateur:
        fin["formateur"] = f"fiche : {formateur['nom']} · {formateur['fonction']}"
        parcours = [PARCOURS + p for p in formateur["parcours"]]
    return fin, parcours


def ligne_cle(ligne):
    m = re.match(r"^([A-Za-z]+):", ligne)
    return m.group(1) if m else None


def retirer_commentaire(ligne):
    """Valeur YAML sans commentaire de fin de ligne (un « # » hors apostrophes, précédé d'une espace)."""
    dans_apos = False
    for i, c in enumerate(ligne):
        if c == "'":
            dans_apos = not dans_apos
        elif c == "#" and not dans_apos and i > 0 and ligne[i - 1] == " ":
            return ligne[:i].rstrip()
    return ligne.rstrip()


def annoter(chemin):
    texte = lire_texte(chemin)
    f, _ = decouper(texte)
    fin, parcours = commentaires_attendus(f)
    lignes = texte.split("\n")
    sortie = []
    i = 0
    while i < len(lignes):
        ligne = lignes[i]
        cle = ligne_cle(ligne)
        if cle in fin:
            ligne = f"{retirer_commentaire(ligne)} # {fin[cle]}"
        sortie.append(ligne)
        if cle == "formateur":
            while i + 1 < len(lignes) and lignes[i + 1].startswith(PARCOURS):
                i += 1
            sortie.extend(parcours)
        i += 1
    Path(chemin).write_text("\n".join(sortie), encoding="utf-8", newline="\n")
    print(f"{Path(chemin).name} : commentaires « fiche : » écrits.")


# ---------- Référence suivante ----------

def prochaine_reference(id_domaine):
    domaine = DOMAINES.get(id_domaine)
    if not domaine:
        sys.exit(f"Domaine inconnu : {id_domaine}. Domaines : {', '.join(DOMAINES)}.")
    code = domaine["code"]
    nums = [int(f["reference"][len(code):]) for f in DONNEES["formations"]
            if str(f["reference"]).startswith(code) and f["reference"][len(code):].isdigit()]
    print(f"{code}{(max(nums) if nums else 0) + 1:02d}")
    print(f"(d'après les références exportées le {DONNEES['exporteLe']} ; à confirmer si des formations ont été ajoutées depuis)")


# ---------- Contrôle ----------

NIVEAUX = ["Débutant", "Intermédiaire", "Confirmé", "Tous profils"]
STATUTS = ["Dates à convenir", "Session confirmée", "Session reportée"]
CHAMPS = {
    "reference", "version", "revision", "titre", "titreCourt", "sousTitre", "type", "domaine",
    "outils", "niveau", "duree", "tarif", "public", "prerequis", "equipement", "materielFourni",
    "objectifs", "competences", "programme", "formateur", "visuel", "visuelAlt", "visuelCredit",
    "visuelIA", "statut", "enAvant", "provisoire", "ordre", "brouillon",
}
OBLIGATOIRES = ["reference", "version", "revision", "titre", "titreCourt", "sousTitre", "type",
                "domaine", "niveau", "duree", "public", "prerequis", "objectifs", "competences", "programme"]
INTERDITS = [
    (r"\bCPF\b|compte personnel de formation", "CPF : jamais (financement OPCO et plan de développement des compétences)"),
    (r"distanciel|à distance|\bvisio|e-learning|classe virtuelle", "distanciel : les formations sont en présentiel, dans les locaux du client"),
    (r"qualiopi", "Qualiopi : aucune mention tant que le certificat n’est pas obtenu"),
    (r"s['’]inscrire|inscrivez|places? restantes?", "inscription ou places : pas de session au calendrier"),
    (r"notre salle|nos locaux", "lieu : les formations se tiennent dans les locaux du client"),
    (r"derni[èe]re version|version r[ée]cente", "version : demander la version exacte"),
    (r"r[ée]volution|game[- ]?changer|incontournable", "vocabulaire d’annonce : rester factuel"),
]
VAGUE = re.compile(r"\b(?:r[ée]cente?s?|puissante?s?|performante?s?|suffisante?s?)\b|bonne configuration", re.I)
EMOJI = re.compile("[\U0001F000-\U0001FAFF☀-➿️]")
DUREE = re.compile(
    r"\b\d+(?:[,.]\d+)?\s?(?:h(?:\d{2})?|heures?|min|minutes?)\b|\bj(?:our)?\s?\d\b|demi-journ[ée]e|\bmatin[ée]e?\b|apr[èe]s-midi",
    re.I,
)
SLUG = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")
INFINITIF = re.compile(r"^(?:se |s'|s’)?[^\W\d_]+(?:er|ir|re|oir)\b", re.I)


def controler_forme(texte, err):
    """Mise en forme exigée par la vérification automatique du site (Prettier) : le fichier doit
    pouvoir être déposé tel quel."""
    if not texte.endswith("\n") or texte.endswith("\n\n"):
        err("mise en forme", "le fichier se termine par exactement un saut de ligne")
    for n, ligne in enumerate(texte.split("\n"), 1):
        if "\t" in ligne:
            err(f"ligne {n}", "tabulation : indenter avec deux espaces")
        if ligne != ligne.rstrip():
            err(f"ligne {n}", "espace en fin de ligne")
        valeur = retirer_commentaire(ligne)
        if re.search(r':\s+"|^\s*-\s+"', valeur):
            err(f"ligne {n}", "guillemets doubles en YAML : utiliser des apostrophes droites ' '")
        if re.search(r":\s*\{", valeur) and re.search(r"\{\S|\S\}", valeur):
            err(f"ligne {n}", "accolades : une espace à l’intérieur, { heures: 35, jours: 5 }")
        if re.search(r"\[\s|\s\]", valeur):
            err(f"ligne {n}", "crochets : pas d’espace à l’intérieur, [2, 3]")
        if valeur != ligne.rstrip() and " # " not in ligne:
            err(f"ligne {n}", "commentaire : « # » précédé et suivi d’une espace")
    if "\n\n\n" in texte:
        err("mise en forme", "deux lignes vides de suite : une seule")


def verifier(chemin):
    erreurs, a_verifier = [], []

    def err(champ, msg):
        erreurs.append(f"{champ} : {msg}")

    def voir(champ, msg):
        a_verifier.append(f"{champ} : {msg}")

    nom = Path(chemin).name
    slug = re.sub(r"^_", "", nom)[:-3] if nom.endswith(".md") else nom
    if not nom.endswith(".md"):
        err("nom du fichier", "extension .md attendue")
    if not SLUG.match(slug):
        err("nom du fichier", f"« {slug} » : minuscules sans accents, chiffres et tirets seulement (c’est l’URL de la page)")
    elif not 3 <= len(slug.split("-")) <= 6:
        voir("nom du fichier", f"« {slug} » : {len(slug.split('-'))} mot(s), 3 à 6 conseillés")
    if nom.startswith("_"):
        voir("nom du fichier", "brouillon (« _ ») : ignoré par le site, à renommer une fois validé")

    try:
        texte = lire_texte(chemin)
        f, corps = decouper(texte)
    except (ValueError, OSError) as e:
        print(f"{nom}\n  ERREUR      {e}")
        sys.exit(1)
    if corps.strip():
        err("corps", "doit rester vide : tout est dans le frontmatter")
    controler_forme(texte, err)

    for k in f:
        if k not in CHAMPS:
            err(k, "champ inconnu (faute de frappe ou ancien nom ?)")
    for k in OBLIGATOIRES:
        if f.get(k) in (None, "", []):
            err(k, "obligatoire")

    # Identité et classement
    domaine = DOMAINES.get(f.get("domaine"))
    if f.get("domaine") and not domaine:
        err("domaine", f"id inconnu ({', '.join(DOMAINES)})")
    if f.get("type") and f["type"] not in TYPES:
        err("type", f"id inconnu ({', '.join(TYPES)})")
    for o in f.get("outils") or []:
        if o not in OUTILS:
            err("outils", f"id inconnu « {o} » ({', '.join(OUTILS)}) : un nouvel outil doit d’abord être ajouté au site")
    if f.get("formateur") and f["formateur"] not in FORMATEURS:
        err("formateur", f"id inconnu « {f['formateur']} » ({', '.join(FORMATEURS)}) : un nouveau formateur doit d’abord être ajouté au site")
    ref = str(f.get("reference") or "")
    if ref and not re.match(r"^[A-Z0-9]{2,4}\d{2}$", ref):
        err("reference", "code du domaine + deux chiffres (ex. TRL01)")
    if domaine and ref and not ref.startswith(domaine["code"]):
        err("reference", f"doit commencer par {domaine['code']} (domaine {domaine['label']})")
    for autre in DONNEES["formations"]:
        if autre["reference"] == ref and autre["slug"] != slug:
            err("reference", f"déjà attribuée à « {autre['titre']} » ({autre['slug']})")
    existante = next((x for x in DONNEES["formations"] if x["slug"] == slug), None)
    if existante and existante["reference"] != ref:
        err("reference", f"cette formation existe déjà sous la référence {existante['reference']} : la référence ne change pas")
    version = str(f.get("version") or "")
    if version and not re.match(r"^\d{2}v\d{2}$", version):
        err("version", "format AAvNN (ex. 26v01)")
    try:
        rev = en_date(f["revision"]) if f.get("revision") else None
    except ValueError:
        rev = None
        err("revision", "date AAAA-MM-JJ")
    if rev and re.match(r"^\d{2}v\d{2}$", version) and version[:2] != str(rev.year)[2:]:
        voir("version", f"année {version[:2]} différente de celle de la révision ({rev.year})")
    if existante and existante["version"] == version:
        voir("version", f"même version que le fichier publié ({version}) : normal si aucun texte affiché n’a changé, sinon version suivante")

    # Présentation et repères
    tc, st = f.get("titreCourt"), f.get("sousTitre")
    if isinstance(tc, str) and len(tc) > 40:
        err("titreCourt", f"{len(tc)} caractères, 40 au plus")
    if isinstance(st, str):
        if len(st) > 180:
            err("sousTitre", f"{len(st)} caractères, 180 au plus")
        if len(st.split()) > 30:
            err("sousTitre", f"{len(st.split())} mots, 30 au plus")
        if not st.strip().endswith("."):
            err("sousTitre", "une phrase complète, avec son point")
    if f.get("niveau") and f["niveau"] not in NIVEAUX:
        err("niveau", " | ".join(NIVEAUX))
    if f.get("statut") and f["statut"] not in STATUTS:
        err("statut", " | ".join(STATUTS))
    duree = f.get("duree")
    if duree is not None:
        h, j = (duree or {}).get("heures"), (duree or {}).get("jours")
        if not (isinstance(h, int) and h > 0 and isinstance(j, int) and j > 0):
            err("duree", "{ heures: <entier>, jours: <entier> }")
        elif h / j > 8:
            voir("duree", f"{h} heures sur {j} jours : plus de 8 heures par jour")
    if "tarif" in f and not (isinstance(f["tarif"], (int, float)) and not isinstance(f["tarif"], bool) and f["tarif"] > 0):
        err("tarif", "montant en euros HT par personne, sans symbole ni espace (ex. 1900) ; champ absent = sur devis")
    for k, (mn, mx) in {"public": (1, 4), "prerequis": (1, 4), "equipement": (1, 4), "materielFourni": (1, 4),
                        "objectifs": (3, 8), "competences": (3, 6)}.items():
        v = f.get(k)
        if isinstance(v, list) and not (mn <= len(v) <= mx):
            err(k, f"{len(v)} élément(s), {mn} à {mx} attendus")
        elif k in f and v is not None and not isinstance(v, list):
            err(k, "liste attendue (une ligne « - » par élément)")
    for i, e in enumerate(f.get("equipement") or [], 1):
        if isinstance(e, str) and VAGUE.search(e):
            err(f"équipement {i}", "caractéristique vague : demander une valeur mesurable (« 8 Go de mémoire vidéo (VRAM) », gamme de carte)")
    if f.get("equipement") and f.get("materielFourni"):
        voir("equipement / materielFourni", "les deux sont renseignés : vérifier qui fournit quoi")
    if f.get("visuel"):
        if not f.get("visuelAlt"):
            err("visuelAlt", "obligatoire avec un visuel")
        if not re.match(rf"^\./visuels/{re.escape(slug)}\.(jpg|jpeg|png|webp)$", str(f["visuel"])):
            err("visuel", f"chemin attendu : ./visuels/{slug}.jpg (ou .png, .webp), même nom que le fichier")
        voir("visuel", "l’image doit être déposée dans src/content/formations/visuels/ sous ce nom exact, sinon le site refuse le fichier")
        if re.search(r"\blogo", str(f.get("visuelAlt") or ""), re.I):
            voir("visuel", "l’image montre un logo : la charte exclut les logos d’éditeur de logiciel (à faire confirmer par l’utilisateur)")

    # Objectifs et compétences
    objectifs = f.get("objectifs") if isinstance(f.get("objectifs"), list) else []
    for i, o in enumerate(objectifs, 1):
        champ = f"objectif {i}"
        if not isinstance(o, str):
            err(champ, "texte attendu")
            continue
        if len(o) > 180:
            err(champ, f"{len(o)} caractères, 180 au plus")
        debut = o.lower().replace("’", "'")
        refuse = next((v for v in VERBES_REFUSES if debut == v or debut.startswith(v + " ")), None)
        if refuse:
            err(champ, f"« {refuse} » n’est pas un verbe observable : proposer une reformulation et la faire valider")
        elif not INFINITIF.match(o):
            voir(champ, "ne semble pas commencer par un verbe à l’infinitif")
    cites = set()
    for i, c in enumerate(f.get("competences") or [], 1):
        champ = f"compétence {i}"
        if not isinstance(c, dict) or not c.get("libelle"):
            err(champ, "libelle obligatoire")
            continue
        if len(c["libelle"]) > 180:
            err(champ, f"{len(c['libelle'])} caractères, 180 au plus")
        nums = c.get("objectifs")
        if not isinstance(nums, list) or not nums:
            err(champ, "au moins un numéro d’objectif : objectifs: [1, 2]")
            continue
        for n in nums:
            if not isinstance(n, int) or not 1 <= n <= len(objectifs):
                err(champ, f"objectif {n} inexistant (1 à {len(objectifs)})")
            cites.add(n)
    orphelins = [n for n in range(1, len(objectifs) + 1) if n not in cites]
    if orphelins:
        voir("compétences", f"objectif(s) {', '.join(map(str, orphelins))} rattaché(s) à aucune compétence (permis ; à signaler seulement si ce n’est pas le choix de la source)")

    # Programme
    programme = f.get("programme") if isinstance(f.get("programme"), list) else []
    for i, p in enumerate(programme, 1):
        champ = f"programme, partie {i}"
        if not isinstance(p, dict) or not p.get("titre"):
            err(champ, "titre obligatoire")
            continue
        if len(p["titre"]) > 55:
            err(champ, f"titre de {len(p['titre'])} caractères, 55 au plus")
        if DUREE.search(p["titre"]):
            err(champ, "pas de durée ni de jour dans le titre (la durée est dans le bandeau et le déroulé)")
        pts = p.get("points") or []
        if not 3 <= len(pts) <= 6:
            err(champ, f"{len(pts)} point(s), 3 à 6 attendus")
        for j, pt in enumerate(pts, 1):
            if not isinstance(pt, str):
                err(f"{champ}, point {j}", "texte attendu")
                continue
            if len(pt) > 180:
                err(f"{champ}, point {j}", f"{len(pt)} caractères, 180 au plus")
            if DUREE.search(pt):
                voir(f"{champ}, point {j}", "contient peut-être une durée (pas de durée dans le programme)")

    # Typographie et charte, sur tous les textes affichés
    textes = [("titre", f.get("titre")), ("titreCourt", tc), ("sousTitre", st)]
    for k, lib in [("public", "public"), ("prerequis", "prérequis"), ("equipement", "équipement"),
                   ("materielFourni", "matériel fourni")]:
        textes += [(f"{lib} {i}", t) for i, t in enumerate(f.get(k) or [], 1)]
    textes += [(f"objectif {i}", t) for i, t in enumerate(objectifs, 1)]
    textes += [(f"compétence {i}", c.get("libelle")) for i, c in enumerate(f.get("competences") or [], 1) if isinstance(c, dict)]
    for i, p in enumerate(programme, 1):
        if isinstance(p, dict):
            textes.append((f"programme, titre {i}", p.get("titre")))
            textes += [(f"programme {i}, point {j}", t) for j, t in enumerate(p.get("points") or [], 1)]
    textes += [("visuelAlt", f.get("visuelAlt")), ("visuelCredit", f.get("visuelCredit"))]
    liste = re.compile(r"^(public|prérequis|équipement|matériel fourni|objectif|compétence|programme \d)")
    for champ, t in textes:
        if not isinstance(t, str):
            continue
        if "'" in t:
            err(champ, "apostrophe droite : utiliser l’apostrophe typographique ’")
        if '"' in t:
            err(champ, "guillemets droits : utiliser « … »")
        if "  " in t or t != t.strip():
            err(champ, "espace en double ou en bord de texte")
        if re.search(r"\s[,.]", t):
            err(champ, "espace avant une virgule ou un point")
        if re.search(r"[^\s\d][:;!?](?=\s|$)", t):
            err(champ, "espace manquante avant : ; ! ?")
        if t[:1].islower():
            err(champ, "majuscule initiale attendue")
        if liste.match(champ) and re.search(r"[.;]$", t):
            err(champ, "pas de ponctuation finale dans une liste")
        for motif, msg in INTERDITS:
            if re.search(motif, t, re.I):
                err(champ, msg)
        if EMOJI.search(t):
            err(champ, "emoji : aucun")

    # Casse phrase : majuscules à l'intérieur des titres (noms propres, marques et sigles admis)
    marques = {m for o in OUTILS.values() for m in o["label"].split()}
    titres = [("titre", f.get("titre")), ("titreCourt", tc)] + [
        (f"programme, titre {i}", p.get("titre")) for i, p in enumerate(programme, 1) if isinstance(p, dict)
    ]
    for champ, t in titres:
        if not isinstance(t, str):
            continue
        mots = [re.sub(r"^[«(“’'/&-]+|[»),.:;!?”]+$", "", m) for m in t.split()[1:]]
        maj = [m for m in mots if len(m) > 1 and m[0].isupper() and m[1].islower() and m not in marques]
        if maj:
            voir(champ, f"casse phrase : majuscule à {', '.join(maj)} (gardée seulement pour un nom propre, une marque ou un sigle)")

    # Commentaires « fiche : » pour Claude Design
    fin, parcours = commentaires_attendus(f)
    lignes = texte.split("\n")
    perimes = []
    for n, ligne in enumerate(lignes):
        cle = ligne_cle(ligne)
        if cle in fin and not ligne.endswith(f" # {fin[cle]}"):
            perimes.append(cle)
        if cle == "formateur" and parcours and lignes[n + 1 : n + 1 + len(parcours)] != parcours:
            perimes.append("parcours du formateur")
    if perimes:
        err("commentaires « fiche : »", f"absents ou périmés ({', '.join(perimes)}) : lancer --annoter")

    print(nom)
    for e in erreurs:
        print(f"  ERREUR      {e}")
    for v in a_verifier:
        print(f"  À VÉRIFIER  {v}")
    if not erreurs and not a_verifier:
        print("  Aucun problème détecté.")
    print(f"  {len(erreurs)} erreur(s), {len(a_verifier)} point(s) à vérifier.")
    sys.exit(1 if erreurs else 0)


if __name__ == "__main__":
    args = sys.argv[1:]
    if len(args) == 2 and args[0] == "--prochaine-reference":
        prochaine_reference(args[1])
    elif len(args) == 2 and args[0] == "--annoter":
        try:
            annoter(args[1])
        except (ValueError, OSError) as e:
            sys.exit(f"ERREUR : {e}")
    elif len(args) == 1 and not args[0].startswith("--"):
        verifier(args[0])
    else:
        sys.exit("Usage : verifier_formation.py --annoter <fichier.md> | <fichier.md> | --prochaine-reference <id-domaine>")
