/* Banque de questions — Chapitre 39 : Droit des sociétés
   Pour ajouter une question : copier un bloc existant du même type et l'adapter.
   "revoir" = identifiant de la section de la théorie (voir la liste "sections"). */

window.THEME = {
  id: "droit-39-droit-des-societes",
  titre: "Chapitre 39 · Droit des sociétés",
  theorie: "theorie.html",
  accueil: "../../index.html",
};

window.QUESTIONS = {
  sections: {
    formes: "Les principales formes d'entreprises",
    "choix-forme": "Sociétés de personnes ou de capitaux ?",
    registre: "Le registre du commerce",
    inscription: "Inscription obligatoire, facultative ou impossible",
    effets: "Les effets de l'inscription",
    raison: "La raison de commerce",
    formation: "Former la raison de commerce",
    intransmissibilite: "Le principe d'intransmissibilité",
    individuelle: "L'entreprise individuelle",
    simple: "La société simple",
    snc: "La société en nom collectif",
    sa: "La société anonyme",
    fondation: "Fonder une SA",
    liberation: "Le capital et sa libération",
    porteur: "Actions nominatives ou au porteur",
    organes: "Les organes de la SA",
    taches: "Qui fait quoi dans la SA ?",
    representation: "Qui peut engager la SA ?",
    droits: "Droits et devoir des actionnaires",
    creanciers: "La protection des créanciers",
    perte: "La perte de capital",
    surendettement: "Le surendettement",
    sarl: "La Sàrl",
    "sarl-organes": "Fondation et organes de la Sàrl",
    "sarl-droits": "Droits et devoir des associés",
    comparer: "Quelle forme choisir ?",
  },

  questions: [
    /* ============ 1. FORMES ============ */
    {
      id: "f1", type: "tableau", sujet: "Les formes", revoir: "formes",
      q: "À quelle catégorie appartient cette forme ?",
      colonnes: ["Entreprise individuelle", "Société de personnes", "Société de capitaux"],
      lignes: [
        { t: "SA", c: [2] },
        { t: "Société en nom collectif", c: [1] },
        { t: "Un plâtrier qui travaille seul à son compte", c: [0] },
        { t: "Sàrl", c: [2] },
        { t: "Société simple", c: [1] },
      ],
    },
    {
      id: "f2", type: "tableau", sujet: "Personnes ou capitaux", revoir: "choix-forme",
      q: "Avantage de la société de personnes ou de la société de capitaux ?",
      colonnes: ["Société de personnes", "Société de capitaux"],
      lignes: [
        { t: "Responsabilité personnelle limitée", c: [1] },
        { t: "Fondation simple et bon marché", c: [0] },
        { t: "Accès au marché des capitaux", c: [1] },
        { t: "Pas de double imposition", c: [0] },
        { t: "Facile à transmettre", c: [1] },
      ],
    },
    {
      id: "f3", type: "choix", sujet: "Personne morale", revoir: "formes",
      q: "Lesquelles sont des personnes morales ?",
      options: ["Une SA", "Une Sàrl", "Une association", "Une entreprise individuelle"],
      correct: [0, 1, 2],
      explication: "Dans l'entreprise individuelle, c'est le titulaire lui-même (personne physique) qui a les droits et les obligations.",
    },

    /* ============ 2. REGISTRE ============ */
    {
      id: "r1", type: "vf", sujet: "Le registre du commerce", revoir: "registre",
      q: "Vrai ou faux ?",
      items: [
        { t: "Le registre du commerce est public.", v: true },
        { t: "Il y a un registre du commerce par canton.", v: true },
        { t: "Les noms des actionnaires d'une SA sont inscrits au RC.", v: false, note: "Ils figurent dans le registre des actions de la société, <b>pas au RC</b> : c'est l'anonymat de la SA." },
        { t: "Tout changement (siège, but, signatures) doit être inscrit au RC.", v: true },
      ],
    },
    {
      id: "r2", type: "tableau", sujet: "Inscription au RC", revoir: "inscription",
      q: "L'inscription au RC est-elle obligatoire, facultative ou impossible ?",
      colonnes: ["Obligatoire", "Facultative", "Impossible"],
      lignes: [
        { t: "Un graphiste indépendant qui réalise 60'000 francs de chiffre d'affaires", c: [1] },
        { t: "Une Sàrl", c: [0] },
        { t: "Trois amis qui organisent ensemble un festival", c: [2] },
        { t: "Un garage individuel qui réalise 400'000 francs de chiffre d'affaires", c: [0] },
        { t: "Boulangerie Gaillard, snc", c: [0] },
      ],
    },
    {
      id: "r3", type: "choix", sujet: "Effets de l'inscription", revoir: "effets",
      q: "Quels sont les effets de l'inscription au RC ?",
      options: [
        "La poursuite par voie de faillite",
        "L'obligation de tenir une comptabilité",
        "La protection de la raison de commerce",
        "L'exonération d'impôts",
      ],
      correct: [0, 1, 2],
    },
    {
      id: "r4", type: "trous", sujet: "Effets de l'inscription", revoir: "effets",
      q: "Complétez.",
      texte: "Les pièces comptables doivent être conservées [[*10 ans|2 ans|50 ans]]. La raison d'une SA est protégée dans [[*toute la Suisse|la commune|le canton]], celle d'une entreprise individuelle seulement dans la [[*localité|Suisse entière|zone européenne]].",
    },

    /* ============ 3. RAISON DE COMMERCE ============ */
    {
      id: "n1", type: "tableau", sujet: "Raison de commerce", revoir: "raison",
      q: "Cette raison de commerce est-elle admissible ?",
      colonnes: ["Admissible", "Refusée"],
      lignes: [
        { t: "« Garage du Lac SA » pour une SA qui répare des voitures", c: [0] },
        { t: "« Fromagerie Bovet et Cie » pour une SA", c: [1] },
        { t: "« Institut fédéral de beauté Sàrl », sans lien avec la Confédération", c: [1] },
        { t: "« Clerc &amp; Rossier snc » pour une snc", c: [0] },
        { t: "« Boulangerie Pittet SA » pour une agence de voyages", c: [1] },
      ],
    },
    {
      id: "n2", type: "choix", sujet: "Former la raison", revoir: "formation",
      q: "Que doit contenir la raison de commerce d'une entreprise individuelle ?",
      options: ["Le nom de famille du titulaire", "La mention SA", "Le nom de la commune", "Le capital"],
      correct: [0],
    },
    {
      id: "n3", type: "vf", sujet: "Former la raison", revoir: "formation",
      q: "Vrai ou faux ?",
      items: [
        { t: "Une Sàrl peut choisir librement son nom, mais doit indiquer clairement sa forme juridique.", v: true },
        { t: "Un nom contenant « banque » nécessite l'autorisation de la FINMA.", v: true },
        { t: "Une snc doit obligatoirement contenir le nom de famille d'un associé.", v: false, note: "Les sociétés, snc comprise, choisissent leur nom <b>librement</b>, avec ou sans nom de famille." },
      ],
    },
    {
      id: "n4", type: "ouverte", sujet: "Intransmissibilité", revoir: "intransmissibilite",
      q: "Paul Schmid vend sa boulangerie individuelle « Boulangerie Schmid » à Léa Dupraz. Peut-elle garder ce nom ? Expliquez.",
      modele: "En principe <b>non</b> : selon le principe d'<b>intransmissibilité</b>, la raison d'une entreprise individuelle ne se transmet pas, car elle contient le nom du titulaire et tromperait les clients. Elle peut la reprendre avec l'<b>accord écrit</b> de Paul Schmid et une <b>mention de reprise</b> : « Boulangerie Schmid, successeur Dupraz ».",
    },
    {
      id: "n5", type: "choix", sujet: "Véracité", revoir: "raison",
      q: "Quelles règles découlent du principe de véracité ?",
      options: [
        "Ne pas tromper sur l'activité",
        "Indiquer clairement la forme juridique",
        "Respecter les mœurs",
        "Utiliser au moins trois mots",
      ],
      correct: [0, 1],
    },

    /* ============ 4-6. SOCIÉTÉS DE PERSONNES ============ */
    {
      id: "p1", type: "tableau", sujet: "Responsabilité", revoir: "snc",
      q: "Quelle forme de société ?",
      colonnes: ["Entreprise individuelle", "Société simple", "snc"],
      lignes: [
        { t: "Ne peut pas être inscrite au RC", c: [1] },
        { t: "Une seule personne", c: [0] },
        { t: "Responsabilité subsidiaire des associés", c: [2] },
        { t: "Inscription au RC déclarative", c: [2] },
        { t: "Inscription obligatoire dès 100'000 francs de chiffre d'affaires", c: [0] },
      ],
    },
    {
      id: "p2", type: "choix", sujet: "Subsidiaire", revoir: "snc",
      q: "La snc « Bapst &amp; Cotting Vins SNC » ne paie pas une facture. Que doit faire le créancier ?",
      options: [
        "D'abord mettre en faillite la snc; seulement après, se retourner contre les associés",
        "Poursuivre directement Mme Bapst, qui paiera tout",
        "Il ne peut rien faire : la responsabilité est limitée",
        "S'adresser à la Confédération",
      ],
      correct: [0],
      explication: "La responsabilité des associés de la snc est subsidiaire (d'abord la société), puis illimitée et solidaire (chaque associé répond de tout).",
    },
    {
      id: "p3", type: "trous", sujet: "Responsabilité", revoir: "simple",
      q: "Complétez.",
      texte: "Dans la société simple, chaque associé répond de [[*toutes les dettes|sa part des dettes|aucune dette]] : la responsabilité est [[*solidaire|limitée|subsidiaire]]. Les décisions importantes se prennent à l'[[*unanimité|majorité simple|initiative du plus âgé]].",
    },
    {
      id: "p4", type: "vf", sujet: "L'entreprise individuelle", revoir: "individuelle",
      q: "Vrai ou faux ?",
      items: [
        { t: "Dans l'entreprise individuelle, les biens privés du titulaire peuvent être saisis pour payer les dettes de l'entreprise.", v: true },
        { t: "La responsabilité est limitée au capital investi.", v: false, note: "Elle est <b>illimitée</b> : jusqu'au dernier centime." },
        { t: "La snc peut être formée par des personnes morales (p. ex. deux SA).", v: false, note: "La snc est formée uniquement de <b>personnes physiques</b> (CO 552). La société simple, elle, admet aussi des personnes morales." },
      ],
    },
    {
      id: "p5", type: "ouverte", sujet: "Solidaire", revoir: "simple",
      q: "Que signifie une responsabilité « solidaire » ? Donnez un exemple.",
      modele: "Chaque associé répond de <b>la totalité</b> des dettes, pas seulement de sa part. Le créancier peut réclamer toute la somme à l'associé de son choix ; celui-ci se retournera ensuite contre les autres.<br><i>Exemple</i> : trois amis organisent un festival et doivent 9000 francs au loueur de scène. Le loueur peut exiger les 9000 francs d'un seul d'entre eux.",
    },

    /* ============ 7. SA ============ */
    {
      id: "l1", type: "trous", sujet: "La SA", revoir: "sa",
      q: "Complétez.",
      texte: "Le capital-actions d'une SA est d'au moins [[*100'000|20'000|50'000]] francs. L'inscription au RC est [[*constitutive|déclarative|facultative]] : la SA n'existe qu'après son inscription. La responsabilité des actionnaires est [[*limitée|illimitée|solidaire]].",
    },
    {
      id: "l2", type: "choix", sujet: "Libération", revoir: "liberation",
      q: "Capital-actions de 200'000 francs, en actions nominatives. Quel montant minimal doit être versé à la fondation ?",
      options: ["50'000 francs", "40'000 francs", "200'000 francs", "20'000 francs"],
      correct: [0],
      explication: "20 % × 200'000 = 40'000, mais la loi exige au moins 50'000 francs au total.",
    },
    {
      id: "l3", type: "choix", sujet: "Libération", revoir: "liberation",
      q: "Capital-actions de 500'000 francs, en actions nominatives. Quel montant minimal doit être versé ?",
      options: ["100'000 francs", "50'000 francs", "500'000 francs", "250'000 francs"],
      correct: [0],
      explication: "20 % × 500'000 = 100'000, plus que le plancher de 50'000.",
    },
    {
      id: "l4", type: "choix", sujet: "Libération", revoir: "porteur",
      q: "Une SA cotée en bourse : capital de 600'000 francs, dont 300'000 en actions nominatives et 300'000 en actions au porteur. Minimum à verser ?",
      options: ["360'000 francs", "120'000 francs", "600'000 francs", "60'000 francs"],
      correct: [0],
      explication: "Nominatives : 20 % × 300'000 = 60'000. Au porteur : 100 % × 300'000 = 300'000. Total : 360'000.",
    },
    {
      id: "l5", type: "tableau", sujet: "Fonder une SA", revoir: "fondation",
      q: "Remettez les étapes dans l'ordre : quelle est la place de chaque étape ?",
      colonnes: ["1re", "2e", "3e", "4e"],
      lignes: [
        { t: "Inscription au RC", c: [3] },
        { t: "Rédaction des statuts", c: [0] },
        { t: "Acte authentique chez le notaire", c: [2] },
        { t: "Souscription des actions et désignation des organes", c: [1] },
      ],
    },
    {
      id: "l6", type: "vf", sujet: "Actions", revoir: "porteur",
      q: "Vrai ou faux ?",
      items: [
        { t: "Aujourd'hui, les actions sont généralement nominatives.", v: true },
        { t: "Toute SA peut librement émettre des actions au porteur.", v: false, note: "Depuis 2019, seulement les sociétés <b>cotées en bourse</b> ou si les actions sont des <b>titres intermédiés</b>." },
        { t: "La valeur nominale d'une action doit être supérieure à zéro.", v: true },
      ],
    },

    /* ============ 8. ORGANES ============ */
    {
      id: "o1", type: "tableau", sujet: "Organes de la SA", revoir: "taches",
      q: "Quel organe est compétent ?",
      colonnes: ["Assemblée générale", "Conseil d'administration", "Organe de révision"],
      lignes: [
        { t: "Modifier les statuts", c: [0] },
        { t: "Fixer la stratégie de l'entreprise", c: [1] },
        { t: "Vérifier les comptes et rédiger un rapport", c: [2] },
        { t: "Décider du dividende", c: [0] },
        { t: "Aviser le juge en cas de surendettement", c: [1] },
        { t: "Nommer le conseil d'administration", c: [0] },
      ],
    },
    {
      id: "o2", type: "vf", sujet: "Organes de la SA", revoir: "organes",
      q: "Vrai ou faux ?",
      items: [
        { t: "L'organe de révision doit être indépendant du conseil d'administration.", v: true },
        { t: "Une petite SA peut renoncer à l'organe de révision (opting-out), si tous les actionnaires sont d'accord.", v: true },
        { t: "Le conseil d'administration nomme l'organe de révision.", v: false, note: "C'est l'<b>assemblée générale</b>." },
      ],
    },
    {
      id: "o3", type: "choix", sujet: "Représentation", revoir: "representation",
      q: "À quoi sert la signature collective à deux ?",
      options: [
        "Éviter qu'une seule personne puisse engager la SA",
        "Doubler le capital de la SA",
        "Permettre aux actionnaires de voter deux fois",
        "Rendre l'inscription au RC facultative",
      ],
      correct: [0],
    },
    {
      id: "o4", type: "tableau", sujet: "Droits de l'actionnaire", revoir: "droits",
      q: "Droit social ou patrimonial ?",
      colonnes: ["Social", "Patrimonial"],
      lignes: [
        { t: "Droit de vote à l'AG", c: [0] },
        { t: "Dividende", c: [1] },
        { t: "Part de liquidation", c: [1] },
        { t: "Attaquer en justice une décision de l'AG", c: [0] },
        { t: "Droit préférentiel lors de l'émission de nouvelles actions", c: [1] },
      ],
    },
    {
      id: "o5", type: "choix", sujet: "Devoir de l'actionnaire", revoir: "droits",
      q: "Quel est le seul devoir de l'actionnaire ?",
      options: ["Libérer le montant souscrit", "Travailler dans la SA", "Payer les dettes de la SA", "Assister à toutes les AG"],
      correct: [0],
    },

    /* ============ 9. CRÉANCIERS ============ */
    {
      id: "c1", type: "tableau", sujet: "Quelle forme ?", revoir: "comparer",
      q: "Quelle forme conseilleriez-vous ?",
      colonnes: ["Entreprise individuelle", "snc", "Sàrl", "SA"],
      lignes: [
        { t: "Un menuisier qui démarre seul, avec peu de risques et peu d'argent", c: [0] },
        { t: "Deux frères qui reprennent ensemble la ferme familiale et veulent rester simples", c: [1] },
        { t: "Une jeune entrepreneuse qui veut limiter son risque avec 20'000 francs de capital", c: [2] },
        { t: "Une entreprise qui veut un jour entrer en bourse", c: [3] },
      ],
    },
    {
      id: "c2", type: "trous", sujet: "Réserves", revoir: "creanciers",
      q: "Complétez.",
      texte: "Chaque année, [[*5 %|50 %|1 %]] du bénéfice de la SA va à la réserve légale, jusqu'à ce que les réserves légales atteignent [[*50 %|5 %|100 %]] du capital-actions.",
    },
    {
      id: "c3", type: "tableau", sujet: "Perte de capital ou surendettement", revoir: "perte",
      q: "Capital-actions 400, réserves légales 100. Quelle situation ?",
      colonnes: ["Tout va bien", "Perte de capital", "Surendettement"],
      lignes: [
        { t: "Actifs 900, dettes 400", c: [0] },
        { t: "Actifs 600, dettes 450", c: [1] },
        { t: "Actifs 500, dettes 550", c: [2] },
      ],
      explication: "Seuil de la perte de capital : (400 + 100) ÷ 2 = 250. Actifs − dettes : 500 (ok), 150 (moins de 250 : perte de capital), −50 (dettes non couvertes : surendettement).",
    },
    {
      id: "c4", type: "choix", sujet: "Surendettement", revoir: "surendettement",
      q: "Les dettes d'une SA ne sont plus couvertes par ses actifs. Que doit faire le conseil d'administration ?",
      options: ["Aviser le juge", "Distribuer un dividende", "Attendre l'AG de l'année suivante", "Demander aux actionnaires de payer les dettes"],
      correct: [0],
    },
    {
      id: "c5", type: "ouverte", sujet: "Protection des créanciers", revoir: "creanciers",
      q: "Pourquoi la loi impose-t-elle à la SA des règles plus strictes qu'à une entreprise individuelle pour protéger les créanciers ?",
      modele: "Dans une SA, la responsabilité est <b>limitée</b> : les actionnaires ne risquent que leur apport, et les créanciers ne peuvent compter que sur les <b>biens de la société</b>. La loi exige donc une comptabilité stricte, des <b>réserves</b>, et une réaction rapide en cas de <b>perte de capital</b> ou de <b>surendettement</b>. Dans l'entreprise individuelle, le titulaire répond de tout avec ses biens privés.",
    },

    /* ============ 10. SÀRL ============ */
    {
      id: "s1", type: "tableau", sujet: "SA ou Sàrl", revoir: "sarl",
      q: "SA, Sàrl ou les deux ?",
      colonnes: ["SA", "Sàrl", "Les deux"],
      lignes: [
        { t: "Capital minimal de 20'000 francs", c: [1] },
        { t: "Capital libéré à 100 % dès la fondation", c: [1] },
        { t: "Inscription au RC constitutive", c: [2] },
        { t: "Les propriétaires restent anonymes au RC", c: [0] },
        { t: "Responsabilité limitée", c: [2] },
      ],
    },
    {
      id: "s2", type: "choix", sujet: "La Sàrl", revoir: "sarl",
      q: "Trois associées fondent une Sàrl avec le capital minimal. Combien doivent-elles verser au total à la fondation ?",
      options: ["20'000 francs", "4000 francs", "50'000 francs", "100'000 francs"],
      correct: [0],
      explication: "Le capital social de la Sàrl doit être libéré à 100 %.",
    },
    {
      id: "s3", type: "vf", sujet: "La Sàrl", revoir: "sarl-droits",
      q: "Vrai ou faux ?",
      items: [
        { t: "Les associés d'une Sàrl ont un devoir de fidélité envers la société.", v: true },
        { t: "Les statuts d'une Sàrl peuvent prévoir des versements supplémentaires.", v: true, note: "Au plus le <b>double</b> de la valeur des parts sociales." },
        { t: "La Sàrl n'a pas d'organe suprême.", v: false, note: "Son organe suprême est l'<b>assemblée des associés</b>." },
      ],
    },
    {
      id: "s4", type: "ouverte", sujet: "Quelle forme choisir ?", revoir: "comparer",
      q: "Sami veut ouvrir un food truck. Il hésite entre l'entreprise individuelle et la Sàrl. Donnez un avantage de chaque forme.",
      modele: "<b>Entreprise individuelle</b> : très simple et bon marché à fonder, pas de capital minimal, Sami décide seul.<br><b>Sàrl</b> : sa responsabilité est <b>limitée</b> au capital (20'000 francs) ; ses biens privés sont protégés si l'affaire tourne mal.",
    },
    /* ============ COMPLÉMENTS ============ */
    {
      id: "r5", type: "ouverte", sujet: "Poursuite par voie de faillite", revoir: "effets",
      q: "Quelle différence fait l'inscription au RC en cas de dettes impayées ?",
      modele: "Une entreprise inscrite est poursuivie par <b>voie de faillite</b> : tous ses biens sont liquidés pour payer l'ensemble des créanciers. Une personne non inscrite est poursuivie par <b>voie de saisie</b> : on saisit seulement les biens nécessaires pour payer le créancier qui poursuit (ch. 21).",
    },
    {
      id: "p6", type: "tableau", sujet: "Inscription déclarative ou constitutive", revoir: "snc",
      q: "L'inscription au RC est-elle déclarative ou constitutive ?",
      colonnes: ["Déclarative", "Constitutive"],
      lignes: [
        { t: "snc", c: [0] },
        { t: "SA", c: [1] },
        { t: "Sàrl", c: [1] },
      ],
      explication: "Déclarative : la société existe déjà, l'inscription le constate. Constitutive : la société naît avec l'inscription.",
    },
    {
      id: "o6", type: "vf", sujet: "Représentation", revoir: "representation",
      q: "Vrai ou faux ?",
      items: [
        { t: "Les directeurs et fondés de procuration sont inscrits au RC.", v: true },
        { t: "Un fondé de procuration peut vendre un immeuble de la SA sans pouvoir spécial.", v: false, note: "Il lui faut un <b>pouvoir spécial</b> pour vendre ou grever un immeuble." },
        { t: "Le conseil d'administration peut nommer des représentants.", v: true },
      ],
    },
    {
      id: "l7", type: "ouverte", sujet: "La SA", revoir: "sa",
      q: "Pourquoi dit-on que la société anonyme est « anonyme » ?",
      modele: "Le nom des <b>actionnaires</b> n'est pas inscrit au registre du commerce : le public ne sait pas à qui appartient la société. Seule la société connaît ses actionnaires nominatifs, grâce à son <b>registre des actions</b>.",
    },
    {
      id: "c6", type: "choix", sujet: "Perte de capital", revoir: "perte",
      q: "Que doit faire le conseil d'administration en cas de perte de capital ?",
      options: [
        "Prendre des mesures et, si nécessaire, convoquer l'AG pour proposer un assainissement",
        "Déclarer immédiatement la faillite",
        "Verser un dividende pour rassurer les actionnaires",
        "Ne rien faire tant que les dettes sont couvertes",
      ],
      correct: [0],
    },
  ],
};
