/* Banque de questions — Chapitre 65 : Commerce extérieur et balance des paiements
   Pour ajouter une question : copier un bloc existant du même type et l'adapter.
   "revoir" = identifiant de la section de la théorie (voir la liste "sections"). */

window.THEME = {
  id: "eco-65-commerce-exterieur",
  titre: "Chapitre 65 · Commerce extérieur et balance des paiements",
  theorie: "theorie.html",
  accueil: "../../index.html",
};

window.QUESTIONS = {
  sections: {
    raisons: "Pourquoi les pays échangent-ils ?",
    avantages: "Les avantages absolus et comparatifs",
    ricardo: "L'avantage comparatif de Ricardo",
    limites: "Les limites de la théorie de Ricardo",
    balance: "La balance des paiements",
    structure: "Les trois comptes",
    courantes: "La balance des transactions courantes",
    capitaux: "Le compte de capital",
    financier: "Le compte financier",
    exemple: "La balance suisse en chiffres",
    aujourdhui: "La balance suisse aujourd'hui",
    solde: "Excédent ou déficit ?",
    corrections: "Corriger un déficit",
    change: "Le prix du franc",
    influences: "Ce qui fait bouger le franc",
    "franc-fort": "Un franc fort : pour qui est-ce bon ?",
    systemes: "Change fixe ou flexible ?",
    bns: "La Suisse et la BNS",
  },

  questions: [
    /* ============ 1. RAISONS ============ */
    {
      id: "r1", type: "choix", sujet: "Pourquoi échanger ?", revoir: "raisons",
      q: "Quelles sont des raisons du commerce international ?",
      options: [
        "Les ressources naturelles sont inégalement réparties",
        "La spécialisation permet de produire à plus bas prix",
        "Les entreprises cherchent de nouveaux marchés",
        "Chaque pays peut tout produire lui-même au même coût",
      ],
      correct: [0, 1, 2],
    },
    {
      id: "r2", type: "vf", sujet: "Pourquoi échanger ?", revoir: "raisons",
      q: "Vrai ou faux ?",
      items: [
        { t: "La Suisse doit importer son pétrole et son café.", v: true },
        { t: "Produire en grande quantité fait en général baisser le coût de chaque unité.", v: true },
        { t: "Les produits chimiques et pharmaceutiques représentent une petite partie des exportations suisses.", v: false, note: "C'est <b>plus de la moitié</b> des exportations de marchandises (2025)." },
      ],
    },

    /* ============ 2. AVANTAGES ============ */
    {
      id: "a1", type: "trous", sujet: "Avantages absolus", revoir: "avantages",
      q: "Complétez.",
      texte: "Selon [[*Adam Smith|David Ricardo|Karl Marx]], chaque pays se spécialise dans le bien qu'il produit avec [[*moins|plus|autant]] de travail que l'autre : c'est l'avantage [[*absolu|comparatif|relatif]].",
    },
    {
      id: "a2", type: "choix", sujet: "Avantage comparatif", revoir: "ricardo",
      q: "La Suisse produit tout plus vite que le pays B. Selon Ricardo, que faut-il faire ?",
      options: [
        "Chacun se spécialise là où son avantage est le plus grand (ou son désavantage le plus petit), puis ils échangent",
        "La Suisse produit tout et n'échange rien",
        "Le pays B doit arrêter de produire",
        "Les deux pays produisent tout, pour ne dépendre de personne",
      ],
      correct: [0],
      explication: "Même un pays « moins bon partout » a un avantage comparatif : là où son retard est le plus faible.",
    },
    {
      id: "a3", type: "tableau", sujet: "Avantage absolu ou comparatif", revoir: "ricardo",
      q: "Heures pour produire 1 unité. Quel type d'avantage ?",
      colonnes: ["Absolu (Smith)", "Comparatif (Ricardo)"],
      lignes: [
        { t: "Pays A : fromage 2 h, tissu 6 h. Pays B : fromage 5 h, tissu 3 h.", c: [0] },
        { t: "Pays A : fromage 2 h, tissu 3 h. Pays B : fromage 8 h, tissu 4 h.", c: [1] },
        { t: "Pays A : vin 10 h, drap 4 h. Pays B : vin 4 h, drap 10 h.", c: [0] },
      ],
      explication: "Avantage absolu : chacun est meilleur dans un produit. Avantage comparatif : l'un est meilleur partout, l'autre est « le moins mauvais » dans un produit.",
    },
    {
      id: "a4", type: "choix", sujet: "Avantage comparatif", revoir: "ricardo",
      q: "Pays A : fromage 2 h, tissu 3 h. Pays B : fromage 8 h, tissu 4 h. Dans quoi le pays A doit-il se spécialiser ?",
      options: ["Le fromage", "Le tissu", "Les deux", "Aucun"],
      correct: [0],
      explication: "A est 4 fois plus rapide pour le fromage (2 h contre 8 h), mais seulement 1,3 fois pour le tissu (3 h contre 4 h). Son avantage est le plus grand pour le fromage ; B fera le tissu.",
    },
    {
      id: "a5", type: "ouverte", sujet: "Avantage comparatif", revoir: "ricardo",
      q: "Suisse : montre 10 h, vélo 20 h. Pays B : montre 40 h, vélo 30 h. Montrez par un calcul que la spécialisation est avantageuse.",
      modele: "<b>Sans échange</b>, chacun produit 1 montre et 1 vélo : 30 h en Suisse, 70 h dans le pays B → au total 2 montres et 2 vélos.<br><b>Avec spécialisation</b> : la Suisse consacre ses 30 h aux montres (avantage le plus grand) → 3 montres ; le pays B consacre ses 70 h aux vélos → 2,3 vélos.<br>Avec le <b>même travail</b>, on obtient plus de biens : l'échange profite aux deux.",
    },
    {
      id: "a6", type: "choix", sujet: "Limites de Ricardo", revoir: "limites",
      q: "De quoi la théorie de Ricardo ne tient-elle pas compte ?",
      options: [
        "Des coûts de transport",
        "Du chômage dans les branches abandonnées",
        "Des différences de valeur ajoutée entre les produits",
        "Des différences de productivité entre pays",
      ],
      correct: [0, 1, 2],
      explication: "Les différences de productivité sont justement au cœur de la théorie.",
    },
    {
      id: "a7", type: "vf", sujet: "Limites de Ricardo", revoir: "limites",
      q: "Vrai ou faux ?",
      items: [
        { t: "Le pays qui produit des biens à forte valeur ajoutée profite davantage de l'échange.", v: true },
        { t: "À l'époque de Ricardo, les capitaux circulaient aussi librement qu'aujourd'hui.", v: false, note: "Ils restaient au pays. Aujourd'hui, les entreprises peuvent <b>délocaliser</b>." },
        { t: "La théorie reste utile pour comprendre la logique du commerce international.", v: true },
      ],
    },

    /* ============ 3. BALANCE ============ */
    {
      id: "b1", type: "choix", sujet: "La balance des paiements", revoir: "balance",
      q: "Qu'est-ce que la balance des paiements ?",
      options: [
        "La comptabilité de toutes les transactions entre un pays et le reste du monde pendant une année",
        "Le budget de la Confédération",
        "La liste des importations de marchandises uniquement",
        "Le compte bancaire de la BNS",
      ],
      correct: [0],
    },
    {
      id: "b2", type: "tableau", sujet: "Les trois comptes", revoir: "structure",
      q: "Dans quel compte est enregistrée l'opération ?",
      colonnes: ["Transactions courantes", "Compte de capital", "Compte financier"],
      lignes: [
        { t: "Une entreprise suisse exporte des machines.", c: [0] },
        { t: "Une banque suisse achète des obligations américaines.", c: [2] },
        { t: "Une entreprise vend une marque à un groupe étranger.", c: [1] },
        { t: "Des touristes japonais dorment à Gruyères.", c: [0] },
        { t: "La BNS achète des euros.", c: [2] },
      ],
    },
    {
      id: "b3", type: "trous", sujet: "Les trois comptes", revoir: "structure",
      q: "Complétez l'équation.",
      texte: "Transactions courantes + compte de capital − [[*compte financier|balance commerciale|revenus primaires]] + écart statistique = [[*0|100|le PIB]].",
    },
    {
      id: "b4", type: "vf", sujet: "La balance des paiements", revoir: "structure",
      q: "Vrai ou faux ?",
      items: [
        { t: "En Suisse, la balance des paiements est établie par la BNS.", v: true },
        { t: "La balance des paiements dans son ensemble est toujours équilibrée.", v: true },
        { t: "L'écart statistique corrige les erreurs et les omissions.", v: true },
        { t: "Le compte de capital est la plus grande partie de la balance suisse.", v: false, note: "Il est <b>très petit</b>. Les grands montants sont dans les transactions courantes et le compte financier." },
      ],
    },

    /* ============ 4. TRANSACTIONS COURANTES ============ */
    {
      id: "t1", type: "tableau", sujet: "Transactions courantes", revoir: "courantes",
      q: "Pour la balance suisse : recette ou dépense ?",
      colonnes: ["Recette", "Dépense"],
      lignes: [
        { t: "Une horlogerie jurassienne vend des montres en Chine.", c: [0] },
        { t: "Une famille de Bulle passe ses vacances en Espagne.", c: [1] },
        { t: "Une entreprise genevoise verse le salaire d'une frontalière française.", c: [1] },
        { t: "Un investisseur suisse reçoit des dividendes d'Apple.", c: [0] },
        { t: "Des skieurs belges paient leur abonnement à Verbier.", c: [0] },
      ],
    },
    {
      id: "t2", type: "tableau", sujet: "Les quatre parties", revoir: "courantes",
      q: "Dans quelle partie de la balance des transactions courantes ?",
      colonnes: ["Marchandises", "Services", "Revenus primaires", "Revenus secondaires"],
      lignes: [
        { t: "Importation de voitures allemandes", c: [0] },
        { t: "Prime d'assurance payée à un assureur suisse par une entreprise italienne", c: [1] },
        { t: "Intérêts versés à un épargnant suisse par une banque française", c: [2] },
        { t: "Aide au développement versée par la Confédération", c: [3] },
        { t: "Billet d'avion acheté à une compagnie étrangère", c: [1] },
        { t: "Salaires des frontaliers", c: [2] },
      ],
    },
    {
      id: "t3", type: "choix", sujet: "Balance commerciale", revoir: "courantes",
      q: "Qu'appelle-t-on la balance commerciale ?",
      options: [
        "Le solde des exportations et des importations de marchandises",
        "Le solde des services",
        "Le solde de toute la balance des paiements",
        "Les réserves de devises de la BNS",
      ],
      correct: [0],
    },
    {
      id: "t4", type: "trous", sujet: "Les revenus", revoir: "courantes",
      q: "Complétez.",
      texte: "Les revenus [[*primaires|secondaires|courants]] sont les revenus du travail et du capital. Les revenus [[*secondaires|primaires|financiers]] sont des transferts sans contrepartie, comme les dons ou les rentes.",
    },
    {
      id: "t5", type: "ouverte", sujet: "Transactions courantes", revoir: "courantes",
      q: "Donnez un exemple de recette et un exemple de dépense pour la balance des services de la Suisse.",
      modele: "<b>Recette</b> : des touristes étrangers séjournent en Suisse ; une banque suisse gère la fortune d'un client étranger ; un assureur suisse assure une entreprise étrangère.<br><b>Dépense</b> : des Suisses partent en vacances à l'étranger ; une entreprise suisse paie un transporteur étranger ; un Suisse achète un billet de TGV.",
    },

    /* ============ 5. CAPITAUX ============ */
    {
      id: "k1", type: "choix", sujet: "Investissements directs", revoir: "financier",
      q: "Quand parle-t-on d'investissement direct ?",
      options: [
        "Quand on prend au moins 10 % du capital d'une entreprise (prise de contrôle) ou qu'on crée une usine à l'étranger",
        "Quand on achète quelques actions pour toucher un dividende",
        "Quand on verse un salaire à un frontalier",
        "Quand la BNS achète de l'or",
      ],
      correct: [0],
    },
    {
      id: "k2", type: "tableau", sujet: "Compte financier", revoir: "financier",
      q: "De quel type d'opération s'agit-il ?",
      colonnes: ["Investissement direct", "Portefeuille", "Autres", "Réserves BNS"],
      lignes: [
        { t: "Nestlé rachète toute une entreprise américaine.", c: [0] },
        { t: "Une caisse de pension suisse achète des actions japonaises pour leur rendement.", c: [1] },
        { t: "Une banque suisse accorde un crédit à une entreprise allemande.", c: [2] },
        { t: "La BNS achète des dollars.", c: [3] },
      ],
    },
    {
      id: "k3", type: "vf", sujet: "Qui achète quoi ?", revoir: "financier",
      q: "Vrai ou faux ?",
      items: [
        { t: "Quand des Suisses placent de l'argent à l'étranger, l'argent quitte la Suisse.", v: true },
        { t: "Quand un fonds étranger achète des actions Roche, l'argent quitte la Suisse.", v: false, note: "Il <b>entre</b> en Suisse : c'est un accroissement des passifs." },
        { t: "Un solde positif du compte financier signifie que la Suisse place plus à l'étranger que l'étranger chez elle.", v: true },
      ],
    },
    {
      id: "k4", type: "choix", sujet: "Compte de capital", revoir: "capitaux",
      q: "Quelle opération figure dans le compte de capital ?",
      options: ["Une entreprise suisse achète un brevet à l'étranger", "Une exportation de chocolat", "Un dividende versé à un Suisse", "Un crédit bancaire"],
      correct: [0],
    },

    /* ============ 6. EXEMPLE ============ */
    {
      id: "e1", type: "choix", sujet: "Calcul", revoir: "exemple",
      q: "Marchandises +52, services +19, revenus primaires +8, revenus secondaires −10 (milliards). Solde des transactions courantes ?",
      options: ["+69 milliards", "+89 milliards", "+71 milliards", "−69 milliards"],
      correct: [0],
      explication: "52 + 19 + 8 − 10 = 69.",
    },
    {
      id: "e2", type: "choix", sujet: "Calcul", revoir: "exemple",
      q: "Exportations de marchandises 313, importations 261 (milliards). Solde de la balance commerciale ?",
      options: ["+52 milliards", "−52 milliards", "+574 milliards", "+261 milliards"],
      correct: [0],
    },
    {
      id: "e3", type: "vf", sujet: "La Suisse aujourd'hui", revoir: "aujourdhui",
      q: "Vrai ou faux ?",
      items: [
        { t: "La balance des transactions courantes de la Suisse est excédentaire.", v: true },
        { t: "La Suisse possède plus à l'étranger qu'elle ne lui doit.", v: true, note: "Sa position extérieure nette est d'environ <b>966 milliards</b> de francs (fin 2025)." },
        { t: "La Suisse est un pays fortement endetté envers l'étranger.", v: false, note: "C'est un pays <b>créancier</b>." },
      ],
    },
    {
      id: "e4", type: "ouverte", sujet: "Où va l'excédent ?", revoir: "exemple",
      q: "La balance des transactions courantes de la Suisse est excédentaire. Pourquoi la balance des paiements est-elle quand même à zéro ?",
      modele: "L'argent gagné avec l'étranger ne disparaît pas : il est <b>placé à l'étranger</b> (achat de titres, investissements directs, devises de la BNS). Ces placements figurent dans le <b>compte financier</b> avec un montant équivalent. L'écart statistique corrige les différences restantes.",
    },

    /* ============ 7. SOLDE ============ */
    {
      id: "s1", type: "tableau", sujet: "Excédent ou déficit", revoir: "solde",
      q: "Excédent ou déficit des transactions courantes ?",
      colonnes: ["Excédent", "Déficit"],
      lignes: [
        { t: "Les exportations sont plus grandes que les importations.", c: [0] },
        { t: "Le pays doit emprunter à l'étranger.", c: [1] },
        { t: "Le pays accumule une fortune à l'étranger.", c: [0] },
        { t: "Les États-Unis, année après année", c: [1] },
        { t: "La Suisse, année après année", c: [0] },
      ],
    },
    {
      id: "s2", type: "choix", sujet: "Corriger un déficit", revoir: "corrections",
      q: "Quelles mesures peuvent réduire un déficit des transactions courantes ?",
      options: [
        "Introduire des droits de douane",
        "Dévaluer la monnaie",
        "Réduire la masse monétaire",
        "Augmenter fortement les importations",
      ],
      correct: [0, 1, 2],
    },
    {
      id: "s3", type: "ouverte", sujet: "Dévaluation", revoir: "corrections",
      q: "Expliquez comment une dévaluation peut réduire un déficit des transactions courantes.",
      modele: "La monnaie vaut moins : les <b>produits du pays deviennent meilleur marché</b> pour les étrangers → les <b>exportations augmentent</b>. En même temps, les produits étrangers coûtent plus cher → les <b>importations baissent</b>. Le déficit se réduit.",
    },
    {
      id: "s4", type: "vf", sujet: "Corriger un déficit", revoir: "corrections",
      q: "Vrai ou faux ?",
      items: [
        { t: "Des taux d'intérêt plus élevés attirent les investisseurs étrangers.", v: true },
        { t: "Le protectionnisme vise à freiner les importations.", v: true },
        { t: "Augmenter la masse monétaire réduit les importations.", v: false, note: "C'est l'inverse : il faut la <b>réduire</b> pour laisser moins d'argent disponible pour les importations." },
      ],
    },

    /* ============ 8. CHANGE ============ */
    {
      id: "c1", type: "trous", sujet: "Le marché des changes", revoir: "change",
      q: "Complétez.",
      texte: "Le prix d'une monnaie dans une autre est le [[*taux de change|taux d'intérêt|taux d'inflation]]. Dans un système de change [[*flexible|fixe|bloqué]], il dépend de l'offre et de la demande. Quand le franc vaut plus, on dit qu'il s'[[*apprécie|déprécie|dévalue]].",
    },
    {
      id: "c2", type: "choix", sujet: "Appréciation", revoir: "change",
      q: "Hier, 1 franc valait 1,05 euro. Aujourd'hui, il vaut 1,10 euro. Que s'est-il passé ?",
      options: ["Le franc s'est apprécié", "Le franc s'est déprécié", "Le franc a été dévalué", "Rien : c'est le même prix"],
      correct: [0],
    },
    {
      id: "c3", type: "tableau", sujet: "Ce qui fait bouger le franc", revoir: "influences",
      q: "Le franc va-t-il plutôt monter ou baisser ?",
      colonnes: ["Monter ↑", "Baisser ↓"],
      lignes: [
        { t: "Crise mondiale : les investisseurs cherchent une valeur refuge.", c: [0] },
        { t: "La BNS baisse ses taux d'intérêt, les autres pays non.", c: [1] },
        { t: "Les exportations suisses augmentent fortement.", c: [0] },
        { t: "Forte inflation en Suisse", c: [1] },
        { t: "Les Suisses achètent massivement des produits étrangers.", c: [1] },
      ],
    },
    {
      id: "c4", type: "ouverte", sujet: "Excédent et franc", revoir: "influences",
      q: "Expliquez pourquoi un excédent des transactions courantes fait monter le franc.",
      modele: "Les exportateurs suisses sont payés en <b>devises</b> (euros, dollars). Pour payer leurs salaires et leurs fournisseurs en Suisse, ils <b>vendent ces devises contre des francs</b>. La <b>demande de francs augmente</b> : son prix monte, le franc s'apprécie.",
    },
    {
      id: "c5", type: "tableau", sujet: "Franc fort", revoir: "franc-fort",
      q: "Le franc est très fort. Gagnant ou perdant ?",
      colonnes: ["Gagnant", "Perdant"],
      lignes: [
        { t: "Un fabricant de machines qui exporte 80 % de sa production", c: [1] },
        { t: "Une Fribourgeoise qui part en vacances en Italie", c: [0] },
        { t: "Un hôtel de montagne qui accueille surtout des Allemands", c: [1] },
        { t: "Un commerce qui importe des vélos de Taïwan", c: [0] },
      ],
    },
    {
      id: "c6", type: "vf", sujet: "Élasticité", revoir: "influences",
      q: "Vrai ou faux ?",
      items: [
        { t: "Si la demande de pétrole est peu élastique, une baisse du franc oblige à vendre encore plus de francs pour payer le pétrole.", v: true },
        { t: "Un franc fort fait plutôt monter l'inflation en Suisse.", v: false, note: "Il la <b>freine</b> : les produits importés deviennent meilleur marché." },
      ],
    },

    /* ============ 9. SYSTÈMES ============ */
    {
      id: "f1", type: "tableau", sujet: "Fixe ou flexible", revoir: "systemes",
      q: "Change fixe ou change flexible ?",
      colonnes: ["Fixe", "Flexible"],
      lignes: [
        { t: "Le prix de la monnaie est fixé par l'État ou la banque centrale.", c: [0] },
        { t: "Rééquilibrage automatique par l'offre et la demande", c: [1] },
        { t: "La banque centrale doit défendre le cours.", c: [0] },
        { t: "Risque de spéculation et de fortes variations", c: [1] },
        { t: "Le cours plancher de 1,20 franc pour 1 euro (2011-2015)", c: [0] },
      ],
    },
    {
      id: "f2", type: "choix", sujet: "La Suisse", revoir: "bns",
      q: "Quel système de change la Suisse pratique-t-elle ?",
      options: [
        "Un franc en principe flottant, avec des interventions de la BNS si nécessaire : une politique mixte",
        "Un change fixe à 1,20 franc pour 1 euro",
        "L'euro comme monnaie officielle",
        "Un change fixe sur le dollar",
      ],
      correct: [0],
    },
    {
      id: "f3", type: "choix", sujet: "Change fixe", revoir: "systemes",
      q: "Quel est le but d'un change fixe ?",
      options: [
        "Réduire l'incertitude pour les exportateurs et les importateurs",
        "Encourager la spéculation",
        "Supprimer la banque centrale",
        "Augmenter l'inflation",
      ],
      correct: [0],
    },
    {
      id: "f4", type: "ouverte", sujet: "La BNS", revoir: "bns",
      q: "Le franc monte trop vite. Comment la BNS peut-elle intervenir, et où cela apparaît-il dans la balance des paiements ?",
      modele: "La BNS <b>crée des francs</b> et les vend pour <b>acheter des devises</b> (euros, dollars). L'offre de francs augmente, ce qui freine sa hausse. Les devises achetées gonflent ses <b>réserves monétaires</b>, qui figurent dans le <b>compte financier</b>.",
    },
  ],
};
