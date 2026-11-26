/* Banque de questions — Chapitre 11 : Besoins et types de biens
   Pour ajouter une question : copier un bloc existant du même type et l'adapter.
   "revoir" = identifiant de la section de la théorie (voir la liste "sections"). */

window.THEME = {
  id: "eco-11-besoins-et-biens",
  titre: "Chapitre 11 · Besoins et types de biens",
  theorie: "theorie.html",
  accueil: "../../index.html",
};

window.QUESTIONS = {
  sections: {
    besoins: "Les besoins",
    niveaux: "Les trois niveaux de besoins",
    evolution: "L'évolution des besoins",
    biens: "Les types de biens",
    libres: "Biens libres et économiques",
    services: "Biens et services",
    production: "Consommation et production",
    facteurs: "Les facteurs de production",
    remuneration: "La rémunération des facteurs",
  },

  questions: [
    /* ============ 1. LES BESOINS ============ */
    {
      id: "b1", type: "ouverte", sujet: "Les besoins", revoir: "besoins",
      q: "Qu'est-ce qu'un <b>besoin</b> en économie ?",
      modele: "Un besoin est une <b>sensation de manque</b> que l'on cherche à faire disparaître par la <b>consommation</b> de biens ou de services. Les besoins sont souvent <b>provoqués</b> (publicité, mode, entourage) et, en économie, on les considère comme <b>illimités</b>.",
    },
    {
      id: "b2", type: "choix", sujet: "Les besoins", revoir: "besoins",
      q: "En économie, comment considère-t-on les besoins ?",
      options: ["Illimités", "Limités", "Identiques pour tout le monde", "Uniquement vitaux"],
      correct: [0],
      explication: "Dès qu'un besoin est satisfait, un autre apparaît. Les besoins n'ont donc pas de fin.",
    },
    {
      id: "b3", type: "choix", sujet: "Les besoins", revoir: "besoins",
      q: "Pourquoi les individus et la société doivent-ils <b>faire des choix</b> ?",
      options: [
        "Parce que les besoins sont illimités alors que les ressources sont limitées",
        "Parce que l'État l'impose",
        "Parce que les besoins sont tous identiques",
        "Parce que les biens libres sont trop chers",
      ],
      correct: [0],
      explication: "C'est le problème de la <b>rareté</b>, point de départ de toute l'économie : on ne peut pas tout avoir, il faut choisir.",
    },
    {
      id: "b4", type: "vf", sujet: "Les besoins", revoir: "besoins",
      q: "Vrai ou faux ?",
      items: [
        { t: "Les besoins sont souvent provoqués, par exemple par la publicité ou la mode.", v: true },
        { t: "Une fois un besoin satisfait, aucun nouveau besoin n'apparaît.", v: false, note: "Les besoins sont illimités : un besoin satisfait laisse place à un autre." },
        { t: "Les besoins varient selon l'époque, le pays et la personne.", v: true },
        { t: "On comble un besoin par la consommation d'un bien ou d'un service.", v: true },
      ],
    },
    {
      id: "b5", type: "choix", sujet: "Les besoins", revoir: "besoins",
      q: "Une marque lance une campagne sur les réseaux sociaux pour un nouveau modèle de baskets. Quel est l'effet recherché sur les besoins ?",
      options: [
        "Provoquer un besoin chez le consommateur",
        "Satisfaire un besoin vital",
        "Transformer un bien économique en bien libre",
        "Réduire les besoins des consommateurs",
      ],
      correct: [0],
      explication: "La publicité crée ou réveille des besoins : c'est pourquoi on dit que les besoins sont « souvent provoqués ».",
    },

    /* ============ 2. NIVEAUX DE BESOINS ============ */
    {
      id: "n1", type: "tableau", sujet: "Niveaux de besoins", revoir: "niveaux",
      q: "À quel niveau de besoin correspond chaque situation ?",
      colonnes: ["Vital", "Social", "De luxe"],
      lignes: [
        { t: "Se nourrir", c: [0] },
        { t: "Avoir un logement", c: [0] },
        { t: "S'habiller contre le froid", c: [0] },
        { t: "Aller au cinéma avec des amis", c: [1] },
        { t: "Suivre une formation", c: [1] },
        { t: "Faire partie d'un club de sport", c: [1] },
        { t: "Acheter un yacht", c: [2] },
        { t: "Porter une bague en diamants", c: [2] },
      ],
      explication: "Vitaux = nécessaires pour vivre. Sociaux = liés à la vie en société (formation, loisirs, culture). De luxe = superflus, réservés à une minorité.",
    },
    {
      id: "n2", type: "choix", sujet: "Niveaux de besoins", revoir: "niveaux",
      q: "Comment appelle-t-on aussi les besoins <b>sociaux</b> ?",
      options: ["Secondaires", "Primaires", "Tertiaires", "Vitaux"],
      correct: [0],
      explication: "Vitaux = primaires, sociaux = secondaires, de luxe = tertiaires.",
    },
    {
      id: "n3", type: "choix", sujet: "Niveaux de besoins", revoir: "niveaux",
      q: "Lequel de ces besoins est un besoin <b>vital</b> (primaire) ?",
      options: ["Boire", "Aller à un concert", "Partir en vacances", "Acheter une montre de luxe"],
      correct: [0],
    },
    {
      id: "n4", type: "ouverte", sujet: "Niveaux de besoins", revoir: "niveaux",
      q: "Pourquoi le classement d'un besoin (vital, social, de luxe) n'est-il pas le même pour tout le monde ? Donnez un exemple.",
      modele: "Parce qu'il dépend de l'<b>époque</b>, du <b>pays</b> et de la <b>personne</b>. <br><i>Exemple</i> : il y a 30 ans, un téléphone portable était un luxe ; aujourd'hui, c'est presque indispensable pour la vie sociale et professionnelle. Une voiture peut être un luxe en ville, mais nécessaire à la campagne.",
    },
    {
      id: "n5", type: "choix", sujet: "Niveaux de besoins", revoir: "niveaux",
      q: "Amou Haji, un Iranien surnommé « l'homme le plus sale du monde », a vécu plus de 50 ans sans se laver et est mort à 94 ans. Que montre cet exemple ?",
      options: [
        "Que la classification des besoins n'est pas absolue : ce qui est vital pour l'un ne l'est pas forcément pour l'autre",
        "Que l'hygiène est un besoin de luxe pour tout le monde",
        "Que les besoins sont limités",
        "Que se laver est un bien libre",
      ],
      correct: [0],
      explication: "Pour la plupart d'entre nous, l'hygiène est indispensable à la santé. Cet exemple extrême montre que la frontière entre les niveaux de besoins n'est pas toujours nette.",
    },

    /* ============ 3. ÉVOLUTION ============ */
    {
      id: "e1", type: "choix", sujet: "Évolution des besoins", revoir: "evolution",
      q: "D'après le graphique du cours, quelle part des dépenses était consacrée aux besoins vitaux en <b>1939</b> ?",
      options: ["82 %", "41 %", "51 %", "18 %"],
      correct: [0],
    },
    {
      id: "e2", type: "choix", sujet: "Évolution des besoins", revoir: "evolution",
      q: "Comment la répartition des dépenses a-t-elle évolué entre 1939 et 2007 ?",
      options: [
        "La part des besoins vitaux a diminué, celle des autres besoins a augmenté",
        "La part des besoins vitaux a augmenté",
        "La répartition n'a pas changé",
        "Les autres besoins ont disparu",
      ],
      correct: [0],
      explication: "De 82 % en 1939 à 41 % en 2007 pour les besoins vitaux : la part a été divisée par deux.",
    },
    {
      id: "e3", type: "choix", sujet: "Évolution des besoins", revoir: "evolution",
      q: "Comment expliquer que la part des besoins vitaux diminue ?",
      options: [
        "Les revenus ont augmenté : une fois les besoins vitaux couverts, on dépense davantage pour les autres besoins",
        "Les gens mangent beaucoup moins qu'en 1939",
        "La nourriture est devenue un bien libre",
        "L'État paie la nourriture de tous les habitants",
      ],
      correct: [0],
      explication: "Quand le revenu augmente, la part consacrée à l'alimentation diminue : c'est la <b>loi d'Engel</b>. On ne mange pas moins, mais le reste du budget grandit.",
    },
    {
      id: "e4", type: "trous", sujet: "Évolution des besoins", revoir: "evolution",
      q: "Complétez.",
      texte: "En 1939, les besoins vitaux représentaient [[*82 %|41 %|51 %]] des dépenses. En 2007, ils n'en représentaient plus que [[*41 %|82 %|67 %]]. Les autres besoins sont donc devenus [[*majoritaires|minoritaires|inexistants]].",
    },

    /* ============ 4. TYPES DE BIENS ============ */
    {
      id: "g1", type: "tableau", sujet: "Libres ou économiques", revoir: "libres",
      q: "Bien libre ou bien économique ?",
      colonnes: ["Libre", "Économique"],
      lignes: [
        { t: "L'air que l'on respire", c: [0] },
        { t: "La lumière du soleil", c: [0] },
        { t: "Le vent qui pousse un voilier", c: [0] },
        { t: "L'eau du robinet", c: [1] },
        { t: "Une bouteille d'eau minérale", c: [1] },
        { t: "Des champignons cuisinés au restaurant", c: [1] },
        { t: "Des champignons qui poussent en forêt", c: [0] },
      ],
      explication: "L'eau du robinet est captée, traitée et acheminée, puis facturée : c'est un bien économique. Les champignons en forêt sont libres, mais une fois cueillis, préparés et servis, ils deviennent un bien économique.",
    },
    {
      id: "g2", type: "choix", sujet: "Libres ou économiques", revoir: "libres",
      q: "Quelles sont les caractéristiques d'un <b>bien libre</b> ?",
      options: [
        "Disponible en quantité illimitée dans la nature, gratuit, sans intervention humaine",
        "Rare, produit par l'homme, payant",
        "Immatériel et produit par une entreprise",
        "Fourni gratuitement par l'État",
      ],
      correct: [0],
    },
    {
      id: "g3", type: "choix", sujet: "Libres ou économiques", revoir: "libres",
      q: "Qu'est-ce qui transforme un bien libre en bien économique ?",
      options: ["L'intervention humaine (le travail)", "La météo", "Une loi", "La publicité"],
      correct: [0],
      explication: "Cueillir, transformer, transporter, emballer : le travail rend le bien rare et lui donne un prix.",
    },
    {
      id: "g4", type: "vf", sujet: "Libres ou économiques", revoir: "libres",
      q: "Vrai ou faux ?",
      items: [
        { t: "Un bien économique a un prix.", v: true },
        { t: "L'eau du robinet est un bien libre.", v: false, note: "Elle est captée, traitée, distribuée et facturée : c'est un bien économique." },
        { t: "Un bien libre peut devenir rare et donc économique.", v: true, note: "Par exemple l'eau potable dans les régions de sécheresse." },
        { t: "La plupart des biens que nous consommons sont des biens libres.", v: false },
      ],
    },
    {
      id: "g5", type: "tableau", sujet: "Biens ou services", revoir: "services",
      q: "Bien (matériel) ou service (immatériel) ?",
      colonnes: ["Bien", "Service"],
      lignes: [
        { t: "Un ordinateur portable", c: [0] },
        { t: "Une coupe chez le coiffeur", c: [1] },
        { t: "Une consultation chez le médecin", c: [1] },
        { t: "Un camion de livraison", c: [0] },
        { t: "Un cours d'auto-école", c: [1] },
        { t: "Une calculatrice", c: [0] },
        { t: "Une assurance ménage", c: [1] },
        { t: "Un trajet en train", c: [1] },
      ],
      explication: "Un service ne se touche pas : on profite d'une prestation (soin, conseil, transport, assurance).",
    },
    {
      id: "g6", type: "choix", sujet: "Biens ou services", revoir: "services",
      q: "Qu'est-ce qui caractérise un <b>service</b> ?",
      options: [
        "Il est immatériel : c'est une prestation qu'on ne peut pas toucher ni stocker",
        "Il est toujours gratuit",
        "Il est toujours fourni par l'État",
        "Il est matériel et durable",
      ],
      correct: [0],
    },
    {
      id: "g7", type: "tableau", sujet: "Consommation ou production", revoir: "production",
      q: "Bien de consommation ou bien de production ?",
      colonnes: ["Consommation", "Production"],
      lignes: [
        { t: "La voiture de la famille Rossier", c: [0] },
        { t: "Le taxi d'un chauffeur indépendant", c: [1] },
        { t: "La machine à café de la cuisine familiale", c: [0] },
        { t: "Le four à pizza d'un restaurant", c: [1] },
        { t: "Le tracteur d'un agriculteur", c: [1] },
        { t: "La pizza mangée par un client", c: [0] },
        { t: "L'ordinateur d'une comptable dans une fiduciaire", c: [1] },
      ],
      explication: "Ce n'est pas l'objet qui compte, mais son usage : satisfaire directement un besoin (consommation) ou servir à produire d'autres biens ou services (production).",
    },
    {
      id: "g8", type: "choix", sujet: "Consommation ou production", revoir: "production",
      q: "Comment appelle-t-on aussi les biens de production ?",
      options: ["Biens d'investissement", "Biens libres", "Biens de luxe", "Biens publics"],
      correct: [0],
    },
    {
      id: "g9", type: "ouverte", sujet: "Consommation ou production", revoir: "production",
      q: "Expliquez pourquoi une même voiture peut être un bien de consommation <b>ou</b> un bien de production.",
      modele: "Tout dépend de son <b>usage</b>. La voiture d'une famille <b>satisfait directement un besoin</b> (se déplacer) : c'est un bien de consommation. La même voiture utilisée comme <b>taxi</b> sert à produire un service de transport : c'est un bien de production.",
    },
    {
      id: "g10", type: "choix", sujet: "Types de biens", revoir: "biens",
      q: "Un tracteur acheté par un agriculteur est un bien…",
      options: ["économique", "matériel", "de production", "libre", "de consommation", "immatériel"],
      correct: [0, 1, 2],
      explication: "Il a un prix (économique), on peut le toucher (matériel) et il sert à produire (production).",
    },

    /* ============ 5. FACTEURS DE PRODUCTION ============ */
    {
      id: "f1", type: "choix", sujet: "Facteurs de production", revoir: "facteurs",
      q: "Quels sont les trois facteurs de production classiques ?",
      options: ["Le sol, le travail, le capital", "L'offre, la demande, le prix", "Les biens, les services, les besoins", "L'État, les ménages, les entreprises"],
      correct: [0],
      explication: "On y ajoute souvent l'esprit d'entreprise (savoir-faire, information, progrès technique).",
    },
    {
      id: "f2", type: "tableau", sujet: "Facteurs de production", revoir: "facteurs",
      q: "À quel facteur de production correspond chaque élément ?",
      colonnes: ["Sol", "Travail", "Capital"],
      lignes: [
        { t: "L'emplacement d'un magasin au centre-ville", c: [0] },
        { t: "Le bois utilisé par une menuiserie", c: [0] },
        { t: "Le travail des apprentis", c: [1] },
        { t: "Un prêt accordé par la banque", c: [2] },
        { t: "Les machines et les bâtiments de l'usine", c: [2] },
        { t: "Un logiciel de gestion", c: [2] },
      ],
      explication: "Sol = emplacement et matières premières. Travail = capital humain. Capital = financier (argent) ou technique, matériel (machines) ou immatériel (logiciels, brevets).",
    },
    {
      id: "f3", type: "choix", sujet: "Facteurs de production", revoir: "facteurs",
      q: "Que désigne l'expression <b>capital humain</b> ?",
      options: [
        "Le travail : les connaissances et compétences des personnes",
        "L'argent investi par les actionnaires",
        "Les bâtiments de l'entreprise",
        "Le nombre d'habitants d'un pays",
      ],
      correct: [0],
    },
    {
      id: "f4", type: "choix", sujet: "Facteurs de production", revoir: "facteurs",
      q: "Lequel est un exemple de <b>capital technique immatériel</b> ?",
      options: ["Un brevet ou un logiciel", "Un billet de 100 francs", "Un terrain", "Une employée"],
      correct: [0],
      explication: "Le capital technique est matériel (machines, véhicules, bâtiments) ou immatériel (logiciels, brevets, licences).",
    },
    {
      id: "f5", type: "choix", sujet: "Facteurs de production", revoir: "facteurs",
      q: "Que recouvre l'<b>esprit d'entreprise</b> ?",
      options: [
        "Le savoir-faire, l'information et le progrès technique qui permettent de bien combiner les autres facteurs",
        "Les matières premières",
        "L'argent prêté par les banques",
        "Le nombre d'employés",
      ],
      correct: [0],
      explication: "C'est la capacité d'organiser la production, d'innover et de prendre des risques. On le considère souvent comme un 4<sup>e</sup> facteur.",
    },
    {
      id: "f6", type: "trous", sujet: "Facteurs de production", revoir: "facteurs",
      q: "Complétez.",
      texte: "À l'aide des facteurs de production, l'entreprise met à disposition des [[*biens et services|besoins|salaires]] qui satisfont les [[*besoins|facteurs|intérêts]] des consommateurs.",
    },

    /* ============ 6. RÉMUNÉRATION ============ */
    {
      id: "r1", type: "tableau", sujet: "Rémunération des facteurs", revoir: "remuneration",
      q: "Quelle rémunération reçoit chacun ?",
      colonnes: ["Loyer / prix d'achat", "Salaire", "Intérêts", "Bénéfice"],
      lignes: [
        { t: "Le propriétaire qui loue le local commercial", c: [0] },
        { t: "Le fournisseur de matières premières", c: [0] },
        { t: "L'employée de l'entreprise", c: [1] },
        { t: "La banque qui a prêté de l'argent", c: [2] },
        { t: "L'entrepreneur qui a pris le risque", c: [3] },
      ],
      explication: "Sol → loyer ou prix d'achat · Travail → salaire · Capital → intérêts · Esprit d'entreprise → bénéfice.",
    },
    {
      id: "r2", type: "choix", sujet: "Rémunération des facteurs", revoir: "remuneration",
      q: "Que rémunère le <b>bénéfice</b> ?",
      options: ["L'esprit d'entreprise (et le risque pris)", "Le travail", "Le sol", "Le capital financier"],
      correct: [0],
    },
    {
      id: "r3", type: "choix", sujet: "Rémunération des facteurs", revoir: "remuneration",
      q: "Que reçoit l'entreprise en échange des biens et services qu'elle vend ?",
      options: ["Le prix de vente", "Un salaire", "Des intérêts", "Un loyer"],
      correct: [0],
      explication: "Avec le prix de vente, elle paie les autres facteurs. Ce qui reste est le bénéfice.",
    },
    {
      id: "r4", type: "vf", sujet: "Rémunération des facteurs", revoir: "remuneration",
      q: "Vrai ou faux ?",
      items: [
        { t: "Le salaire rémunère le facteur travail.", v: true },
        { t: "Les intérêts rémunèrent le facteur sol.", v: false, note: "Les intérêts rémunèrent le <b>capital</b> financier." },
        { t: "Le loyer rémunère l'utilisation d'un emplacement.", v: true },
        { t: "Le bénéfice est garanti à l'entrepreneur.", v: false, note: "L'entrepreneur prend un risque : il peut aussi faire une perte." },
      ],
    },

    /* ============ CAS PRATIQUES ============ */
    {
      id: "x1", type: "choix", sujet: "Cas pratique", revoir: "biens",
      q: "Léa achète un vélo électrique pour ses loisirs. De quel type de bien s'agit-il ?",
      options: ["Économique", "Matériel", "De consommation", "Libre", "De production", "Immatériel"],
      correct: [0, 1, 2],
    },
    {
      id: "x2", type: "choix", sujet: "Cas pratique", revoir: "production",
      q: "Un boulanger achète un nouveau four. Pour lui, ce four est…",
      options: ["un bien de production (investissement)", "un bien de consommation", "un bien libre", "un service"],
      correct: [0],
      explication: "Le four sert à produire d'autres biens : le pain.",
    },
    {
      id: "x3", type: "choix", sujet: "Cas pratique", revoir: "facteurs",
      q: "Un hôtel au bord du lac de Neuchâtel attire ses clients grâce à sa vue exceptionnelle. De quel facteur de production profite-t-il surtout ?",
      options: ["Le sol (l'emplacement)", "Le travail", "Le capital financier", "L'esprit d'entreprise"],
      correct: [0],
    },
    {
      id: "x4", type: "choix", sujet: "Cas pratique", revoir: "remuneration",
      q: "Sara ouvre un café. Elle emprunte 50 000 francs à sa banque. Que devra-t-elle verser à la banque en plus du remboursement ?",
      options: ["Des intérêts", "Un salaire", "Un loyer", "Son bénéfice"],
      correct: [0],
    },
    {
      id: "x5", type: "ouverte", sujet: "Cas pratique", revoir: "biens",
      q: "Choisissez un objet que vous possédez. Classez-le selon tous les critères vus (libre ou économique, bien ou service, consommation ou production) et indiquez le besoin qu'il satisfait.",
      modele: "<i>Exemple</i> : mon smartphone est un bien <b>économique</b> (il a un prix), <b>matériel</b> (on peut le toucher) et de <b>consommation</b> (il satisfait directement mon besoin). Il répond à un besoin <b>social</b> : communiquer avec les autres.",
    },
  ],
};
