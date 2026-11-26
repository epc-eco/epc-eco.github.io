/* Banque de questions — Chapitre 48 : Politique fiscale et monétaire
   Pour ajouter une question : copier un bloc existant du même type et l'adapter.
   "revoir" = identifiant de la section de la théorie (voir la liste "sections"). */

window.THEME = {
  id: "eco-48-politique-fiscale-et-monetaire",
  titre: "Chapitre 48 · Politique fiscale et monétaire",
  theorie: "theorie.html",
  accueil: "../../index.html",
};

window.QUESTIONS = {
  sections: {
    "fil-rouge": "Le fil rouge des chapitres 43 à 48",
    histoire: "Du troc à la monnaie",
    monnaie: "Formes de la monnaie",
    fonctions: "Les fonctions de la monnaie",
    agregats: "Les agrégats monétaires",
    valeur: "La valeur de la monnaie",
    bns: "La Banque nationale suisse",
    creation: "La création de monnaie",
    monetaire: "La politique monétaire",
    instruments: "Les instruments de la BNS",
    impacts: "Les effets d'une décision de la BNS",
    fiscale: "La politique fiscale",
    systeme: "Le système fiscal suisse",
    bilan: "Bilan : qui fait quoi ?",
  },

  questions: [
    /* ============ 0. FIL ROUGE ============ */
    {
      id: "z1", type: "choix", sujet: "Fil rouge", revoir: "fil-rouge",
      q: "Le chapitre 48 présente surtout…",
      options: [
        "les instruments de la BNS et de l'État pour atteindre les objectifs du chapitre 47",
        "l'histoire des chocs pétroliers",
        "les quatre phases du cycle conjoncturel",
        "les secteurs économiques",
      ],
      correct: [0],
    },

    /* ============ 1. DU TROC À LA MONNAIE ============ */
    {
      id: "h1", type: "choix", sujet: "Le troc", revoir: "histoire",
      q: "Pourquoi le troc est-il difficile à appliquer ?",
      options: [
        "Il faut trouver quelqu'un qui possède ce qu'on veut et qui veut ce qu'on possède",
        "Il est interdit par la loi",
        "Les marchandises n'ont aucune valeur",
        "Il nécessite une carte bancaire",
      ],
      correct: [0],
      explication: "Il est aussi difficile de comparer la valeur de biens très différents : la monnaie sert d'étalon de valeur.",
    },
    {
      id: "h2", type: "choix", sujet: "La monnaie marchande", revoir: "histoire",
      q: "Quelles qualités un bien doit-il avoir pour servir de monnaie ?",
      options: ["Se conserver", "Être rare, avec une valeur reconnue", "Être facile à transporter", "Être divisible", "Être périssable", "Être très lourd"],
      correct: [0, 1, 2, 3],
    },
    {
      id: "h3", type: "trous", sujet: "Histoire de la monnaie", revoir: "histoire",
      q: "Complétez la chronologie.",
      texte: "VIIe siècle av. J.-C. : premières [[*pièces|cartes|actions]] de métal. XVIIe siècle : banquiers et orfèvres émettent des [[*reconnaissances de dettes|pièces d'or|chèques électroniques]], ancêtres des billets. [[*1971|1871|2001]] : le dollar n'est plus convertible en or.",
    },
    {
      id: "h4", type: "vf", sujet: "Histoire de la monnaie", revoir: "histoire",
      q: "Vrai ou faux ?",
      items: [
        { t: "Le sel, le bétail et les coquillages ont servi de monnaie.", v: true },
        { t: "Depuis 1971, la valeur du dollar repose sur une quantité fixe d'or.", v: false, note: "C'est l'inverse : depuis 1971, le dollar n'est plus convertible en or. La monnaie repose sur la <b>confiance</b>." },
        { t: "Le troc a complètement disparu aujourd'hui.", v: false, note: "Il revient à petite échelle : bourses d'échange, services entre voisins." },
      ],
    },

    /* ============ 2. FORMES ET FONCTIONS ============ */
    {
      id: "m1", type: "tableau", sujet: "Formes de la monnaie", revoir: "monnaie",
      q: "Monnaie fiduciaire ou scripturale ?",
      colonnes: ["Fiduciaire", "Scripturale"],
      lignes: [
        { t: "Vient du latin <i>fiducia</i>, la confiance", c: [0] },
        { t: "Vient du latin <i>scriptura</i>, l'écriture", c: [1] },
        { t: "Un paiement par TWINT", c: [1] },
        { t: "Une pièce de 2 francs", c: [0] },
        { t: "Multipliée par les banques commerciales", c: [1] },
      ],
    },
    {
      id: "m2", type: "choix", sujet: "Formes de la monnaie", revoir: "monnaie",
      q: "Qui émet les billets de banque en Suisse ?",
      options: ["La Banque nationale suisse (BNS)", "Les banques cantonales", "UBS", "Le Conseil fédéral"],
      correct: [0],
      explication: "Les pièces sont frappées par Swissmint pour la Confédération.",
    },
    {
      id: "m3", type: "tableau", sujet: "Fonctions de la monnaie", revoir: "fonctions",
      q: "Quelle fonction de la monnaie est utilisée ?",
      colonnes: ["Paiement", "Étalon", "Réserve", "Régulation"],
      lignes: [
        { t: "Je paie mon abonnement de train avec ma carte.", c: [0] },
        { t: "Je compare le prix de deux scooters.", c: [1] },
        { t: "J'économise pour passer mon permis de conduire.", c: [2] },
        { t: "La BNS baisse son taux directeur.", c: [3] },
      ],
    },
    {
      id: "m4", type: "vf", sujet: "Comment payons-nous ?", revoir: "monnaie",
      q: "Vrai ou faux ?",
      items: [
        { t: "Aujourd'hui, la majorité des paiements en Suisse se fait encore en espèces.", v: false, note: "Seulement environ <b>23 %</b> (70 % en 2017)." },
        { t: "Plus de 70 % des paiements se font par carte ou application.", v: true },
        { t: "Une grande majorité de la population veut supprimer l'argent liquide.", v: false, note: "Seulement <b>2 %</b> le souhaitent." },
        { t: "La monnaie scripturale domine aujourd'hui.", v: true },
      ],
    },

    /* ============ 3. AGRÉGATS ============ */
    {
      id: "a1", type: "choix", sujet: "Les agrégats", revoir: "agregats",
      q: "Que contient <b>M0</b>, la base monétaire ?",
      options: [
        "Les billets en circulation et les comptes de virement des banques à la BNS",
        "Les dépôts à terme des ménages",
        "Toutes les actions cotées en bourse",
        "Les dépôts d'épargne seulement",
      ],
      correct: [0],
      explication: "M0 est la monnaie créée par la BNS elle-même : on l'appelle aussi monnaie centrale.",
    },
    {
      id: "a2", type: "tableau", sujet: "Les agrégats", revoir: "agregats",
      q: "Dans quel agrégat ce montant apparaît-il pour la première fois ?",
      colonnes: ["M1", "M2", "M3"],
      lignes: [
        { t: "Les billets dans votre porte-monnaie", c: [0] },
        { t: "Votre compte salaire (dépôt à vue)", c: [0] },
        { t: "Votre compte d'épargne", c: [1] },
        { t: "Un dépôt bloqué pendant 12 mois", c: [2] },
      ],
      explication: "M1 = billets et pièces + dépôts à vue + comptes de transaction. M2 = M1 + épargne. M3 = M2 + dépôts à terme.",
    },
    {
      id: "a3", type: "trous", sujet: "Les agrégats", revoir: "agregats",
      q: "Complétez.",
      texte: "M2 = M1 + les dépôts d'[[*épargne|or|actions]]. M3 = M2 + les dépôts à [[*terme|vue|domicile]]. Plus on passe de M1 à M3, moins l'argent est [[*liquide|cher|rare]].",
    },
    {
      id: "a4", type: "vf", sujet: "Les agrégats", revoir: "agregats",
      q: "Vrai ou faux ?",
      items: [
        { t: "M3 est le plus grand des agrégats.", v: true, note: "Il contient M2, qui contient lui-même M1." },
        { t: "Un billet est un actif très liquide.", v: true },
        { t: "M3 a été multiplié par environ 4,8 depuis 1985.", v: true },
        { t: "La base monétaire (M0) n'a presque pas changé depuis 2008.", v: false, note: "Elle a <b>explosé</b> avec les achats de devises de la BNS pour freiner la hausse du franc." },
      ],
    },
    {
      id: "a5", type: "choix", sujet: "Les agrégats", revoir: "agregats",
      q: "Pourquoi la base monétaire (M0) a-t-elle fortement augmenté depuis 2008 ?",
      options: [
        "La BNS a acheté énormément de devises (euros, dollars) en payant avec des francs créés",
        "Les Suisses ont arrêté d'utiliser des cartes",
        "La Confédération a imprimé des billets pour payer ses dettes",
        "Les banques ont fermé leurs comptes à la BNS",
      ],
      correct: [0],
    },

    /* ============ 4. VALEUR ============ */
    {
      id: "v1", type: "tableau", sujet: "Valeur de la monnaie", revoir: "valeur",
      q: "Valeur interne ou valeur externe du franc ?",
      colonnes: ["Interne", "Externe"],
      lignes: [
        { t: "Le prix d'un kebab passe de 10 à 11 francs.", c: [0] },
        { t: "Un euro vaut moins de francs qu'avant.", c: [1] },
        { t: "L'inflation réduit le pouvoir d'achat.", c: [0] },
        { t: "Des investisseurs étrangers achètent des francs en pleine crise.", c: [1] },
      ],
      explication: "Interne = pouvoir d'achat en Suisse (dépend de l'inflation). Externe = taux de change.",
    },
    {
      id: "v2", type: "choix", sujet: "Valeur de la monnaie", revoir: "valeur",
      q: "Qu'est-ce qui influence le <b>taux de change</b> d'une monnaie ?",
      options: ["Les mouvements de capitaux", "Le commerce extérieur", "Le climat politique et social", "La conjoncture du pays", "La couleur des billets"],
      correct: [0, 1, 2, 3],
    },
    {
      id: "v3", type: "ouverte", sujet: "Valeur de la monnaie", revoir: "valeur",
      q: "Pourquoi dit-on que le franc est une « <b>valeur refuge</b> » ? Quelles en sont les conséquences ?",
      modele: "En cas de crise dans le monde, les investisseurs cherchent la sécurité : la Suisse est stable (politique, finances publiques, BNS crédible). Ils <b>achètent des francs</b>, qui s'apprécient. <br><b>Conséquences</b> : les importations deviennent moins chères (moins d'inflation importée), mais les exportations et le tourisme souffrent, car les produits suisses deviennent plus chers pour les étrangers.",
    },

    /* ============ 5. BNS ============ */
    {
      id: "b1", type: "vf", sujet: "La BNS", revoir: "bns",
      q: "Vrai ou faux ?",
      items: [
        { t: "La BNS a été fondée en 1907.", v: true },
        { t: "La BNS est une société anonyme dont la majorité des actions est détenue par des collectivités publiques.", v: true, note: "Environ 55 % : cantons, banques cantonales et autres collectivités publiques." },
        { t: "Le bénéfice de la BNS revient entièrement à la Confédération.", v: false, note: "1/3 à la Confédération, <b>2/3 aux cantons</b>." },
        { t: "La BNS a ses sièges à Berne et à Genève.", v: false, note: "À <b>Berne</b> et à <b>Zurich</b>." },
      ],
    },
    {
      id: "b2", type: "choix", sujet: "La BNS", revoir: "bns",
      q: "Quels sont les rôles de la BNS ?",
      options: [
        "Créer la base monétaire",
        "Assurer la stabilité des prix",
        "Veiller à la stabilité des taux et des changes",
        "Fixer les impôts cantonaux",
        "Verser les rentes AVS",
      ],
      correct: [0, 1, 2],
    },
    {
      id: "b3", type: "choix", sujet: "La BNS", revoir: "bns",
      q: "Pourquoi le bénéfice de la BNS varie-t-il autant (80,7 milliards en 2024, 26,1 en 2025) ?",
      options: [
        "Il dépend surtout de la valeur de ses réserves de devises et d'or",
        "Il dépend du nombre de billets imprimés",
        "Il dépend des impôts payés par les banques",
        "Il est fixé chaque année par le Conseil fédéral",
      ],
      correct: [0],
      explication: "Quand le franc s'apprécie, ses euros et dollars valent moins de francs ; quand l'or monte, elle gagne. Les cantons qui comptent sur ce versement prennent un risque.",
    },
    {
      id: "b4", type: "choix", sujet: "La BNS", revoir: "bns",
      q: "Quelle est la <b>priorité</b> de la BNS ?",
      options: [
        "La stabilité des prix, en tenant compte de la conjoncture",
        "Le plus grand bénéfice possible",
        "Le financement des déficits de la Confédération",
        "Un franc le plus fort possible",
      ],
      correct: [0],
    },

    /* ============ 6. CRÉATION DE MONNAIE ============ */
    {
      id: "c1", type: "trous", sujet: "Création de monnaie", revoir: "creation",
      q: "Complétez.",
      texte: "La BNS crée la [[*base monétaire|masse fiscale|dette publique]]. Les banques commerciales la [[*multiplient|détruisent|impriment]] en accordant des [[*crédits|impôts|amendes]]. Quand un crédit est remboursé, la monnaie est [[*détruite|multipliée|exportée]].",
    },
    {
      id: "c2", type: "choix", sujet: "Création de monnaie", revoir: "creation",
      q: "Un ménage reçoit 1000 fr. de salaire, en dépense 800 et en épargne 200. La banque reprête ces 200 fr. Que se passe-t-il ?",
      options: [
        "La masse monétaire augmente : de la monnaie scripturale est créée",
        "La base monétaire de la BNS augmente",
        "La monnaie est détruite",
        "Rien ne change",
      ],
      correct: [0],
      explication: "La BNS n'a rien créé de plus : ce sont les crédits des banques commerciales qui <b>multiplient</b> la monnaie.",
    },
    {
      id: "c3", type: "ouverte", sujet: "Création de monnaie", revoir: "creation",
      q: "Le village et le billet de 100 € : le touriste repart avec son billet, personne n'a rien gagné, mais toutes les dettes ont disparu. Comment l'expliquer ?",
      modele: "Chaque villageois devait 100 € à un autre, en <b>cercle</b>. Le billet a circulé et servi plusieurs fois de <b>moyen de paiement</b> : chaque passage a éteint une dette. Une même somme d'argent peut régler beaucoup d'échanges si elle <b>circule vite</b>. Ce n'est pas la quantité de monnaie qui manquait, mais sa circulation : en crise, l'argent ne circule plus.",
    },
    {
      id: "c4", type: "vf", sujet: "Création de monnaie", revoir: "creation",
      q: "Vrai ou faux ?",
      items: [
        { t: "Seule la BNS peut créer de la monnaie.", v: false, note: "La BNS crée la base monétaire ; les banques commerciales créent de la monnaie <b>scripturale</b> par le crédit." },
        { t: "Le remboursement d'un crédit détruit de la monnaie.", v: true },
        { t: "Quand une banque accorde un crédit, la masse monétaire augmente.", v: true },
      ],
    },

    /* ============ 7. POLITIQUE MONÉTAIRE ============ */
    {
      id: "p1", type: "tableau", sujet: "Politique monétaire", revoir: "monetaire",
      q: "Politique monétaire restrictive ou expansive ?",
      colonnes: ["Restrictive", "Expansive"],
      lignes: [
        { t: "La BNS relève son taux directeur.", c: [0] },
        { t: "Les crédits deviennent bon marché.", c: [1] },
        { t: "On l'utilise en période de surchauffe.", c: [0] },
        { t: "On l'utilise en basse conjoncture.", c: [1] },
        { t: "La masse monétaire augmente.", c: [1] },
      ],
    },
    {
      id: "p2", type: "trous", sujet: "Politique monétaire", revoir: "monetaire",
      q: "Complétez la politique monétaire expansive.",
      texte: "Baisse des taux → crédits [[*bon marché|plus chers|interdits]] → [[*plus|moins]] de dépenses → [[*hausse|baisse]] de la production.",
    },
    {
      id: "p3", type: "tableau", sujet: "Effets de la politique monétaire", revoir: "impacts",
      q: "La BNS <b>relève</b> son taux directeur. Quel effet sur chaque élément ?",
      colonnes: ["Hausse", "Baisse"],
      lignes: [
        { t: "La masse monétaire", c: [1] },
        { t: "Les taux des crédits hypothécaires", c: [0] },
        { t: "La valeur du franc face à l'euro", c: [0] },
        { t: "Les dépenses des ménages et des entreprises", c: [1] },
      ],
      explication: "Placer en francs rapporte davantage : les capitaux affluent et le franc s'apprécie. Les crédits plus chers freinent la demande.",
    },
    {
      id: "p4", type: "ouverte", sujet: "Effets de la politique monétaire", revoir: "impacts",
      q: "La BNS achète des euros sur le marché des changes. Expliquez l'effet sur la masse monétaire et sur le franc.",
      modele: "Pour payer les euros, la BNS <b>crée des francs</b> : la masse monétaire (d'abord M0) <b>augmente</b>. Comme elle demande des euros et offre des francs, l'euro monte et le franc <b>s'affaiblit</b> (ou monte moins). Elle l'a fait massivement depuis 2008 pour éviter un franc trop fort, qui nuit aux exportations. Risque : trop de monnaie peut provoquer de l'inflation (ch. 43).",
    },
    {
      id: "p5", type: "choix", sujet: "Politique monétaire", revoir: "impacts",
      q: "Pourquoi la BNS a-t-elle appliqué des taux négatifs (−0,75 %) de 2015 à 2022 ?",
      options: [
        "Pour rendre le franc moins attractif et éviter qu'il devienne trop fort",
        "Pour lutter contre une inflation très forte",
        "Pour augmenter ses bénéfices",
        "Pour financer la Confédération",
      ],
      correct: [0],
    },
    {
      id: "p6", type: "tableau", sujet: "Instruments de la BNS", revoir: "instruments",
      q: "Quel instrument de la BNS est décrit ?",
      colonnes: ["Taux directeur", "Devises", "Réserves minimales"],
      lignes: [
        { t: "Les banques doivent garder une partie de leurs dépôts en liquidités.", c: [2] },
        { t: "La BNS annonce une baisse de 0,25 point.", c: [0] },
        { t: "La BNS vend des francs contre des euros.", c: [1] },
      ],
    },

    /* ============ 8. POLITIQUE FISCALE ============ */
    {
      id: "f1", type: "choix", sujet: "Politique fiscale", revoir: "fiscale",
      q: "En plus de financer l'État, à quoi sert la fiscalité ?",
      options: ["Réguler l'économie", "Inciter à certains comportements", "Réduire les inégalités", "Fixer le taux de change", "Créer de la monnaie"],
      correct: [0, 1, 2],
    },
    {
      id: "f2", type: "choix", sujet: "Politique fiscale", revoir: "fiscale",
      q: "Quelles sont les exigences d'un bon système fiscal ?",
      options: ["Simple et compréhensible", "Équitable", "Non pénalisant pour l'économie", "Le plus compliqué possible", "Identique dans tous les pays"],
      correct: [0, 1, 2],
    },
    {
      id: "f3", type: "tableau", sujet: "Système fiscal suisse", revoir: "systeme",
      q: "De quel niveau s'agit-il ?",
      colonnes: ["Confédération", "Cantons", "Communes"],
      lignes: [
        { t: "Ils sont souverains en matière fiscale.", c: [1] },
        { t: "Elle ne peut prélever que les impôts prévus par la Constitution.", c: [0] },
        { t: "Elles sont limitées par le canton et fixent leur coefficient.", c: [2] },
      ],
    },
    {
      id: "f4", type: "vf", sujet: "Système fiscal suisse", revoir: "systeme",
      q: "Vrai ou faux ?",
      items: [
        { t: "La concurrence fiscale incite les cantons à garder des taux modestes.", v: true },
        { t: "La concurrence fiscale crée des inégalités entre cantons.", v: true },
        { t: "La péréquation financière permet aux cantons riches de recevoir de l'argent des cantons faibles.", v: false, note: "C'est l'inverse : les cantons à fort potentiel financier versent aux cantons plus faibles, comme Fribourg." },
        { t: "Tous les cantons suisses ont exactement les mêmes impôts.", v: false },
      ],
    },
    {
      id: "f5", type: "tableau", sujet: "Actualités fiscales", revoir: "systeme",
      q: "Quel sujet a été (ou sera) soumis au vote cette année-là ?",
      colonnes: ["2023", "2025", "2026"],
      lignes: [
        { t: "Un impôt minimum de 15 % pour les très grandes entreprises (OCDE)", c: [0] },
        { t: "La suppression de la valeur locative", c: [1] },
        { t: "La hausse de la TVA pour financer la 13e rente AVS", c: [2] },
      ],
    },
    {
      id: "f6", type: "choix", sujet: "Actualités fiscales", revoir: "systeme",
      q: "Qu'est-ce que la <b>valeur locative</b>, supprimée par le vote de 2025 ?",
      options: [
        "Un revenu « fictif » imposé chez les propriétaires qui habitent leur propre logement",
        "Le loyer payé par les locataires",
        "La TVA sur les loyers",
        "Un impôt sur les voitures",
      ],
      correct: [0],
    },

    /* ============ 9. BILAN ============ */
    {
      id: "s1", type: "tableau", sujet: "Bilan", revoir: "bilan",
      q: "L'économie est en <b>surchauffe</b>. Quelle mesure est adaptée ?",
      colonnes: ["Adaptée", "Pas adaptée"],
      lignes: [
        { t: "La BNS relève son taux directeur.", c: [0] },
        { t: "L'État baisse fortement les impôts.", c: [1] },
        { t: "L'État réduit ses dépenses.", c: [0] },
        { t: "La BNS augmente fortement la masse monétaire.", c: [1] },
      ],
      explication: "En surchauffe, on <b>freine</b> : taux ↑, masse monétaire ↓, impôts ↑, dépenses ↓.",
    },
    {
      id: "s2", type: "ouverte", sujet: "Bilan", revoir: "bilan",
      q: "L'économie suisse entre en récession. Proposez une mesure de la BNS et deux mesures de l'État, et expliquez leur effet.",
      modele: "<b>BNS</b> : baisser le taux directeur → crédits moins chers → plus d'investissements et de consommation. <br><b>État (fiscal)</b> : baisser temporairement certains impôts → plus de revenu disponible → plus de dépenses. <br><b>État (budgétaire)</b> : avancer des investissements (routes, écoles) → commandes pour les entreprises → emplois. <br>Le budget devient déficitaire, ce que le frein à l'endettement permet en récession.",
    },
    {
      id: "s3", type: "tableau", sujet: "Bilan", revoir: "bilan",
      q: "Qui décide ?",
      colonnes: ["BNS", "Confédération", "Canton"],
      lignes: [
        { t: "Le taux directeur", c: [0] },
        { t: "Le taux de la TVA (avec le vote du peuple)", c: [1] },
        { t: "Le barème de l'impôt cantonal sur le revenu", c: [2] },
        { t: "L'achat d'euros sur le marché des changes", c: [0] },
      ],
    },
  ],
};
