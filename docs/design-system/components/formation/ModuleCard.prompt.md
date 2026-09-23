Carte d'une formation ou d'un module dans le catalogue, la fiche programme ou la proposition commerciale.

    <ModuleCard
      overline="Module · 3D précalculée"
      title="Blender : modélisation et rendu"
      summary="Modéliser un objet complet, le texturer et le rendre en PBR."
      meta={[{ label: 'Durée', value: '21 heures — 3 jours' }, { label: 'Groupe', value: '3 à 6 participants' }]}
      badges={[{ label: 'Blender', tone: 'rose' }, { label: 'Présentiel', tone: 'neutral' }, { label: 'Dates à convenir', tone: 'info' }]}
      price="1 400 €" priceNote="net de taxe, par participant"
      action={<Button size="sm">Demander des dates</Button>}
    />

**Avec visuel** — `image` (ou `imagePlaceholder` en maquette) pose un 16:9 en tête, `mark` place le repère d'outil sur l'angle du visuel, et le filet de dégradé se glisse sous l'image. La place étant comptée, deux entrées `meta` au maximum et un résumé de deux lignes.

    <ModuleCard
      image="rendu-blender.jpg" imageAlt=""
      mark={<Icon name="outil-blender" size={24} tile="degrade" shape="carre" />}
      href="/formations/blender-modelisation"
      overline="Module · 3D précalculée"
      title="Blender : modélisation et rendu"
      summary="Modéliser un objet complet, le texturer et le rendre en PBR."
      meta={[{ label: 'Durée', value: '21 heures — 3 jours' }]}
      badges={[{ label: 'Blender', tone: 'rose' }, { label: 'Dates à convenir', tone: 'info' }]}
      price="1 400 €" priceNote="net de taxe"
      action={<Button size="sm" variant="ghost" href="/formations/blender-modelisation">Voir la fiche</Button>}
    />

**Lien** — `href` rend le titre cliquable et étend la zone de clic à toute la carte ; le bouton de pied reste utilisable et l'anneau de focus s'affiche autour de la carte entière. Dans un catalogue, la carte mène toujours à la fiche programme — « Demander des dates » vit sur la fiche, pas sur la carte.

**Ordre invariable** — type et domaine en `overline`, outil principal en tête du titre, puis badges outil, modalité, statut. Le repère de la carte est l'icône de l'outil principal, pas du domaine.

**À éviter** — Une photo de session ou une image de banque en visuel : rendus et captures de fichiers d'exercice uniquement. « S'inscrire », un compte à rebours, des places restantes, un badge distanciel ou CPF : ces états n'existent pas. Le logo d'un éditeur à la place du repère Lucide.
