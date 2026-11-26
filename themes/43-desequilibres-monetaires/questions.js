/* Banque de questions — Chapitre 43 : Déséquilibre des masses monétaires
   Pour ajouter une question : copier un bloc existant du même type et l'adapter.
   "revoir" = identifiant de la section de la théorie (voir la liste "sections"). */

window.THEME = {
  id: "eco-43-desequilibres-monetaires",
  titre: "Chapitre 43 · Déséquilibre des masses monétaires",
  theorie: "theorie.html",
  accueil: "../../index.html",
};

window.QUESTIONS = {
  sections: {
    monnaie: "La monnaie",
    fonctions: "Les fonctions de la monnaie",
    inflation: "L'inflation",
    causes: "Les causes de l'inflation",
    consequences: "Les conséquences de l'inflation",
    lutte: "Lutter contre l'inflation",
    deflation: "La déflation",
    stagflation: "La stagflation",
    ipc: "L'IPC et le panier-type",
    calculs: "Calculer avec l'IPC",
  },

  questions: [
    /* ============ 1. LA MONNAIE ============ */
    {
      id: "m1", type: "vf", sujet: "La monnaie", revoir: "monnaie",
      q: "Vrai ou faux ?",
      items: [
        { t: "Seule la BNS peut créer de la monnaie scripturale.", v: false, note: "Ce sont surtout les <b>banques commerciales</b> qui créent la monnaie scripturale, en accordant des crédits." },
        { t: "Les cartes de crédit, comme les virements, utilisent la monnaie fiduciaire.", v: false, note: "Elles utilisent la monnaie <b>scripturale</b> (inscrite sur des comptes)." },
        { t: "La monnaie scripturale est celle inscrite sur des comptes bancaires et postaux.", v: true },
        { t: "« Faire tourner la planche à billets », c'est à l'origine créer plus de monnaie fiduciaire.", v: true },
      ],
    },
    {
      id: "m2", type: "tableau", sujet: "La monnaie", revoir: "monnaie",
      q: "Monnaie fiduciaire ou scripturale ?",
      colonnes: ["Fiduciaire", "Scripturale"],
      lignes: [
        { t: "Un billet de 20 francs", c: [0] },
        { t: "Une pièce de 5 francs", c: [0] },
        { t: "Le solde d'un compte d'épargne", c: [1] },
        { t: "Un paiement avec TWINT", c: [1] },
        { t: "Un virement par e-banking", c: [1] },
        { t: "Un paiement par carte de débit", c: [1] },
      ],
      explication: "Fiduciaire = pièces et billets. Scripturale = monnaie inscrite sur des comptes, utilisée pour les paiements électroniques.",
    },
    {
      id: "m3", type: "choix", sujet: "La monnaie", revoir: "monnaie",
      q: "Quel système d'échange la monnaie a-t-elle remplacé ?",
      options: ["Le troc", "Le crédit", "L'épargne", "La bourse"],
      correct: [0],
      explication: "Avec le troc, il fallait trouver quelqu'un qui possède ce qu'on veut et qui veut ce qu'on possède. La monnaie supprime cette difficulté.",
    },
    {
      id: "m4", type: "choix", sujet: "Fonctions de la monnaie", revoir: "fonctions",
      q: "Quelles sont les fonctions de la monnaie ?",
      options: ["Moyen de paiement", "Étalon de valeur", "Réserve de valeur", "Régulateur de l'économie", "Facteur de production", "Garantie de l'emploi"],
      correct: [0, 1, 2, 3],
    },
    {
      id: "m5", type: "ouverte", sujet: "Fonctions de la monnaie", revoir: "fonctions",
      q: "La monnaie sert d'<b>étalon de valeur</b>. Qu'est-ce que cela signifie ? Illustrez par un exemple.",
      modele: "La monnaie permet de <b>mesurer et comparer</b> la valeur de tous les biens avec une même unité, le franc. <br><i>Exemple</i> : un vélo coûte 800 francs et un téléphone 400 francs ; on sait immédiatement que le vélo vaut deux fois plus. Sans monnaie, comment comparer un vélo et un sac de pommes de terre ?",
    },
    {
      id: "m6", type: "tableau", sujet: "Fonctions de la monnaie", revoir: "fonctions",
      q: "Quelle fonction de la monnaie est utilisée ?",
      colonnes: ["Paiement", "Étalon", "Réserve", "Régulateur"],
      lignes: [
        { t: "J'achète une glace avec une pièce de 5 francs.", c: [0] },
        { t: "Une montre coûte 300 francs, un sac 150 francs : la montre vaut le double.", c: [1] },
        { t: "Je mets 50 francs de côté chaque mois pour mes vacances.", c: [2] },
        { t: "La BNS modifie ses taux pour agir sur les prix.", c: [3] },
      ],
    },
    {
      id: "m7", type: "choix", sujet: "La monnaie", revoir: "fonctions",
      q: "Pourquoi une monnaie stable est-elle importante ?",
      options: [
        "Elle garantit un pouvoir d'achat constant et permet de planifier ses projets",
        "Elle permet aux prix d'augmenter rapidement",
        "Elle supprime le besoin d'épargner",
        "Elle permet à l'État d'imprimer plus de billets",
      ],
      correct: [0],
    },

    /* ============ 2. INFLATION ============ */
    {
      id: "i1", type: "choix", sujet: "L'inflation", revoir: "inflation",
      q: "Qu'est-ce que l'<b>inflation</b> ?",
      options: [
        "Une hausse générale et durable des prix",
        "La hausse du prix d'un seul produit",
        "Une baisse générale et durable des prix",
        "Une hausse des salaires",
      ],
      correct: [0],
      explication: "Avec l'inflation, la monnaie perd de sa valeur : on achète moins avec la même somme.",
    },
    {
      id: "i2", type: "vf", sujet: "L'inflation", revoir: "inflation",
      q: "Vrai ou faux ?",
      items: [
        { t: "On parle d'inflation lorsque le niveau général des prix augmente durablement.", v: true },
        { t: "L'inflation est dite « rampante » dès qu'elle dépasse 5 % par an.", v: false, note: "Rampante : entre 2 et 5 %. Au-delà de 5 %, on parle d'inflation <b>déclarée</b>." },
        { t: "L'indexation des salaires permet de maîtriser l'inflation.", v: false, note: "Au contraire, elle peut l'<b>entretenir</b> : c'est la spirale prix-salaires." },
        { t: "Si seul le prix de l'essence augmente, c'est déjà de l'inflation.", v: false, note: "L'inflation est une hausse <b>générale</b> des prix, pas celle d'un seul produit." },
      ],
    },
    {
      id: "i3", type: "tableau", sujet: "L'inflation", revoir: "inflation",
      q: "Comment qualifie-t-on chaque taux d'inflation annuel ?",
      colonnes: ["Normale", "Rampante", "Déclarée", "Galopante", "Hyper"],
      lignes: [
        { t: "1,5 %", c: [0] },
        { t: "3,5 %", c: [1] },
        { t: "7 %", c: [2] },
        { t: "25 %", c: [3] },
        { t: "300 %", c: [4] },
      ],
      explication: "Normale jusqu'à 2 % · rampante de 2 à 5 % · déclarée de 5 à 10 % · galopante au-delà de 10 % · hyperinflation au-delà de 100 % par an.",
    },
    {
      id: "i4", type: "choix", sujet: "L'inflation", revoir: "inflation",
      q: "Quel est l'objectif de la BNS en matière de prix ?",
      options: ["Une inflation entre 0 et 2 % par an", "Une inflation d'exactement 5 % par an", "Une baisse des prix de 2 % par an", "Aucun objectif chiffré"],
      correct: [0],
      explication: "La BNS assimile la stabilité des prix à une hausse de l'IPC de moins de 2 % par an, sans déflation.",
    },
    {
      id: "i6", type: "choix", sujet: "L'inflation", revoir: "inflation",
      q: "En janvier 1994, la Yougoslavie a connu une inflation de 313 millions de % sur un mois. Comment appelle-t-on ce phénomène ?",
      options: ["Une hyperinflation", "Une inflation galopante", "Une stagflation", "Une déflation"],
      correct: [0],
      explication: "Les prix doublaient environ toutes les 34 heures. La monnaie ne remplissait plus aucune de ses fonctions.",
    },

    /* ============ 3. CAUSES ============ */
    {
      id: "c1", type: "ouverte", sujet: "Causes de l'inflation", revoir: "causes",
      q: "Comme dans l'exemple « prix de l'électricité ↑ → coûts ↑ → prix ↑ », démontrez une inflation provoquée par une <b>hausse de la demande</b>.",
      modele: "Baisse des taux d'intérêt → les crédits sont moins chers → les ménages et les entreprises empruntent et <b>achètent davantage</b> → la demande dépasse l'offre → les vendeurs <b>augmentent leurs prix</b> = inflation. <br><i>Autres départs possibles</i> : forte immigration, optimisme des ménages, hausse des revenus, hausse des dépenses de l'État.",
    },
    {
      id: "c2", type: "tableau", sujet: "Causes de l'inflation", revoir: "causes",
      q: "De quel type d'inflation s'agit-il ?",
      colonnes: ["Demande", "Coûts", "Monnaie", "Importée"],
      lignes: [
        { t: "Le prix de l'électricité double pour les entreprises.", c: [1] },
        { t: "Forte immigration : plus de ménages font leurs achats.", c: [0] },
        { t: "La banque centrale crée massivement de la monnaie.", c: [2] },
        { t: "Le franc perd de la valeur face à l'euro : les produits importés coûtent plus cher.", c: [3] },
        { t: "Les ménages sont optimistes et dépensent davantage.", c: [0] },
        { t: "La hausse des loyers commerciaux est répercutée sur les prix de vente.", c: [1] },
      ],
    },
    {
      id: "c3", type: "trous", sujet: "Spirale prix-salaires", revoir: "causes",
      q: "Complétez la spirale prix-salaires.",
      texte: "Les prix augmentent → les salariés [[*revendiquent des hausses de salaire|épargnent davantage|changent d'employeur]] → les salaires sont [[*indexés|bloqués|baissés]] → les charges des entreprises [[*augmentent|diminuent|restent stables]] → les prix augmentent encore.",
    },
    {
      id: "c4", type: "choix", sujet: "Causes de l'inflation", revoir: "causes",
      q: "En 2022, l'inflation a atteint 2,8 % en Suisse contre 8,4 % dans la zone euro. Pourquoi la Suisse s'en est-elle mieux sortie ?",
      options: [
        "Le franc s'est renforcé : les produits importés coûtaient moins cher en francs",
        "L'électricité suisse vient surtout de l'hydraulique et du nucléaire, peu du gaz",
        "La BNS a relevé ses taux dès juin 2022",
        "La Suisse a bloqué tous les prix par décision politique",
      ],
      correct: [0, 1, 2],
    },
    {
      id: "c5", type: "choix", sujet: "Causes de l'inflation", revoir: "causes",
      q: "Qu'est-ce que l'<b>inflation importée</b> ?",
      options: [
        "Une hausse des prix due au renchérissement des produits venant de l'étranger, par exemple après une dévaluation",
        "Une inflation causée par l'immigration",
        "Une baisse des prix des produits étrangers",
        "Une hausse des prix des produits exportés",
      ],
      correct: [0],
    },
    {
      id: "c6", type: "choix", sujet: "Causes de l'inflation", revoir: "causes",
      q: "Sur le graphique de l'offre et de la demande, que se passe-t-il quand la demande augmente ?",
      options: [
        "La courbe de demande se déplace vers la droite et le prix d'équilibre monte",
        "La courbe d'offre se déplace vers la droite et le prix baisse",
        "Les deux courbes disparaissent",
        "Le prix d'équilibre baisse",
      ],
      correct: [0],
    },
    {
      id: "c7", type: "choix", sujet: "Causes de l'inflation", revoir: "causes",
      q: "Pourquoi « trop de monnaie » provoque-t-il de l'inflation ?",
      options: [
        "Il y a plus de monnaie pour la même quantité de biens : chaque franc vaut moins, les prix montent",
        "Les banques refusent de prêter",
        "Les entreprises produisent davantage",
        "Les salaires baissent",
      ],
      correct: [0],
      explication: "Il faut un équilibre entre la masse de biens et la masse monétaire.",
    },

    /* ============ 4. CONSÉQUENCES ============ */
    {
      id: "q1", type: "tableau", sujet: "Conséquences", revoir: "consequences",
      q: "En période d'inflation, qui gagne et qui perd ?",
      colonnes: ["Gagnant", "Perdant"],
      lignes: [
        { t: "Un débiteur qui rembourse un prêt", c: [0] },
        { t: "Un épargnant qui laisse son argent sur un compte", c: [1] },
        { t: "Un ménage dont le salaire n'est pas adapté", c: [1] },
        { t: "Une entreprise suisse qui exporte", c: [1] },
        { t: "Un importateur de produits étrangers", c: [0] },
      ],
      explication: "La dette et l'épargne perdent de leur valeur réelle. Les produits suisses deviennent plus chers face à la concurrence étrangère, les produits étrangers relativement moins chers.",
    },
    {
      id: "q2", type: "choix", sujet: "Conséquences", revoir: "consequences",
      q: "Pourquoi l'inflation profite-t-elle aux <b>débiteurs</b> ?",
      options: [
        "La valeur réelle de leur dette diminue : ils remboursent avec une monnaie qui vaut moins",
        "Les banques annulent leurs dettes",
        "Les taux d'intérêt deviennent négatifs automatiquement",
        "Ils paient moins d'impôts",
      ],
      correct: [0],
    },
    {
      id: "q3", type: "choix", sujet: "Conséquences", revoir: "consequences",
      q: "Quelle est la principale conséquence de l'inflation pour les ménages ?",
      options: ["Une perte de pouvoir d'achat", "Une hausse de l'épargne", "Une baisse des loyers", "Une baisse du chômage garantie"],
      correct: [0],
    },

    /* ============ 5. LUTTE ============ */
    {
      id: "l1", type: "trous", sujet: "Lutter contre l'inflation", revoir: "lutte",
      q: "Complétez : effet d'une hausse des taux d'intérêt sur l'inflation.",
      texte: "Hausse des taux → les crédits deviennent [[*plus chers|moins chers|gratuits]] → les ménages et entreprises [[*empruntent et dépensent moins|dépensent davantage|épargnent moins]] → la demande [[*diminue|augmente|ne change pas]] → [[*stabilisation|hausse]] des prix.",
    },
    {
      id: "l2", type: "tableau", sujet: "Lutter contre l'inflation", revoir: "lutte",
      q: "Politique restrictive (contre l'inflation) ou politique de relance (contre la déflation) ?",
      colonnes: ["Restrictive", "Relance"],
      lignes: [
        { t: "Hausse des taux d'intérêt", c: [0] },
        { t: "Baisse des impôts", c: [1] },
        { t: "Baisse des dépenses de l'État", c: [0] },
        { t: "Hausse des dépenses de l'État", c: [1] },
        { t: "Baisse des taux d'intérêt", c: [1] },
        { t: "Hausse des taxes", c: [0] },
      ],
    },
    {
      id: "l3", type: "tableau", sujet: "Lutter contre l'inflation", revoir: "lutte",
      q: "De quelle politique s'agit-il ?",
      colonnes: ["Monétaire", "Fiscale", "Budgétaire"],
      lignes: [
        { t: "La BNS relève son taux directeur.", c: [0] },
        { t: "La TVA augmente.", c: [1] },
        { t: "L'État reporte la construction de routes.", c: [2] },
        { t: "L'impôt sur le revenu baisse.", c: [1] },
        { t: "La BNS baisse son taux directeur.", c: [0] },
        { t: "L'État lance un programme d'investissements.", c: [2] },
      ],
      explication: "Monétaire = BNS, taux d'intérêt. Fiscale = impôts et taxes. Budgétaire = dépenses de l'État.",
    },
    {
      id: "l4", type: "choix", sujet: "Lutter contre l'inflation", revoir: "lutte",
      q: "Quelle institution fixe le taux directeur en Suisse ?",
      options: ["La Banque nationale suisse (BNS)", "Le Conseil fédéral", "Les banques cantonales", "L'Office fédéral de la statistique"],
      correct: [0],
    },
    {
      id: "l6", type: "choix", sujet: "Lutter contre l'inflation", revoir: "lutte",
      q: "Quel est le principal risque d'une politique restrictive ?",
      options: [
        "Freiner l'économie et augmenter le chômage",
        "Faire exploser les prix",
        "Rendre les crédits gratuits",
        "Augmenter les dépenses de l'État",
      ],
      correct: [0],
    },
    {
      id: "l7", type: "choix", sujet: "Lutter contre l'inflation", revoir: "lutte",
      q: "Pourquoi le <b>blocage des prix</b> est-il rarement utilisé ?",
      options: [
        "C'est une décision politique lourde et délicate à mettre en place",
        "Il est interdit par la BNS",
        "Il provoque toujours une hyperinflation",
        "Il est automatique en cas d'inflation",
      ],
      correct: [0],
    },

    /* ============ 6. DÉFLATION ============ */
    {
      id: "d1", type: "choix", sujet: "La déflation", revoir: "deflation",
      q: "Qu'est-ce que la <b>déflation</b> ?",
      options: ["Une baisse générale et durable des prix", "Une hausse des prix", "Une baisse des salaires seulement", "Une baisse de la valeur du franc"],
      correct: [0],
    },
    {
      id: "d2", type: "ouverte", sujet: "La déflation", revoir: "deflation",
      q: "Des prix qui baissent, c'est bien, non ? Expliquez pourquoi la déflation est dangereuse.",
      modele: "Les consommateurs <b>reportent leurs achats</b> en attendant des prix plus bas → les <b>ventes baissent</b> → les entreprises baissent les salaires et <b>licencient</b> → le chômage augmente → la demande baisse encore → les prix baissent encore. C'est une <b>spirale</b> difficile à arrêter.",
    },
    {
      id: "d3", type: "tableau", sujet: "Inflation ou déflation", revoir: "deflation",
      q: "Inflation ou déflation ?",
      colonnes: ["Inflation", "Déflation"],
      lignes: [
        { t: "Chômage bas ou en baisse", c: [0] },
        { t: "Provoquée par une politique budgétaire trop dépensière", c: [0] },
        { t: "Surchauffe de l'économie", c: [0] },
        { t: "Nécessite une politique de relance", c: [1] },
        { t: "Chômage élevé", c: [1] },
        { t: "Manque de monnaie et de demande", c: [1] },
        { t: "Se combat par une hausse des taux", c: [0] },
      ],
    },
    {
      id: "d4", type: "choix", sujet: "La déflation", revoir: "deflation",
      q: "Quelles mesures permettent de lutter contre la déflation ?",
      options: ["Baisser les taux d'intérêt", "Baisser les impôts", "Augmenter les dépenses de l'État", "Augmenter les taux d'intérêt", "Augmenter les taxes"],
      correct: [0, 1, 2],
      explication: "Il faut augmenter la masse monétaire et relancer la demande : c'est une politique de relance.",
    },
    {
      id: "d5", type: "choix", sujet: "La déflation", revoir: "deflation",
      q: "De 2015 à 2022, la BNS a appliqué des taux <b>négatifs</b> (−0,75 %). Pourquoi ?",
      options: [
        "Pour lutter contre un franc trop fort et éviter la déflation",
        "Pour lutter contre une forte inflation",
        "Pour encourager l'épargne",
        "Pour augmenter les recettes de l'État",
      ],
      correct: [0],
    },

    /* ============ 7. STAGFLATION ============ */
    {
      id: "s1", type: "choix", sujet: "La stagflation", revoir: "stagflation",
      q: "Qu'est-ce que la <b>stagflation</b> ?",
      options: [
        "Une économie au ralenti avec un chômage élevé ET une hausse des prix",
        "Une croissance forte avec des prix stables",
        "Une baisse des prix avec un chômage bas",
        "Une hausse des salaires sans hausse des prix",
      ],
      correct: [0],
      explication: "Stag(nation) + (in)flation : on cumule les inconvénients des deux.",
    },
    {
      id: "s2", type: "ouverte", sujet: "La stagflation", revoir: "stagflation",
      q: "Pourquoi la stagflation est-elle si difficile à combattre ?",
      modele: "Il faut <b>choisir</b> : lutter contre l'inflation avec une politique <b>restrictive</b> aggrave le chômage ; lutter contre le chômage avec une politique de <b>relance</b> aggrave l'inflation. Les remèdes habituels s'opposent.",
    },
    {
      id: "s3", type: "choix", sujet: "La stagflation", revoir: "stagflation",
      q: "Quel événement est l'exemple historique typique de stagflation ?",
      options: ["Les chocs pétroliers des années 1970", "La crise financière de 2008", "Le boom économique des années 1960", "La pandémie de 2020"],
      correct: [0],
    },

    /* ============ 8. IPC ============ */
    {
      id: "p1", type: "trous", sujet: "L'IPC", revoir: "ipc",
      q: "Que signifient ces sigles ?",
      texte: "OFS = [[*Office fédéral de la statistique|Office fédéral des salaires|Organe fédéral de surveillance]] <br>IPC = [[*Indice des prix à la consommation|Indice des produits courants|Impôt sur les prix de consommation]]",
    },
    {
      id: "p2", type: "ouverte", sujet: "L'IPC", revoir: "ipc",
      q: "Qu'est-ce que le <b>panier-type</b> ?",
      modele: "C'est un ensemble de biens et de services représentatifs de la consommation des ménages (logement, santé, transports, alimentation…). Chaque poste a un <b>poids</b> selon son importance dans le budget. L'OFS relève régulièrement leurs prix pour calculer l'<b>IPC</b>. Il est <b>révisé périodiquement</b> pour suivre l'évolution des habitudes.",
    },
    {
      id: "p3", type: "choix", sujet: "L'IPC", revoir: "ipc",
      q: "Quel est le poste le plus important du panier-type 2026 ?",
      options: ["Logement et énergie (25,6 %)", "Alimentation et boissons (10,3 %)", "Santé (17,4 %)", "Transports (10,7 %)"],
      correct: [0],
    },
    {
      id: "p4", type: "choix", sujet: "L'IPC", revoir: "ipc",
      q: "À quoi sert l'IPC ?",
      options: [
        "Calculer l'inflation",
        "Indexer les salaires, les rentes et les loyers",
        "Corriger des chiffres nominaux en chiffres réels",
        "Décider de la politique monétaire",
        "Fixer le prix des billets de train",
      ],
      correct: [0, 1, 2, 3],
    },
    {
      id: "p5", type: "choix", sujet: "L'IPC", revoir: "ipc",
      q: "Comment le contenu du panier-type a-t-il évolué depuis 1939 ?",
      options: [
        "La part de l'alimentation a fortement baissé, celle de la santé et des loisirs a augmenté",
        "Il n'a jamais changé",
        "La part de l'alimentation a fortement augmenté",
        "Seuls les transports ont été ajoutés",
      ],
      correct: [0],
      explication: "C'est la loi d'Engel vue au chapitre 11 : plus le revenu augmente, plus la part des besoins vitaux diminue.",
    },

    /* ============ 9. CALCULS ============ */
    {
      id: "k1", type: "choix", sujet: "Calculer avec l'IPC", revoir: "calculs",
      q: "L'IPC passe de 104,0 à 106,6 points en un an. Quel est le taux d'inflation ?",
      options: ["2,5 %", "2,6 %", "6,6 %", "4,0 %"],
      correct: [0],
      explication: "(106,6 − 104,0) ÷ 104,0 × 100 = 2,5 %. On divise par l'indice de <b>départ</b>, pas par 100.",
    },
    {
      id: "k2", type: "choix", sujet: "Calculer avec l'IPC", revoir: "calculs",
      q: "Entre 2018 et 2020, les salaires ont été indexés de 2 %. L'IPC est passé de 108,0 à 110,1 points. Les salariés sont-ils gagnants ?",
      options: [
        "Oui, de justesse : l'inflation est de 1,94 %, leur pouvoir d'achat augmente d'environ 0,06 %",
        "Non : l'inflation est de 2,1 %, ils perdent du pouvoir d'achat",
        "Oui, ils gagnent 2 % de pouvoir d'achat",
        "Impossible à dire",
      ],
      correct: [0],
      explication: "(110,1 − 108,0) ÷ 108,0 × 100 ≈ 1,94 %. Hausse de salaire 2 % − inflation 1,94 % ≈ +0,06 % : un gain minime.",
    },
    {
      id: "k3", type: "choix", sujet: "Calculer avec l'IPC", revoir: "calculs",
      q: "Votre salaire passe de 5000 à 5100 francs (+2 %), mais l'inflation est de 3 %. Votre salaire <b>réel</b>…",
      options: ["diminue d'environ 1 %", "augmente de 2 %", "augmente de 5 %", "ne change pas"],
      correct: [0],
      explication: "Salaire nominal +2 %, prix +3 % : avec votre salaire, vous achetez environ 1 % de moins qu'avant.",
    },
    {
      id: "k4", type: "choix", sujet: "Calculer avec l'IPC", revoir: "calculs",
      q: "Exemple fictif : IPC 2015 = 100,0 · 2018 = 101,5 · 2021 = 101,8 · 2024 = 107,0. Quelle période a connu la plus forte inflation ?",
      options: ["2021-2024 (+5,1 %)", "2015-2018 (+1,5 %)", "2018-2021 (+0,3 %)", "Toutes les périodes sont égales"],
      correct: [0],
      explication: "2015-2018 : 1,5 ÷ 100 = 1,5 % · 2018-2021 : 0,3 ÷ 101,5 ≈ 0,3 % · 2021-2024 : 5,2 ÷ 101,8 ≈ 5,1 %.",
    },
    {
      id: "k5", type: "ouverte", sujet: "Calculer avec l'IPC", revoir: "calculs",
      q: "Que veut dire « <b>indexation des salaires</b> » ?",
      modele: "C'est l'<b>adaptation des salaires à l'évolution des prix</b> (mesurée par l'IPC), pour que les salariés gardent le même <b>pouvoir d'achat</b>. Exemple : inflation de 2 % → salaires augmentés de 2 %.",
    },
    {
      id: "k6", type: "ouverte", sujet: "Calculer avec l'IPC", revoir: "calculs",
      q: "Un effet de l'indexation des salaires est la <b>progression à froid</b>. De quoi s'agit-il ?",
      modele: "L'impôt sur le revenu est <b>progressif</b>. Quand un salaire est indexé, il augmente en francs (nominal) et peut passer dans une <b>tranche d'impôt plus élevée</b>, alors que le pouvoir d'achat n'a pas augmenté. Le contribuable paie donc proportionnellement plus d'impôts sans être plus riche. En Suisse, la Confédération et les cantons doivent corriger cet effet en adaptant leurs barèmes.",
    },
    {
      id: "k7", type: "choix", sujet: "Calculer avec l'IPC", revoir: "calculs",
      q: "Quelle est la différence entre un salaire <b>nominal</b> et un salaire <b>réel</b> ?",
      options: [
        "Le nominal est le montant en francs ; le réel tient compte de l'inflation (ce qu'on peut acheter)",
        "Le nominal est le salaire brut ; le réel est le salaire net",
        "Le réel est le salaire de l'année prochaine",
        "Il n'y a aucune différence",
      ],
      correct: [0],
    },
  ],
};
