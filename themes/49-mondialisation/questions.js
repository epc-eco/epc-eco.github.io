/* Banque de questions — Chapitre 49 : Mondialisation
   Pour ajouter une question : copier un bloc existant du même type et l'adapter.
   "revoir" = identifiant de la section de la théorie (voir la liste "sections"). */

window.THEME = {
  id: "eco-49-mondialisation",
  titre: "Chapitre 49 · Mondialisation",
  theorie: "theorie.html",
  accueil: "../../index.html",
};

window.QUESTIONS = {
  sections: {
    definition: "La mondialisation",
    moteurs: "Pourquoi les échanges se développent",
    histoire: "Ce n'est pas nouveau…",
    principes: "Protectionnisme ou libre-échange ?",
    barrieres: "Les barrières au commerce",
    accords: "Les accords de libre-échange",
    suisse: "La Suisse et le libre-échange",
    zones: "Les grandes zones de libre-échange",
    bilan: "Gagnants et perdants",
    aspects: "Les aspects de la mondialisation",
    aujourdhui: "Le commerce mondial aujourd'hui",
    avantages: "Les avantages",
    inconvenients: "Les inconvénients",
    protectionnisme: "Le retour du protectionnisme",
    demondialisation: "Vers une démondialisation ?",
    limites: "Les limites planétaires",
    "croissance-verte": "La croissance verte",
    decroissance: "La décroissance",
    debat: "Un débat ouvert",
  },

  questions: [
    /* ============ 1. DÉFINITION ============ */
    {
      id: "m1", type: "trous", sujet: "Définition", revoir: "definition",
      q: "Complétez la définition.",
      texte: "La mondialisation est l'[[*augmentation|diminution|interdiction]], entre tous les pays, des flux de personnes, d'informations, de biens, de [[*services|salaires|impôts]] et de [[*capitaux|frontières|langues]].",
    },
    {
      id: "m2", type: "tableau", sujet: "Les flux", revoir: "definition",
      q: "Quel type de flux ?",
      colonnes: ["Personnes", "Biens", "Services", "Capitaux"],
      lignes: [
        { t: "Une banque genevoise gère la fortune d'un client canadien.", c: [2] },
        { t: "Un fonds américain achète des actions Nestlé.", c: [3] },
        { t: "Des bananes arrivent d'Équateur.", c: [1] },
        { t: "Une infirmière française travaille à l'hôpital de Genève.", c: [0] },
      ],
    },
    {
      id: "m3", type: "choix", sujet: "Pourquoi les échanges se développent", revoir: "moteurs",
      q: "Qu'est-ce qui a accéléré la mondialisation ?",
      options: [
        "Le progrès des transports (conteneur, avion)",
        "Le progrès des télécommunications (Internet)",
        "Les accords de libre-échange",
        "La hausse générale des droits de douane",
      ],
      correct: [0, 1, 2],
    },
    {
      id: "m4", type: "vf", sujet: "Pourquoi les échanges se développent", revoir: "moteurs",
      q: "Vrai ou faux ?",
      items: [
        { t: "Les premiers échanges sont nés d'une nécessité : les ressources sont inégalement réparties.", v: true },
        { t: "Le conteneur a fortement réduit le coût du transport maritime.", v: true },
        { t: "La mondialisation ne concerne que les marchandises.", v: false, note: "Elle concerne aussi les personnes, les informations, les services et les capitaux." },
      ],
    },

    /* ============ 2. HISTOIRE ============ */
    {
      id: "h1", type: "tableau", sujet: "Histoire", revoir: "histoire",
      q: "À quelle époque ?",
      colonnes: ["Antiquité", "XVe-XVIe s.", "XVIIe-XIXe s.", "Après 1945"],
      lignes: [
        { t: "Christophe Colomb atteint l'Amérique.", c: [1] },
        { t: "Le commerce triangulaire entre l'Europe, l'Afrique et l'Amérique", c: [2] },
        { t: "Création du GATT", c: [3] },
        { t: "La route de la soie et l'Empire romain", c: [0] },
      ],
    },
    {
      id: "h2", type: "choix", sujet: "Histoire", revoir: "histoire",
      q: "Quelle organisation remplace le GATT en 1995 ?",
      options: ["L'OMC", "Le FMI", "L'UE", "L'ONU"],
      correct: [0],
    },
    {
      id: "h3", type: "vf", sujet: "Histoire", revoir: "histoire",
      q: "Vrai ou faux ?",
      items: [
        { t: "La mondialisation est un phénomène tout récent, apparu avec Internet.", v: false, note: "Les échanges lointains existent depuis l'<b>Antiquité</b> ; ils se sont fortement accélérés depuis 1990." },
        { t: "La Chine est entrée à l'OMC en 2001.", v: true },
        { t: "Le commerce triangulaire reposait sur la traite des esclaves.", v: true },
      ],
    },

    /* ============ 3. PRINCIPES ============ */
    {
      id: "p1", type: "tableau", sujet: "Protectionnisme ou libre-échange", revoir: "principes",
      q: "Protectionnisme ou libre-échange ?",
      colonnes: ["Protectionnisme", "Libre-échange"],
      lignes: [
        { t: "Supprimer les obstacles aux échanges", c: [1] },
        { t: "Protéger l'économie locale contre la concurrence étrangère", c: [0] },
        { t: "Éviter la dépendance envers un autre pays", c: [0] },
        { t: "Croître grâce aux exportations", c: [1] },
        { t: "Signer un accord avec l'Inde pour supprimer des droits de douane", c: [1] },
      ],
    },
    {
      id: "p2", type: "tableau", sujet: "Les barrières", revoir: "barrieres",
      q: "Barrière tarifaire ou non tarifaire ?",
      colonnes: ["Tarifaire", "Non tarifaire"],
      lignes: [
        { t: "Un droit de douane de 15 % sur les montres", c: [0] },
        { t: "Au maximum 1000 tonnes de bœuf importé par an (quota)", c: [1] },
        { t: "Une norme de sécurité obligatoire pour les jouets", c: [1] },
        { t: "Une subvention versée aux paysans du pays", c: [1] },
        { t: "Une taxe sur la viande importée", c: [0] },
      ],
    },
    {
      id: "p3", type: "ouverte", sujet: "Protectionnisme", revoir: "principes",
      q: "Donnez deux raisons pour lesquelles un pays peut choisir le protectionnisme.",
      modele: "• <b>Protéger l'économie locale</b> et ses emplois contre une concurrence étrangère moins chère (p. ex. l'agriculture suisse).<br>• <b>Éviter la dépendance</b> envers un autre pays pour des biens essentiels (nourriture, médicaments, énergie).<br>• Laisser une jeune industrie se développer avant de l'exposer à la concurrence.",
    },
    {
      id: "p4", type: "vf", sujet: "Les barrières", revoir: "barrieres",
      q: "Vrai ou faux ?",
      items: [
        { t: "Depuis 2024, la Suisse ne perçoit plus de droits de douane sur les produits industriels.", v: true },
        { t: "La Suisse protège peu son agriculture.", v: false, note: "Elle la protège <b>fortement</b> (droits de douane, quotas, subventions)." },
        { t: "Une dévaluation de la monnaie peut servir de mesure protectionniste.", v: true, note: "Les produits importés deviennent plus chers, les exportations meilleur marché." },
      ],
    },

    /* ============ 4. ACCORDS ============ */
    {
      id: "o1", type: "choix", sujet: "L'OMC", revoir: "accords",
      q: "Quel est le rôle de l'OMC ?",
      options: [
        "Fixer des règles pour le commerce mondial et régler les conflits commerciaux",
        "Prêter de l'argent aux pays en difficulté de paiement",
        "Fixer le taux de change du franc",
        "Diriger l'Union européenne",
      ],
      correct: [0],
      explication: "Prêter aux pays en difficulté, c'est le rôle du FMI.",
    },
    {
      id: "o2", type: "tableau", sujet: "Les zones de libre-échange", revoir: "zones",
      q: "Sur quel continent se trouve cette zone ?",
      colonnes: ["Europe", "Amériques", "Asie"],
      lignes: [
        { t: "Mercosur", c: [1] },
        { t: "AELE", c: [0] },
        { t: "ASEAN", c: [2] },
        { t: "ACEUM (ex-ALENA)", c: [1] },
        { t: "RCEP", c: [2] },
      ],
    },
    {
      id: "o3", type: "vf", sujet: "La Suisse", revoir: "suisse",
      q: "Vrai ou faux ?",
      items: [
        { t: "La Suisse est membre de l'AELE.", v: true },
        { t: "La Suisse est membre de l'Union européenne.", v: false, note: "Ses relations avec l'UE reposent sur l'accord de libre-échange de 1972 et les <b>accords bilatéraux</b>." },
        { t: "L'accord de libre-échange avec l'Inde est en vigueur depuis le 1er octobre 2025.", v: true },
        { t: "L'OMC a son siège à Genève.", v: true },
      ],
    },
    {
      id: "o4", type: "ouverte", sujet: "La Suisse", revoir: "suisse",
      q: "Pourquoi les accords de libre-échange sont-ils particulièrement importants pour la Suisse ?",
      modele: "La Suisse est un <b>petit marché</b> (9 millions d'habitants) <b>sans matières premières</b>. Elle doit importer ses ressources et gagne environ <b>un franc sur deux à l'étranger</b>. Les accords lui ouvrent des marchés, suppriment des droits de douane et donnent de la sécurité juridique à ses exportateurs.",
    },

    /* ============ 5. ASPECTS ============ */
    {
      id: "x1", type: "choix", sujet: "Les aspects", revoir: "aspects",
      q: "Qu'est-ce qu'une délocalisation ?",
      options: [
        "Le transfert d'une production vers un pays où elle coûte moins cher",
        "Le rachat d'une entreprise par l'État",
        "La fermeture des frontières",
        "Un nouvel accord de libre-échange",
      ],
      correct: [0],
    },
    {
      id: "x2", type: "vf", sujet: "Les aspects", revoir: "aspects",
      q: "Vrai ou faux ?",
      items: [
        { t: "Certaines multinationales sont plus riches que des États.", v: true },
        { t: "La spécialisation des pays fait baisser les coûts de production.", v: true },
        { t: "Un téléphone est en général fabriqué entièrement dans un seul pays.", v: false, note: "Ses composants viennent de nombreux pays : c'est une <b>chaîne de valeur mondiale</b>." },
      ],
    },
    {
      id: "x3", type: "vf", sujet: "Le commerce mondial aujourd'hui", revoir: "aujourdhui",
      q: "Vrai ou faux ?",
      items: [
        { t: "En 2025, le commerce mondial de marchandises a progressé.", v: true },
        { t: "Les produits liés à l'intelligence artificielle ont fortement soutenu le commerce en 2025.", v: true },
        { t: "Les échanges entre pays du Sud progressent moins vite que la moyenne.", v: false, note: "Ils progressent <b>plus vite</b> : les échanges se déplacent vers l'Asie et le Sud." },
      ],
    },

    /* ============ 6. BILAN ============ */
    {
      id: "v1", type: "tableau", sujet: "Avantages ou inconvénients", revoir: "avantages",
      q: "Avantage ou inconvénient de la mondialisation ?",
      colonnes: ["Avantage", "Inconvénient"],
      lignes: [
        { t: "Recul de l'extrême pauvreté dans le monde", c: [0] },
        { t: "Les mêmes marques et les mêmes films partout", c: [1] },
        { t: "Le développement de l'Asie", c: [0] },
        { t: "Une usine ferme en Suisse et rouvre en Asie.", c: [1] },
        { t: "Des produits plus variés et moins chers", c: [0] },
        { t: "Un blocage de port en Chine prive l'Europe de pièces détachées.", c: [1] },
      ],
    },
    {
      id: "v2", type: "choix", sujet: "Les inconvénients", revoir: "inconvenients",
      q: "Qui a le moins profité de la mondialisation ?",
      options: ["Les pays les moins avancés (PMA)", "Les BRICS", "Les multinationales", "Les pays exportateurs comme la Suisse"],
      correct: [0],
    },
    {
      id: "v3", type: "ouverte", sujet: "Le bilan", revoir: "bilan",
      q: "Présentez deux avantages et deux inconvénients de la mondialisation.",
      modele: "<b>Avantages</b> : plus de prospérité et des produits moins chers ; décollage de l'Asie et recul de la pauvreté ; plus d'interdépendance, donc moins d'intérêt à la guerre.<br><b>Inconvénients</b> : inégalités croissantes, PMA oubliés ; atteintes à l'environnement et aux droits humains ; délocalisations ; uniformisation des cultures ; dépendance aux chaînes d'approvisionnement.",
    },
    {
      id: "v4", type: "vf", sujet: "Les inconvénients", revoir: "inconvenients",
      q: "Vrai ou faux ?",
      items: [
        { t: "La mondialisation peut délocaliser la pollution vers les pays pauvres.", v: true },
        { t: "Selon Oxfam, la fortune des milliardaires a augmenté en 2025.", v: true },
        { t: "La mondialisation a supprimé toute dépendance entre les pays.", v: false, note: "Au contraire, elle <b>renforce</b> la dépendance : une crise lointaine peut bloquer l'approvisionnement." },
      ],
    },

    /* ============ 7. PROTECTIONNISME ============ */
    {
      id: "d1", type: "choix", sujet: "Démondialisation", revoir: "demondialisation",
      q: "Que signifie le « reshoring » ?",
      options: [
        "Rapatrier une production dans son pays d'origine",
        "Délocaliser vers l'Asie",
        "Supprimer les droits de douane",
        "Acheter des actions étrangères",
      ],
      correct: [0],
    },
    {
      id: "d2", type: "vf", sujet: "Le retour du protectionnisme", revoir: "protectionnisme",
      q: "Vrai ou faux ?",
      items: [
        { t: "En août 2025, les États-Unis ont imposé 39 % de droits de douane sur les produits suisses.", v: true },
        { t: "En 2022, les mesures limitant le commerce étaient moins nombreuses qu'en 2019.", v: false, note: "Elles étaient environ <b>trois fois plus</b> nombreuses (FMI)." },
        { t: "Depuis 2008, le commerce mondial progresse beaucoup plus vite que le PIB.", v: false, note: "C'est la « <b>slowbalisation</b> » : il ne progresse plus plus vite que le PIB." },
      ],
    },
    {
      id: "d3", type: "ouverte", sujet: "Démondialisation", revoir: "demondialisation",
      q: "Pourquoi certaines entreprises rapprochent-elles aujourd'hui leur production de leur pays ?",
      modele: "Le Covid et les guerres ont montré la <b>fragilité des chaînes d'approvisionnement</b> lointaines. Les entreprises privilégient désormais la <b>sécurité d'approvisionnement</b> au prix le plus bas. Les tensions géopolitiques et les <b>droits de douane</b> les poussent aussi à produire chez elles ou chez des pays « amis ».",
    },
    {
      id: "d4", type: "choix", sujet: "Le retour du protectionnisme", revoir: "protectionnisme",
      q: "Quelles sont des formes de démondialisation ?",
      options: ["Le reshoring", "Le friend-shoring", "La division du monde en blocs rivaux", "La création de l'OMC"],
      correct: [0, 1, 2],
    },

    /* ============ 8. LIMITES ============ */
    {
      id: "l1", type: "vf", sujet: "Les limites planétaires", revoir: "limites",
      q: "Vrai ou faux ?",
      items: [
        { t: "Selon le Planetary Health Check 2025, 7 limites planétaires sur 9 sont dépassées.", v: true },
        { t: "Le climat fait partie des limites dépassées.", v: true },
        { t: "La couche d'ozone fait partie des limites dépassées.", v: false, note: "Elle fait partie des deux limites <b>encore sûres</b>, avec les aérosols." },
      ],
    },
    {
      id: "l2", type: "trous", sujet: "Croissance verte", revoir: "croissance-verte",
      q: "Complétez.",
      texte: "Le [[*découplage|protectionnisme|libre-échange]] consiste à produire plus tout en polluant [[*moins|plus|autant]]. Pour de nombreux chercheurs, il est beaucoup trop [[*lent|rapide|cher]] pour respecter l'Accord de Paris.",
    },
    {
      id: "l3", type: "tableau", sujet: "Décroissance", revoir: "decroissance",
      q: "Quelle piste de la décroissance ?",
      colonnes: ["Sobriété", "Relocaliser", "Partager", "Mesurer autrement"],
      lignes: [
        { t: "Faire réparer son téléphone plutôt que d'en racheter un", c: [0] },
        { t: "Acheter ses légumes au marché, chez le paysan voisin", c: [1] },
        { t: "Réduire le temps de travail de chacun", c: [2] },
        { t: "Suivre un indice de bien-être plutôt que le seul PIB", c: [3] },
      ],
    },
    {
      id: "l4", type: "choix", sujet: "Décroissance", revoir: "decroissance",
      q: "Selon ses défenseurs, où la décroissance doit-elle avoir lieu ?",
      options: ["Dans les pays riches", "Dans les pays les plus pauvres", "Partout de la même manière", "Uniquement en Chine"],
      correct: [0],
    },
    {
      id: "l5", type: "ouverte", sujet: "Un débat ouvert", revoir: "debat",
      q: "Donnez un argument pour et un argument contre l'idée que la décroissance est inévitable.",
      modele: "<b>Pour</b> : 7 limites planétaires sur 9 sont dépassées ; le découplage est beaucoup trop lent ; une croissance infinie dans un monde fini serait impossible.<br><b>Contre</b> : certains pays croissent en émettant moins (États-Unis 2005-2021 : PIB +32 %, CO₂ −17 %) ; investir environ 2,5 % du PIB mondial par an suffirait à décarboner ; la population suisse a rejeté l'initiative « limites planétaires » en 2025.",
    },
    {
      id: "l6", type: "choix", sujet: "Un débat ouvert", revoir: "debat",
      q: "Quel a été le résultat de l'initiative sur les limites planétaires, le 9 février 2025 ?",
      options: ["Rejetée par près de 70 % de non", "Acceptée par 55 % de oui", "Acceptée de justesse", "Elle n'a pas été soumise au vote"],
      correct: [0],
    },
    /* ============ COMPLÉMENTS ============ */
    {
      id: "m5", type: "ouverte", sujet: "Pourquoi les échanges se développent", revoir: "moteurs",
      q: "Expliquez pourquoi les échanges internationaux ont d'abord été une nécessité, puis se sont accélérés.",
      modele: "<b>Nécessité</b> : les ressources et les climats sont inégalement répartis ; aucun pays ne peut tout produire (la Suisse n'a ni pétrole ni café).<br><b>Accélération</b> : progrès des <b>transports</b> (conteneur, avion), des <b>télécommunications</b> (Internet) et <b>accords de libre-échange</b> qui suppriment les obstacles.",
    },
    {
      id: "p5", type: "choix", sujet: "Les barrières", revoir: "barrieres",
      q: "Qu'est-ce qu'un quota d'importation ?",
      options: [
        "Une quantité maximale d'un produit qui peut être importée",
        "Une taxe sur les produits importés",
        "Une aide de l'État aux exportateurs",
        "Un accord entre deux pays",
      ],
      correct: [0],
      explication: "Le quota est une barrière non tarifaire ; la taxe est une barrière tarifaire (droit de douane).",
    },
    {
      id: "o5", type: "choix", sujet: "L'OMC", revoir: "accords",
      q: "Un membre de l'OMC baisse ses droits de douane pour un autre membre. Que doit-il faire selon les règles de l'OMC ?",
      options: [
        "Accorder le même avantage à tous les autres membres",
        "Rien de plus : c'est une affaire entre deux pays",
        "Demander l'autorisation du FMI",
        "Augmenter ses droits de douane pour les autres",
      ],
      correct: [0],
      explication: "C'est le principe de l'égalité de traitement (clause de la nation la plus favorisée).",
    },
    {
      id: "o6", type: "tableau", sujet: "OMC ou FMI", revoir: "accords",
      q: "OMC ou FMI ?",
      colonnes: ["OMC", "FMI"],
      lignes: [
        { t: "Règle un conflit commercial entre deux pays", c: [0] },
        { t: "Prête de l'argent à un pays qui ne peut plus payer ses importations", c: [1] },
        { t: "Siège à Genève", c: [0] },
        { t: "Veille à la stabilité des monnaies", c: [1] },
      ],
    },
    {
      id: "x4", type: "ouverte", sujet: "Les aspects", revoir: "aspects",
      q: "Expliquez, avec l'exemple d'un téléphone, ce qu'est une chaîne de valeur mondiale.",
      modele: "La fabrication est <b>découpée en étapes</b> réalisées dans différents pays, là où c'est le plus avantageux : conception aux États-Unis, puces à Taïwan, écran en Corée, assemblage en Chine ou en Inde, vente dans le monde entier. Chaque pays se <b>spécialise</b> dans une étape.",
    },
    {
      id: "v5", type: "choix", sujet: "Les avantages", revoir: "avantages",
      q: "Quels pays ont le plus profité de la mondialisation depuis 1990 ?",
      options: ["Les pays émergents d'Asie, comme la Chine et l'Inde", "Les pays les moins avancés (PMA)", "Aucun pays", "Uniquement la Suisse"],
      correct: [0],
    },
    {
      id: "d5", type: "tableau", sujet: "Démondialisation", revoir: "demondialisation",
      q: "Reshoring ou friend-shoring ?",
      colonnes: ["Reshoring", "Friend-shoring"],
      lignes: [
        { t: "Un fabricant suisse rapatrie sa production de Chine dans le Jura.", c: [0] },
        { t: "Une entreprise américaine déplace son usine de Chine au Mexique, pays allié.", c: [1] },
        { t: "Une entreprise européenne quitte la Chine pour la Pologne, membre de l'UE.", c: [1] },
      ],
    },
    {
      id: "l7", type: "vf", sujet: "La décroissance", revoir: "decroissance",
      q: "Vrai ou faux ?",
      items: [
        { t: "La décroissance vise à réduire la production et la consommation des pays riches.", v: true },
        { t: "Les partisans de la décroissance veulent mesurer le bien-être, pas seulement le PIB.", v: true },
        { t: "La décroissance consiste à provoquer une récession brutale et non planifiée.", v: false, note: "Ses défenseurs parlent d'une réduction <b>planifiée et démocratique</b>, qui préserve le bien-être." },
      ],
    },
  ],
};
