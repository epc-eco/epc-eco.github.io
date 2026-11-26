/* Banque de questions — Chapitre 45 : Croissance et changement structurel
   Pour ajouter une question : copier un bloc existant du même type et l'adapter.
   "revoir" = identifiant de la section de la théorie (voir la liste "sections"). */

window.THEME = {
  id: "eco-45-croissance",
  titre: "Chapitre 45 · Croissance et changement structurel",
  theorie: "theorie.html",
  accueil: "../../index.html",
};

window.QUESTIONS = {
  sections: {
    synthese: "Vue d'ensemble des chapitres 43 à 48",
    definition: "La croissance économique",
    historique: "La croissance dans l'histoire",
    suisse: "La croissance suisse",
    mesure: "Mesurer la croissance : le PIB",
    rnb: "Le RNB",
    "bien-etre": "Mesurer le bien-être",
    facteurs: "Les facteurs de croissance",
    effets: "Bienfaits et méfaits de la croissance",
    structure: "Le changement structurel",
    secteurs: "Les trois secteurs économiques",
  },

  questions: [
    /* ============ 0. VUE D'ENSEMBLE ============ */
    {
      id: "y2", type: "choix", sujet: "Vue d'ensemble", revoir: "synthese",
      q: "Quelle est la différence entre la <b>croissance</b> et la <b>conjoncture</b> ?",
      options: [
        "La croissance est la tendance à long terme ; la conjoncture, ce sont les variations à court terme autour de cette tendance",
        "La croissance concerne les prix ; la conjoncture concerne le chômage",
        "La croissance est mesurée par l'IPC ; la conjoncture par le PIB",
        "Il n'y a aucune différence",
      ],
      correct: [0],
    },
    {
      id: "y3", type: "vf", sujet: "Vue d'ensemble", revoir: "synthese",
      q: "Vrai ou faux ?",
      items: [
        { t: "En surchauffe, le risque principal est l'inflation.", v: true },
        { t: "Au creux du cycle, la BNS a plutôt intérêt à relever ses taux.", v: false, note: "Au creux, il faut <b>relancer</b> : la BNS <b>baisse</b> ses taux." },
        { t: "La politique monétaire est menée par la BNS, la politique budgétaire par l'État.", v: true },
        { t: "Une politique restrictive sert à relancer l'économie.", v: false, note: "Une politique restrictive <b>freine</b> l'économie (contre la surchauffe). Pour relancer, on parle de politique expansive." },
      ],
    },
    {
      id: "y4", type: "tableau", sujet: "Vue d'ensemble", revoir: "synthese",
      q: "Freiner ou relancer ? Quelle mesure correspond à quel objectif ?",
      colonnes: ["Freiner", "Relancer"],
      lignes: [
        { t: "La BNS baisse son taux directeur.", c: [1] },
        { t: "L'État augmente les impôts.", c: [0] },
        { t: "L'État construit de nouvelles routes et écoles.", c: [1] },
        { t: "La BNS relève son taux directeur.", c: [0] },
        { t: "L'État réduit ses dépenses.", c: [0] },
      ],
      explication: "Freiner (politique restrictive) : taux ↑, impôts ↑, dépenses ↓. Relancer (politique expansive) : taux ↓, impôts ↓, dépenses ↑.",
    },

    /* ============ 1. LA CROISSANCE ============ */
    {
      id: "d1", type: "choix", sujet: "Définition", revoir: "definition",
      q: "Qu'est-ce que la <b>croissance économique</b> ?",
      options: [
        "L'augmentation soutenue, pendant une période prolongée, de la valeur des biens et services produits",
        "La hausse générale et durable des prix",
        "L'augmentation du nombre d'habitants d'un pays",
        "Une bonne année pour les exportations",
      ],
      correct: [0],
      explication: "Attention : la hausse générale des prix, c'est l'<b>inflation</b> (ch. 43).",
    },
    {
      id: "d2", type: "trous", sujet: "Définition", revoir: "definition",
      q: "Complétez la définition.",
      texte: "La croissance est l'augmentation [[*soutenue|ponctuelle|négative]], pendant une période [[*prolongée|courte|d'un mois]], de la [[*valeur des biens et services produits|quantité de monnaie|population active]] par une économie. On la mesure par l'évolution du [[*PIB|IPC|taux directeur]].",
    },
    {
      id: "d3", type: "trous", sujet: "Histoire", revoir: "historique",
      q: "Complétez.",
      texte: "Entre 1750 et 1850, une triple révolution fait décoller la production : la révolution [[*agricole|numérique|monétaire]], la révolution [[*démographique|politique|bancaire]] et la révolution [[*industrielle|française|fiscale]].",
    },
    {
      id: "d4", type: "choix", sujet: "Histoire", revoir: "historique",
      q: "Comment appelle-t-on la période de forte croissance qui suit la Seconde Guerre mondiale (1945-1975) ?",
      options: ["Les Trente Glorieuses", "La Belle Époque", "La Grande Dépression", "La triple révolution"],
      correct: [0],
    },
    {
      id: "d5", type: "choix", sujet: "Histoire", revoir: "historique",
      q: "Les chocs pétroliers de 1973 et 1979 ont provoqué à la fois une hausse des prix et du chômage. Comment appelle-t-on cette situation (ch. 43) ?",
      options: ["La stagflation", "La déflation", "L'hyperinflation", "La surchauffe"],
      correct: [0],
      explication: "Stagflation = stagnation (chômage élevé) + inflation (hausse des prix).",
    },
    {
      id: "d6", type: "tableau", sujet: "La croissance suisse", revoir: "suisse",
      q: "Quelle crise a fait reculer le PIB suisse cette année-là ?",
      colonnes: ["Bulle immobilière", "Subprimes", "Covid"],
      lignes: [
        { t: "Début des années 1990", c: [0] },
        { t: "2009", c: [1] },
        { t: "2020", c: [2] },
      ],
    },
    {
      id: "d7", type: "vf", sujet: "La croissance suisse", revoir: "suisse",
      q: "Vrai ou faux ?",
      items: [
        { t: "La croissance suisse est très régulière d'une année à l'autre.", v: false, note: "Elle varie beaucoup : il y a des années de forte croissance et des années de recul. C'est le cycle conjoncturel (ch. 46)." },
        { t: "Depuis 1981, la croissance suisse est en moyenne d'environ 1,8 % par an.", v: true },
        { t: "Depuis 1981, le PIB suisse a reculé pendant environ la moitié des années.", v: false, note: "Seulement <b>6 années</b> de recul en 45 ans." },
        { t: "Une année de recul du PIB n'empêche pas une croissance à long terme.", v: true, note: "La croissance est une <b>tendance</b> sur une longue période." },
      ],
    },

    /* ============ 2. MESURER LA CROISSANCE ============ */
    {
      id: "p1", type: "choix", sujet: "Le PIB", revoir: "mesure",
      q: "Que mesure le <b>PIB</b> ?",
      options: [
        "La valeur des biens et services produits à l'intérieur d'un pays pendant une année",
        "Les revenus des seuls citoyens suisses, où qu'ils vivent",
        "L'évolution des prix à la consommation",
        "La fortune totale des habitants d'un pays",
      ],
      correct: [0],
      explication: "« Intérieur » : ce qui compte, c'est le lieu de production, pas la nationalité.",
    },
    {
      id: "p2", type: "tableau", sujet: "Le PIB", revoir: "mesure",
      q: "Quel indicateur choisir ?",
      colonnes: ["PIB réel", "PIB / habitant", "PIB en PPA"],
      lignes: [
        { t: "Savoir si la Suisse produit vraiment plus que l'an passé, sans l'effet de l'inflation", c: [0] },
        { t: "Comparer la richesse produite en Suisse et en Italie, qui n'ont pas la même population", c: [1] },
        { t: "Comparer en tenant compte du fait que tout coûte plus cher en Suisse", c: [2] },
      ],
    },
    {
      id: "p3", type: "trous", sujet: "Le PIB", revoir: "mesure",
      q: "Complétez.",
      texte: "PIB [[*nominal|réel|par habitant]] − inflation ≈ PIB [[*réel|nominal|brut]]. Le PIB réel mesure la croissance de la [[*production|monnaie|population]], sans l'effet de la hausse des [[*prix|salaires|impôts]].",
    },
    {
      id: "p4", type: "choix", sujet: "Le PIB", revoir: "mesure",
      q: "Le PIB nominal augmente de 4 % et l'inflation est de 1,5 %. De combien le PIB réel augmente-t-il, environ ?",
      options: ["2,5 %", "5,5 %", "4 %", "1,5 %"],
      correct: [0],
      explication: "PIB réel ≈ PIB nominal − inflation = 4 % − 1,5 % = 2,5 %.",
    },
    {
      id: "p5", type: "choix", sujet: "Le PIB", revoir: "mesure",
      q: "Le PIB nominal d'un pays augmente de 2 %, mais l'inflation est de 3 %. Que peut-on dire ?",
      options: [
        "Le PIB réel recule d'environ 1 % : on produit en réalité moins",
        "L'économie connaît une forte croissance",
        "Le PIB réel augmente de 5 %",
        "On ne peut rien dire",
      ],
      correct: [0],
      explication: "La hausse en francs vient uniquement des prix : 2 % − 3 % ≈ −1 %.",
    },
    {
      id: "p6", type: "vf", sujet: "Le PIB", revoir: "mesure",
      q: "Vrai ou faux ?",
      items: [
        { t: "Le salaire d'un frontalier français qui travaille à Genève fait partie du PIB suisse.", v: true, note: "Il produit en Suisse : c'est donc dans le PIB suisse." },
        { t: "En 2025, le PIB par habitant a augmenté moins vite que le PIB, car la population a aussi augmenté.", v: true, note: "PIB réel +1,4 %, PIB par habitant +0,5 % seulement." },
        { t: "Le PIB par habitant du Luxembourg est gonflé par les frontaliers et les sièges de multinationales.", v: true },
        { t: "En parité de pouvoir d'achat (PPA), l'avance de la Suisse augmente, car les prix y sont élevés.", v: false, note: "C'est l'inverse : les prix élevés réduisent le pouvoir d'achat, l'écart avec les autres pays <b>se réduit</b>." },
      ],
    },
    {
      id: "p7", type: "tableau", sujet: "Le RNB", revoir: "rnb",
      q: "Pour passer du PIB au RNB suisse, faut-il ajouter (+) ou soustraire (−) ?",
      colonnes: ["+", "−"],
      lignes: [
        { t: "Google, en Californie, paie une informaticienne suisse.", c: [0] },
        { t: "Un hôpital de Bâle paie une infirmière qui habite en Alsace.", c: [1] },
        { t: "Une entreprise française verse un dividende à un actionnaire fribourgeois.", c: [0] },
        { t: "Novartis verse un dividende à un investisseur américain.", c: [1] },
      ],
      explication: "On <b>ajoute</b> les revenus reçus de l'étranger par les résidents suisses, on <b>soustrait</b> les revenus gagnés en Suisse et versés à l'étranger.",
    },
    {
      id: "p8", type: "ouverte", sujet: "Le RNB", revoir: "rnb",
      q: "Expliquez la différence entre le <b>PIB</b> et le <b>RNB</b>.",
      modele: "Le <b>PIB</b> mesure ce qui est <b>produit à l'intérieur du pays</b>, quelle que soit la nationalité de ceux qui produisent. Le <b>RNB</b> mesure les <b>revenus des habitants du pays</b>, où qu'ils soient gagnés : on part du PIB, on ajoute les salaires et revenus du capital reçus de l'étranger et on soustrait ceux versés à l'étranger.",
    },
    {
      id: "p9", type: "choix", sujet: "Le PIB", revoir: "mesure",
      q: "En 2024, le PIB par habitant de la Suisse était d'environ…",
      options: ["104 000 dollars", "10 400 dollars", "40 000 dollars", "1 million de dollars"],
      correct: [0],
      explication: "C'est l'un des 5 plus élevés au monde (Banque mondiale).",
    },

    /* ============ 3. BIEN-ÊTRE ============ */
    {
      id: "b1", type: "choix", sujet: "Bien-être", revoir: "bien-etre",
      q: "Pourquoi le PIB est-il un mauvais indicateur du <b>bien-être</b> ?",
      options: [
        "Il ne tient pas compte de l'économie souterraine (travail au noir)",
        "Il ne compte pas le travail bénévole et domestique",
        "Il augmente aussi avec des dépenses qui n'apportent pas de bien-être (accidents, pollution)",
        "Il est calculé en dollars",
        "Il ne compte que l'agriculture",
      ],
      correct: [0, 1, 2],
    },
    {
      id: "b2", type: "tableau", sujet: "Bien-être", revoir: "bien-etre",
      q: "Cette activité fait-elle monter le PIB ?",
      colonnes: ["Oui", "Non"],
      lignes: [
        { t: "Un garage répare une voiture après un accident.", c: [0] },
        { t: "Un grand-père garde gratuitement ses petits-enfants.", c: [1] },
        { t: "Un peintre travaille au noir le samedi.", c: [1] },
        { t: "Une entreprise est payée pour dépolluer une rivière.", c: [0] },
        { t: "Une jeune entraîne bénévolement l'équipe de foot juniors.", c: [1] },
      ],
      explication: "Ce qui est payé et déclaré entre dans le PIB, même sans bien-être (accident, pollution). Le bénévolat, le travail domestique et le travail au noir n'y sont pas.",
    },
    {
      id: "b3", type: "vf", sujet: "Bien-être", revoir: "bien-etre",
      q: "Vrai ou faux ?",
      items: [
        { t: "Un accident de la route peut faire augmenter le PIB.", v: true, note: "Réparations, soins, assurances : ce sont des dépenses comptées dans le PIB." },
        { t: "Le PIB tient compte du travail au noir.", v: false, note: "L'économie souterraine n'est pas déclarée, donc pas comptée." },
        { t: "Pour mesurer le bien-être, on combine plusieurs indicateurs (santé, formation, emploi, sécurité…).", v: true },
        { t: "Plus le PIB est élevé, plus les habitants sont forcément heureux.", v: false },
      ],
    },
    {
      id: "b4", type: "ouverte", sujet: "Bien-être", revoir: "bien-etre",
      q: "Citez quatre indicateurs que l'on peut combiner au PIB pour mesurer le bien-être d'une population.",
      modele: "Par exemple : l'<b>espérance de vie</b>, le <b>taux de chômage</b> ou d'emploi, la part d'habitants ayant au moins le niveau <b>bac / maturité</b>, le <b>revenu disponible</b> par habitant, le taux de <b>meurtres</b> (sécurité), le taux de mortalité, la <b>participation électorale</b>, l'accès à <b>Internet</b> à haut débit.",
    },

    /* ============ 4. FACTEURS ============ */
    {
      id: "f1", type: "choix", sujet: "Facteurs de croissance", revoir: "facteurs",
      q: "Quels éléments favorisent la croissance économique ?",
      options: [
        "La formation et la recherche",
        "Les investissements en capital (machines, technologies)",
        "La stabilité sociale et politique",
        "Une justice indépendante et peu de corruption",
        "Une forte inflation",
        "Un pessimisme des ménages",
      ],
      correct: [0, 1, 2, 3],
    },
    {
      id: "f2", type: "vf", sujet: "Facteurs de croissance", revoir: "facteurs",
      q: "Vrai ou faux ?",
      items: [
        { t: "Sans ressources naturelles, un pays ne peut pas connaître de croissance.", v: false, note: "La Suisse en est la preuve : presque pas de ressources naturelles, mais une forte prospérité grâce à la formation, à la recherche et à la stabilité." },
        { t: "La formation et la recherche sont indispensables au développement économique.", v: true },
        { t: "Une hausse de la population favorise toujours la croissance, sans condition.", v: false, note: "Seulement si les <b>infrastructures</b> suivent et si la demande et la production augmentent." },
        { t: "Le climat de consommation est mesuré en Suisse par une enquête du SECO.", v: true },
      ],
    },
    {
      id: "f3", type: "trous", sujet: "Facteurs de croissance", revoir: "facteurs",
      q: "Complétez.",
      texte: "Une hausse de la population favorise la croissance à condition que les [[*infrastructures|impôts|prix]] suivent, que la demande et la [[*production|inflation|dette]] augmentent et que les revenus soient bien [[*redistribués|épargnés|bloqués]].",
    },
    {
      id: "f4", type: "tableau", sujet: "Facteurs de croissance", revoir: "facteurs",
      q: "À quel facteur de croissance cet exemple correspond-il ?",
      colonnes: ["Formation", "Capital", "Gouvernance", "Climat"],
      lignes: [
        { t: "Une PME achète un robot de soudure.", c: [1] },
        { t: "Les apprentis suivent les cours de maturité professionnelle.", c: [0] },
        { t: "Les juges sont indépendants du gouvernement.", c: [2] },
        { t: "Les ménages sont confiants et prévoient de gros achats.", c: [3] },
        { t: "Une EPF dépose de nombreux brevets.", c: [0] },
      ],
    },
    {
      id: "f5", type: "ouverte", sujet: "Facteurs de croissance", revoir: "facteurs",
      q: "La Suisse n'a presque pas de ressources naturelles. Expliquez quels facteurs lui permettent malgré tout d'être l'un des pays les plus prospères du monde.",
      modele: "La Suisse mise sur la <b>formation</b> (apprentissage, hautes écoles) et la <b>recherche</b>, sur les <b>investissements</b> dans les machines et les technologies, sur une grande <b>stabilité sociale et politique</b> et sur une bonne <b>gouvernance</b> (justice indépendante, peu de corruption, conditions-cadres favorables). Ces facteurs lui permettent de produire des biens et services à <b>haute valeur ajoutée</b>.",
    },

    /* ============ 5. BIENFAITS ET MÉFAITS ============ */
    {
      id: "e1", type: "trous", sujet: "Bienfaits", revoir: "effets",
      q: "Complétez le cercle vertueux de la croissance.",
      texte: "La production augmente → les entreprises engagent : le chômage [[*baisse|augmente|ne change pas]] → les revenus [[*augmentent|diminuent|stagnent]] → les ménages sont optimistes et [[*consomment davantage|épargnent tout|consomment moins]] → l'État encaisse plus d'[[*impôts|amendes|dettes]] → il investit dans la formation et la recherche → la production augmente encore.",
    },
    {
      id: "e2", type: "tableau", sujet: "Bienfaits et méfaits", revoir: "effets",
      q: "Bienfait ou méfait de la croissance ?",
      colonnes: ["Bienfait", "Méfait"],
      lignes: [
        { t: "Baisse du chômage", c: [0] },
        { t: "Épuisement des sols", c: [1] },
        { t: "Hausse des recettes fiscales", c: [0] },
        { t: "Burn-out et absentéisme", c: [1] },
        { t: "Stimulation de la recherche", c: [0] },
        { t: "Pénurie de matières premières", c: [1] },
      ],
    },
    {
      id: "e4", type: "choix", sujet: "Méfaits", revoir: "effets",
      q: "Quelles mesures permettent de limiter les méfaits de la croissance sur l'environnement ?",
      options: [
        "Le recyclage",
        "Le principe du pollueur-payeur (par ex. la taxe au sac)",
        "La lutte contre l'obsolescence programmée",
        "La hausse de la production de déchets",
        "La baisse des taux d'intérêt",
      ],
      correct: [0, 1, 2],
    },
    {
      id: "e5", type: "ouverte", sujet: "Bienfaits et méfaits", revoir: "effets",
      q: "« La croissance, c'est toujours bien. » Discutez cette affirmation en donnant deux arguments pour et deux arguments contre.",
      modele: "<b>Pour</b> : la croissance crée des emplois et fait baisser le chômage ; elle augmente les revenus et les recettes fiscales, ce qui permet de financer la formation, la santé et les assurances sociales. <br><b>Contre</b> : elle peut provoquer stress, burn-out et maladies (surpoids) ; elle pollue, épuise les ressources et produit des déchets, avec des coûts de plusieurs milliards par an. <br><i>Conclusion possible</i> : la croissance est utile, mais elle doit être durable.",
    },

    /* ============ 6. CHANGEMENT STRUCTUREL ============ */
    {
      id: "s1", type: "choix", sujet: "Changement structurel", revoir: "structure",
      q: "Qu'est-ce que le <b>changement structurel</b> ?",
      options: [
        "La transformation des structures d'un pays (secteurs, formations, lois) qui accompagne la croissance",
        "Une baisse soudaine des prix",
        "Le passage d'une phase du cycle conjoncturel à une autre",
        "La modification du taux directeur de la BNS",
      ],
      correct: [0],
    },
    {
      id: "s2", type: "vf", sujet: "Changement structurel", revoir: "structure",
      q: "Vrai ou faux ?",
      items: [
        { t: "La croissance provoque des changements structurels.", v: true },
        { t: "Les changements structurels sont aussi nécessaires à la croissance.", v: true, note: "Les deux s'influencent mutuellement." },
        { t: "Le changement structurel ne concerne que les secteurs économiques, jamais les lois.", v: false, note: "Il touche aussi les <b>formations</b> et les <b>lois</b>." },
      ],
    },
    {
      id: "s3", type: "tableau", sujet: "Les secteurs", revoir: "secteurs",
      q: "À quel secteur appartient cette activité ?",
      colonnes: ["Primaire", "Secondaire", "Tertiaire"],
      lignes: [
        { t: "Un producteur de lait en Gruyère", c: [0] },
        { t: "Une usine de chocolat à Broc", c: [1] },
        { t: "Une conseillère à la Banque cantonale de Fribourg", c: [2] },
        { t: "Un bûcheron", c: [0] },
        { t: "Une entreprise de construction", c: [1] },
        { t: "Un physiothérapeute", c: [2] },
      ],
    },
    {
      id: "s4", type: "tableau", sujet: "Évolution des secteurs", revoir: "structure",
      q: "Quel secteur cette cause fait-elle reculer ou progresser ?",
      colonnes: ["Primaire ↓", "Secondaire ↓", "Tertiaire ↑"],
      lignes: [
        { t: "Les terres agricoles sont construites (logements, routes).", c: [0] },
        { t: "Une usine déménage en Europe de l'Est : délocalisation.", c: [1] },
        { t: "La population vieillit et a besoin de soins.", c: [2] },
        { t: "Les paysans manquent de relève.", c: [0] },
        { t: "Les robots remplacent les ouvriers.", c: [1] },
        { t: "Les gens ont plus de temps libre pour les loisirs.", c: [2] },
      ],
    },
    {
      id: "s5", type: "choix", sujet: "Les secteurs aujourd'hui", revoir: "structure",
      q: "Que signifie le terme <b>tertiarisation</b> ?",
      options: [
        "La part des emplois dans les services augmente",
        "Le pays devient de plus en plus agricole",
        "L'industrie se développe fortement",
        "Le nombre de secteurs économiques passe à trois",
      ],
      correct: [0],
      explication: "En Suisse, environ 77 % des emplois sont aujourd'hui dans le tertiaire (services).",
    },
    {
      id: "s6", type: "choix", sujet: "Les secteurs aujourd'hui", revoir: "structure",
      q: "Quelle est, environ, la répartition des emplois en Suisse aujourd'hui (primaire / secondaire / tertiaire) ?",
      options: ["3 % / 20 % / 77 %", "33 % / 33 % / 33 %", "20 % / 50 % / 30 %", "10 % / 10 % / 80 %"],
      correct: [0],
    },
    {
      id: "s7", type: "ouverte", sujet: "Conséquences pour la Suisse", revoir: "structure",
      q: "La Suisse est un petit pays, sans ressources naturelles, avec des coûts de production élevés. Quelle stratégie doit-elle suivre et quelles mesures en découlent ?",
      modele: "Elle ne peut pas être la moins chère : elle doit miser sur les activités à <b>haute valeur ajoutée</b> (produits de pointe, ingénierie, recherche, services spécialisés) et abandonner peu à peu celles à faible valeur ajoutée. Il faut donc <b>promouvoir la formation</b>, <b>faciliter la recherche et le développement</b> et soutenir certains secteurs clés comme l'agriculture. L'État y contribue par sa <b>politique structurelle</b> : lois, fiscalité, gouvernance, infrastructures.",
    },
    {
      id: "s8", type: "choix", sujet: "Conséquences pour la Suisse", revoir: "structure",
      q: "Quels sont des moyens de la <b>politique structurelle</b> de l'État ?",
      options: ["Les lois", "La fiscalité", "Le développement des infrastructures", "La gouvernance", "Le taux directeur de la BNS"],
      correct: [0, 1, 2, 3],
      explication: "Le taux directeur relève de la politique <b>monétaire</b> de la BNS (ch. 48), pas de la politique structurelle de l'État.",
    },
    {
      id: "s9", type: "choix", sujet: "Les secteurs", revoir: "structure",
      q: "Pourquoi le secteur primaire a-t-il perdu autant d'emplois en deux siècles, alors qu'on produit toujours de la nourriture ?",
      options: [
        "Grâce aux machines et aux progrès techniques, un paysan produit beaucoup plus qu'avant : la productivité a augmenté",
        "Parce qu'on mange beaucoup moins qu'avant",
        "Parce que l'agriculture est interdite près des villes",
        "Parce que les paysans sont devenus fonctionnaires",
      ],
      correct: [0],
      explication: "Hausse de la productivité agricole, terres construites, concurrence des importations et manque de relève expliquent ce recul.",
    },
  ],
};
