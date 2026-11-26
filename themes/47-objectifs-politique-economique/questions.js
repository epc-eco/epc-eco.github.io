/* Banque de questions — Chapitre 47 : Objectifs de la politique économique et sociale
   Pour ajouter une question : copier un bloc existant du même type et l'adapter.
   "revoir" = identifiant de la section de la théorie (voir la liste "sections"). */

window.THEME = {
  id: "eco-47-objectifs-politique-economique",
  titre: "Chapitre 47 · Objectifs de la politique économique et sociale",
  theorie: "theorie.html",
  accueil: "../../index.html",
};

window.QUESTIONS = {
  sections: {
    "fil-rouge": "Le fil rouge des chapitres 43 à 48",
    politiques: "Plusieurs politiques",
    structurelle: "La politique structurelle",
    forces: "Les forces de la Suisse",
    faiblesses: "Les faiblesses de la Suisse",
    defis: "Les défis de l'économie suisse",
    objectifs: "Les objectifs de la politique conjoncturelle",
    kaldor: "Le carré magique de Kaldor",
    polygone: "Le polygone magique",
    conflits: "Pourquoi « magique » ?",
    instruments: "Les instruments, en bref",
    fiscale: "La politique fiscale",
    budgetaire: "La politique budgétaire",
    sociale: "La politique sociale",
  },

  questions: [
    /* ============ 0. FIL ROUGE ============ */
    {
      id: "z1", type: "tableau", sujet: "Fil rouge", revoir: "fil-rouge",
      q: "Chaque objectif de la Confédération renvoie à un chapitre. Lequel ?",
      colonnes: ["43", "45", "46"],
      lignes: [
        { t: "Des prix stables : ni inflation, ni déflation", c: [0] },
        { t: "Une croissance régulière à long terme", c: [1] },
        { t: "Atténuer les vagues de la conjoncture", c: [2] },
      ],
    },

    /* ============ 1. PLUSIEURS POLITIQUES ============ */
    {
      id: "o1", type: "tableau", sujet: "Plusieurs politiques", revoir: "politiques",
      q: "Cette politique agit-elle plutôt à court terme ou à long terme ?",
      colonnes: ["Court terme", "Long terme"],
      lignes: [
        { t: "Politique conjoncturelle", c: [0] },
        { t: "Politique structurelle", c: [1] },
        { t: "Politique sociale", c: [1] },
      ],
    },
    {
      id: "o2", type: "tableau", sujet: "Plusieurs politiques", revoir: "politiques",
      q: "Qui mène cette politique ?",
      colonnes: ["BNS", "État"],
      lignes: [
        { t: "Politique monétaire", c: [0] },
        { t: "Politique budgétaire", c: [1] },
        { t: "Politique fiscale", c: [1] },
      ],
    },
    {
      id: "o3", type: "choix", sujet: "Plusieurs politiques", revoir: "politiques",
      q: "Quel est le but de la <b>politique structurelle</b> ?",
      options: [
        "Mettre en place des structures favorables à l'essor économique",
        "Corriger la situation économique du moment",
        "Fixer le taux directeur",
        "Verser les rentes AVS",
      ],
      correct: [0],
    },
    {
      id: "o4", type: "trous", sujet: "Plusieurs politiques", revoir: "politiques",
      q: "Complétez.",
      texte: "La politique [[*conjoncturelle|structurelle|sociale]] corrige la situation à court terme. Elle comprend la politique [[*monétaire|sociale|structurelle]], menée par la BNS, ainsi que les politiques budgétaire et [[*fiscale|agricole|scolaire]], menées par l'État. La politique [[*sociale|monétaire|conjoncturelle]] vise à diminuer les inégalités et la pauvreté.",
    },
    {
      id: "o5", type: "tableau", sujet: "Plusieurs politiques", revoir: "politiques",
      q: "De quelle politique s'agit-il ?",
      colonnes: ["Conjoncturelle", "Structurelle", "Sociale"],
      lignes: [
        { t: "La BNS baisse ses taux pendant une récession.", c: [0] },
        { t: "Le canton construit un nouveau campus de haute école.", c: [1] },
        { t: "Les familles modestes reçoivent des subsides pour leurs primes d'assurance-maladie.", c: [2] },
        { t: "La Confédération développe le réseau ferroviaire.", c: [1] },
        { t: "L'État fait un budget déficitaire pour relancer l'économie.", c: [0] },
        { t: "Les rentes AVS sont augmentées.", c: [2] },
      ],
    },
    {
      id: "o6", type: "vf", sujet: "Plusieurs politiques", revoir: "politiques",
      q: "Vrai ou faux ?",
      items: [
        { t: "La politique conjoncturelle cherche à corriger la situation économique du moment.", v: true },
        { t: "La politique structurelle donne des résultats en quelques semaines.", v: false, note: "Former des personnes ou construire des infrastructures prend des années : c'est une politique à <b>long terme</b>." },
        { t: "La politique monétaire fait partie de la politique conjoncturelle.", v: true },
      ],
    },

    /* ============ 2. POLITIQUE STRUCTURELLE ============ */
    {
      id: "t1", type: "choix", sujet: "Politique structurelle", revoir: "structurelle",
      q: "Sur quels domaines porte la politique structurelle ?",
      options: ["La formation", "Les infrastructures", "Les institutions", "L'aménagement du territoire", "La fiscalité", "Le taux directeur", "Le prix du pain"],
      correct: [0, 1, 2, 3, 4],
      explication: "Elle porte aussi sur l'environnement et les subventions. Le taux directeur relève de la politique <b>monétaire</b> de la BNS.",
    },
    {
      id: "t2", type: "tableau", sujet: "Forces et faiblesses", revoir: "forces",
      q: "Force ou faiblesse de la Suisse ?",
      colonnes: ["Force", "Faiblesse"],
      lignes: [
        { t: "Un système juridique sûr", c: [0] },
        { t: "Le manque de main-d'œuvre qualifiée", c: [1] },
        { t: "Un haut niveau de formation", c: [0] },
        { t: "Peu de concurrence sur le marché intérieur", c: [1] },
        { t: "Des finances publiques solides", c: [0] },
        { t: "Un marché agricole très protégé", c: [1] },
      ],
    },
    {
      id: "t3", type: "vf", sujet: "Classements", revoir: "forces",
      q: "Vrai ou faux ?",
      items: [
        { t: "La Suisse est 1re du Global Innovation Index depuis 15 ans.", v: true },
        { t: "En 2026, la Suisse est le pays le plus compétitif du monde selon l'IMD.", v: false, note: "Elle est <b>3e</b>, derrière Singapour et Hong Kong, mais 1re d'Europe." },
        { t: "Le PIB par habitant suisse fait partie des 5 plus élevés au monde.", v: true },
        { t: "Les impôts des entreprises sont plutôt avantageux en Suisse.", v: true },
      ],
    },
    {
      id: "t4", type: "ouverte", sujet: "Forces de la Suisse", revoir: "forces",
      q: "Choisissez deux forces de la Suisse et expliquez en quoi elles favorisent la croissance.",
      modele: "Par exemple : <br><b>Haut niveau de formation</b> (apprentissage dual, hautes écoles) : les travailleurs sont qualifiés, les entreprises peuvent produire des biens et services à haute valeur ajoutée. <br><b>Système juridique sûr</b> : les entreprises savent que les contrats seront respectés ; elles osent investir à long terme. <br><i>Autres forces possibles</i> : marché du travail flexible, infrastructures de qualité, finances publiques solides, fiscalité avantageuse, qualité de vie, institutions stables.",
    },
    {
      id: "t5", type: "choix", sujet: "Faiblesses", revoir: "faiblesses",
      q: "Que sont les <b>importations parallèles</b> ?",
      options: [
        "Acheter un produit de marque moins cher à l'étranger pour le revendre en Suisse, sans passer par le distributeur officiel",
        "Importer deux fois le même produit",
        "Importer uniquement des produits agricoles",
        "Des importations interdites par la loi",
      ],
      correct: [0],
      explication: "Quand elles sont difficiles, les prix restent élevés en Suisse : c'est une cause de l'« îlot de cherté ».",
    },
    {
      id: "t8", type: "choix", sujet: "Faiblesses", revoir: "faiblesses",
      q: "Que désigne l'expression « <b>îlot de cherté</b> » ?",
      options: [
        "Le fait que beaucoup de produits coûtent nettement plus cher en Suisse qu'à l'étranger",
        "Une île suisse où les prix sont bas",
        "Une période de déflation",
        "Le nom d'un impôt fédéral",
      ],
      correct: [0],
      explication: "Une des causes : le manque de concurrence sur le marché intérieur et la difficulté des importations parallèles.",
    },
    {
      id: "t6", type: "vf", sujet: "Les défis", revoir: "defis",
      q: "Vrai ou faux ?",
      items: [
        { t: "En août 2025, les États-Unis ont imposé des droits de douane de 39 % sur des produits suisses.", v: true, note: "Ils ont été ramenés à 15 % depuis le 14 novembre 2025, après un accord." },
        { t: "Un franc très fort facilite les exportations suisses.", v: false, note: "Il rend les produits suisses <b>plus chers</b> à l'étranger." },
        { t: "La pénurie de main-d'œuvre est liée en partie au vieillissement de la population.", v: true },
        { t: "La 13e rente AVS ne coûte presque rien.", v: false, note: "Plus de <b>4 milliards</b> de francs par an." },
      ],
    },
    {
      id: "t7", type: "ouverte", sujet: "Les défis", revoir: "defis",
      q: "Expliquez pourquoi un <b>franc très fort</b> est un défi pour l'économie suisse.",
      modele: "Quand le franc est fort, il faut plus d'euros ou de dollars pour acheter un franc. Les produits suisses deviennent donc <b>plus chers pour les clients étrangers</b> : les exportations diminuent (machines, montres, tourisme). Comme la Suisse vit beaucoup des exportations, la croissance et l'emploi peuvent en souffrir. <i>Avantage</i> : les importations sont moins chères, ce qui freine l'inflation (ch. 43).",
    },
    {
      id: "t9", type: "tableau", sujet: "Les défis", revoir: "defis",
      q: "De quel défi s'agit-il ?",
      colonnes: ["Douanes US", "Franc fort", "Main-d'œuvre", "Retraites"],
      lignes: [
        { t: "Un hôpital fribourgeois ne trouve pas assez d'infirmières.", c: [2] },
        { t: "Une montre suisse vendue à New York est taxée à la frontière américaine.", c: [0] },
        { t: "Il faut plus de 4 milliards par an pour une rente supplémentaire.", c: [3] },
        { t: "Pour un client allemand, une machine suisse devient plus chère sans que son prix en francs change.", c: [1] },
      ],
    },

    /* ============ 3. OBJECTIFS ============ */
    {
      id: "g1", type: "trous", sujet: "Article 100 Cst.", revoir: "objectifs",
      q: "Complétez l'article 100 al. 1 de la Constitution.",
      texte: "La Confédération prend des mesures afin d'assurer une évolution [[*régulière|rapide|libre]] de la conjoncture et, en particulier, de prévenir et combattre le [[*chômage|commerce|tourisme]] et le [[*renchérissement|franc fort|fédéralisme]].",
      explication: "« Renchérissement » = hausse des prix, c'est-à-dire l'inflation.",
    },
    {
      id: "g2", type: "choix", sujet: "Les objectifs", revoir: "objectifs",
      q: "Quels sont les quatre objectifs de la politique conjoncturelle de la Confédération ?",
      options: [
        "Une croissance régulière",
        "Des prix stables",
        "Un chômage faible",
        "Un commerce extérieur favorable",
        "Des impôts les plus élevés possible",
        "Un franc le plus fort possible",
      ],
      correct: [0, 1, 2, 3],
    },
    {
      id: "g3", type: "tableau", sujet: "Commerce extérieur", revoir: "objectifs",
      q: "La balance des transactions courantes est-elle excédentaire ou déficitaire ?",
      colonnes: ["Excédentaire", "Déficitaire"],
      lignes: [
        { t: "Exportations : 400 milliards · importations : 350 milliards", c: [0] },
        { t: "Exportations : 200 milliards · importations : 260 milliards", c: [1] },
        { t: "Le pays vend plus à l'étranger qu'il n'achète.", c: [0] },
      ],
    },
    {
      id: "g4", type: "vf", sujet: "Le carré magique", revoir: "kaldor",
      q: "Vrai ou faux ? (carré magique de Kaldor)",
      items: [
        { t: "Il représente quatre objectifs : croissance, prix stables, plein emploi, commerce extérieur.", v: true },
        { t: "Plus la surface est grande, meilleure est la situation du pays.", v: true },
        { t: "Sur l'axe du chômage, l'idéal (0 %) est placé au centre.", v: false, note: "L'idéal est placé le <b>plus loin du centre</b>, pour que « grand » veuille toujours dire « bien »." },
        { t: "Un pays en stagflation a une très grande surface.", v: false, note: "Faible croissance, chômage et inflation élevés : la surface est <b>petite</b>." },
      ],
    },
    {
      id: "g5", type: "choix", sujet: "Le carré magique", revoir: "kaldor",
      q: "Pourquoi parle-t-on de carré « <b>magique</b> » ?",
      options: [
        "Parce qu'il est presque impossible d'atteindre les quatre objectifs en même temps",
        "Parce qu'il a été inventé par un magicien",
        "Parce que les quatre objectifs sont toujours atteints en Suisse",
        "Parce qu'il prédit l'avenir de l'économie",
      ],
      correct: [0],
    },
    {
      id: "g11", type: "choix", sujet: "Le carré magique", revoir: "kaldor",
      q: "Quel pays aurait la plus grande surface dans le carré magique ? (chiffres fictifs)",
      options: [
        "Croissance 3 %, chômage 2 %, inflation 1 %, commerce extérieur +3 % du PIB",
        "Croissance 0 %, chômage 9 %, inflation 8 %, commerce extérieur −2 % du PIB",
        "Croissance 1 %, chômage 6 %, inflation 5 %, commerce extérieur 0 %",
        "Croissance −2 %, chômage 12 %, inflation 0 %, commerce extérieur −1 % du PIB",
      ],
      correct: [0],
      explication: "Bonne croissance, chômage et inflation faibles, commerce extérieur excédentaire : chaque valeur est proche de l'idéal.",
    },
    {
      id: "g6", type: "choix", sujet: "Le polygone magique", revoir: "polygone",
      q: "Quels objectifs le <b>polygone magique</b> ajoute-t-il au carré de Kaldor ?",
      options: ["L'équité sociale", "La qualité de l'environnement", "Le taux directeur à 0 %", "La suppression des impôts"],
      correct: [0, 1],
      explication: "On y ajoute souvent l'<b>équilibre budgétaire</b> de l'État.",
    },
    {
      id: "g12", type: "trous", sujet: "Le polygone magique", revoir: "polygone",
      q: "Complétez.",
      texte: "Le polygone magique reprend les quatre objectifs du carré de [[*Kaldor|Keynes|Smith]] et ajoute l'[[*équité sociale|inflation|immigration]] et la qualité de l'[[*environnement|exportation|monnaie]]. On y ajoute souvent l'équilibre [[*budgétaire|monétaire|démographique]] de l'État.",
    },
    {
      id: "g7", type: "tableau", sujet: "Le polygone magique", revoir: "polygone",
      q: "Quel objectif cette mesure sert-elle surtout ?",
      colonnes: ["Prix stables", "Plein emploi", "Environnement", "Équité sociale"],
      lignes: [
        { t: "La BNS relève ses taux quand l'inflation dépasse 2 %.", c: [0] },
        { t: "Une taxe sur le CO₂ est prélevée sur le mazout.", c: [2] },
        { t: "Les revenus élevés paient un taux d'impôt plus élevé.", c: [3] },
        { t: "L'assurance-chômage finance des cours de reconversion.", c: [1] },
      ],
    },
    {
      id: "g8", type: "tableau", sujet: "Conflits d'objectifs", revoir: "conflits",
      q: "Quel objectif risque d'en souffrir ?",
      colonnes: ["Prix stables", "Plein emploi", "Environnement", "Équilibre budgétaire"],
      lignes: [
        { t: "On cherche une croissance très forte.", c: [2] },
        { t: "La BNS mène une politique très restrictive.", c: [1] },
        { t: "L'État dépense beaucoup pour relancer l'économie.", c: [3] },
        { t: "On atteint le plein emploi : les salaires s'envolent.", c: [0] },
      ],
    },
    {
      id: "g9", type: "ouverte", sujet: "Conflits d'objectifs", revoir: "conflits",
      q: "Expliquez, avec un exemple, pourquoi le plein emploi et la stabilité des prix sont difficiles à atteindre en même temps.",
      modele: "Quand presque tout le monde travaille, les entreprises manquent de personnel : elles <b>augmentent les salaires</b> pour attirer des employés. Leurs coûts montent et elles <b>augmentent leurs prix</b> : l'inflation apparaît (spirale prix-salaires, ch. 43). À l'inverse, pour stabiliser les prix, la BNS relève ses taux : l'économie ralentit et le <b>chômage augmente</b>. On retrouve le dilemme de la stagflation.",
    },
    {
      id: "g10", type: "choix", sujet: "Conflits d'objectifs", revoir: "conflits",
      q: "Quel conflit d'objectifs illustre cette situation : « La production augmente fortement, mais les émissions de CO₂ aussi » ?",
      options: [
        "Croissance contre qualité de l'environnement",
        "Prix stables contre plein emploi",
        "Équité sociale contre commerce extérieur",
        "Il n'y a aucun conflit",
      ],
      correct: [0],
    },

    /* ============ 4. INSTRUMENTS ============ */
    {
      id: "n1", type: "choix", sujet: "Politique monétaire", revoir: "instruments",
      q: "La BNS doit assurer une « triple stabilité ». Laquelle ?",
      options: ["La stabilité de la monnaie", "La stabilité des changes", "La stabilité des prix", "La stabilité des impôts", "La stabilité des salaires"],
      correct: [0, 1, 2],
      explication: "Elle y parvient en contrôlant la <b>masse monétaire</b> au moyen des <b>taux d'intérêt</b> (ch. 48).",
    },
    {
      id: "n2", type: "tableau", sujet: "Politique fiscale", revoir: "fiscale",
      q: "À quoi sert surtout cet impôt ou cette mesure fiscale ?",
      colonnes: ["Réguler", "Inciter", "Réduire les inégalités"],
      lignes: [
        { t: "La taxe sur le tabac", c: [1] },
        { t: "L'impôt progressif sur le revenu", c: [2] },
        { t: "Une baisse temporaire d'impôts en récession", c: [0] },
        { t: "La taxe au sac (pollueur-payeur)", c: [1] },
      ],
    },
    {
      id: "n3", type: "trous", sujet: "Politique fiscale", revoir: "fiscale",
      q: "Complétez : la politique fiscale anticyclique.",
      texte: "Une [[*baisse|hausse]] d'impôts laisse plus d'argent aux ménages : la conjoncture [[*remonte|ralentit]]. Une [[*hausse|baisse]] d'impôts freine la demande : on l'utilise contre la [[*surchauffe|récession|déflation]].",
    },
    {
      id: "n4", type: "vf", sujet: "Politique budgétaire", revoir: "budgetaire",
      q: "Vrai ou faux ?",
      items: [
        { t: "Quand la conjoncture est bonne, le budget de l'État a tendance à être excédentaire.", v: true },
        { t: "Le budget de l'État dépend uniquement de la conjoncture, jamais de décisions politiques.", v: false, note: "Il dépend aussi des choix politiques : relance, politique restrictive, frein à l'endettement." },
        { t: "Grâce au frein à l'endettement, la Suisse a peu de dette en comparaison internationale.", v: true },
        { t: "Moins de dette signifie moins d'intérêts à payer.", v: true },
      ],
    },
    {
      id: "n5", type: "choix", sujet: "Politique budgétaire", revoir: "budgetaire",
      q: "Que prévoit l'article 126 al. 1 de la Constitution ?",
      options: [
        "La Confédération équilibre à terme ses dépenses et ses recettes",
        "La Confédération ne peut jamais faire de déficit",
        "La BNS finance les déficits de la Confédération",
        "Les cantons paient les dettes de la Confédération",
      ],
      correct: [0],
      explication: "« À terme » : sur un cycle conjoncturel complet. C'est la base du frein à l'endettement (ch. 46).",
    },
    {
      id: "n6", type: "tableau", sujet: "Les instruments", revoir: "instruments",
      q: "Quel instrument est utilisé ?",
      colonnes: ["Monétaire", "Fiscal", "Budgétaire"],
      lignes: [
        { t: "La Confédération réduit temporairement l'impôt fédéral direct.", c: [1] },
        { t: "La BNS baisse son taux directeur.", c: [0] },
        { t: "Le canton avance la construction d'un nouveau cycle d'orientation.", c: [2] },
        { t: "Une nouvelle taxe sur les billets d'avion est introduite.", c: [1] },
      ],
    },

    /* ============ 5. POLITIQUE SOCIALE ============ */
    {
      id: "so1", type: "choix", sujet: "Politique sociale", revoir: "sociale",
      q: "Quels sont les buts de la politique sociale ?",
      options: [
        "Garantir une vie décente aux plus démunis",
        "Limiter le mécontentement de la population",
        "Garder la cohésion sociale",
        "Augmenter le taux directeur",
        "Supprimer toute concurrence",
      ],
      correct: [0, 1, 2],
    },
    {
      id: "so2", type: "tableau", sujet: "Politique sociale", revoir: "sociale",
      q: "Ces mesures relèvent-elles de la politique sociale ?",
      colonnes: ["Oui", "Non"],
      lignes: [
        { t: "Une bourse d'études pour une apprentie de famille modeste", c: [0] },
        { t: "La hausse du taux directeur de la BNS", c: [1] },
        { t: "Des subsides pour les primes d'assurance-maladie", c: [0] },
        { t: "La 13e rente AVS", c: [0] },
        { t: "La construction d'une autoroute", c: [1] },
      ],
      explication: "La hausse des taux relève de la politique monétaire ; l'autoroute, de la politique structurelle.",
    },
    {
      id: "so3", type: "ouverte", sujet: "Politique sociale", revoir: "sociale",
      q: "Pourquoi la politique sociale est-elle aussi utile à l'économie, et pas seulement aux personnes aidées ?",
      modele: "Elle garde la <b>cohésion sociale</b> et limite le mécontentement : la <b>stabilité sociale et politique</b> est un facteur de croissance (ch. 45). Les personnes aidées continuent à consommer, ce qui soutient la demande, surtout en récession. La formation (bourses) permet aussi d'avoir une main-d'œuvre qualifiée.",
    },
    {
      id: "so4", type: "vf", sujet: "Politique sociale", revoir: "sociale",
      q: "Vrai ou faux ?",
      items: [
        { t: "La 13e rente AVS a été acceptée par le peuple en mars 2024.", v: true },
        { t: "Elle sera versée pour la première fois en décembre 2026.", v: true },
        { t: "Pour la financer, le Parlement propose de relever la TVA de 8,1 % à 8,5 %.", v: true, note: "Le peuple vote le 29 novembre 2026 ; la hausse entrerait en vigueur au plus tôt en 2028." },
        { t: "La politique sociale ne concerne que les retraités.", v: false, note: "Elle concerne aussi le logement, la santé, la formation, le chômage, l'invalidité…" },
      ],
    },
    {
      id: "so5", type: "choix", sujet: "Politique sociale", revoir: "sociale",
      q: "Quels sont des <b>moyens d'action</b> de la politique sociale ?",
      options: ["Les assurances sociales", "La politique du logement", "Les bourses de formation", "Les subsides pour les primes d'assurance-maladie", "Le taux de change du franc"],
      correct: [0, 1, 2, 3],
    },
  ],
};
