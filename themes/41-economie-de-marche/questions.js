/* Banque de questions — Chapitre 41 : Économie de marché
   Pour ajouter une question : copier un bloc existant du même type et l'adapter.
   "revoir" = identifiant de la section de la théorie (voir la liste "sections"). */

window.THEME = {
  id: "eco-41-economie-de-marche",
  titre: "Chapitre 41 · Économie de marché",
  theorie: "theorie.html",
  accueil: "../../index.html",
};

window.QUESTIONS = {
  sections: {
    "fil-rouge": "Le fil rouge de la 3e année",
    definition: "L'économie de marché",
    demande: "La demande",
    "deplacement-demande": "Le déplacement de la demande",
    "elasticite-demande": "L'élasticité de la demande",
    offre: "L'offre",
    "deplacement-offre": "Le déplacement de l'offre",
    "elasticite-offre": "L'élasticité de l'offre",
    equilibre: "L'équilibre du marché",
    choc: "Quand la demande augmente",
    realite: "Les obstacles à l'équilibre",
    formes: "Les formes de marché",
    monopole: "Le monopole",
    suisse: "La concurrence en Suisse",
    controle: "Le contrôle des prix",
    plancher: "Le prix minimum",
  },

  questions: [
    /* ============ 1. DÉFINITIONS ============ */
    {
      id: "m1", type: "choix", sujet: "Économie de marché", revoir: "definition",
      q: "Qu'est-ce qu'une <b>économie de marché</b> ?",
      options: [
        "Un système dans lequel les prix se forment selon l'offre et la demande",
        "Un système dans lequel l'État fixe tous les prix",
        "Le marché du samedi matin",
        "Un système sans aucune monnaie",
      ],
      correct: [0],
    },
    {
      id: "m2", type: "vf", sujet: "Économie de marché", revoir: "definition",
      q: "Vrai ou faux ?",
      items: [
        { t: "Un marché peut être virtuel, comme une plateforme en ligne.", v: true },
        { t: "La Suisse est une économie de marché pure, sans intervention de l'État.", v: false, note: "L'économie de marché pure n'existe dans <b>aucun pays</b>." },
        { t: "La bourse est un lieu où les prix se fixent selon l'offre et la demande.", v: true },
        { t: "Sur un marché, l'offre représente les acheteurs.", v: false, note: "L'offre = les <b>vendeurs</b> ; la demande = les acheteurs." },
      ],
    },
    {
      id: "m3", type: "tableau", sujet: "Économie de marché", revoir: "definition",
      q: "Qui représente l'offre, qui représente la demande ?",
      colonnes: ["Offre", "Demande"],
      lignes: [
        { t: "Un garage qui vend des voitures d'occasion", c: [0] },
        { t: "Une apprentie qui cherche un scooter", c: [1] },
        { t: "Un investisseur qui veut acheter des actions", c: [1] },
        { t: "Un paysan qui vend ses pommes au marché", c: [0] },
      ],
    },

    /* ============ 2. LA DEMANDE ============ */
    {
      id: "d1", type: "trous", sujet: "La demande", revoir: "demande",
      q: "Complétez.",
      texte: "La demande est la quantité de biens que les [[*consommateurs|entreprises|banques]] sont prêts à acheter à un prix donné. Plus le prix est élevé, plus la quantité demandée est [[*basse|élevée]]. Quand le prix baisse, on se déplace [[*le long de la courbe|vers une nouvelle courbe]].",
    },
    {
      id: "d2", type: "choix", sujet: "La demande", revoir: "demande",
      q: "Le prix d'un abonnement de fitness baisse de 30 %. Que se passe-t-il, en principe ?",
      options: [
        "La quantité demandée augmente : on se déplace le long de la courbe de demande",
        "Toute la courbe de demande se déplace vers la gauche",
        "La quantité demandée baisse",
        "L'offre disparaît",
      ],
      correct: [0],
    },
    {
      id: "d3", type: "tableau", sujet: "Déplacement de la demande", revoir: "deplacement-demande",
      q: "La courbe de demande de vélos électriques se déplace-t-elle vers la droite (plus de demande) ou vers la gauche (moins de demande) ?",
      colonnes: ["Droite", "Gauche"],
      lignes: [
        { t: "Les salaires augmentent.", c: [0] },
        { t: "L'abonnement de bus devient beaucoup moins cher.", c: [1] },
        { t: "Les batteries de rechange deviennent moins chères.", c: [0] },
        { t: "On annonce une forte hausse des prix des vélos l'an prochain.", c: [0] },
        { t: "La mode passe : on préfère les trottinettes.", c: [1] },
      ],
      explication: "Le bus est un <b>substitut</b> : s'il devient moins cher, on achète moins de vélos. La batterie est un bien <b>complémentaire</b> : moins chère, elle rend le vélo plus attractif.",
    },
    {
      id: "d4", type: "tableau", sujet: "Déplacement de la demande", revoir: "deplacement-demande",
      q: "Plus ou moins de demande pour le même prix ?",
      colonnes: ["Plus", "Moins"],
      lignes: [
        { t: "Le revenu des ménages baisse.", c: [1] },
        { t: "Un substitut devient plus cher.", c: [0] },
        { t: "Un bien complémentaire devient plus cher.", c: [1] },
        { t: "La population augmente.", c: [0] },
      ],
    },
    {
      id: "d5", type: "choix", sujet: "Biens substituts et complémentaires", revoir: "deplacement-demande",
      q: "Quelles paires sont des biens <b>complémentaires</b> (on les utilise ensemble) ?",
      options: ["Une imprimante et des cartouches d'encre", "Une voiture et de l'essence", "Le beurre et la margarine", "Le train et le bus", "Une console et des jeux"],
      correct: [0, 1, 4],
      explication: "Le beurre et la margarine, le train et le bus sont des <b>substituts</b> : l'un remplace l'autre.",
    },
    {
      id: "d6", type: "ouverte", sujet: "Déplacement de la demande", revoir: "deplacement-demande",
      q: "Expliquez la différence entre un <b>déplacement le long de la courbe</b> de demande et un <b>déplacement de la courbe</b>. Donnez un exemple pour chacun.",
      modele: "<b>Le long de la courbe</b> : seul le <b>prix du bien</b> change, et la quantité demandée réagit. Ex. : le prix des pizzas baisse, on en achète davantage. <br><b>Déplacement de la courbe</b> : un <b>autre facteur</b> change (revenu, population, mode, prix des substituts ou des compléments, anticipations) : on demande plus ou moins <b>au même prix</b>. Ex. : les salaires augmentent, on achète plus de pizzas même si leur prix ne change pas.",
    },
    {
      id: "d7", type: "choix", sujet: "Déplacement de la demande", revoir: "deplacement-demande",
      q: "On annonce que le prix des téléphones va fortement augmenter le mois prochain. Que se passe-t-il aujourd'hui ?",
      options: [
        "La demande augmente : la courbe se déplace vers la droite, beaucoup achètent maintenant",
        "La demande baisse : on attend la hausse",
        "Rien ne change avant la hausse",
        "L'offre disparaît",
      ],
      correct: [0],
    },

    /* ============ ÉLASTICITÉ ============ */
    {
      id: "l1", type: "trous", sujet: "Élasticité", revoir: "elasticite-demande",
      q: "Complétez.",
      texte: "L'élasticité mesure l'ampleur de la variation de la [[*quantité demandée|monnaie|production nationale]] par rapport à la variation du prix. Si une grande hausse de prix change peu la quantité, la demande est [[*peu élastique|très élastique]].",
    },
    {
      id: "l2", type: "tableau", sujet: "Élasticité", revoir: "elasticite-demande",
      q: "La demande de ce bien est-elle plutôt peu élastique ou très élastique ?",
      colonnes: ["Peu élastique", "Très élastique"],
      lignes: [
        { t: "L'assurance-maladie de base", c: [0] },
        { t: "Une marque de chips parmi d'autres", c: [1] },
        { t: "L'essence, à court terme", c: [0] },
        { t: "Un week-end à Barcelone", c: [1] },
        { t: "Un médicament vital", c: [0] },
      ],
    },
    {
      id: "l3", type: "choix", sujet: "Élasticité", revoir: "elasticite-demande",
      q: "Pourquoi l'État taxe-t-il volontiers le tabac et l'essence ?",
      options: [
        "Leur demande est peu élastique : même plus chers, on en achète presque autant, donc les recettes restent élevées",
        "Leur demande est très élastique : tout le monde arrête d'en acheter",
        "Parce que ce sont des biens libres",
        "Pour faire baisser leur prix",
      ],
      correct: [0],
      explication: "Ces taxes ont aussi un but <b>incitatif</b> : réduire un peu la consommation (ch. 47 et 42).",
    },
    {
      id: "l4", type: "vf", sujet: "Élasticité", revoir: "elasticite-offre",
      q: "Vrai ou faux ?",
      items: [
        { t: "Un bien qui a beaucoup de substituts a en général une demande très élastique.", v: true },
        { t: "L'offre de vin est très élastique, car un vignoble se plante en quelques jours.", v: false, note: "Planter un vignoble prend des années : l'offre est <b>peu élastique</b> à court terme." },
        { t: "Les biens indispensables ont une demande peu élastique.", v: true },
      ],
    },

    /* ============ 3. L'OFFRE ============ */
    {
      id: "o1", type: "trous", sujet: "L'offre", revoir: "offre",
      q: "Complétez.",
      texte: "L'offre est la quantité de biens que les [[*entreprises|consommateurs|ménages]] sont prêtes à vendre à un prix donné. Plus le prix est élevé, plus la quantité offerte est [[*élevée|basse]], car produire devient plus [[*rentable|cher|difficile]].",
    },
    {
      id: "o2", type: "choix", sujet: "L'offre", revoir: "offre",
      q: "Le prix des fraises double. Comment réagissent les producteurs, en principe ?",
      options: [
        "Ils veulent en vendre davantage : la quantité offerte augmente",
        "Ils en vendent moins",
        "Ils arrêtent de produire",
        "Rien ne change",
      ],
      correct: [0],
    },
    {
      id: "o3", type: "tableau", sujet: "Déplacement de l'offre", revoir: "deplacement-offre",
      q: "Plus ou moins d'offre pour le même prix ?",
      colonnes: ["Plus", "Moins"],
      lignes: [
        { t: "Une nouvelle machine permet de produire deux fois plus vite.", c: [0] },
        { t: "Une grêle détruit une partie des récoltes.", c: [1] },
        { t: "Le prix de l'électricité pour les usines explose.", c: [1] },
        { t: "Les matières premières deviennent moins chères.", c: [0] },
        { t: "Une grève paralyse les usines.", c: [1] },
      ],
    },
    {
      id: "o4", type: "ouverte", sujet: "Déplacement de l'offre", revoir: "deplacement-offre",
      q: "Une guerre détruit des usines dans un grand pays producteur de blé. Que se passe-t-il sur le marché mondial du blé ?",
      modele: "L'<b>offre</b> de blé diminue : la courbe d'offre se déplace vers la <b>gauche</b>. Au prix d'avant, il y a pénurie ; le prix d'équilibre <b>monte</b> et la quantité échangée baisse. Le pain et les produits à base de blé deviennent plus chers : c'est de l'inflation par les coûts (ch. 43).",
    },
    {
      id: "o5", type: "vf", sujet: "L'offre", revoir: "deplacement-offre",
      q: "Vrai ou faux ?",
      items: [
        { t: "Une hausse de la productivité déplace la courbe d'offre vers la droite.", v: true },
        { t: "Une hausse du prix du bien déplace toute la courbe d'offre.", v: false, note: "Le prix du bien fait <b>se déplacer le long</b> de la courbe ; ce sont les autres facteurs (coûts, climat, technique) qui déplacent la courbe." },
        { t: "Un mauvais climat peut réduire l'offre de produits agricoles.", v: true },
      ],
    },

    /* ============ 4. ÉQUILIBRE ============ */
    {
      id: "q1", type: "trous", sujet: "Équilibre", revoir: "equilibre",
      q: "Complétez.",
      texte: "Le prix d'équilibre se fixe à la rencontre de l'[[*offre|inflation|épargne]] et de la demande. Si le prix est plus haut, il y a un [[*excédent|pénurie]] : les vendeurs [[*baissent|montent]] leurs prix. Si le prix est plus bas, il y a une [[*pénurie|excédent]].",
    },
    {
      id: "q2", type: "tableau", sujet: "Équilibre", revoir: "equilibre",
      q: "Excédent ou pénurie ?",
      colonnes: ["Excédent", "Pénurie"],
      lignes: [
        { t: "Les billets d'un concert sont épuisés en 3 minutes, des milliers de fans attendent.", c: [1] },
        { t: "Un magasin a encore la moitié de ses manteaux d'hiver en mars.", c: [0] },
        { t: "Le prix est fixé au-dessus du prix d'équilibre.", c: [0] },
        { t: "Le prix est fixé au-dessous du prix d'équilibre.", c: [1] },
      ],
    },
    {
      id: "q3", type: "tableau", sujet: "Équilibre", revoir: "choc",
      q: "Comment évolue le prix d'équilibre ?",
      colonnes: ["Hausse", "Baisse"],
      lignes: [
        { t: "La demande augmente (offre inchangée).", c: [0] },
        { t: "L'offre augmente (demande inchangée).", c: [1] },
        { t: "La demande baisse (offre inchangée).", c: [1] },
        { t: "L'offre baisse (demande inchangée).", c: [0] },
      ],
    },
    {
      id: "q4", type: "ouverte", sujet: "Équilibre", revoir: "choc",
      q: "Un été très chaud : tout le monde veut des glaces. Expliquez ce qui arrive au prix et à la quantité de glaces vendues.",
      modele: "La <b>demande augmente</b> au même prix : la courbe de demande se déplace vers la droite. Au prix d'avant, il y a <b>pénurie</b> (files d'attente). Les vendeurs montent leurs prix : le nouveau prix d'équilibre est <b>plus élevé</b> et la quantité vendue est <b>plus grande</b>. Si cela arrive pour tous les biens à la fois, c'est l'inflation par la demande (ch. 43).",
    },
    {
      id: "q5", type: "choix", sujet: "Les obstacles", revoir: "realite",
      q: "Quels obstacles empêchent le marché d'atteindre l'équilibre ?",
      options: ["Le décalage de temps", "Le manque de transparence", "L'irrationalité des consommateurs", "Les interventions de l'État", "Le monopole", "Le nombre de jours dans l'année"],
      correct: [0, 1, 2, 3, 4],
    },
    {
      id: "q6", type: "tableau", sujet: "Les obstacles", revoir: "realite",
      q: "Quel obstacle à l'équilibre cet exemple illustre-t-il ?",
      colonnes: ["Temps", "Transparence", "Irrationalité", "État"],
      lignes: [
        { t: "On achète une paire de baskets hors de prix parce qu'une star la porte.", c: [2] },
        { t: "Il faut cinq ans pour qu'un nouveau vignoble produise du vin.", c: [0] },
        { t: "On ne sait pas qu'un magasin voisin vend le même produit moins cher.", c: [1] },
        { t: "Le loyer est plafonné par la loi.", c: [3] },
      ],
    },

    /* ============ 5. FORMES DE MARCHÉ ============ */
    {
      id: "f1", type: "tableau", sujet: "Formes de marché", revoir: "formes",
      q: "Quelle forme de marché ? (beaucoup d'acheteurs)",
      colonnes: ["Monopole", "Oligopole", "Concurrence parfaite"],
      lignes: [
        { t: "Trois opérateurs se partagent la téléphonie mobile.", c: [1] },
        { t: "Une seule entreprise peut vendre un nouveau médicament breveté.", c: [0] },
        { t: "Des dizaines de maraîchers vendent des salades au marché.", c: [2] },
        { t: "Quelques grands distributeurs dominent le commerce de détail.", c: [1] },
      ],
    },
    {
      id: "f2", type: "tableau", sujet: "Le monopole", revoir: "monopole",
      q: "Quel type de monopole ?",
      colonnes: ["Privé", "Public", "Régalien"],
      lignes: [
        { t: "L'armée", c: [2] },
        { t: "Une entreprise pharmaceutique protégée par un brevet", c: [0] },
        { t: "Le réseau d'eau de la commune", c: [1] },
        { t: "L'émission de la monnaie par la BNS", c: [2] },
        { t: "Le seul restaurant d'un village de montagne", c: [0] },
      ],
    },
    {
      id: "f3", type: "vf", sujet: "Formes de marché", revoir: "formes",
      q: "Vrai ou faux ?",
      items: [
        { t: "Un monopsone désigne un marché avec un seul acheteur.", v: true },
        { t: "En concurrence parfaite, il y a beaucoup de vendeurs et beaucoup d'acheteurs.", v: true },
        { t: "Un monopole a intérêt à baisser ses prix pour attirer des clients.", v: false, note: "Sans concurrent, le monopole peut fixer des prix <b>élevés</b> : les clients n'ont pas d'alternative." },
        { t: "Un oligopole compte un seul vendeur.", v: false, note: "Un oligopole compte <b>quelques</b> vendeurs." },
      ],
    },
    {
      id: "f4", type: "choix", sujet: "En Suisse", revoir: "suisse",
      q: "Quel est le rôle de la <b>Commission de la concurrence (COMCO)</b> ?",
      options: [
        "Faire respecter la loi sur les cartels et sanctionner les accords qui suppriment la concurrence",
        "Fixer le prix de tous les produits",
        "Fixer le taux directeur",
        "Organiser les élections",
      ],
      correct: [0],
    },
    {
      id: "f5", type: "ouverte", sujet: "En Suisse", revoir: "suisse",
      q: "Pourquoi un manque de concurrence est-il mauvais pour les consommateurs ? Faites le lien avec l'« îlot de cherté » (ch. 47).",
      modele: "Sans concurrence, les vendeurs n'ont pas besoin de baisser leurs prix ni d'améliorer leurs produits : les consommateurs paient <b>plus cher</b> et ont <b>moins de choix</b>. En Suisse, des marchés peu ouverts (cartels, importations parallèles difficiles) expliquent en partie pourquoi beaucoup de produits coûtent plus cher qu'à l'étranger : c'est l'<b>îlot de cherté</b>. La loi sur les cartels et la COMCO luttent contre ce problème.",
    },
    {
      id: "f6", type: "choix", sujet: "Le monopole", revoir: "monopole",
      q: "Pourquoi l'État accorde-t-il des <b>brevets</b>, qui créent des monopoles privés ?",
      options: [
        "Pour récompenser l'innovation : l'inventeur peut vendre seul son produit pendant un temps et rentabiliser sa recherche",
        "Pour faire baisser les prix immédiatement",
        "Pour supprimer la concurrence pour toujours",
        "Pour financer l'armée",
      ],
      correct: [0],
    },

    /* ============ 6. CONTRÔLE DES PRIX ============ */
    {
      id: "x1", type: "tableau", sujet: "Contrôle des prix", revoir: "controle",
      q: "Prix plafond ou prix plancher ?",
      colonnes: ["Plafond", "Plancher"],
      lignes: [
        { t: "Il protège surtout les consommateurs.", c: [0] },
        { t: "Il protège surtout les producteurs.", c: [1] },
        { t: "Son risque principal est la pénurie.", c: [0] },
        { t: "Son risque principal est la surproduction.", c: [1] },
        { t: "Un loyer maximum fixé par l'État", c: [0] },
        { t: "Un prix garanti pour le lait", c: [1] },
      ],
    },
    {
      id: "x2", type: "choix", sujet: "Contrôle des prix", revoir: "controle",
      q: "L'équilibre fixerait un loyer à 2000 fr. ; l'État le plafonne à 1500 fr. Que risque-t-il de se passer ?",
      options: [
        "Une pénurie de logements : beaucoup de demandeurs, peu de nouveaux logements",
        "Un excédent de logements vides",
        "Rien : le marché s'adapte immédiatement",
        "Les loyers montent à 2500 fr.",
      ],
      correct: [0],
    },
    {
      id: "x3", type: "choix", sujet: "Prix minimum", revoir: "plancher",
      q: "L'État garantit aux paysans un prix du lait supérieur au prix d'équilibre. Quelle conséquence ?",
      options: [
        "Une surproduction : l'État doit racheter ou subventionner l'excédent",
        "Une pénurie de lait",
        "Une baisse de la production",
        "Une baisse du prix payé aux paysans",
      ],
      correct: [0],
    },
    {
      id: "x4", type: "trous", sujet: "Contrôle des prix", revoir: "controle",
      q: "Complétez.",
      texte: "Un prix plafond se situe [[*sous|au-dessus de]] l'équilibre : la demande dépasse l'offre. Un prix plancher se situe [[*au-dessus de|sous]] l'équilibre : l'[[*offre|demande]] dépasse la [[*demande|offre]].",
    },
    {
      id: "x5", type: "ouverte", sujet: "Contrôle des prix", revoir: "controle",
      q: "Un parti propose de plafonner tous les loyers en ville de Fribourg. Donnez un avantage et un inconvénient de cette mesure.",
      modele: "<b>Avantage</b> : les locataires actuels paient moins ; les ménages modestes sont protégés contre des loyers jugés trop élevés. <br><b>Inconvénient</b> : au prix plafond, la demande dépasse l'offre ; les propriétaires construisent et rénovent moins, il devient très difficile de trouver un logement : <b>pénurie</b>. Il peut aussi apparaître un marché parallèle (reprises d'appartements payées en cachette).",
    },
    {
      id: "x6", type: "vf", sujet: "Contrôle des prix", revoir: "controle",
      q: "Vrai ou faux ?",
      items: [
        { t: "En contrôlant les prix, l'État empêche le prix d'atteindre l'équilibre.", v: true },
        { t: "Le Surveillant des prix (« Monsieur Prix ») surveille les prix là où la concurrence ne joue pas.", v: true },
        { t: "Un prix plancher provoque toujours une pénurie.", v: false, note: "Il provoque une <b>surproduction</b> (excédent)." },
      ],
    },
    {
      id: "x7", type: "tableau", sujet: "Contrôle des prix", revoir: "controle",
      q: "Le prix fixé par l'État provoque-t-il une pénurie ou un excédent ?",
      colonnes: ["Pénurie", "Excédent"],
      lignes: [
        { t: "Prix maximum fixé sous l'équilibre", c: [0] },
        { t: "Prix minimum fixé au-dessus de l'équilibre", c: [1] },
        { t: "Loyers plafonnés très bas", c: [0] },
        { t: "Prix garanti élevé pour le beurre", c: [1] },
      ],
    },
  ],
};
