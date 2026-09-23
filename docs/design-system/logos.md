# Logos

Les fichiers de marque fournis par VIV Formation, tels quels. **Le SVG est le format de référence** dans tous les cas ; les PNG sont conservés pour les outils qui refusent le vectoriel.

Trois niveaux de marque : `viv-formation-*` (le logo complet), `viv-monogramme-*` (le « Viv » seul) et `viv-submark-*` (le V seul, tel que la charte VIV Group le définit).

| Fichier | Format | Encre | Où l'utiliser |
| --- | --- | --- | --- |
| `viv-formation-couleur.svg` | SVG, 4340 × 712 | dégradé `brand-rose` → `brand-gold` | Version de référence, sur `surface`, `surface-sunken` et tout fond clair uni. En-tête de site, première page de proposition, couverture de livret, impression grand format. |
| `viv-formation-noir.svg` | SVG, 4340 × 712 | noir plein (`fill="black"`) | Documents monochromes : convention, convocation, attestation, émargement, photocopie, tampon. Également sur un aplat `brand-gold` si le contraste le demande. |
| `viv-formation-blanc.svg` | SVG, 4340 × 712 | blanc plein | Fonds sombres : aplat `ink`, thème sombre, capture ou rendu assombri. |
| `viv-monogramme-couleur.svg` | SVG, 1250 × 699, `width`/`height` à 100 % | dégradé `brand-rose` → `brand-gold` | Monogramme : angle de diapositive, filigrane de page intérieure, en-tête compact — là où la place manque mais où « Viv » doit rester lisible. Il s'étire à son conteneur : donnez-lui une taille explicite. Les usages carrés et minuscules (favicon, avatar) reviennent au submark. |
| `viv-monogramme-noir.svg` | SVG | noir plein | Monogramme en monochrome : tampon, filigrane de page administrative. |
| `viv-monogramme-blanc.svg` | SVG | blanc plein | Monogramme sur fond sombre : coin de diapositive sur capture d'écran, en-tête en thème sombre. |
| `viv-submark-noir.svg` | SVG, 707 × 699, `width`/`height` à 100 % | noir plein | Le V seul : favicon et onglet de navigateur, photo de compte sur les réseaux sociaux, filigrane, sticker. Sur une pastille au dégradé de marque ou sur fond clair. |
| `viv-submark-blanc.svg` | SVG, 707 × 699 | blanc plein | Le V seul sur fond sombre : pastille `ink` ou `ink-muted`, filigrane sur une capture ou une vidéo (40 % d'opacité). |
| `viv-formation-couleur.png` · `viv-formation-noir.png` · `viv-formation-blanc.png` · `viv-monogramme-couleur.png` | PNG, fond transparent | idem | Secours uniquement : plateformes d'e-mailing, formulaires et outils qui n'acceptent pas le SVG. Partout ailleurs, préférez le SVG. |

**Recoloration** — Affichés en `<img>`, ces fichiers gardent l'encre inscrite dans le tracé : ils n'héritent pas de `currentColor`. Choisissez la variante qui convient au fond. En inline dans une page, les versions noire et blanche peuvent être recolorées en remplaçant leur `fill` — mais seulement par `ink`, `ink-inverse` ou une couleur de marque, jamais par une couleur d'interface ou de statut.

**La pastille du submark** — carré arrondi, rayon 0,12 × le côté, marque 0,34 × le côté, centrée (proportions relevées sur la planche de charte). Fonds prévus : dégradé de marque avec le V noir, aplat `ink` ou `ink-muted` avec le V blanc, fond `surface` cerné d'un filet `border-strong` avec le V noir. Côté minimal 24 px ; en dessous, un favicon 16 px exporté depuis le submark. Le composant `Logo` l'applique avec sa prop `tile`.

**Zone de protection** — 0,29 fois la hauteur du bloc sur les quatre côtés, soit la moitié de la hauteur d'x du « Viv » : 12 px autour d'un logo de 40 px, 16 px autour d'un monogramme de 56 px. Mesure relevée sur la planche de sécurité de la charte VIV Group. Le composant `Logo` l'applique automatiquement.

**Règles communes** — Largeur minimale 120 px pour le logo complet, 24 px pour le monogramme ; taille pilotée par la hauteur seule ; pas de déformation, de rotation, d'ombre ni de contour ; le dégradé n'est jamais redessiné à la main (voir la section Couleur du brand book pour ses deux arrêts exacts).

**Le dégradé, tel qu'il est inscrit dans les fichiers** — deux arrêts seulement, `#daa5bc` aux offsets 0 et 0,15 puis `#fbde96` aux offsets 0,76 et 1, sur toute la largeur du tracé. Les plateaux aux extrémités font partie du dessin.

**Nomenclature** — une seule convention : `viv-formation-<encre>` pour le logo complet, `viv-monogramme-<encre>` pour le « Viv », `viv-submark-<encre>` pour le V. Gardez-la pour tout fichier ajouté plus tard.

Pas de format d'impression professionnelle (EPS, PDF vectoriel) dans ce groupe : les documents VIV Formation sont distribués en numérique. Si un imprimeur en réclame un, c'est le SVG couleur qui sert de source.
