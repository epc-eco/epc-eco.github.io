# Notes de travail — « L'économie, c'est ma vie ! »

Notes pour créer les prochains thèmes sans tout redécouvrir.
Le README explique la structure technique ; ce fichier garde les **décisions** et les **préférences**.

## Contexte

- Cours d'Économie & Droit, **Maturité professionnelle** (apprentissage, Suisse), canton de **Fribourg**.
- Manuel de référence : *Économie & Société* (codes « volume-chapitre », p. ex. 01-10).
- Les sources (PowerPoint, anciens tests) ne vont **pas** dans ce dossier publié : les ranger à part (p. ex. `_sources/`, exclu de GitHub).
- Projet destiné à GitHub Pages plus tard ; pour l'instant tout fonctionne en local (double-clic sur `index.html`).

## Préférences de l'enseignant

- **Vouvoiement** partout (théorie, consignes, corrections).
- Fond **noir**, une couleur par domaine, **en version pure** :
  - Droit = orange `#e9812b` · Économie politique = vert `#87a13a` · Économie d'entreprise = bleu `#00a1bf`
  - Index : dégradé des trois.
- L'esperluette « & » sert **uniquement de favicon** (pas dans les titres ni les cartes).
- Pas de dessins ni d'images de l'éditeur (pictogrammes, photos du manuel) : schémas redessinés en SVG, émojis pour illustrer.
- Pas de photos de personnes réelles.
- Pas de score mémorisé (ni sur l'index, ni à l'entraînement).
- Il modifie parfois lui-même `index.html` / `style.css` : **toujours comparer avec la version du dossier avant d'écraser**.

- **Pas de question d'entraînement sur un graphique du cours** (ni lecture de valeurs, ni « d'après le graphique »).
- Le manuel compte **3 volumes** ; la numérotation des PowerPoint est ancienne (p. ex. « Volume 4 » = vol. 3). Les codes de `catalogue.js` font foi.

## Créer un nouveau thème — checklist

1. Lire le PowerPoint (texte + diapos qui ne sont que des images : graphiques, cas, objectifs).
2. Classer le domaine ; **en cas de doute, demander**.
3. Copier un dossier de thème existant du **même domaine** (favicon et `data-branche` déjà justes).
4. `questions.js` : `THEME.id` = `eco-NN-nom`, sections, questions.
5. `theorie.html` : bandeau de titre, sommaire, diapos (voir règles ci-dessous), objectifs du chapitre, diapo de fin.
6. `test.html` : titre, fil d'Ariane (« Domaine · Chapitre NN »), favicon, `data-branche`.
7. `catalogue.js` : `pret: true`, `dossier`, `resume`.
8. Vérifier (voir plus bas), puis copier dans le dossier et **contrôler que les fichiers sont identiques**.

## Règles des diapos (mode présentation)

- Chaque `<div class="diapo">` = une diapo, dessinée à **1024 × 576** puis agrandie. Tout doit tenir dedans.
- Une idée par diapo ; texte court ; cartes en `grille-2/3/4/5`.
- `class="frag"` = apparition au clic (→). Les lignes de tableau peuvent être des `frag`.
- Première diapo d'une partie : `data-titre="…"` (libellé dans le sommaire). Les autres prennent leur `<h3>`.
- Une **question éclair** toutes les 1–2 diapos, choisie dans la banque (`<div class="eclair" data-q="id">`) ;
  préférer des questions courtes (un tableau de plus de 7 lignes déborde une fois corrigé).
