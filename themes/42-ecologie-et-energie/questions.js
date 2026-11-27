/* Banque de questions — Chapitre 42 : Écologie et énergie
   Pour ajouter une question : copier un bloc existant du même type et l'adapter.
   "revoir" = identifiant de la section de la théorie (voir la liste "sections"). */

window.THEME = {
  id: "eco-42-ecologie-et-energie",
  titre: "Chapitre 42 · Écologie et énergie",
  theorie: "theorie.html",
  accueil: "../../index.html",
};

window.QUESTIONS = {
  sections: {
    "fil-rouge": "Le fil rouge de la 3e année",
    ecologie: "L'écologie, c'est aussi de l'économie",
    serre: "L'effet de serre",
    records: "La planète bat des records",
    emissions: "Qui émet ?",
    couts: "Le coût économique du réchauffement",
    marche: "Pourquoi le marché ne suffit pas",
    instruments: "Les réponses de l'État",
    avantages: "Avantages et inconvénients des mesures",
    energie: "L'énergie, moteur de l'économie",
    sources: "Les sources d'énergie",
    electricite: "L'électricité",
    consommation: "La consommation d'énergie en Suisse",
    politique: "La politique énergétique suisse",
    votations: "Les votations sur le climat et l'énergie",
    durable: "Le développement durable",
    piliers: "Les trois piliers",
    suisse: "La Suisse et le développement durable",
  },

  questions: [
    /* ============ 1. ÉCOLOGIE ============ */
    {
      id: "c1", type: "tableau", sujet: "L'écologie", revoir: "ecologie",
      q: "Quel sens du mot « écologie » ?",
      colonnes: ["Science", "Politique", "Prise de conscience"],
      lignes: [
        { t: "Une biologiste étudie comment les abeilles dépendent des fleurs de montagne.", c: [0] },
        { t: "Le canton crée une réserve naturelle et limite les rejets dans les rivières.", c: [1] },
        { t: "Des jeunes réalisent l'impact de leurs achats sur la planète.", c: [2] },
      ],
    },
    {
      id: "c2", type: "choix", sujet: "L'écologie", revoir: "ecologie",
      q: "Pourquoi l'écologie concerne-t-elle aussi l'économie ?",
      options: [
        "La nature fournit des ressources et absorbe nos déchets, sans que ce service soit payé",
        "Parce que les écologistes travaillent dans les banques",
        "Parce que la nature fixe les taux d'intérêt",
        "Elle ne la concerne pas",
      ],
      correct: [0],
    },

    /* ============ 2. EFFET DE SERRE ============ */
    {
      id: "s1", type: "trous", sujet: "L'effet de serre", revoir: "serre",
      q: "Remettez les étapes dans l'ordre.",
      texte: "La lumière du [[*Soleil|sol|nuage]] traverse l'atmosphère et chauffe le sol. Une partie est [[*renvoyée vers l'espace|stockée dans le sol|transformée en pluie]]. Le sol chauffé émet de la chaleur, sous forme d'[[*infrarouges|ultraviolets|ondes radio]]. Les gaz à effet de serre en renvoient une partie vers le [[*sol|Soleil|espace]].",
    },
    {
      id: "s2", type: "vf", sujet: "L'effet de serre", revoir: "serre",
      q: "Vrai ou faux ?",
      items: [
        { t: "Sans effet de serre, la température moyenne de la Terre serait d'environ −18 °C.", v: true },
        { t: "L'effet de serre naturel est une mauvaise chose pour la vie sur Terre.", v: false, note: "Il est <b>vital</b> : il donne une moyenne d'environ 15 °C. C'est son <b>renforcement</b> par l'homme qui pose problème." },
        { t: "Les activités humaines renforcent l'effet de serre en rejetant des gaz.", v: true },
        { t: "Le CO₂ provient surtout de la combustion du pétrole, du gaz et du charbon.", v: true },
      ],
    },
    {
      id: "s3", type: "tableau", sujet: "Les gaz à effet de serre", revoir: "serre",
      q: "Quel gaz est surtout émis par cette activité ?",
      colonnes: ["CO₂", "CH₄", "N₂O"],
      lignes: [
        { t: "Le chauffage au mazout", c: [0] },
        { t: "L'élevage de vaches", c: [1] },
        { t: "L'épandage d'engrais", c: [2] },
        { t: "Les voitures à essence", c: [0] },
      ],
    },
    {
      id: "s4", type: "choix", sujet: "Les records", revoir: "records",
      q: "Quelle limite de réchauffement l'Accord de Paris (2015) cherche-t-il à ne pas dépasser durablement ?",
      options: ["+1,5 °C par rapport à l'époque préindustrielle", "+5 °C", "+0,1 °C", "Aucune limite"],
      correct: [0],
      explication: "2024 a été la première année au-dessus de +1,5 °C (+1,60 °C).",
    },
    {
      id: "s5", type: "choix", sujet: "Les records", revoir: "records",
      q: "Quelle a été l'année la plus chaude jamais mesurée dans le monde (jusqu'à fin 2025) ?",
      options: ["2024", "2003", "1998", "2015"],
      correct: [0],
      explication: "+1,60 °C par rapport à 1850-1900. Les 11 dernières années sont les 11 plus chaudes jamais mesurées.",
    },

    /* ============ 3. ÉMISSIONS ============ */
    {
      id: "e1", type: "choix", sujet: "Les émissions en Suisse", revoir: "emissions",
      q: "Quel secteur émet le plus de gaz à effet de serre en Suisse ?",
      options: ["Les transports", "L'agriculture", "Les déchets", "Les banques"],
      correct: [0],
      explication: "Environ un tiers des émissions. Suivent l'industrie et les bâtiments (chauffage).",
    },
    {
      id: "e2", type: "vf", sujet: "Les émissions", revoir: "emissions",
      q: "Vrai ou faux ?",
      items: [
        { t: "La Suisse a réduit ses émissions d'environ un quart depuis 1990.", v: true, note: "−27 % ; objectif : −50 % en 2030 et zéro net en 2050." },
        { t: "La Chine émet environ un tiers du CO₂ fossile mondial.", v: true },
        { t: "En 2024, les émissions mondiales de CO₂ ont fortement baissé.", v: false, note: "Environ 38 milliards de tonnes : un nouveau <b>record</b>." },
      ],
    },
    {
      id: "e3", type: "choix", sujet: "Par habitant", revoir: "emissions",
      q: "Un habitant de la Suisse émet 3,6 t de CO₂ par an sur le territoire, moins que la moyenne mondiale. Pourquoi ce chiffre est-il trompeur ?",
      options: [
        "Il ne compte pas les émissions des biens importés (voitures, habits, téléphones) produits à l'étranger",
        "Parce que les Suisses ne consomment presque rien",
        "Parce que la Suisse exporte son CO₂ dans des bouteilles",
        "Il n'est pas trompeur : la Suisse est un modèle parfait",
      ],
      correct: [0],
    },
    {
      id: "e4", type: "ouverte", sujet: "Par habitant", revoir: "emissions",
      q: "La Chine émet beaucoup plus de CO₂ que la Suisse au total, mais un habitant de la Chine émet « seulement » 8,7 t. Comment expliquer ces deux constats ?",
      modele: "La Chine a une <b>population énorme</b> (plus de 1,4 milliard) et produit une grande partie des biens du monde : ses émissions <b>totales</b> sont donc très élevées. Mais divisées par le nombre d'habitants, elles sont plus modérées. Une partie de ces émissions sert à fabriquer des produits <b>exportés</b> et consommés ailleurs, notamment en Suisse.",
    },

    /* ============ 4. COÛTS ============ */
    {
      id: "k1", type: "tableau", sujet: "Coûts du réchauffement", revoir: "couts",
      q: "Quel domaine de l'économie cette conséquence touche-t-elle surtout ?",
      colonnes: ["Agriculture", "Tourisme", "Assurances", "Santé"],
      lignes: [
        { t: "Une station de ski des Préalpes manque de neige.", c: [1] },
        { t: "Une sécheresse détruit une partie des récoltes de maïs.", c: [0] },
        { t: "Un orage de grêle endommage des milliers de voitures.", c: [2] },
        { t: "Une canicule provoque des hospitalisations.", c: [3] },
      ],
    },
    {
      id: "k2", type: "choix", sujet: "Coûts du réchauffement", revoir: "couts",
      q: "Pourquoi la fonte de la glace accélère-t-elle le réchauffement ?",
      options: [
        "La glace blanche renvoie la lumière ; sans elle, le sol ou l'océan sombre absorbe plus de chaleur",
        "La glace produit du CO₂ en fondant",
        "La fonte de la glace refroidit la planète",
        "Elle n'a aucun effet",
      ],
      correct: [0],
      explication: "C'est un <b>cercle vicieux</b> : plus il fait chaud, plus la glace fond, plus il fait chaud.",
    },
    {
      id: "k3", type: "choix", sujet: "Facile à dire…", revoir: "couts",
      q: "« Si je prends l'avion, cela ne change rien au climat. » Comment appelle-t-on ce comportement ?",
      options: ["Le passager clandestin", "Le pollueur-payeur", "Le développement durable", "La concurrence parfaite"],
      correct: [0],
      explication: "Chacun profite des efforts des autres sans faire les siens : personne n'agit, et le problème reste.",
    },
    {
      id: "k4", type: "ouverte", sujet: "Facile à dire…", revoir: "couts",
      q: "Pourquoi est-il si difficile de réduire les émissions de gaz à effet de serre, alors que tout le monde connaît le problème ?",
      modele: "C'est un problème <b>collectif</b> : chacun attend que les autres fassent l'effort (passager clandestin). Changer coûte cher et demande de modifier ses <b>habitudes</b> (voiture, avion, chauffage, alimentation) : c'est un problème culturel et social. Les <b>pays pauvres</b> veulent se développer, et les <b>pays riches</b> doivent changer leur mode de vie. Enfin, la pollution ne coûte presque rien à celui qui la produit : rien ne l'incite à changer.",
    },

    /* ============ 5. MARCHÉ ET INSTRUMENTS ============ */
    {
      id: "m1", type: "choix", sujet: "Externalités", revoir: "marche",
      q: "Qu'est-ce qu'une <b>externalité négative</b> ?",
      options: [
        "Un coût causé par une activité, mais payé par d'autres que ceux qui la pratiquent",
        "Un bénéfice reçu par une entreprise étrangère",
        "Une taxe sur les importations",
        "Une baisse du prix d'un bien",
      ],
      correct: [0],
    },
    {
      id: "m2", type: "trous", sujet: "Externalités", revoir: "marche",
      q: "Complétez.",
      texte: "Le prix d'un billet d'avion ne contient pas le coût de la [[*pollution|sécurité|nourriture]] qu'il provoque. Le voyage paraît donc [[*bon marché|très cher]] et on en consomme [[*trop|trop peu]]. L'air et le climat étaient des biens [[*libres|économiques|de luxe]] : gratuits, ils ne sont pas protégés par le marché.",
    },
    {
      id: "m3", type: "tableau", sujet: "Les réponses de l'État", revoir: "instruments",
      q: "Quel type de mesure ?",
      colonnes: ["Taxe", "Subvention", "Norme", "Droits d'émission"],
      lignes: [
        { t: "Une taxe sur le CO₂ est ajoutée au prix du mazout.", c: [0] },
        { t: "La Confédération paie une partie de l'isolation d'une maison.", c: [1] },
        { t: "Les voitures neuves ne doivent pas dépasser une limite de pollution.", c: [2] },
        { t: "Une cimenterie doit acheter un certificat pour chaque tonne de CO₂ émise.", c: [3] },
      ],
    },
    {
      id: "m4", type: "vf", sujet: "Les réponses de l'État", revoir: "instruments",
      q: "Vrai ou faux ?",
      items: [
        { t: "Le principe du pollueur-payeur veut que celui qui pollue paie le coût de sa pollution.", v: true },
        { t: "En Suisse, la taxe CO₂ est en partie redistribuée à la population.", v: true },
        { t: "Une taxe d'incitation a pour but principal de remplir les caisses de l'État.", v: false, note: "Son but est de <b>changer les comportements</b> ; elle est en partie redistribuée." },
        { t: "La taxe au sac est un exemple de pollueur-payeur.", v: true },
      ],
    },
    {
      id: "m5", type: "ouverte", sujet: "Les réponses de l'État", revoir: "instruments",
      q: "Expliquez, avec l'offre et la demande (ch. 41), comment une taxe sur le mazout peut réduire les émissions de CO₂.",
      modele: "La taxe <b>augmente le prix</b> du mazout. Face à un prix plus élevé, la <b>quantité demandée baisse</b> : les ménages chauffent moins, isolent leur maison ou passent à une pompe à chaleur ou au bois (des <b>substituts</b>). Moins de mazout brûlé, c'est moins de CO₂. L'effet est d'autant plus fort que la demande est élastique, donc qu'il existe des alternatives.",
    },
    {
      id: "m6", type: "tableau", sujet: "Avantages et inconvénients", revoir: "avantages",
      q: "Avantage ou inconvénient ?",
      colonnes: ["Avantage", "Inconvénient"],
      lignes: [
        { t: "Taxe : elle touche fort les ménages modestes qui n'ont pas d'alternative.", c: [1] },
        { t: "Norme : son effet est garanti.", c: [0] },
        { t: "Subvention : elle coûte aux contribuables.", c: [1] },
        { t: "Droits d'émission : on réduit là où c'est le moins cher.", c: [0] },
        { t: "Taxe : chacun choisit lui-même comment réduire.", c: [0] },
      ],
    },
    {
      id: "m7", type: "ouverte", sujet: "Avantages et inconvénients", revoir: "avantages",
      q: "En 2021, le peuple a refusé la loi sur le CO₂. En 2023, il a accepté la loi sur le climat. Proposez une explication économique.",
      modele: "La loi sur le CO₂ prévoyait surtout de nouvelles <b>taxes</b> (essence, billets d'avion) : beaucoup de votants les ont jugées trop chères, surtout à la campagne, où l'on dépend de la voiture. La loi sur le climat fixait un <b>objectif</b> (zéro net en 2050) et misait surtout sur des <b>subventions</b> (remplacement des chauffages, innovation) : elle coûtait moins directement aux ménages. Les citoyens acceptent plus facilement d'être aidés que d'être taxés.",
    },
    {
      id: "m8", type: "choix", sujet: "Externalités", revoir: "marche",
      q: "Qui paie le coût d'une externalité négative comme la pollution de l'air ?",
      options: [
        "La société : les malades, les contribuables, les générations futures",
        "Uniquement l'entreprise qui pollue",
        "Personne : la pollution ne coûte rien",
        "La BNS",
      ],
      correct: [0],
    },

    /* ============ 6. ÉNERGIE ============ */
    {
      id: "n1", type: "choix", sujet: "Énergie et économie", revoir: "energie",
      q: "Pourquoi les chocs pétroliers de 1973 et 1979 ont-ils freiné la croissance ?",
      options: [
        "L'énergie est indispensable à la production : quand le pétrole devient très cher, produire coûte plus cher et la croissance chute",
        "Parce que le pétrole est un bien de luxe",
        "Parce que le pétrole était devenu gratuit",
        "Ils n'ont eu aucun effet",
      ],
      correct: [0],
      explication: "Résultat : hausse des prix et du chômage, la stagflation du chapitre 43.",
    },
    {
      id: "n2", type: "tableau", sujet: "Les sources d'énergie", revoir: "sources",
      q: "De quelle source d'énergie s'agit-il ?",
      colonnes: ["Pétrole", "Charbon", "Nucléaire", "Renouvelable"],
      lignes: [
        { t: "Très abondant et bon marché, mais très polluant", c: [1] },
        { t: "Très peu de CO₂, mais des déchets difficiles à gérer", c: [2] },
        { t: "Facile à transporter, nombreuses utilisations, source de conflits", c: [0] },
        { t: "Illimitée, mais irrégulière et difficile à stocker", c: [3] },
      ],
    },
    {
      id: "n3", type: "vf", sujet: "Les sources d'énergie", revoir: "sources",
      q: "Vrai ou faux ?",
      items: [
        { t: "Le gaz naturel est le moins polluant des combustibles fossiles.", v: true },
        { t: "Les énergies renouvelables produisent toujours de l'électricité de façon régulière.", v: false, note: "Le solaire et l'éolien dépendent du soleil et du vent : production <b>irrégulière</b>." },
        { t: "Les réserves de pétrole sont estimées à environ 50 ans au rythme actuel.", v: true },
        { t: "Le nucléaire émet beaucoup de CO₂.", v: false, note: "Il en émet <b>très peu</b>, mais pose d'autres problèmes : risques, déchets." },
      ],
    },
    {
      id: "n4", type: "choix", sujet: "L'électricité", revoir: "electricite",
      q: "Quelle est la première source d'électricité en Suisse ?",
      options: ["L'hydraulique (barrages, fil de l'eau)", "Le charbon", "L'éolien", "Le pétrole"],
      correct: [0],
      explication: "Environ 55 %, puis le nucléaire (27 %) et le solaire (12 %).",
    },
    {
      id: "n5", type: "vf", sujet: "L'énergie en Suisse", revoir: "consommation",
      q: "Vrai ou faux ?",
      items: [
        { t: "La Suisse importe environ deux tiers de l'énergie qu'elle consomme.", v: true, note: "69 % : pétrole, gaz, uranium…" },
        { t: "Les transports sont les plus gros consommateurs d'énergie en Suisse.", v: true },
        { t: "En hiver, la Suisse produit toujours plus d'électricité qu'elle n'en consomme.", v: false, note: "En hiver, elle doit encore <b>importer</b> du courant." },
        { t: "Dans le monde, en 2025, les renouvelables ont produit plus d'électricité que le charbon.", v: true },
      ],
    },
    {
      id: "n6", type: "ouverte", sujet: "L'énergie en Suisse", revoir: "electricite",
      q: "Pourquoi la forte dépendance de la Suisse aux importations d'énergie est-elle un risque économique ?",
      modele: "La Suisse importe environ 69 % de son énergie (pétrole, gaz, uranium). Si les prix mondiaux flambent (guerre, crise), les coûts de production et les prix augmentent en Suisse : <b>inflation importée</b> (ch. 43) et ralentissement de la croissance. En cas de pénurie, l'approvisionnement peut être menacé (risque de black-out en hiver). Produire davantage d'énergie renouvelable en Suisse réduit cette <b>dépendance</b>.",
    },
    {
      id: "n7", type: "tableau", sujet: "Les énergies", revoir: "sources",
      q: "Énergie renouvelable ou non renouvelable ?",
      colonnes: ["Renouvelable", "Non renouvelable"],
      lignes: [
        { t: "Un barrage dans les Alpes", c: [0] },
        { t: "Le gaz naturel", c: [1] },
        { t: "Des panneaux solaires sur un toit", c: [0] },
        { t: "L'uranium d'une centrale nucléaire", c: [1] },
        { t: "Le bois des forêts gérées", c: [0] },
      ],
    },

    /* ============ 7. POLITIQUE ÉNERGÉTIQUE ============ */
    {
      id: "v1", type: "tableau", sujet: "Votations", revoir: "votations",
      q: "Le peuple a-t-il accepté ou refusé ?",
      colonnes: ["Accepté", "Refusé"],
      lignes: [
        { t: "Stratégie énergétique 2050 (2017)", c: [0] },
        { t: "Loi sur le CO₂ (2021)", c: [1] },
        { t: "Loi sur le climat (2023)", c: [0] },
        { t: "Loi sur l'électricité (2024)", c: [0] },
      ],
    },
    {
      id: "v2", type: "choix", sujet: "Stratégie énergétique 2050", revoir: "politique",
      q: "Quels sont les moyens de la Stratégie énergétique 2050 ?",
      options: [
        "La sortie progressive du nucléaire",
        "La promotion des énergies renouvelables",
        "L'amélioration de l'efficacité énergétique",
        "La construction de centrales à charbon",
        "La suppression des barrages",
      ],
      correct: [0, 1, 2],
    },
    {
      id: "v3", type: "trous", sujet: "Stratégie énergétique 2050", revoir: "politique",
      q: "Complétez.",
      texte: "La Stratégie énergétique 2050 a été acceptée par le peuple en [[*2017|2007|2023]]. Elle veut réduire la consommation d'énergie par habitant de [[*43 %|4 %|100 %]] d'ici 2035, par rapport à l'an 2000. La loi sur le climat (2023) fixe l'objectif [[*zéro net|zéro voiture|zéro impôt]] en 2050.",
    },
    {
      id: "v4", type: "ouverte", sujet: "Politique énergétique", revoir: "politique",
      q: "La Suisse doit-elle construire de nouvelles centrales nucléaires ? Donnez un argument pour et un argument contre, d'un point de vue économique.",
      modele: "<b>Pour</b> : une production d'électricité importante et régulière, même en hiver, avec très peu de CO₂ ; moins de dépendance aux importations et moins de risque de black-out. <br><b>Contre</b> : des coûts de construction très élevés et des délais très longs ; la gestion des déchets et les risques d'accident coûtent cher ; l'argent pourrait être investi dans les renouvelables et le stockage. <br><i>Le peuple pourrait se prononcer en 2027.</i>",
    },

    /* ============ 8. DÉVELOPPEMENT DURABLE ============ */
    {
      id: "u1", type: "trous", sujet: "Développement durable", revoir: "durable",
      q: "Complétez la définition.",
      texte: "Le développement durable répond aux besoins du [[*présent|passé]] sans compromettre la capacité des [[*générations futures|entreprises étrangères|banques]] de répondre aux leurs.",
    },
    {
      id: "u2", type: "tableau", sujet: "Les trois piliers", revoir: "piliers",
      q: "Quel pilier du développement durable cette mesure renforce-t-elle surtout ?",
      colonnes: ["Économique", "Social", "Environnemental"],
      lignes: [
        { t: "Une PME reste rentable et garde ses emplois.", c: [0] },
        { t: "Une entreprise paie des salaires équitables et forme des apprentis.", c: [1] },
        { t: "Une commune protège une zone humide.", c: [2] },
        { t: "Un chantier recycle ses déchets de construction.", c: [2] },
      ],
    },
    {
      id: "u3", type: "choix", sujet: "Développement durable", revoir: "durable",
      q: "Lors de quel événement de nombreux pays, dont la Suisse, ont-ils adopté l'Agenda 21 ?",
      options: ["Le Sommet de la Terre de Rio (1992)", "L'Accord de Paris (2015)", "La Stratégie énergétique 2050", "Le Forum de Davos"],
      correct: [0],
    },
    {
      id: "u4", type: "vf", sujet: "La Suisse et le développement durable", revoir: "suisse",
      q: "Vrai ou faux ?",
      items: [
        { t: "La Constitution fédérale demande à la Confédération de favoriser le développement durable.", v: true, note: "Art. 2 et art. 73 Cst." },
        { t: "Selon le Conseil fédéral, la Suisse est déjà un pays parfaitement durable.", v: false, note: "Il a lui-même écrit qu'elle en est « encore loin »." },
        { t: "Un projet est durable s'il respecte au moins un des trois piliers.", v: false, note: "Il doit respecter les <b>trois</b> piliers à la fois." },
      ],
    },
    {
      id: "u5", type: "ouverte", sujet: "Les trois piliers", revoir: "piliers",
      q: "Une entreprise veut construire une usine sur des terres agricoles près de Romont. Analysez le projet selon les trois piliers du développement durable.",
      modele: "<b>Économique</b> : création d'emplois et de revenus, recettes fiscales pour la commune ; l'entreprise doit être rentable. <br><b>Social</b> : emplois pour la région, conditions de travail ; mais nuisances possibles pour les habitants (bruit, trafic). <br><b>Environnemental</b> : perte de terres agricoles, trafic et pollution ; possibilités de limiter l'impact (bâtiment efficace, panneaux solaires, transport par rail). <br>Le projet n'est durable que s'il trouve un équilibre entre les trois piliers.",
    },
    {
      id: "u6", type: "choix", sujet: "Développement durable", revoir: "piliers",
      q: "Un nouveau centre commercial crée des emplois et rapporte des impôts, mais il est construit sur des terres agricoles et attire beaucoup de voitures. Quel pilier du développement durable n'est pas respecté ?",
      options: ["Le pilier environnemental", "Le pilier économique", "Aucun : le projet est parfaitement durable", "Le pilier monétaire"],
      correct: [0],
    },
  ],
};
