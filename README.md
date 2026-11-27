# Économie & Droit — Maturité professionnelle

Pages de révision pour les élèves : une **théorie** et un **entraînement** corrigé immédiatement pour chaque chapitre.
Tout fonctionne hors ligne : ouvrir `index.html` dans un navigateur.

## Projeter la théorie en classe

Sur la page Théorie, cliquer sur **Présenter** (ou touche **P**). La page devient un diaporama 16:9.

| Touche | Action |
|---|---|
| → · Espace · Page suivante | élément suivant / diapo suivante (pas à pas) |
| ← · Page précédente | revenir en arrière (pas à pas) |
| ↓ · ↑ | diapo suivante / précédente, entièrement affichée (solution des questions éclair comprise) |
| R | afficher la solution de la question éclair ; R à nouveau la remet à zéro |
| Début · Fin | première / dernière diapo |
| S | masquer / afficher le sommaire |
| F | plein écran (F11 fonctionne aussi) |
| P | revenir au mode lecture |

Le mode choisi est mémorisé sur l'ordinateur.

Le mode présentation est dans **`commun/presentation.js`**, un fichier réservé à l'enseignant :
il crée lui-même le bouton **Présenter** et les commandes. Ce fichier est exclu de GitHub (`.gitignore`) :
sur le site publié, il manque, donc il n'y a ni bouton ni touche P. Pour projeter, ouvrir la version
du dossier OneDrive.

## Apprentissage (élèves)

Lien `theorie.html?mode=apprentissage` (bouton sur l'accueil et onglet dans chaque chapitre) :
une diapo à la fois, on avance en touchant l'écran ou en glissant ; les mots en gras se découvrent.
Le navigateur retient la dernière diapo vue.
Dans `theorie.html`, chaque bloc `<div class="diapo">` est une diapositive ; la classe `frag`
fait apparaître un élément au clic suivant (comme une animation PowerPoint).
Le sommaire liste chaque diapo sous sa partie : le titre vient du `<h3>` de la diapo,
ou de l'attribut `data-titre` (première diapo d'une partie).

## Structure

```
index.html            page d'accueil (liste des thèmes)
catalogue.js          ← liste des thèmes affichés sur l'accueil
commun/
  style.css           design commun (couleurs des domaines en haut du fichier)
  quiz.js             moteur de questions
  theorie.js          page théorie : lecture et apprentissage (publié)
  presentation.js     mode présentation (enseignant seulement, NON publié)
  test.js             déroulement de l'entraînement
themes/
  10-bases-du-droit/
    theorie.html
    test.html
    questions.js      ← banque de questions du chapitre
```

## Ajouter un chapitre

1. Copier le dossier `themes/10-bases-du-droit` et le renommer (ex. `11-le-contrat`).
2. Dans `questions.js` : changer `THEME.id`, `THEME.titre`, les `sections` et les questions.
3. Dans `theorie.html` : remplacer le contenu (titre du bandeau, sections, schémas).
4. Dans `test.html` : mettre à jour le titre et le fil d'Ariane.
5. Dans `catalogue.js`, compléter la ligne du chapitre : `pret: true`, `apprentissage: true`, `dossier` et `resume`.
6. Garder en bas de `theorie.html` les deux lignes `theorie.js` puis `presentation.js` (dans cet ordre).

## Couleurs et favicons par domaine

| Domaine | `data-branche` | Couleur | Favicon |
|---|---|---|---|
| Droit | `droit` | orange | `commun/favicon-droit.svg` |
| Économie politique | `ecopol` | vert | `commun/favicon-ecopol.svg` |
| Économie d'entreprise | `ecoent` | bleu | `commun/favicon-ecoent.svg` |
| Accueil | — | dégradé | `commun/favicon.svg` |

Dans un nouveau thème, mettre `<body data-branche="…">` et le favicon du domaine dans `<head>`.

## Onglets

Les liens marqués `data-onglet` (Entraînement, « Revoir : … ») s'ouvrent dans un onglet séparé.
Si l'onglet est déjà ouvert, on bascule dessus sans le recharger (`commun/onglets.js`).

## Types de questions (`questions.js`)

| type | usage |
|---|---|
| `choix` | choix unique ou multiple (`correct: [0, 2]`) |
| `tableau` | une case par ligne, ou plusieurs avec `multiple: true` |
| `vf` | vrai / faux avec une note de correction (ex. article de la Cst.) |
| `trous` | phrase à compléter : `[[*bonne|fausse|fausse]]` |
| `ouverte` | réponse libre, réponse modèle et auto-évaluation |
