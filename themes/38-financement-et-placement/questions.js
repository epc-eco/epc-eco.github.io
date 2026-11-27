/* Banque de questions — Chapitre 38 : Financement et placement
   Pour ajouter une question : copier un bloc existant du même type et l'adapter.
   "revoir" = identifiant de la section de la théorie (voir la liste "sections"). */

window.THEME = {
  id: "ent-38-financement-et-placement",
  titre: "Chapitre 38 · Financement et placement",
  theorie: "theorie.html",
  accueil: "../../index.html",
};

window.QUESTIONS = {
  sections: {
    distinguer: "Placement ou financement ?",
    sources: "Les sources de financement",
    credits: "Les crédits",
    garanties: "Quelle garantie pour quel crédit ?",
    interets: "Les intérêts",
    menages: "Le financement des ménages",
    entreprises: "Le financement des entreprises",
    factoring: "Affacturage et crédit fournisseur",
    particuliers: "Des financements particuliers",
    leasing: "Le leasing",
    "leasing-bilan": "Fin du contrat, avantages et inconvénients du leasing",
    lcc: "La loi sur le crédit à la consommation",
    "lcc-champ": "Soumis ou non à la LCC ?",
    hypotheque: "Le crédit hypothécaire",
    logement: "Financer un logement",
    capacite: "La capacité financière",
    papiers: "Les papiers-valeurs",
    transfert: "Le transfert des papiers-valeurs",
    obligations: "L'obligation",
    rating: "Le rating",
    convertible: "Obligation convertible et obligation de caisse",
    actions: "L'action",
    comparaison: "Obligation ou action ?",
    objectifs: "Les objectifs de placement",
    risques: "Les trois objectifs en détail",
    diversification: "La diversification",
    profils: "Les profils d'investisseur",
    placements: "Les différents placements",
    champions: "Qui gagne sur quel objectif ?",
    fonds: "Les fonds de placement",
    bourse: "La bourse",
    six: "La bourse suisse",
    indices: "Les indices boursiers",
  },

  questions: [
    /* ============ 1. DISTINGUER ============ */
    {
      id: "d1", type: "tableau", sujet: "Placement ou financement", revoir: "distinguer",
      q: "Placement ou financement ?",
      colonnes: ["Placement", "Financement"],
      lignes: [
        { t: "Léa met 5000 francs sur un compte épargne.", c: [0] },
        { t: "Une PME demande un crédit pour acheter un camion.", c: [1] },
        { t: "Une caisse de pension achète des obligations de la Confédération.", c: [0] },
        { t: "Une SA émet de nouvelles actions pour construire une usine.", c: [1] },
        { t: "Marc achète des parts d'un fonds de placement.", c: [0] },
      ],
    },
    {
      id: "d2", type: "choix", sujet: "Thésaurisation", revoir: "distinguer",
      q: "Qu'est-ce que la thésaurisation ?",
      options: [
        "Garder son argent sans le placer, par exemple dans un coffre",
        "Placer son argent en bourse",
        "Emprunter pour acheter un logement",
        "Diversifier son portefeuille",
      ],
      correct: [0],
    },
    {
      id: "d3", type: "choix", sujet: "Investisseurs", revoir: "distinguer",
      q: "Lesquels sont des investisseurs institutionnels ?",
      options: ["Une caisse de pension", "Une compagnie d'assurance", "Un fonds de placement", "Une apprentie qui épargne"],
      correct: [0, 1, 2],
    },

    /* ============ 2. SOURCES ============ */
    {
      id: "s1", type: "tableau", sujet: "Les sources de financement", revoir: "sources",
      q: "Quelle source de financement ?",
      colonnes: ["Autofinancement", "Externe indirect", "Externe direct"],
      lignes: [
        { t: "La boulangerie utilise les bénéfices mis de côté.", c: [0] },
        { t: "L'entreprise obtient un crédit de sa banque.", c: [1] },
        { t: "La SA émet de nouvelles actions.", c: [2] },
        { t: "La société lance un emprunt obligataire.", c: [2] },
      ],
      explication: "Direct : l'argent vient directement des investisseurs (actions, obligations). Indirect : il passe par une banque.",
    },
    {
      id: "s2", type: "vf", sujet: "Les sources de financement", revoir: "sources",
      q: "Vrai ou faux ?",
      items: [
        { t: "L'autofinancement est une source de financement interne.", v: true },
        { t: "Un crédit bancaire est un financement externe direct.", v: false, note: "Il est <b>indirect</b> : l'argent des épargnants passe par la banque." },
        { t: "Augmenter le capital-actions est un financement externe.", v: true },
      ],
    },

    /* ============ 3. CRÉDITS ============ */
    {
      id: "g1", type: "tableau", sujet: "Garanties", revoir: "garanties",
      q: "Quel crédit ?",
      colonnes: ["En blanc", "Cautionnement", "Lombard", "Hypothécaire"],
      lignes: [
        { t: "Le père de Julien s'engage à payer si Julien ne rembourse pas.", c: [1] },
        { t: "Une cliente met en gage son portefeuille d'actions.", c: [2] },
        { t: "Un couple achète une maison qui sert de garantie.", c: [3] },
        { t: "La banque prête sans aucune garantie, sur la base de la confiance.", c: [0] },
      ],
    },
    {
      id: "g2", type: "trous", sujet: "Garanties", revoir: "garanties",
      q: "Complétez.",
      texte: "Une garantie [[*personnelle|réelle|bancaire]] est donnée par une personne qui s'engage à payer. Une garantie [[*réelle|personnelle|morale]] porte sur un bien : titres, marchandises, immeuble. Le crédit contre [[*cession de créances|cautionnement|leasing]] est garanti par les factures que l'entreprise doit encaisser.",
    },
    {
      id: "g3", type: "tableau", sujet: "Formes de crédit", revoir: "credits",
      q: "Quelle forme de crédit ?",
      colonnes: ["Limite en compte courant", "Prêt", "Avance à terme fixe"],
      lignes: [
        { t: "Le compte de l'entreprise peut descendre jusqu'à −30 000 francs selon ses besoins.", c: [0] },
        { t: "La banque verse 20 000 francs d'un coup, remboursés par mensualités.", c: [1] },
        { t: "100 000 francs pour 6 mois, remboursés en une fois à l'échéance", c: [2] },
      ],
    },
    {
      id: "g4", type: "choix", sujet: "Les intérêts", revoir: "interets",
      q: "De quoi dépend le taux d'intérêt d'un crédit ?",
      options: ["De la durée du prêt", "Du risque", "Des garanties offertes", "De la couleur de la carte bancaire"],
      correct: [0, 1, 2],
    },
    {
      id: "g5", type: "ouverte", sujet: "Les intérêts", revoir: "interets",
      q: "Pourquoi dit-on que l'intérêt est le « loyer de l'argent » ?",
      modele: "Comme un locataire paie un loyer pour utiliser un appartement qui ne lui appartient pas, l'emprunteur paie un <b>intérêt</b> pour <b>utiliser de l'argent</b> qui appartient au prêteur, pendant un certain temps. À la fin, il rend la somme (comme on rend l'appartement).",
    },

    /* ============ 4-5. MÉNAGES ET ENTREPRISES ============ */
    {
      id: "e1", type: "tableau", sujet: "Ménages", revoir: "menages",
      q: "Comment ce ménage se finance-t-il ?",
      colonnes: ["Augmenter ses revenus", "Réduire ses dépenses", "Obtenir un crédit"],
      lignes: [
        { t: "Sarah prend un job d'été.", c: [0] },
        { t: "La famille renonce à ses vacances au Portugal.", c: [1] },
        { t: "Tom signe un prêt personnel pour une moto.", c: [2] },
        { t: "Un couple loue une chambre de son appartement.", c: [0] },
      ],
    },
    {
      id: "e2", type: "tableau", sujet: "La règle d'or", revoir: "entreprises",
      q: "Selon la règle d'or, quel financement ?",
      colonnes: ["Court terme", "Long terme"],
      lignes: [
        { t: "Payer les salaires en attendant le paiement des clients", c: [0] },
        { t: "Construire un nouvel atelier", c: [1] },
        { t: "Acheter une machine qui servira 10 ans", c: [1] },
        { t: "Financer un stock avant Noël", c: [0] },
      ],
    },
    {
      id: "e3", type: "choix", sujet: "La règle d'or", revoir: "entreprises",
      q: "Que dit la règle d'or du financement ?",
      options: [
        "Le court terme finance le court terme, le long terme finance le long terme",
        "Il faut toujours financer avec des fonds propres",
        "Il faut toujours choisir le crédit le moins cher, quelle que soit sa durée",
        "Les machines se financent par le crédit fournisseur",
      ],
      correct: [0],
    },
    {
      id: "e4", type: "tableau", sujet: "Crédits des entreprises", revoir: "factoring",
      q: "De quel crédit s'agit-il ?",
      colonnes: ["Factoring", "Crédit fournisseur", "Emprunt obligataire", "Crédit d'investissement"],
      lignes: [
        { t: "L'entreprise vend ses factures à une société spécialisée.", c: [0] },
        { t: "Le grossiste laisse 30 jours pour payer la marchandise.", c: [1] },
        { t: "Une grande SA emprunte 200 millions auprès du public.", c: [2] },
        { t: "La banque finance une nouvelle ligne de production.", c: [3] },
      ],
    },
    {
      id: "e5", type: "tableau", sujet: "Financements particuliers", revoir: "particuliers",
      q: "Quel financement particulier ?",
      colonnes: ["Capital-risque", "Microcrédit", "Financement participatif"],
      lignes: [
        { t: "1200 internautes financent l'album d'un groupe fribourgeois.", c: [2] },
        { t: "Un investisseur entre au capital d'une start-up de l'EPFL.", c: [0] },
        { t: "Une couturière du Sénégal obtient 300 francs pour acheter une machine.", c: [1] },
      ],
    },

    /* ============ 6. LEASING ============ */
    {
      id: "l1", type: "vf", sujet: "Le leasing", revoir: "leasing",
      q: "Vrai ou faux ?",
      items: [
        { t: "Le vrai leasing est une location.", v: true },
        { t: "Dans le leasing indirect, une société de leasing achète l'objet au fournisseur.", v: true },
        { t: "Pendant le contrat, le preneur est propriétaire de l'objet.", v: false, note: "Le propriétaire est le fournisseur ou la <b>société de leasing</b>. Le preneur l'utilise." },
        { t: "Le leasing coûte en général moins cher qu'un achat au comptant.", v: false, note: "Il coûte <b>toujours plus cher</b> : intérêts et frais compris." },
      ],
    },
    {
      id: "l2", type: "choix", sujet: "Fin du contrat", revoir: "leasing-bilan",
      q: "Quelles options le preneur a-t-il à la fin d'un contrat de leasing ?",
      options: ["Rendre l'objet", "Prolonger le leasing", "Acheter l'objet", "Le revendre sans l'avoir acheté"],
      correct: [0, 1, 2],
    },
    {
      id: "l3", type: "ouverte", sujet: "Avantages du leasing", revoir: "leasing-bilan",
      q: "Une entreprise hésite entre acheter et prendre en leasing trois camions. Donnez deux avantages et l'inconvénient principal du leasing.",
      modele: "<b>Avantages</b> : pas besoin d'avoir l'argent pour l'achat (les liquidités restent disponibles) ; des camions toujours récents ; les mensualités sont déductibles du bénéfice.<br><b>Inconvénient</b> : au total, le leasing coûte <b>plus cher</b> qu'un achat au comptant.",
    },

    /* ============ 7. LCC ============ */
    {
      id: "c1", type: "trous", sujet: "La LCC", revoir: "lcc",
      q: "Complétez.",
      texte: "La LCC protège les ménages contre le [[*surendettement|chômage|vol]]. Le contrat doit être [[*écrit|oral|notarié]]. L'emprunteur peut le révoquer pendant [[*14 jours|3 jours|1 an]]. Depuis 2026, le taux maximal est de [[*10 %|20 %|5 %]] pour un crédit privé.",
    },
    {
      id: "c2", type: "vf", sujet: "La LCC", revoir: "lcc",
      q: "Vrai ou faux ?",
      items: [
        { t: "Le prêteur doit vérifier que l'emprunteur peut rembourser.", v: true },
        { t: "Le taux maximal pour les cartes de crédit est plus élevé que pour un crédit privé.", v: true, note: "12 % contre 10 % (depuis le 1er janvier 2026)." },
        { t: "Le taux maximal est le même depuis la création de la loi.", v: false, note: "Il suit le <b>SARON</b> et est revu chaque année." },
      ],
    },
    {
      id: "c3", type: "tableau", sujet: "Champ de la LCC", revoir: "lcc-champ",
      q: "Ce crédit est-il soumis à la LCC ?",
      colonnes: ["Soumis", "Non soumis"],
      lignes: [
        { t: "Leasing d'une voiture par un particulier", c: [0] },
        { t: "Crédit privé de 15 000 francs", c: [0] },
        { t: "Crédit de 300 francs", c: [1] },
        { t: "Crédit de 120 000 francs", c: [1] },
        { t: "Achat payé en 3 mensualités sur 3 mois, sans intérêts", c: [1] },
        { t: "Carte de crédit permettant de payer par acomptes", c: [0] },
      ],
    },

    /* ============ 8. HYPOTHÈQUE ============ */
    {
      id: "h1", type: "trous", sujet: "Financer un logement", revoir: "logement",
      q: "Complétez.",
      texte: "Pour acheter un logement, il faut au moins [[*20 %|5 %|50 %]] de fonds propres. L'hypothèque de 1er rang va jusqu'à environ [[*65 %|20 %|100 %]] de la valeur. L'hypothèque de 2e rang doit être remboursée en [[*15 ans|1 an|50 ans]].",
    },
    {
      id: "h2", type: "vf", sujet: "Le crédit hypothécaire", revoir: "hypotheque",
      q: "Vrai ou faux ?",
      items: [
        { t: "Le gage immobilier est constitué par acte authentique et inscrit au registre foncier.", v: true },
        { t: "La cédule hypothécaire est la forme de garantie la plus courante.", v: true },
        { t: "Avec une cédule hypothécaire, seule la maison répond de la dette.", v: false, note: "Elle engage aussi la <b>fortune privée</b> de l'emprunteur." },
        { t: "Tous les fonds propres peuvent venir de la caisse de pension (2e pilier).", v: false, note: "Au moins <b>10 %</b> de la valeur doivent venir d'ailleurs : épargne, 3e pilier, donation." },
      ],
    },
    {
      id: "h3", type: "choix", sujet: "Calcul", revoir: "logement",
      q: "Un appartement vaut 600 000 francs. Quel est le minimum de fonds propres ?",
      options: ["120 000 francs", "60 000 francs", "390 000 francs", "480 000 francs"],
      correct: [0],
      explication: "20 % × 600 000 = 120 000. L'hypothèque sera au maximum de 480 000 francs (80 %).",
    },
    {
      id: "h4", type: "choix", sujet: "Calcul", revoir: "logement",
      q: "Même appartement (600 000 francs, hypothèque de 480 000). Montant de l'hypothèque de 2e rang si le 1er rang va jusqu'à 65 % ?",
      options: ["90 000 francs", "390 000 francs", "120 000 francs", "480 000 francs"],
      correct: [0],
      explication: "1er rang : 65 % × 600 000 = 390 000. 2e rang : 480 000 − 390 000 = 90 000, à amortir en 15 ans (6000 francs par an).",
    },
    {
      id: "h5", type: "ouverte", sujet: "Capacité financière", revoir: "capacite",
      q: "Pourquoi la banque calcule-t-elle avec un taux théorique de 5 % alors que les taux réels sont bien plus bas ?",
      modele: "Les taux peuvent <b>remonter</b> pendant la durée du crédit. La banque vérifie que l'emprunteur pourra encore payer ses intérêts si les taux augmentent : les frais de logement (intérêts théoriques, amortissement, entretien) ne doivent pas dépasser <b>un tiers du revenu brut</b>.",
    },

    /* ============ 9. PAPIERS-VALEURS ============ */
    {
      id: "p1", type: "tableau", sujet: "Les papiers-valeurs", revoir: "papiers",
      q: "Quel droit est incorporé dans le titre ?",
      colonnes: ["Créance", "Participation", "Réel"],
      lignes: [
        { t: "Une obligation de la Ville de Fribourg", c: [0] },
        { t: "Une action Nestlé", c: [1] },
        { t: "Une cédule hypothécaire", c: [2] },
        { t: "Une obligation de caisse", c: [0] },
      ],
    },
    {
      id: "p2", type: "tableau", sujet: "Transfert", revoir: "transfert",
      q: "Comment transférer ce titre ?",
      colonnes: ["Remise", "Endossement", "Cession"],
      lignes: [
        { t: "Titre au porteur", c: [0] },
        { t: "Titre « à l'ordre de Paul Rey »", c: [1] },
        { t: "Titre « au nom de Paul Rey, non à ordre »", c: [2] },
      ],
    },
    {
      id: "p3", type: "choix", sujet: "Les papiers-valeurs", revoir: "papiers",
      q: "Que signifie « Pas de titre, pas de droit » ?",
      options: [
        "On ne peut ni faire valoir ni transférer le droit sans le titre",
        "Les titres n'ont aucune valeur juridique",
        "Seule la banque peut posséder des titres",
        "Le droit existe même si le titre est perdu",
      ],
      correct: [0],
    },

    /* ============ 10. OBLIGATIONS ============ */
    {
      id: "o1", type: "vf", sujet: "L'obligation", revoir: "obligations",
      q: "Vrai ou faux ?",
      items: [
        { t: "L'obligation est un titre de créance.", v: true },
        { t: "L'obligation rapporte un intérêt fixe, connu d'avance.", v: true },
        { t: "Une obligation est cotée en francs par titre.", v: false, note: "Elle est cotée en <b>% de la valeur nominale</b>." },
        { t: "Si les taux du marché montent, la valeur des anciennes obligations baisse.", v: true },
      ],
    },
    {
      id: "o2", type: "choix", sujet: "Le rating", revoir: "rating",
      q: "Une obligation est notée BB. Que peut-on dire ?",
      options: [
        "Elle est spéculative : intérêt élevé, mais risque élevé",
        "Elle est de toute première qualité",
        "Elle ne rapporte aucun intérêt",
        "Elle est garantie par la Confédération",
      ],
      correct: [0],
      explication: "En dessous de BBB, on parle de « junk bonds » (obligations spéculatives).",
    },
    {
      id: "o3", type: "tableau", sujet: "Variantes", revoir: "convertible",
      q: "Obligation convertible ou obligation de caisse ?",
      colonnes: ["Convertible", "De caisse"],
      lignes: [
        { t: "Peut être échangée contre des actions", c: [0] },
        { t: "Émise par une banque, à la demande du client", c: [1] },
        { t: "Non cotée en bourse", c: [1] },
        { t: "Taux plus bas pour l'entreprise qui l'émet", c: [0] },
      ],
    },
    {
      id: "o4", type: "choix", sujet: "Calcul", revoir: "obligations",
      q: "Une obligation de valeur nominale 5000 francs est cotée à 98 %. Quel est son prix ?",
      options: ["4900 francs", "5000 francs", "5098 francs", "98 francs"],
      correct: [0],
      explication: "98 % × 5000 = 4900 francs.",
    },

    /* ============ 11. ACTIONS ============ */
    {
      id: "a1", type: "tableau", sujet: "Droits de l'actionnaire", revoir: "actions",
      q: "Droit social ou droit patrimonial ?",
      colonnes: ["Social", "Patrimonial"],
      lignes: [
        { t: "Voter à l'assemblée générale", c: [0] },
        { t: "Recevoir un dividende", c: [1] },
        { t: "Attaquer une décision de l'AG en justice", c: [0] },
        { t: "Recevoir une part de liquidation", c: [1] },
        { t: "Être élu au conseil d'administration", c: [0] },
      ],
    },
    {
      id: "a2", type: "tableau", sujet: "Obligation ou action", revoir: "comparaison",
      q: "Obligation ou action ?",
      colonnes: ["Obligation", "Action"],
      lignes: [
        { t: "Je suis copropriétaire de la société.", c: [1] },
        { t: "Je reçois un intérêt fixe.", c: [0] },
        { t: "Cotée en francs par titre", c: [1] },
        { t: "Volatilité forte", c: [1] },
        { t: "En cas de faillite, je suis payé avant les actionnaires.", c: [0] },
      ],
    },
    {
      id: "a3", type: "choix", sujet: "L'action", revoir: "actions",
      q: "De quoi dépend le cours d'une action ?",
      options: ["De l'économie en général", "Des perspectives de l'entreprise", "Des décisions politiques", "De la spéculation"],
      correct: [0, 1, 2, 3],
    },
    {
      id: "a4", type: "ouverte", sujet: "Obligation ou action", revoir: "comparaison",
      q: "Vous prêtez 1000 francs à une entreprise ou vous achetez pour 1000 francs de ses actions. Expliquez la différence de statut et de risque.",
      modele: "Avec l'<b>obligation</b>, je suis <b>créancier</b> : l'entreprise me doit un intérêt fixe et le remboursement ; le risque est faible (selon son rating), et en cas de faillite je suis payé avant les actionnaires.<br>Avec l'<b>action</b>, je suis <b>copropriétaire</b> : je reçois un dividende seulement s'il y a un bénéfice, le cours peut fortement varier ; je peux gagner plus, mais aussi tout perdre.",
    },

    /* ============ 12. OBJECTIFS ============ */
    {
      id: "j1", type: "choix", sujet: "Le triangle magique", revoir: "objectifs",
      q: "Quels sont les trois objectifs de placement ?",
      options: ["Rendement (ou croissance), sécurité, liquidité", "Rendement, impôts, frais", "Sécurité, publicité, durée", "Liquidité, inflation, chômage"],
      correct: [0],
    },
    {
      id: "j2", type: "vf", sujet: "Le triangle magique", revoir: "objectifs",
      q: "Vrai ou faux ?",
      items: [
        { t: "Un placement peut réunir un rendement élevé, une grande sécurité et une grande liquidité.", v: false, note: "<b>Aucun</b> placement ne réunit les trois objectifs." },
        { t: "Un rendement élevé va en général avec une sécurité faible.", v: true },
        { t: "Une bonne croissance va souvent avec une liquidité faible.", v: true },
      ],
    },
    {
      id: "j3", type: "tableau", sujet: "Les risques", revoir: "risques",
      q: "Quel risque ?",
      colonnes: ["Crédit", "Inflation", "Marché", "Change"],
      lignes: [
        { t: "L'entreprise qui a émis l'obligation fait faillite.", c: [0] },
        { t: "Les prix montent plus vite que le taux du compte épargne.", c: [1] },
        { t: "La bourse chute de 20 %.", c: [2] },
        { t: "Le dollar baisse face au franc : mes actions américaines valent moins en francs.", c: [3] },
      ],
    },
    {
      id: "j4", type: "ouverte", sujet: "Diversification", revoir: "diversification",
      q: "Que signifie « ne pas mettre tous ses œufs dans le même panier » ? Donnez trois façons de diversifier.",
      modele: "Il faut <b>répartir</b> son argent entre plusieurs placements : si l'un perd de la valeur, les autres compensent. On diversifie selon les <b>types de placements</b> (actions, obligations, immobilier, or), les <b>secteurs</b> (santé, énergie, banques…) et les <b>pays et monnaies</b>.",
    },
    {
      id: "j5", type: "tableau", sujet: "Profils", revoir: "profils",
      q: "Quel profil d'investisseur conseiller ?",
      colonnes: ["Conservateur", "Équilibré", "Offensif"],
      lignes: [
        { t: "Retraitée de 75 ans, qui ne veut prendre aucun risque", c: [0] },
        { t: "Jeune ingénieur de 28 ans, qui place pour 30 ans et accepte de fortes variations", c: [2] },
        { t: "Couple de 45 ans, qui accepte un peu de risque pour un meilleur rendement", c: [1] },
      ],
    },

    /* ============ 13. PLACEMENTS ============ */
    {
      id: "f1", type: "choix", sujet: "Les fonds de placement", revoir: "fonds",
      q: "Quels sont des avantages des fonds de placement ?",
      options: ["Accessibles avec de petits montants", "Gestion professionnelle", "Diversification des risques", "Rendement garanti"],
      correct: [0, 1, 2],
      explication: "Aucun rendement n'est garanti : la valeur d'une part suit les cours de la bourse.",
    },
    {
      id: "f2", type: "tableau", sujet: "Qui gagne sur quel objectif ?", revoir: "champions",
      q: "Quel placement est le meilleur pour cet objectif ?",
      colonnes: ["Actions", "Compte bancaire", "Obligations"],
      lignes: [
        { t: "Croissance (hausse de valeur) à long terme", c: [0] },
        { t: "Liquidité : pouvoir retirer son argent demain", c: [1] },
        { t: "Rendement régulier et connu d'avance", c: [2] },
        { t: "Sécurité maximale", c: [1] },
      ],
    },
    {
      id: "f3", type: "vf", sujet: "Les différents placements", revoir: "placements",
      q: "Vrai ou faux ?",
      items: [
        { t: "Les placements bancaires sont très liquides mais peu rentables.", v: true },
        { t: "Le 3e pilier A est très liquide.", v: false, note: "Il est <b>bloqué</b> jusqu'à la retraite (sauf exceptions), mais déductible des impôts." },
        { t: "L'immobilier est un placement sûr mais peu liquide.", v: true },
      ],
    },
    {
      id: "f4", type: "trous", sujet: "Les fonds de placement", revoir: "fonds",
      q: "Complétez.",
      texte: "Les investisseurs versent de l'argent au fonds et reçoivent des [[*parts|actions de la banque|obligations de caisse]]. La [[*direction du fonds|BNS|FINMA]] choisit les titres. La valeur d'une part suit les cours de la [[*bourse|BNS|TVA]].",
    },

    /* ============ 14. BOURSE ============ */
    {
      id: "b1", type: "tableau", sujet: "Les bourses", revoir: "bourse",
      q: "Quelle bourse ?",
      colonnes: ["Valeurs", "Devises", "Marchandises"],
      lignes: [
        { t: "Achat de 50 actions UBS", c: [0] },
        { t: "Échange d'euros contre des francs", c: [1] },
        { t: "Vente de 1000 tonnes de blé", c: [2] },
        { t: "Achat d'obligations de la Confédération", c: [0] },
      ],
    },
    {
      id: "b2", type: "tableau", sujet: "Les indices", revoir: "indices",
      q: "Quelle place boursière ?",
      colonnes: ["Zurich", "New York", "Tokyo", "Francfort"],
      lignes: [
        { t: "SMI", c: [0] },
        { t: "Dow Jones", c: [1] },
        { t: "Nikkei", c: [2] },
        { t: "DAX", c: [3] },
        { t: "SPI", c: [0] },
      ],
    },
    {
      id: "b3", type: "vf", sujet: "La bourse suisse", revoir: "six",
      q: "Vrai ou faux ?",
      items: [
        { t: "La bourse suisse SIX est entièrement électronique.", v: true },
        { t: "Le délit d'initié consiste à utiliser une information secrète pour gagner en bourse.", v: true },
        { t: "Un indice boursier donne le cours d'une seule action.", v: false, note: "Il résume la valeur des <b>principaux titres</b> d'une bourse." },
        { t: "Un marché « haussier » est symbolisé par l'ours.", v: false, note: "Par le <b>taureau</b> ; l'ours symbolise la baisse." },
      ],
    },
  ],
};
