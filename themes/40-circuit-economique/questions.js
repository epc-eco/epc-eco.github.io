/* Banque de questions — Chapitre 40 : Circuit économique, prestation économique
   Pour ajouter une question : copier un bloc existant du même type et l'adapter.
   "revoir" = identifiant de la section de la théorie (voir la liste "sections"). */

window.THEME = {
  id: "eco-40-circuit-economique",
  titre: "Chapitre 40 · Circuit économique, prestation économique",
  theorie: "theorie.html",
  accueil: "../../index.html",
};

window.QUESTIONS = {
  sections: {
    "fil-rouge": "Le fil rouge de la 3e année",
    circuit: "Le circuit économique",
    agents: "Les cinq agents économiques",
    elargi: "Le circuit économique élargi",
    pib: "Le PIB",
    calcul: "Le calcul du PIB",
    "valeur-ajoutee": "La valeur ajoutée",
    approches: "Les trois approches",
    reel: "Le PIB réel",
    comparer: "Comparer les pays",
    defauts: "Les défauts du PIB",
    alternatives: "D'autres indicateurs",
    ecologiques: "Les indicateurs écologiques",
    hpi: "Le Happy Planet Index",
  },

  questions: [
    /* ============ 1. LE CIRCUIT ============ */
    {
      id: "c1", type: "choix", sujet: "Le circuit", revoir: "circuit",
      q: "Qu'est-ce que le <b>circuit économique</b> ?",
      options: [
        "Un schéma qui représente les échanges entre les agents économiques",
        "Le trajet des marchandises entre deux usines",
        "Une course automobile financée par l'État",
        "La liste des entreprises cotées en bourse",
      ],
      correct: [0],
    },
    {
      id: "c2", type: "tableau", sujet: "Flux réels et monétaires", revoir: "circuit",
      q: "Flux réel ou flux monétaire ?",
      colonnes: ["Réel", "Monétaire"],
      lignes: [
        { t: "Une apprentie travaille dans un garage.", c: [0] },
        { t: "Le garage lui verse son salaire.", c: [1] },
        { t: "Elle achète un scooter.", c: [0] },
        { t: "Elle paie le scooter au vendeur.", c: [1] },
      ],
      explication: "Flux réel = travail, biens, services. Flux monétaire = argent versé en échange, dans le sens inverse.",
    },
    {
      id: "c3", type: "trous", sujet: "Le circuit simple", revoir: "circuit",
      q: "Complétez le circuit simple.",
      texte: "Les ménages fournissent leur [[*travail|épargne|impôts]] aux entreprises, qui leur versent des [[*salaires|intérêts|subventions]]. Les entreprises fournissent des [[*biens et services|crédits|impôts]] aux ménages, qui les [[*paient|exportent|prêtent]]. Les flux réels et monétaires vont en sens [[*inverse|identique]].",
    },
    {
      id: "c4", type: "vf", sujet: "Le circuit", revoir: "circuit",
      q: "Vrai ou faux ?",
      items: [
        { t: "Le circuit économique est une représentation simplifiée de la réalité.", v: true },
        { t: "À chaque flux réel correspond un flux monétaire de même valeur.", v: true },
        { t: "Un flux monétaire va dans le même sens que le flux réel correspondant.", v: false, note: "Il va dans le <b>sens inverse</b> : le travail va vers l'entreprise, le salaire vers le ménage." },
      ],
    },

    /* ============ 2. LES AGENTS ============ */
    {
      id: "a1", type: "choix", sujet: "Les agents", revoir: "agents",
      q: "Quels sont les cinq agents du circuit économique élargi ?",
      options: ["Les ménages", "Les entreprises", "L'État", "Les banques", "L'étranger", "Les syndicats", "Les médias"],
      correct: [0, 1, 2, 3, 4],
    },
    {
      id: "a2", type: "tableau", sujet: "Les agents", revoir: "agents",
      q: "Quel agent économique est concerné ?",
      colonnes: ["Ménages", "Entreprises", "État", "Banques"],
      lignes: [
        { t: "La Banque cantonale de Fribourg", c: [3] },
        { t: "Une famille de Bulle", c: [0] },
        { t: "Le canton de Fribourg", c: [2] },
        { t: "Une PME de mécanique à Marly", c: [1] },
      ],
    },
    {
      id: "a3", type: "tableau", sujet: "Les agents", revoir: "agents",
      q: "Quel agent joue ce rôle ?",
      colonnes: ["Ménages", "Entreprises", "État", "Banques"],
      lignes: [
        { t: "Il récolte l'épargne et accorde des crédits.", c: [3] },
        { t: "Il prélève des impôts et offre des services collectifs.", c: [2] },
        { t: "Il fournit du travail et consomme.", c: [0] },
        { t: "Il produit des biens et des services.", c: [1] },
      ],
    },

    /* ============ 3. CIRCUIT ÉLARGI ============ */
    {
      id: "e1", type: "tableau", sujet: "Circuit élargi", revoir: "elargi",
      q: "Qui reçoit ce flux ?",
      colonnes: ["Ménages", "Entreprises", "Banques", "État"],
      lignes: [
        { t: "L'épargne des ménages", c: [2] },
        { t: "Les crédits des banques", c: [1] },
        { t: "Les impôts sur le revenu", c: [3] },
        { t: "Les rentes de la sécurité sociale", c: [0] },
      ],
    },
    {
      id: "e2", type: "vf", sujet: "Circuit élargi", revoir: "elargi",
      q: "Vrai ou faux ?",
      items: [
        { t: "Les banques versent des intérêts aux ménages qui épargnent.", v: true },
        { t: "Les entreprises paient des intérêts sur les crédits reçus.", v: true },
        { t: "L'État ne fournit rien en échange des impôts.", v: false, note: "Il fournit des <b>services collectifs</b> (écoles, routes, police…) et la <b>sécurité sociale</b>." },
        { t: "Les exportations sont des biens vendus à l'étranger.", v: true },
      ],
    },
    {
      id: "e3", type: "ouverte", sujet: "Circuit élargi", revoir: "elargi",
      q: "Les ménages suisses décident d'épargner beaucoup plus et de consommer moins. Que se passe-t-il dans le circuit économique ?",
      modele: "Les ménages achètent moins de biens et services : les entreprises <b>vendent moins</b>, produisent moins et peuvent réduire leurs effectifs ou les salaires. L'État encaisse moins d'impôts. En revanche, les banques reçoivent plus d'<b>épargne</b> et peuvent accorder plus de <b>crédits</b>, ce qui peut favoriser les investissements. Si la baisse de consommation est forte, l'économie ralentit (récession, ch. 46).",
    },
    {
      id: "e4", type: "trous", sujet: "Circuit élargi", revoir: "elargi",
      q: "Complétez.",
      texte: "Les banques collectent l'[[*épargne|impôt|exportation]] des ménages et la prêtent aux entreprises sous forme de [[*crédits|subventions|salaires]]. Les entreprises vendent des biens à l'étranger : ce sont des [[*exportations|importations|placements]].",
    },

    /* ============ 4. LE PIB ============ */
    {
      id: "p1", type: "choix", sujet: "Le PIB", revoir: "pib",
      q: "Que mesure le <b>PIB</b> ?",
      options: [
        "La valeur des biens et services produits dans un pays en une année",
        "La valeur des biens et services produits par les seules entreprises suisses, partout dans le monde",
        "Le total des salaires versés en Suisse",
        "La fortune des habitants",
      ],
      correct: [0],
    },
    {
      id: "p2", type: "tableau", sujet: "PIB et PNB", revoir: "pib",
      q: "Cette production compte-t-elle dans le PIB suisse, dans le PNB suisse, ou dans les deux ?",
      colonnes: ["PIB seulement", "PNB seulement", "Les deux"],
      lignes: [
        { t: "Une usine Nestlé à Broc (entreprise suisse en Suisse)", c: [2] },
        { t: "Une usine Nestlé au Brésil (entreprise suisse à l'étranger)", c: [1] },
        { t: "Le bureau de Google à Zurich (entreprise étrangère en Suisse)", c: [0] },
      ],
      explication: "PIB = produit <b>dans</b> le pays (entreprises suisses et étrangères en Suisse). PNB = produit <b>par</b> le pays (entreprises suisses en Suisse et à l'étranger).",
    },
    {
      id: "p3", type: "vf", sujet: "Le PIB", revoir: "pib",
      q: "Vrai ou faux ?",
      items: [
        { t: "Le PIB se calcule grâce à la comptabilité nationale.", v: true },
        { t: "Le PIB compte la production des entreprises étrangères installées en Suisse.", v: true },
        { t: "Le PIB et le PNB donnent toujours exactement le même chiffre.", v: false, note: "Ils diffèrent selon ce que les entreprises suisses produisent à l'étranger et ce que les entreprises étrangères produisent en Suisse." },
      ],
    },

    /* ============ 5. CALCUL DU PIB ============ */
    {
      id: "v1", type: "choix", sujet: "Calcul du PIB", revoir: "calcul",
      q: "Quelles sont les trois approches pour calculer le PIB ?",
      options: ["Par la production", "Par les revenus", "Par la dépense", "Par la population", "Par la monnaie"],
      correct: [0, 1, 2],
      explication: "Les trois donnent le même résultat : ce qui est produit est gagné, puis dépensé.",
    },
    {
      id: "v2", type: "choix", sujet: "Valeur ajoutée", revoir: "valeur-ajoutee",
      q: "Un menuisier achète du bois pour 300 fr. et vend une table 1000 fr. Quelle est sa <b>valeur ajoutée</b> ?",
      options: ["700 fr.", "1000 fr.", "1300 fr.", "300 fr."],
      correct: [0],
      explication: "Valeur ajoutée = ventes − consommations intermédiaires = 1000 − 300 = 700 fr.",
    },
    {
      id: "v3", type: "trous", sujet: "Valeur ajoutée", revoir: "valeur-ajoutee",
      q: "Complétez.",
      texte: "Pour calculer le PIB par la production, on n'additionne pas les ventes, sinon les matières premières seraient comptées [[*plusieurs fois|une seule fois|jamais]]. On additionne la valeur [[*ajoutée|perdue|fiscale]] : la production moins les consommations [[*intermédiaires|finales|privées]].",
    },
    {
      id: "v4", type: "tableau", sujet: "Les trois approches", revoir: "approches",
      q: "Dans quelle approche ce poste apparaît-il ?",
      colonnes: ["Production", "Revenus", "Dépense"],
      lignes: [
        { t: "Les salaires des employés", c: [1] },
        { t: "Les exportations moins les importations", c: [2] },
        { t: "Les consommations intermédiaires", c: [0] },
        { t: "Les bénéfices nets des entrepreneurs", c: [1] },
        { t: "La consommation des ménages", c: [2] },
      ],
    },
    {
      id: "v5", type: "trous", sujet: "Les trois approches", revoir: "approches",
      q: "Complétez la formule de l'approche par la dépense.",
      texte: "PIB = consommation des [[*ménages|banques]] + dépenses de l'[[*État|étranger]] + [[*investissements|salaires]] + exportations − [[*importations|impôts]].",
    },
    {
      id: "v6", type: "choix", sujet: "Les trois approches", revoir: "approches",
      q: "Calculez le PIB (en milliards) : consommation des ménages 420, dépenses de l'État 90, investissements 200, exportations 600, importations 510.",
      options: ["800", "1820", "710", "1310"],
      correct: [0],
      explication: "420 + 90 + 200 + (600 − 510) = 710 + 90 = 800.",
    },
    {
      id: "v7", type: "vf", sujet: "Les trois approches", revoir: "approches",
      q: "Vrai ou faux ? (Suisse)",
      items: [
        { t: "Environ 60 % du PIB est versé aux salariés.", v: true },
        { t: "Plus de la moitié du PIB vient des dépenses des ménages.", v: true },
        { t: "On ajoute les importations, car elles sont achetées en Suisse.", v: false, note: "On les <b>soustrait</b> : elles ont été produites à l'étranger." },
        { t: "Les trois approches donnent le même PIB.", v: true },
      ],
    },
    {
      id: "v8", type: "ouverte", sujet: "Les trois approches", revoir: "calcul",
      q: "Pourquoi les trois approches (production, revenus, dépense) donnent-elles le même PIB ? Aidez-vous du circuit économique.",
      modele: "Tout ce qui est <b>produit</b> est vendu à quelqu'un : la valeur de la production correspond donc à des <b>dépenses</b>. Et l'argent de ces ventes est réparti entre ceux qui ont participé à la production, sous forme de <b>revenus</b> (salaires, bénéfices, impôts, amortissements). Dans le circuit, chaque flux réel a son flux monétaire de même valeur : on mesure trois fois la même chose, à trois endroits du circuit.",
    },

    /* ============ 6. PIB RÉEL ============ */
    {
      id: "r1", type: "trous", sujet: "PIB réel", revoir: "reel",
      q: "Complétez.",
      texte: "Le PIB additionne des [[*prix|quantités seulement|salaires seulement]]. Si les prix augmentent, le PIB [[*nominal|réel]] augmente même sans production supplémentaire. PIB réel ≈ PIB nominal − [[*inflation|chômage|impôts]].",
    },
    {
      id: "r2", type: "choix", sujet: "PIB réel", revoir: "reel",
      q: "Le PIB nominal augmente de 4 % et l'inflation est de 3 %. Quelle est la croissance réelle ?",
      options: ["Environ 1 %", "Environ 7 %", "4 %", "−3 %"],
      correct: [0],
      explication: "4 % − 3 % ≈ 1 %. C'est la croissance <b>réelle</b>, sans l'effet des prix.",
    },
    {
      id: "r3", type: "tableau", sujet: "PIB réel", revoir: "reel",
      q: "Croissance nominale ou croissance réelle ?",
      colonnes: ["Nominale", "Réelle"],
      lignes: [
        { t: "Calculée en francs courants, avec l'effet de la hausse des prix", c: [0] },
        { t: "Montre si on a vraiment produit davantage", c: [1] },
        { t: "Peut augmenter uniquement à cause de l'inflation", c: [0] },
      ],
    },

    /* ============ 7. COMPARER ============ */
    {
      id: "k1", type: "tableau", sujet: "Comparer les pays", revoir: "comparer",
      q: "Quel indicateur utiliser ?",
      colonnes: ["PIB total", "PIB / habitant", "PIB / hab. en PPA"],
      lignes: [
        { t: "Mesurer la puissance économique d'un pays", c: [0] },
        { t: "Comparer la richesse moyenne de la Suisse et de l'Allemagne", c: [1] },
        { t: "Tenir compte du fait que la vie est moins chère en Inde", c: [2] },
      ],
    },
    {
      id: "k2", type: "vf", sujet: "Comparer les pays", revoir: "comparer",
      q: "Vrai ou faux ?",
      items: [
        { t: "Les États-Unis ont le PIB total le plus élevé du monde.", v: true },
        { t: "La Chine a l'un des PIB par habitant les plus élevés du monde.", v: false, note: "Son PIB total est le 2e du monde, mais son PIB par habitant (≈ 13 000 $) reste modeste : sa population est énorme." },
        { t: "La Suisse a un PIB total modeste, mais un PIB par habitant parmi les plus élevés.", v: true },
        { t: "Pour comparer les pays, on convertit leur PIB dans une même monnaie, souvent le dollar.", v: true },
      ],
    },
    {
      id: "k3", type: "choix", sujet: "Comparer les pays", revoir: "comparer",
      q: "Pourquoi le <b>taux de change</b> rend-il la comparaison difficile ?",
      options: [
        "Si le franc monte face au dollar, le PIB suisse en dollars augmente, sans que la Suisse produise davantage",
        "Parce que chaque pays calcule son PIB dans la même monnaie",
        "Parce que le taux de change ne varie jamais",
        "Parce que le PIB est calculé en euros partout",
      ],
      correct: [0],
    },
    {
      id: "k4", type: "ouverte", sujet: "Comparer les pays", revoir: "comparer",
      q: "Expliquez ce qu'est la <b>parité de pouvoir d'achat</b> (PPA) et pourquoi elle réduit l'avance de la Suisse.",
      modele: "La PPA corrige le PIB en tenant compte du <b>niveau des prix</b> de chaque pays : on compare ce qu'on peut réellement acheter. La vie étant très chère en Suisse, un même revenu en dollars y achète moins de biens qu'ailleurs. En PPA, le PIB par habitant suisse reste élevé, mais l'écart avec les autres pays <b>se réduit</b>.",
    },

    /* ============ 8. DÉFAUTS ============ */
    {
      id: "d1", type: "choix", sujet: "Défauts du PIB", revoir: "defauts",
      q: "Quels sont des défauts du PIB ?",
      options: [
        "Il ne dit rien sur la répartition des richesses",
        "Il oublie le bénévolat et le travail au noir",
        "Il augmente avec des dépenses non souhaitées (pollution, criminalité)",
        "Il ne tient pas compte du développement durable",
        "Il ne mesure pas la production",
      ],
      correct: [0, 1, 2, 3],
    },
    {
      id: "d2", type: "tableau", sujet: "Défauts du PIB", revoir: "defauts",
      q: "Quel défaut du PIB cet exemple illustre-t-il ?",
      colonnes: ["Souterraine", "Non souhaité", "Répartition"],
      lignes: [
        { t: "Un pays riche où 1 % de la population possède presque tout", c: [2] },
        { t: "Une grand-mère garde gratuitement ses petits-enfants.", c: [0] },
        { t: "Une commune paie pour nettoyer une rivière polluée.", c: [1] },
        { t: "Un ouvrier travaille au noir le week-end.", c: [0] },
      ],
    },
    {
      id: "d3", type: "vf", sujet: "Défauts du PIB", revoir: "defauts",
      q: "Vrai ou faux ?",
      items: [
        { t: "Certains pays exagèrent leur PIB pour paraître puissants.", v: true },
        { t: "Certains pays peuvent avoir intérêt à paraître pauvres pour recevoir de l'aide.", v: true },
        { t: "Le PIB mesure le bien-être et les libertés de la population.", v: false, note: "Il mesure la <b>production</b> et la puissance économique, pas le bien-être." },
        { t: "Une guerre peut faire augmenter le PIB.", v: true, note: "Armement, reconstruction : ce sont des dépenses comptées dans le PIB." },
      ],
    },

    /* ============ 9. AUTRES INDICATEURS ============ */
    {
      id: "i1", type: "choix", sujet: "L'IDH", revoir: "alternatives",
      q: "Que combine l'<b>indice de développement humain</b> (IDH) ?",
      options: ["L'espérance de vie", "La durée de scolarisation", "Le revenu par habitant en PPA", "Le nombre de voitures", "Le taux directeur"],
      correct: [0, 1, 2],
    },
    {
      id: "i2", type: "vf", sujet: "L'IDH", revoir: "alternatives",
      q: "Vrai ou faux ?",
      items: [
        { t: "L'IDH va de 0 à 1.", v: true },
        { t: "La Suisse est parmi les tout premiers pays au classement de l'IDH.", v: true, note: "0,970, à égalité avec la Norvège, juste derrière l'Islande (rapport 2025)." },
        { t: "L'IDH ne tient compte que du revenu.", v: false, note: "Il combine santé, éducation et niveau de vie." },
      ],
    },
    {
      id: "i3", type: "tableau", sujet: "Indicateurs écologiques", revoir: "ecologiques",
      q: "De quel indicateur s'agit-il ?",
      colonnes: ["Empreinte", "Dépassement", "Happy Planet"],
      lignes: [
        { t: "Le 30 juillet 2026, l'humanité a consommé ce que la Terre renouvelle en un an.", c: [1] },
        { t: "Il faudrait près de 3 planètes si tout le monde vivait comme en Suisse.", c: [0] },
        { t: "Le Vanuatu offre des vies longues et heureuses avec peu de ressources.", c: [2] },
      ],
    },
    {
      id: "i4", type: "choix", sujet: "Indicateurs écologiques", revoir: "ecologiques",
      q: "Le jour du dépassement de la Suisse tombe en mai, celui du monde fin juillet. Qu'est-ce que cela signifie ?",
      options: [
        "Un habitant de la Suisse consomme beaucoup plus de ressources que la moyenne mondiale",
        "La Suisse produit plus de ressources naturelles que les autres pays",
        "Les Suisses consomment moins que la moyenne mondiale",
        "Cela n'a aucun rapport avec la consommation",
      ],
      correct: [0],
    },
    {
      id: "i5", type: "trous", sujet: "Happy Planet Index", revoir: "hpi",
      q: "Complétez.",
      texte: "Le Happy Planet Index combine l'[[*espérance de vie|inflation|exportation]] et le [[*bien-être|PIB|chômage]] des habitants, puis divise par l'[[*empreinte écologique|population|dette publique]]. Les pays en tête ont souvent un PIB [[*modeste|énorme]].",
    },
    {
      id: "i6", type: "ouverte", sujet: "D'autres indicateurs", revoir: "alternatives",
      q: "Pourquoi a-t-on créé des indicateurs comme l'IDH ou le Happy Planet Index, alors que le PIB existe déjà ?",
      modele: "Le PIB ne mesure que la <b>production</b> : il ne dit rien sur la santé, l'éducation, les inégalités, le bonheur ou l'environnement. L'<b>IDH</b> ajoute la santé et l'éducation ; le <b>Happy Planet Index</b> et l'empreinte écologique tiennent compte du bien-être et des <b>ressources</b> utilisées. Ils montrent qu'un pays peut produire beaucoup sans que sa population vive forcément mieux, ou en épuisant la planète.",
    },
  ],
};