- Ne pas recopier mot pour mot les textes d'articles cités dans les PowerPoint : reformuler.
- Signaler à l'enseignant les erreurs ou informations dépassées trouvées dans ses supports
  (ex. ch. 10 : tribunaux de 1re instance, juge d'instruction, juges fédéraux élus pour 6 ans).

## Banque de questions

- Reprendre les questions des anciens tests, puis compléter (environ 40 à 65 questions par thème).
- Varier les types : choix, tableau, vf (avec note/article), trous, ouverte (réponse modèle), cas pratiques.
- Chaque question a `revoir` (section de la théorie) et, si possible, une `explication`.
- Exemples suisses et fribourgeois (CHF, syndic, Grand Conseil, etc.).

## Mode présentation (enseignant)

- Tout le code est dans `commun/presentation.js`, **exclu de GitHub** : le bouton « Présenter » et les commandes
  sont créés par ce fichier, donc absents du site des élèves. `theorie.js` lui prête ses fonctions (`window.Theorie`).
- Chaque `theorie.html` charge `theorie.js` puis `presentation.js`.

Raccourcis :

→/← pas à pas · ↓/↑ diapo complète (+ solution des questions éclair) · R solution éclair (R à nouveau = remise à zéro)
· S sommaire · F plein écran · P mode lecture · Début/Fin.

## Vérifications avant livraison

- Parcourir toutes les diapos en 1920×1080 et 1366×768 : aucun débordement, même après correction d'une question éclair.
- Répondre à toutes les questions de l'entraînement : aucune erreur JavaScript.
- Captures d'écran de contrôle des nouveaux schémas.

## Composants utiles (déjà dans style.css)

- `.chaine` + `.maillon` (+ `.fin`) : chaîne de cause à effet avec flèches (spirales, effets domino).
- `.duo` : texte à gauche, schéma à droite. `.formule` : formule ou phrase-clé centrée.
- `.mot-cle` : grand mot incliné (« ILLIMITÉS », « C'est bien, non ? »).
- `.carte-emoji` + `.emoji-carte` : carte illustrée par des émojis. `.gain` / `.perte` : étiquettes vert / rouge.
- Graphiques : générés en SVG par script (barres, courbes en escalier, offre-demande, cycles).
- **Graphiques en barres : affichés en entier d'un coup** (pas de `frag` sur les barres) ; seules les annotations peuvent apparaître au clic.
- L'encadré `.retenir` s'affiche « En bref » (texte dans `style.css`, `.retenir::before`) : ce n'est pas forcément à mémoriser.
- `data-assemblage` (sur un élément `frag`) : animation automatique en présentation. Chaque `.piece` avec
  `data-source="id"` « vole » depuis l'élément `#id` vers sa place ; les autres `.piece` apparaissent à la suite.
  Exemple : ch. 43, diapo « La stagflation ».

- Correction (27.11.2026) dans `theorie.js` : `Object.assign` copiait une seule fois la valeur de `idx`,
  donc ↓ / ↑ en présentation ramenaient toujours à la diapo 2. `idx` est maintenant redéfini en lecture dynamique.

## Mode apprentissage (élèves, sur téléphone)

- Lien : `theorie.html?mode=apprentissage`. Activé sur **tous les chapitres** (`apprentissage: true` dans `catalogue.js` + onglet dans `theorie.html` et `test.html`).
- Une diapo à la fois, en pleine largeur ; on avance en **touchant** l'écran, en **glissant** ou avec « Suivant ».
- Les éléments `frag` apparaissent un à un ; les **mots en gras** (`b`, `strong`) sont cachés et se découvrent
  au toucher ou en avançant (pas dans les titres, étiquettes, schémas ni questions éclair).
- Questions éclair facultatives (bouton « Voir la réponse »). Pas d'écriture, pas d'auto-évaluation, pas de bilan.
- Marque-page : la dernière diapo vue est retenue (`cours:marque:<page>`), avec « Recommencer au début ».

## Chapitres 40 à 42 (3e année)

- Section 00 « Le fil rouge de la 3e année » : carte des 8 chapitres (40 à 48), le chapitre en cours en surbrillance.
  Les ch. 43 à 48 gardent leur fil rouge à 5 cartes (non modifiés).
- Animations propres à ces chapitres : un bloc `<style>` en tête de `<main>` dans chaque `theorie.html`
  (flux animés `.flux` / `.onde`, courbes qui glissent `.glisse`, thermomètre `.monte`). Elles ne jouent
  qu'au moment où l'élément `frag` apparaît (présentation et apprentissage) ; en lecture, tout est affiché.
- Ch. 42 : la partie « écologie » est centrée sur l'économie (externalités, taxes d'incitation, passager clandestin) ;
  seul l'effet de serre reste « physique », sous forme d'animation en 5 étapes (avance manuelle).

## Bloc 43 à 48 (3e année)

- Les ch. 43, 45, 46, 47 et 48 forment un tout. La **synthèse complète** est au début du ch. 45 (section 00) ;
  les ch. 43, 46, 47 et 48 ont une diapo « fil rouge » (section 00) qui renvoie vers elle.
- La section 00 est numérotée « 00 » dans le sommaire grâce à `<ol style="counter-reset: s -1">`.
- Les schémas SVG des ch. 45 à 48 ont été générés par script, puis collés dans `theorie.html` : on peut les modifier directement.
- À mettre à jour après le 29 novembre 2026 : résultat de la votation sur la TVA pour l'AVS (ch. 47 et 48).

## Chapitres 38, 39, 49 et 65 (novembre 2026)

- `build.py` gère maintenant le domaine (`domaine="droit"` ou `"ecoent"` dans `CHAPITRES`) : favicon, couleur, fil d'Ariane.
  Les schémas de ces chapitres sont dans `schemas2.py`.
- Ch. 39 (2e année) et ch. 38 (3e année) sont liés par les actions : diapo « Rappel du chapitre 39 » au début du 38,
  section « À suivre… » à la fin du 39.
- Ch. 49 et 65 : diapo « fil rouge » à 5 cartes (liens vers 41, 42, 43, 45, 48). La carte de la 3e année des ch. 40-42
  (8 chapitres) n'inclut pas encore 38, 49 et 65.
- Mises à jour par rapport aux PowerPoint : taux maximal LCC 10 % / 12 % (1.1.2026) ; droits de douane américains
  (Cour suprême, février 2026 ; 12,5 % depuis juillet 2026) ; balance des paiements 2025 (BNS, mars 2026) ;
  droit de la SA révisé (réserves 5 % jusqu'à 50 %, CO 725a/725b, valeur nominale > 0, actions au porteur limitées depuis 2019).
- Les graphiques BNS 2007-2016 du ch. 65 n'ont pas été repris ; l'exemple chiffré 2016 est gardé (tableau).
- Tableaux à 5 colonnes évités (notation des placements → cartes « Qui gagne sur quel objectif ? »).

## Mise en ligne (GitHub Pages)

- Site public : **https://epc-eco.github.io/** (organisation GitHub `epc-eco`, dépôt `epc-eco.github.io`),
  gérée depuis le compte personnel `dga-epc`. La compta reste à part : https://dga-epc.github.io/.
- Envoi actuel par le navigateur (« Add file → Upload files ») : `index.html`, `catalogue.js`, `commun/`, `themes/`.
  **Avant chaque envoi, sortir `commun/presentation.js` du dossier** (l'envoi web ignore `.gitignore`), puis le remettre.
  Ne pas publier `notes.md`. Un fichier supprimé localement doit aussi être supprimé à la main sur GitHub.
- Plus tard : GitHub Desktop (envoi du dossier en un clic, respecte `.gitignore`).

## Pages annexes

- `Apropos.html` (humour ; seule exception à la règle « pas de photo » : le portrait en parachute de l'enseignant, `commun/apropos-portrait.jpg`, à sa demande), `conditions.html`, `confidentialite.html` : adaptées du site de compta ; liens dans le pied de page de `index.html`.
  À mettre à jour si le site se met à stocker autre chose (aujourd'hui : mode d'affichage et marque-page du mode apprentissage).

## Idées en attente (non faites)

- Entraînement : deuxième essai avant d'afficher la correction ; mode « épreuve » (correction à la fin) ;
  questions ratées qui reviennent.
- Fiche imprimable « à compléter » générée depuis la théorie.

## Thèmes faits

| Code | Titre | Domaine | Remarques |
|---|---|---|---|
| 01-10 | Les bases du droit et de l'État | Droit | 37 diapos, 65 questions (tests 2019-2021 + ajouts) |
| 01-11 | Besoins et types de biens | Éco. politique | 24 diapos, 39 questions (créées) ; loi d'Engel et rareté ajoutées |
| 02-40 | Circuit économique, prestation économique | Éco. politique | 32 diapos, 38 questions (créées) ; données 2024-2026 (Banque mondiale, PNUD, Global Footprint Network, Happy Planet Index 2026) |
| 02-41 | Économie de marché | Éco. politique | 30 diapos, 38 questions (créées) ; courbes offre / demande animées |
| 02-42 | Écologie et énergie | Éco. politique | 33 diapos, 40 questions (créées) ; animation de l'effet de serre |
| 03-43 | Déséquilibre des masses monétaires | Éco. politique | 44 diapos, 48 questions (interrogation 2021 + ajouts ; 2 questions sur graphiques retirées par l'enseignant) ; données OFS/BNS jusqu'en 2026 reprises du PowerPoint ; diapo « fil rouge » ajoutée (section 00) |
| 03-45 | Croissance et changement structurel | Éco. politique | 41 diapos, 43 questions (créées, pas d'ancien test) ; contient la **synthèse des ch. 43 à 48** (section 00, ancre `#synthese`) |
| 03-46 | Cycle conjoncturel | Éco. politique | 30 diapos, 42 questions (créées) ; ligne « taux d'intérêt » ajoutée au tableau des phases |
| 03-47 | Objectifs de la politique économique et sociale | Éco. politique | 28 diapos, 39 questions (créées) ; graphiques 2012-2014 des « forces » remplacés par des cartes |
| 03-48 | Politique fiscale et monétaire | Éco. politique | 35 diapos, 40 questions (créées) ; histoire du village reformulée (personnages neutres) |
| 02-39 | Droit des sociétés | Droit | 38 diapos, 42 questions (créées) ; droit de la SA 2023 |
| 03-38 | Financement et placement | Éco. d'entreprise | 50 diapos, 49 questions (créées) ; rappel du ch. 39 |
| 03-49 | Mondialisation | Éco. politique | 27 diapos, 40 questions (créées) ; diapos 2025-2026 du PowerPoint reprises |
| 03-65 | Commerce extérieur et balance des paiements | Éco. politique | 35 diapos, 40 questions (créées) ; exemple Ricardo chiffré |

## Chapitres non relus
- `relu: false` dans catalogue.js → astérisque orange * à côté du n° sur l'accueil, remarque sous la recherche (masquée automatiquement quand plus aucun chapitre n'est marqué), mention dans le bandeau de la théorie et en haut de l'entraînement (commun/relu.js, chargé par onglets.js ; masquée en mode présentation).
- Pour retirer la marque : mettre `relu: true` (ou effacer `relu`) quand théorie ET entraînement sont contrôlés.
- Tout nouveau chapitre : ajouter `relu: false`.
