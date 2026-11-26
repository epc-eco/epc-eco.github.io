/* Banque de questions — Chapitre 46 : Cycle conjoncturel
   Pour ajouter une question : copier un bloc existant du même type et l'adapter.
   "revoir" = identifiant de la section de la théorie (voir la liste "sections"). */

window.THEME = {
  id: "eco-46-cycle-conjoncturel",
  titre: "Chapitre 46 · Cycle conjoncturel",
  theorie: "theorie.html",
  accueil: "../../index.html",
};

window.QUESTIONS = {
  sections: {
    "fil-rouge": "Le fil rouge des chapitres 43 à 48",
    conjoncture: "La conjoncture économique",
    cycle: "Le cycle conjoncturel",
    phases: "Les quatre phases",
    suisse: "Les cycles en Suisse",
    indicateurs: "Les indicateurs selon les phases",
    etat: "Les finances de l'État selon la phase",
    politique: "La politique conjoncturelle",
    frein: "Le frein à l'endettement",
    ecoles: "Politique anticyclique… ou pas ?",
    conflits: "Des intérêts qui s'opposent",
    aujourdhui: "Et aujourd'hui ?",
  },

  questions: [
    /* ============ 0. FIL ROUGE ============ */
    {
      id: "z1", type: "choix", sujet: "Fil rouge", revoir: "fil-rouge",
      q: "Quel lien y a-t-il entre la croissance (ch. 45) et la conjoncture (ch. 46) ?",
      options: [
        "La croissance est la tendance à long terme ; la conjoncture décrit les vagues à court terme autour de cette tendance",
        "La conjoncture est la tendance à long terme ; la croissance décrit les vagues à court terme",
        "Ce sont deux mots pour la même chose",
        "La croissance concerne les prix, la conjoncture la monnaie",
      ],
      correct: [0],
    },
    {
      id: "z2", type: "tableau", sujet: "Fil rouge", revoir: "fil-rouge",
      q: "Quel problème du chapitre 43 menace surtout à chaque moment du cycle ?",
      colonnes: ["Inflation", "Déflation"],
      lignes: [
        { t: "Surchauffe : la demande dépasse ce que l'économie peut produire.", c: [0] },
        { t: "Creux profond : la demande s'effondre, les prix baissent.", c: [1] },
      ],
    },

    /* ============ 1. CONJONCTURE ============ */
    {
      id: "c1", type: "choix", sujet: "La conjoncture", revoir: "conjoncture",
      q: "Qu'est-ce que la <b>conjoncture</b> ?",
      options: [
        "La situation générale d'une économie à un moment donné",
        "La croissance moyenne d'un pays sur 50 ans",
        "La quantité de monnaie en circulation",
        "Le budget de la Confédération",
      ],
      correct: [0],
    },
    {
      id: "c2", type: "choix", sujet: "La conjoncture", revoir: "conjoncture",
      q: "Quels sont des <b>indicateurs</b> de la conjoncture ?",
      options: ["Le PIB", "Le taux de chômage", "L'inflation", "Les taux d'intérêt", "Le nombre de faillites", "Le nombre de cantons"],
      correct: [0, 1, 2, 3, 4],
      explication: "On regarde aussi le niveau des échanges (exportations, importations) et le climat de consommation.",
    },
    {
      id: "c3", type: "vf", sujet: "La conjoncture", revoir: "conjoncture",
      q: "Vrai ou faux ?",
      items: [
        { t: "La conjoncture décrit l'économie à court terme.", v: true },
        { t: "Une hausse du nombre de faillites est un signe de bonne conjoncture.", v: false, note: "Au contraire : beaucoup de faillites signalent une conjoncture qui se dégrade." },
        { t: "Le climat de consommation mesure l'optimisme ou l'inquiétude des ménages.", v: true, note: "Le SECO le mesure par une enquête régulière." },
        { t: "Le climat de consommation n'a aucune influence sur l'économie.", v: false, note: "Des ménages inquiets dépensent moins : la demande baisse. C'est un indicateur qui annonce souvent la suite." },
      ],
    },
    {
      id: "c4", type: "choix", sujet: "La conjoncture", revoir: "conjoncture",
      q: "Pourquoi dit-on que le <b>climat de consommation</b> est un indicateur « avancé » ?",
      options: [
        "Il annonce souvent l'évolution future : des ménages inquiets dépenseront moins dans les mois suivants",
        "Il est publié avant le PIB de l'année précédente, sans autre intérêt",
        "Il mesure les prix futurs fixés par la BNS",
        "Il n'est mesuré que pendant les crises",
      ],
      correct: [0],
    },

    /* ============ 2. LE CYCLE ============ */
    {
      id: "k1", type: "choix", sujet: "Le cycle", revoir: "cycle",
      q: "Selon le modèle théorique, combien de temps dure environ un cycle conjoncturel ?",
      options: ["8 à 10 ans", "6 mois", "1 an", "50 ans"],
      correct: [0],
      explication: "En Suisse, depuis 1990, les cycles ont été irréguliers : de 5 à 12 ans.",
    },
    {
      id: "k2", type: "trous", sujet: "Les phases", revoir: "phases",
      q: "Remettez les phases du cycle dans l'ordre.",
      texte: "Expansion → [[*haute conjoncture|reprise|récession]] → [[*récession|expansion|reprise]] → [[*reprise|haute conjoncture|surchauffe]] → nouvelle expansion.",
    },
    {
      id: "k3", type: "tableau", sujet: "Les phases", revoir: "phases",
      q: "De quelle phase s'agit-il ?",
      colonnes: ["Expansion", "Haute conj.", "Récession", "Reprise"],
      lignes: [
        { t: "Les usines tournent à plein, les prix s'envolent.", c: [1] },
        { t: "Après le creux, les commandes repartent doucement.", c: [3] },
        { t: "La production recule, les licenciements se multiplient.", c: [2] },
        { t: "La demande augmente, les entreprises engagent.", c: [0] },
      ],
    },
    {
      id: "k4", type: "vf", sujet: "Les phases", revoir: "phases",
      q: "Vrai ou faux ?",
      items: [
        { t: "La surchauffe se situe au sommet du cycle.", v: true },
        { t: "La crise est le point de retournement entre la haute conjoncture et la récession.", v: true },
        { t: "Une dépression est une récession légère et courte.", v: false, note: "C'est une récession <b>grave et longue</b>, comme dans les années 1930." },
        { t: "Le creux est le point le plus bas du cycle.", v: true },
      ],
    },
    {
      id: "k5", type: "choix", sujet: "Les phases", revoir: "phases",
      q: "On parle souvent de <b>récession</b> lorsque…",
      options: [
        "le PIB recule pendant deux trimestres de suite",
        "les prix augmentent de plus de 2 %",
        "la BNS baisse son taux directeur",
        "le chômage baisse",
      ],
      correct: [0],
    },
    {
      id: "k9", type: "tableau", sujet: "Les phases", revoir: "cycle",
      q: "De quel point du cycle s'agit-il ?",
      colonnes: ["Surchauffe", "Crise", "Creux"],
      lignes: [
        { t: "Le point le plus bas, juste avant la reprise", c: [2] },
        { t: "Le sommet : l'économie tourne trop vite, les prix s'emballent", c: [0] },
        { t: "Le retournement : la haute conjoncture bascule en récession", c: [1] },
      ],
    },
    {
      id: "k6", type: "ouverte", sujet: "Les phases", revoir: "phases",
      q: "Décrivez brièvement les quatre phases du cycle conjoncturel.",
      modele: "<b>Expansion</b> : la demande et la production augmentent, le chômage baisse. <br><b>Haute conjoncture</b> : l'économie tourne à plein régime, le chômage est au plus bas, les prix montent fortement (surchauffe). <br><b>Récession</b> : après la crise (retournement), la production et la demande reculent, le chômage augmente. <br><b>Reprise</b> : au creux, l'économie touche le fond, puis la demande et la production repartent.",
    },
    {
      id: "k7", type: "vf", sujet: "Les cycles en Suisse", revoir: "suisse",
      q: "Vrai ou faux ?",
      items: [
        { t: "En Suisse, les cycles sont parfaitement réguliers.", v: false, note: "Ils durent de 5 à 12 ans." },
        { t: "Les crises viennent souvent de l'étranger (subprimes, Covid).", v: true },
        { t: "Après la chute de 2020, le PIB a fortement rebondi en 2021.", v: true, note: "+6,2 % en 2021, après −2,3 % en 2020." },
        { t: "La conjoncture suisse dépend peu de l'étranger.", v: false, note: "La Suisse vit des exportations : elle ressent vite les difficultés de ses clients." },
      ],
    },
    {
      id: "k8", type: "tableau", sujet: "Les cycles en Suisse", revoir: "suisse",
      q: "Quelle crise a fait reculer le PIB suisse ?",
      colonnes: ["Subprimes", "Covid"],
      lignes: [
        { t: "2009", c: [0] },
        { t: "2020", c: [1] },
      ],
      explication: "2009 : crise financière partie des crédits hypothécaires américains (subprimes). 2020 : fermetures liées à la pandémie.",
    },

    /* ============ 3. INDICATEURS ============ */
    {
      id: "i1", type: "tableau", sujet: "Les indicateurs", revoir: "indicateurs",
      q: "En <b>haute conjoncture</b>, comment évoluent ces indicateurs ?",
      colonnes: ["Élevé / en hausse", "Bas / en baisse"],
      lignes: [
        { t: "La demande", c: [0] },
        { t: "Le chômage", c: [1] },
        { t: "L'inflation", c: [0] },
        { t: "Les salaires", c: [0] },
        { t: "Le climat de consommation", c: [0] },
      ],
    },
    {
      id: "i2", type: "tableau", sujet: "Les indicateurs", revoir: "indicateurs",
      q: "Dans quelle phase se trouve l'économie ?",
      colonnes: ["Expansion", "Haute conj.", "Récession", "Reprise"],
      lignes: [
        { t: "Chômage au plus haut, demande au plus bas", c: [3] },
        { t: "Chômage au plus bas, forte inflation", c: [1] },
        { t: "Chômage en hausse, demande en baisse", c: [2] },
        { t: "Chômage en baisse, inflation légère", c: [0] },
      ],
    },
    {
      id: "i3", type: "trous", sujet: "Le retournement", revoir: "indicateurs",
      q: "Complétez : pourquoi la haute conjoncture se termine-t-elle ?",
      texte: "La demande est très forte → les prix [[*montent|baissent|ne bougent pas]] → la BNS [[*relève|baisse|supprime]] ses taux → le crédit devient [[*cher|bon marché|gratuit]] → on investit [[*moins|plus|autant]] → [[*récession|reprise|expansion]].",
    },
    {
      id: "i4", type: "choix", sujet: "Les indicateurs", revoir: "indicateurs",
      q: "Pourquoi le commerce extérieur devient-il plutôt <b>déficitaire</b> en haute conjoncture ?",
      options: [
        "Les prix et les salaires suisses montent, les produits suisses perdent en compétitivité, et les ménages achètent plus de produits importés",
        "Parce que la BNS interdit les exportations",
        "Parce que le chômage est très élevé",
        "Parce que les prix baissent en Suisse",
      ],
      correct: [0],
    },
    {
      id: "i5", type: "ouverte", sujet: "Les indicateurs", revoir: "indicateurs",
      q: "Expliquez pourquoi l'inflation est forte en haute conjoncture et faible au creux du cycle.",
      modele: "En <b>haute conjoncture</b>, la demande est très forte et les entreprises produisent au maximum : elles ne peuvent plus suivre et <b>augmentent leurs prix</b> ; les salaires montent aussi (spirale prix-salaires, ch. 43). Au <b>creux</b>, la demande est faible : pour vendre, les entreprises ne peuvent pas augmenter leurs prix, elles les baissent parfois. Il y a alors un <b>risque de déflation</b>.",
    },
    {
      id: "i9", type: "ouverte", sujet: "Les indicateurs", revoir: "indicateurs",
      q: "En récession, comment évoluent le <b>flux de marchandises</b> et le <b>flux monétaire</b> entre les ménages et les entreprises ?",
      modele: "Les deux <b>diminuent</b>. Flux de marchandises : les entreprises produisent et vendent moins de biens et de services. Flux monétaire : elles versent moins de salaires (licenciements, chômage partiel), donc les ménages ont moins de revenus et dépensent moins. Chaque baisse entraîne l'autre.",
    },
    {
      id: "i6", type: "tableau", sujet: "Les finances de l'État", revoir: "etat",
      q: "Comment évoluent les finances de l'État ?",
      colonnes: ["Haute conjoncture", "Récession"],
      lignes: [
        { t: "Les recettes fiscales augmentent.", c: [0] },
        { t: "Les dépenses de l'assurance-chômage augmentent.", c: [1] },
        { t: "Le budget est plutôt excédentaire.", c: [0] },
        { t: "Le budget est plutôt déficitaire.", c: [1] },
      ],
    },
    {
      id: "i7", type: "choix", sujet: "Les indicateurs", revoir: "indicateurs",
      q: "Dans quelle phase les taux d'intérêt sont-ils généralement les plus <b>bas</b> ?",
      options: ["La reprise (au creux)", "La haute conjoncture", "L'expansion", "Ils sont toujours identiques"],
      correct: [0],
      explication: "Au creux, la demande de crédit est faible et la BNS a baissé ses taux pour relancer l'économie.",
    },
    {
      id: "i8", type: "vf", sujet: "Les indicateurs", revoir: "etat",
      q: "Vrai ou faux ?",
      items: [
        { t: "En récession, les tensions sociales ont tendance à augmenter.", v: true, note: "Chômage, baisse des revenus : l'équilibre social est mis à l'épreuve." },
        { t: "En haute conjoncture, les salaires sont au plus bas.", v: false, note: "Ils sont au <b>maximum</b> : les entreprises manquent de personnel." },
        { t: "En récession, l'État encaisse moins d'impôts.", v: true },
      ],
    },

    /* ============ 4. POLITIQUE CONJONCTURELLE ============ */
    {
      id: "p1", type: "choix", sujet: "Politique conjoncturelle", revoir: "politique",
      q: "Quel est le but de la <b>politique conjoncturelle</b> ?",
      options: [
        "Atténuer les cycles : des hauts moins hauts et des bas moins bas",
        "Supprimer définitivement les cycles",
        "Augmenter le plus possible l'inflation",
        "Fixer le prix de chaque produit",
      ],
      correct: [0],
    },
    {
      id: "p2", type: "tableau", sujet: "Politique conjoncturelle", revoir: "politique",
      q: "Qui mène cette politique ?",
      colonnes: ["BNS", "État"],
      lignes: [
        { t: "Modifier le taux directeur", c: [0] },
        { t: "Construire une nouvelle ligne ferroviaire", c: [1] },
        { t: "Agir sur la masse monétaire", c: [0] },
        { t: "Voter un budget déficitaire", c: [1] },
      ],
      explication: "BNS = politique <b>monétaire</b>. État = politique <b>budgétaire</b> (et fiscale).",
    },
    {
      id: "p3", type: "tableau", sujet: "Politique conjoncturelle", revoir: "politique",
      q: "Cette mesure combat-elle la surchauffe ou favorise-t-elle la reprise ?",
      colonnes: ["Contre la surchauffe", "Pour la reprise"],
      lignes: [
        { t: "La BNS baisse son taux directeur.", c: [1] },
        { t: "L'État fait un budget excédentaire.", c: [0] },
        { t: "La BNS réduit la masse monétaire.", c: [0] },
        { t: "L'État dépense plus qu'il n'encaisse.", c: [1] },
        { t: "La BNS relève son taux directeur.", c: [0] },
      ],
    },
    {
      id: "p4", type: "trous", sujet: "Politique budgétaire", revoir: "politique",
      q: "Complétez.",
      texte: "Un budget [[*déficitaire|excédentaire|équilibré]] favorise la reprise, car l'État injecte plus d'argent qu'il n'en prélève. Un budget [[*excédentaire|déficitaire|bloqué]] atténue la surchauffe. On parle de politique [[*anticyclique|procyclique|monétaire]].",
    },
    {
      id: "p8", type: "choix", sujet: "Politique conjoncturelle", revoir: "politique",
      q: "Que signifie mener une politique <b>anticyclique</b> ?",
      options: [
        "Agir contre le mouvement du cycle : freiner en haute conjoncture, relancer en récession",
        "Accompagner le cycle : dépenser davantage en haute conjoncture",
        "Supprimer la BNS",
        "Bloquer tous les prix",
      ],
      correct: [0],
    },
    {
      id: "p5", type: "vf", sujet: "Le frein à l'endettement", revoir: "frein",
      q: "Vrai ou faux ?",
      items: [
        { t: "Le frein à l'endettement interdit tout déficit, chaque année.", v: false, note: "Un déficit est permis en récession, s'il est compensé par des excédents en haute conjoncture : l'équilibre se fait <b>sur un cycle complet</b>." },
        { t: "Le frein à l'endettement a été accepté par environ 85 % des votants en 2001.", v: true },
        { t: "En haute conjoncture, la Confédération doit faire des excédents.", v: true },
        { t: "Le frein à l'endettement s'applique à la BNS.", v: false, note: "Il s'applique au budget de la <b>Confédération</b>." },
      ],
    },
    {
      id: "p6", type: "choix", sujet: "Politique monétaire", revoir: "politique",
      q: "En 2022 et 2023, la BNS a relevé son taux directeur jusqu'à 1,75 %. Pourquoi ?",
      options: [
        "Pour freiner l'inflation, qui avait atteint environ 3 %",
        "Pour relancer une économie en dépression",
        "Pour faire baisser la valeur du franc",
        "Pour augmenter le chômage volontairement",
      ],
      correct: [0],
      explication: "Hausse des taux → crédit plus cher → demande en baisse → les prix se stabilisent. En 2024-2025, l'inflation retombée, la BNS a baissé ses taux jusqu'à 0 %.",
    },
    {
      id: "p7", type: "ouverte", sujet: "Politique monétaire", revoir: "politique",
      q: "L'économie est en récession. Expliquez, étape par étape, comment une <b>baisse des taux</b> de la BNS peut aider.",
      modele: "La BNS baisse son taux directeur → les banques prêtent à des taux plus bas : le <b>crédit devient bon marché</b> → l'épargne rapporte moins → les ménages achètent davantage (logement, voiture) et les entreprises <b>investissent</b> → la <b>demande augmente</b> → la production repart, on engage : le chômage baisse → <b>reprise</b>.",
    },

    /* ============ 5. ÉCOLES ET CONFLITS ============ */
    {
      id: "e1", type: "tableau", sujet: "Deux écoles", revoir: "ecoles",
      q: "Libéralisme ou keynésianisme ?",
      colonnes: ["Libéralisme", "Keynésianisme"],
      lignes: [
        { t: "L'État doit corriger les cycles.", c: [1] },
        { t: "L'État se limite à la sécurité, à l'ordre et à la justice.", c: [0] },
        { t: "En crise, l'État doit dépenser pour relancer la demande.", c: [1] },
        { t: "Le marché se corrige tout seul.", c: [0] },
        { t: "On parle d'« État providence ».", c: [1] },
        { t: "On parle d'« État gendarme ».", c: [0] },
      ],
    },
    {
      id: "e2", type: "choix", sujet: "Deux écoles", revoir: "ecoles",
      q: "Pour les libéraux, quelle doit être la relation entre l'État et la banque centrale ?",
      options: [
        "La banque centrale doit être totalement indépendante",
        "Le gouvernement doit fixer lui-même les taux d'intérêt",
        "La banque centrale doit financer tous les déficits de l'État",
        "La banque centrale doit être supprimée",
      ],
      correct: [0],
    },
    {
      id: "e3", type: "ouverte", sujet: "Deux écoles", revoir: "ecoles",
      q: "Pourquoi est-il important que la BNS soit <b>indépendante</b> du gouvernement ?",
      modele: "Les responsables politiques sont tentés de dépenser ou de garder des taux bas avant des élections, même si l'économie est en surchauffe. Une BNS indépendante peut prendre des décisions impopulaires (hausse des taux) pour garantir la <b>stabilité des prix</b> à long terme, sans pression politique.",
    },
    {
      id: "e4", type: "tableau", sujet: "Conflits d'intérêts", revoir: "conflits",
      q: "La BNS relève ses taux d'intérêt. Qui est plutôt content, qui est plutôt mécontent ?",
      colonnes: ["Content", "Mécontent"],
      lignes: [
        { t: "Une retraitée qui a 80 000 francs sur un compte d'épargne", c: [0] },
        { t: "Une famille qui renouvelle son hypothèque", c: [1] },
        { t: "Une PME qui veut emprunter pour acheter une machine", c: [1] },
        { t: "Un jeune qui épargne pour ses études", c: [0] },
      ],
      explication: "Hausse des taux : l'épargne rapporte plus (épargnants contents), le crédit coûte plus cher (emprunteurs mécontents).",
    },
    {
      id: "e5", type: "tableau", sujet: "Conflits d'intérêts", revoir: "conflits",
      q: "Le franc suisse est très fort. Qui y gagne, qui y perd ?",
      colonnes: ["Gagne", "Perd"],
      lignes: [
        { t: "Une entreprise qui exporte des machines en Allemagne", c: [1] },
        { t: "Une famille qui part en vacances en Italie", c: [0] },
        { t: "Un hôtel de Gruyères qui accueille des touristes européens", c: [1] },
        { t: "Un commerçant qui importe des vélos de France", c: [0] },
      ],
      explication: "Franc fort : les produits étrangers coûtent moins de francs (importateurs, consommateurs gagnent), les produits suisses coûtent plus cher aux étrangers (exportateurs, tourisme perdent).",
    },
    {
      id: "e7", type: "vf", sujet: "Conflits d'intérêts", revoir: "conflits",
      q: "Vrai ou faux ?",
      items: [
        { t: "Les syndicats souhaitent en général l'indexation des salaires.", v: true },
        { t: "Les exportateurs souhaitent un franc très fort.", v: false, note: "Un franc fort rend leurs produits plus chers à l'étranger." },
        { t: "Un propriétaire avec une hypothèque à taux variable préfère des taux bas.", v: true },
        { t: "Toutes les mesures de politique conjoncturelle font des gagnants et aucun perdant.", v: false, note: "Chaque mesure crée des gagnants et des perdants : d'où des <b>conflits d'intérêts</b>." },
      ],
    },
    {
      id: "e6", type: "ouverte", sujet: "Conflits d'intérêts", revoir: "conflits",
      q: "En récession, l'État veut lancer un grand programme de constructions pour relancer l'économie. Présentez le conflit d'intérêts.",
      modele: "<b>Pour</b> : les chômeurs et les branches aidées (construction) en profitent ; la demande augmente et le chômage baisse. <br><b>Contre</b> : le programme coûte cher ; les contribuables craignent des hausses d'impôts ; les partisans d'un budget équilibré rappellent le <b>frein à l'endettement</b> et le risque de dette pour les générations futures. <br>Le frein à l'endettement permet un compromis : un déficit est admis en récession, à condition de faire des excédents plus tard.",
    },

    /* ============ 6. AUJOURD'HUI ============ */
    {
      id: "a1", type: "ouverte", sujet: "Et aujourd'hui ?", revoir: "aujourdhui",
      q: "Automne 2026 : croissance prévue +1,7 % (après +1,4 % en 2025), chômage stable vers 3 %, inflation 0,6 %, taux directeur 0 %. Dans quelle phase du cycle la Suisse se trouve-t-elle ? Justifiez.",
      modele: "Plutôt en <b>reprise / début d'expansion</b> : la croissance repart légèrement après le ralentissement de 2025, le chômage reste stable, l'inflation est faible et les taux sont au plus bas, ce qui est typique d'une économie qui sort d'un creux. On n'est pas en haute conjoncture : il n'y a ni surchauffe ni forte inflation. <br><i>Une autre réponse bien justifiée (par ex. « ralentissement » en raison du franc fort et des droits de douane) peut être acceptée.</i>",
    },
    {
      id: "a2", type: "choix", sujet: "Et aujourd'hui ?", revoir: "aujourdhui",
      q: "Avec une inflation de 0,6 % et une croissance modérée, quelle politique monétaire la BNS mène-t-elle en 2026 ?",
      options: [
        "Une politique expansive : taux directeur bas (0 %)",
        "Une politique très restrictive : taux à 5 %",
        "Aucune : la BNS n'a pas de taux directeur",
        "Elle fixe les prix des produits",
      ],
      correct: [0],
    },
    {
      id: "a3", type: "tableau", sujet: "Et aujourd'hui ?", revoir: "aujourdhui",
      q: "Automne 2026 : ces chiffres sont-ils plutôt rassurants ou plutôt inquiétants pour l'économie suisse ?",
      colonnes: ["Rassurant", "Inquiétant"],
      lignes: [
        { t: "Chômage stable vers 3 %", c: [0] },
        { t: "Inflation de 0,6 %, dans l'objectif de la BNS", c: [0] },
        { t: "Droits de douane américains sur les produits suisses", c: [1] },
        { t: "Franc très fort, qui pèse sur les exportations", c: [1] },
      ],
    },
  ],
};
