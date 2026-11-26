/* Banque de questions — Chapitre 10 : Les bases du droit et de l'État
   Pour ajouter une question : copier un bloc existant du même type et l'adapter.
   "revoir" = identifiant de la section de la théorie (voir la liste "sections"). */

window.THEME = {
  id: "eco-10-bases-du-droit",
  titre: "Chapitre 10 · Les bases du droit et de l'État",
  theorie: "theorie.html",
  accueil: "../../index.html",
};

window.QUESTIONS = {
  sections: {
    droit: "Qu'est-ce que le droit ?",
    divisions: "Les divisions du droit",
    public: "Le droit public",
    prive: "Le droit privé",
    international: "Le droit international",
    etat: "L'État",
    democratie: "La démocratie",
    pouvoirs: "La séparation des pouvoirs",
    formes: "Les formes de démocratie",
    suisse: "La Suisse, un État fédéral",
    "droits-populaires": "Initiative et référendum",
    federal: "Les autorités fédérales",
    "conseil-federal": "Le Conseil fédéral",
    tribunaux: "Les tribunaux fédéraux",
    cantons: "Cantons et communes",
    libertes: "Les libertés fondamentales",
    devoirs: "Les devoirs envers l'État",
  },

  questions: [
    /* ============ 1. LE DROIT ============ */
    {
      id: "d1", type: "ouverte", sujet: "Le droit", revoir: "droit",
      q: "Donnez une définition du droit comprenant ses éléments essentiels.",
      modele: "Le droit est <b>un ensemble de règles</b> qui <b>permettent la vie en communauté</b> (organiser la société, éviter et régler les conflits) et qui sont <b>imposées par l'État</b> : celui qui ne les respecte pas peut être sanctionné.",
      explication: "Trois mots-clés à retenir : règles · vie en communauté · imposées par l'État.",
    },
    {
      id: "d2", type: "choix", sujet: "Le droit", revoir: "droit",
      q: "Quel est le <b>but</b> du droit dans une société ?",
      options: [
        "Permettre de vivre ensemble en fixant des règles communes et en réglant les conflits de manière pacifique",
        "Punir un maximum de personnes pour donner l'exemple",
        "Garantir que tout le monde gagne le même salaire",
        "Remplacer la morale et la religion",
      ],
      correct: [0],
      explication: "Sans droit, ce serait la « loi du plus fort ». Le droit fixe des règles connues de tous et prévoit comment régler les conflits.",
    },
    {
      id: "d3", type: "choix", sujet: "Le droit", revoir: "droit",
      q: "Qu'est-ce qui distingue une <b>règle de droit</b> d'une règle de politesse ?",
      options: [
        "Elle est imposée par l'État et son non-respect peut être sanctionné par l'État",
        "Elle est forcément écrite à la main",
        "Elle ne concerne que les adultes",
        "Elle est plus ancienne",
      ],
      correct: [0],
      explication: "Ne pas dire bonjour est impoli, mais l'État ne vous punira pas. Ne pas payer ses impôts, en revanche, entraîne une sanction : c'est une règle de droit.",
    },
    {
      id: "d4", type: "vf", sujet: "Le droit", revoir: "droit",
      q: "Vrai ou faux ?",
      items: [
        { t: "La police peut vous amender si vous ne dites pas « merci ».", v: false, note: "C'est une règle de politesse, pas une règle de droit." },
        { t: "Le droit évolue avec la société (nouvelles lois, lois modifiées ou abrogées).", v: true },
        { t: "Le droit s'applique à tous de la même manière.", v: true, note: "C'est le principe d'égalité devant la loi (art. 8 Cst.)." },
      ],
    },

    /* ============ 2. DIVISIONS DU DROIT ============ */
    {
      id: "v1", type: "choix", sujet: "Divisions du droit", revoir: "divisions",
      q: "Quelles sont les <b>trois grandes divisions</b> du droit ?",
      options: [
        "Droit public · droit privé · droit international",
        "Droit pénal · droit civil · droit fédéral",
        "Droit communal · droit cantonal · droit fédéral",
        "Constitution · Code civil · Code des obligations",
      ],
      correct: [0],
      explication: "Le droit public règle les relations avec l'État, le droit privé les relations entre particuliers et le droit international les relations au-delà des frontières.",
    },
    {
      id: "v2", type: "choix", sujet: "Divisions du droit", revoir: "divisions",
      q: "Le <b>droit public</b> règle les relations…",
      options: [
        "entre l'État et les particuliers, et entre les collectivités publiques",
        "uniquement entre les particuliers",
        "uniquement entre les entreprises",
        "uniquement entre les pays",
      ],
      correct: [0],
      explication: "Dans le droit public, l'État intervient avec son autorité (il impose, autorise, punit). Dans le droit privé, les personnes sont sur un pied d'égalité.",
    },
    {
      id: "v3", type: "tableau", sujet: "Public ou privé ?", revoir: "divisions",
      q: "S'agit-il d'une situation de droit public ou de droit privé ?",
      colonnes: ["Public", "Privé"],
      lignes: [
        { t: "Un chauffard se voit retirer son permis de conduire pour 6 mois.", c: [0] },
        { t: "Un contribuable a deux mois de retard pour sa déclaration d'impôts.", c: [0] },
        { t: "Un travailleur est en conflit avec son employeur à propos de ses vacances.", c: [1] },
        { t: "Un commerçant refuse de payer toute la facture de son fournisseur.", c: [1] },
        { t: "En Suisse, la liberté d'expression est garantie.", c: [0] },
        { t: "Après un meurtre, le ministère public ouvre une enquête.", c: [0] },
      ],
      explication: "Dès que l'État intervient avec son autorité (permis, impôts, libertés, poursuite pénale), c'est du droit public. Un litige entre deux particuliers (contrat de travail, facture) relève du droit privé.",
    },
    {
      id: "v4", type: "tableau", sujet: "Public ou privé ?", revoir: "divisions",
      q: "Public ou privé ?",
      colonnes: ["Public", "Privé"],
      lignes: [
        { t: "Le permis de construire est délivré au plus tard 30 jours après réception du dossier complet.", c: [0] },
        { t: "Celui qui trouve un objet en devient propriétaire après 5 ans si personne ne le réclame.", c: [1] },
        { t: "Le contrat d'apprentissage doit être conclu par écrit.", c: [1] },
        { t: "Les fiançailles n'obligent pas à se marier.", c: [1] },
        { t: "Une plainte pénale est déposée pour injures.", c: [0] },
        { t: "Les citoyens ont 100 jours pour récolter les signatures d'un référendum.", c: [0] },
      ],
      explication: "Permis de construire (administratif), plainte pénale (pénal) et référendum (constitutionnel) relèvent du droit public. Objet trouvé (droits réels), contrat d'apprentissage (CO) et fiançailles (famille) relèvent du droit privé.",
    },
    {
      id: "v5", type: "choix", sujet: "Droit international", revoir: "international",
      q: "Laquelle de ces situations relève du <b>droit international</b> ?",
      options: [
        "Un accord bilatéral entre la Suisse et l'Union européenne",
        "Un contrat de bail pour un appartement à Bulle",
        "Le règlement communal sur les déchets",
        "Un testament rédigé à la main",
      ],
      correct: [0],
      explication: "Le droit international règle les relations entre États (traités, accords bilatéraux, CEDH, conventions de Genève…) ou les situations qui touchent plusieurs pays.",
    },
    {
      id: "v6", type: "ouverte", sujet: "Droit international", revoir: "international",
      q: "Donnez un exemple concret qui fait appel au droit international.",
      modele: "Par exemple : les <b>accords bilatéraux</b> Suisse-UE (libre circulation des personnes), la <b>Convention européenne des droits de l'homme</b>, les <b>Conventions de Genève</b>, l'adhésion à l'ONU, ou un contrat de vente entre une entreprise suisse et une entreprise étrangère.",
    },

    /* ============ 2a. DROIT PUBLIC ============ */
    {
      id: "p1", type: "tableau", sujet: "Droit public", revoir: "public",
      q: "À quelle subdivision du <b>droit public</b> appartiennent ces situations ?",
      colonnes: ["Constitutionnel", "Pénal", "Administratif", "Procédure"],
      lignes: [
        { t: "En principe, une peine privative de liberté dure au maximum 20 ans.", c: [1] },
        { t: "Chacun peut choisir librement son lieu de domicile en Suisse.", c: [0] },
        { t: "Le service vétérinaire contrôle les écuries.", c: [2] },
        { t: "Le contribuable dispose d'un délai pour contester sa taxation.", c: [3] },
        { t: "Le Conseil national compte 200 membres.", c: [0] },
        { t: "Le vol est puni d'une peine privative de liberté ou d'une peine pécuniaire.", c: [1] },
      ],
      explication: "Constitutionnel = organisation de l'État et droits fondamentaux. Pénal = infractions et peines. Administratif = activité courante de l'administration. Procédure = les étapes et délais à respecter.",
    },
    {
      id: "p2", type: "choix", sujet: "Droit public", revoir: "public",
      q: "À quoi sert le <b>droit de procédure</b> ?",
      options: [
        "À fixer les étapes à suivre pour faire appliquer le droit (devant les tribunaux, les offices de poursuites, l'administration)",
        "À créer de nouvelles lois",
        "À définir les infractions et les peines",
        "À organiser les élections fédérales",
      ],
      correct: [0],
      explication: "On distingue la procédure civile, la procédure pénale, la procédure de poursuite (dettes et faillite) et la procédure administrative.",
    },
    {
      id: "p3", type: "choix", sujet: "Droit public", revoir: "public",
      q: "Une entreprise ne paie pas une facture. Le créancier lui envoie un <b>commandement de payer</b>. Dans quel domaine sommes-nous ?",
      options: ["Procédure de poursuite", "Droit pénal", "Droit constitutionnel", "Droit des successions"],
      correct: [0],
      explication: "La poursuite pour dettes et la faillite fait partie du droit de procédure (loi fédérale sur la poursuite pour dettes et la faillite, LP).",
    },

    /* ============ 2b. DROIT PRIVÉ ============ */
    {
      id: "r1", type: "tableau", sujet: "Droit privé", revoir: "prive",
      q: "À quel code faut-il se référer : <b>CO</b> ou <b>CC</b> ?",
      colonnes: ["CO", "CC"],
      lignes: [
        { t: "Quels sont les délais de résiliation du contrat de travail ?", c: [0] },
        { t: "À quel moment devient-on propriétaire d'une voiture ?", c: [1] },
        { t: "À quel âge devient-on majeur en Suisse ?", c: [1] },
        { t: "À qui revient l'héritage lorsqu'il n'y a pas de descendants ?", c: [1] },
        { t: "Quelles sont les conditions pour se marier ?", c: [1] },
        { t: "Quelles sont les règles pour établir un bilan comptable ?", c: [0] },
      ],
      explication: "Le CC traite des personnes, de la famille, des successions et des droits réels (propriété). Le CO traite des contrats, des sociétés, du registre du commerce et de la comptabilité.",
    },
    {
      id: "r2", type: "tableau", sujet: "Droit privé", revoir: "prive",
      q: "Dans quelle partie du droit privé trouve-t-on ces règles ?",
      colonnes: ["Personnes", "Famille", "Successions", "Droits réels", "Obligations (CO)"],
      lignes: [
        { t: "La fin des fiançailles", c: [1] },
        { t: "L'âge de la majorité civile", c: [0] },
        { t: "Les différentes formes de testament", c: [2] },
        { t: "La propriété d'un immeuble", c: [3] },
        { t: "La protection du nom d'une personne", c: [0] },
        { t: "Celui qui cause un dommage à autrui doit le réparer", c: [4] },
        { t: "La société anonyme doit s'inscrire au registre du commerce", c: [4] },
        { t: "L'objet trouvé dont personne ne réclame la propriété", c: [3] },
      ],
      explication: "CC : personnes (majorité, nom), famille (fiançailles, mariage), successions (héritage, testament), droits réels (propriété, possession). Le CO réunit les obligations : contrats, responsabilité, sociétés, registre du commerce.",
    },
    {
      id: "r3", type: "ouverte", sujet: "Droit privé", revoir: "prive",
      q: "De quoi traitent les <b>droits réels</b> et dans quel code les trouve-t-on ?",
      modele: "Les droits réels règlent les <b>droits sur les choses</b> : la <b>propriété</b> (mobilière et immobilière), la <b>possession</b>, les gages (hypothèque) et les servitudes, ainsi que le registre foncier. On les trouve dans le <b>Code civil (CC)</b>, 4<sup>e</sup> partie.",
    },
    {
      id: "r4", type: "choix", sujet: "Droit privé", revoir: "prive",
      q: "Que trouve-t-on dans le <b>Code des obligations</b> ?",
      options: [
        "Les contrats (vente, bail, travail…)",
        "Les sociétés commerciales (SA, Sàrl…)",
        "Le registre du commerce",
        "La comptabilité",
        "Les conditions du mariage",
        "Les règles sur le testament",
      ],
      correct: [0, 1, 2, 3],
      explication: "Mariage et testament relèvent du Code civil (droit de la famille et droit des successions).",
    },
    {
      id: "r5", type: "choix", sujet: "Droit privé", revoir: "prive",
      q: "Le Code des obligations est formellement…",
      options: [
        "le 5<sup>e</sup> livre du Code civil suisse",
        "une partie de la Constitution fédérale",
        "un code cantonal différent dans chaque canton",
        "un traité international",
      ],
      correct: [0],
      explication: "Son titre officiel est « Loi fédérale complétant le Code civil suisse (Livre cinquième : Droit des obligations) ». CC et CO forment ensemble le droit privé fédéral.",
    },

    /* ============ 3. L'ÉTAT ============ */
    {
      id: "e1", type: "choix", sujet: "L'État", revoir: "etat",
      q: "Quels éléments sont nécessaires pour qu'on puisse parler d'un <b>État</b> ?",
      options: [
        "Un territoire aux frontières reconnues",
        "Une population",
        "Une autorité (un pouvoir organisé)",
        "La souveraineté",
        "Une monnaie propre",
        "Une équipe nationale de football",
      ],
      correct: [0, 1, 2, 3],
      explication: "Territoire, population, autorité et souveraineté. Une monnaie propre n'est pas nécessaire : plusieurs États utilisent l'euro ou le dollar sans l'émettre eux-mêmes.",
    },
    {
      id: "e2", type: "choix", sujet: "L'État", revoir: "etat",
      q: "La <b>souveraineté</b> d'un État signifie que…",
      options: [
        "l'État décide lui-même de ses affaires, sans être soumis à une autorité extérieure",
        "l'État est dirigé par un roi ou une reine",
        "l'État possède une armée",
        "tous les habitants ont le droit de vote",
      ],
      correct: [0],
    },

    /* ============ 4. DÉMOCRATIE ============ */
    {
      id: "m1", type: "choix", sujet: "La démocratie", revoir: "democratie",
      q: "Que signifie le mot <b>démocratie</b>, d'origine grecque ?",
      options: ["Le pouvoir du peuple", "Le gouvernement des sages", "Le pouvoir de la loi", "Le pouvoir d'un seul"],
      correct: [0],
      explication: "<i>Dêmos</i> = le peuple, <i>kratos</i> = le pouvoir.",
    },
    {
      id: "m2", type: "choix", sujet: "La démocratie", revoir: "democratie",
      q: "Qu'entend-on par <b>suffrage universel</b> ?",
      options: [
        "Tous les citoyens majeurs peuvent voter, sans distinction de sexe, de fortune ou d'origine sociale",
        "Toutes les personnes du monde peuvent voter en Suisse",
        "Seuls les propriétaires peuvent voter",
        "Les citoyens votent sur tous les sujets, même les plus petits",
      ],
      correct: [0],
      explication: "Un vote = une voix, pour tous les citoyens majeurs. En Suisse, le suffrage n'est vraiment universel au niveau fédéral que depuis 1971, date du droit de vote des femmes.",
    },
    {
      id: "m3", type: "choix", sujet: "La démocratie", revoir: "democratie",
      q: "Lesquels de ces principes sont nécessaires pour qu'un État soit une <b>véritable démocratie</b> ?",
      options: [
        "Des élections et votations libres",
        "La séparation des pouvoirs",
        "La garantie des libertés fondamentales",
        "Le principe de la majorité",
        "Les trois pouvoirs réunis dans les mêmes mains",
        "Le droit de vote réservé aux personnes qui paient des impôts",
      ],
      correct: [0, 1, 2, 3],
      explication: "On peut aussi citer le suffrage universel et le droit d'éligibilité. Réunir les pouvoirs ou limiter le vote aux contribuables sont des caractéristiques de régimes non démocratiques.",
    },
    {
      id: "m4", type: "vf", sujet: "La démocratie", revoir: "democratie",
      q: "Vrai ou faux ?",
      items: [
        { t: "En démocratie, la minorité doit accepter la décision de la majorité.", v: true, note: "C'est le principe de la majorité — mais les droits fondamentaux de la minorité restent protégés." },
        { t: "Le droit d'éligibilité signifie que chaque citoyen peut se porter candidat à une élection.", v: true },
        { t: "Les Suissesses peuvent voter au niveau fédéral depuis 1971.", v: true },
        { t: "Dans une démocratie, le gouvernement peut interdire un journal qui le critique.", v: false, note: "La liberté des médias est une liberté fondamentale (art. 17 Cst.)." },
      ],
    },

    /* ============ 4a. SÉPARATION DES POUVOIRS ============ */
    {
      id: "s1", type: "tableau", sujet: "Séparation des pouvoirs", revoir: "pouvoirs",
      q: "À quel pouvoir correspond chaque élément ?",
      colonnes: ["Législatif", "Exécutif", "Judiciaire"],
      lignes: [
        { t: "Crée, modifie et abroge les lois", c: [0] },
        { t: "Applique les lois et gouverne", c: [1] },
        { t: "Sanctionne les infractions aux lois", c: [2] },
        { t: "Appelé aussi « le parlement »", c: [0] },
        { t: "Appelé aussi « le gouvernement »", c: [1] },
        { t: "Les tribunaux", c: [2] },
        { t: "Accepte le budget de l'État", c: [0] },
      ],
    },
    {
      id: "s2", type: "choix", sujet: "Séparation des pouvoirs", revoir: "pouvoirs",
      q: "Que veut dire « <b>abroger</b> une loi » ?",
      options: ["La supprimer", "La voter", "La traduire", "La contrôler"],
      correct: [0],
      explication: "Abroger = annuler, supprimer une loi. Le législatif crée, modifie et abroge les lois.",
    },
    {
      id: "s3", type: "choix", sujet: "Séparation des pouvoirs", revoir: "pouvoirs",
      q: "Pourquoi sépare-t-on les pouvoirs ?",
      options: [
        "Pour éviter qu'une personne ou un organe concentre tout le pouvoir et en abuse",
        "Pour que les décisions soient prises plus vite",
        "Pour réduire le nombre de fonctionnaires",
        "Pour que chaque canton ait son propre gouvernement",
      ],
      correct: [0],
      explication: "Chaque pouvoir contrôle et limite les autres. C'est l'idée développée par Montesquieu au XVIII<sup>e</sup> siècle.",
    },
    {
      id: "s4", type: "choix", sujet: "Séparation des pouvoirs", revoir: "pouvoirs",
      q: "Quel philosophe a théorisé la séparation des pouvoirs dans <i>De l'esprit des lois</i> (1748) ?",
      options: ["Montesquieu", "Jean-Jacques Rousseau", "Voltaire", "Guillaume Tell"],
      correct: [0],
    },

    /* ============ 4b. FORMES DE DÉMOCRATIE ============ */
    {
      id: "f1", type: "tableau", sujet: "Formes de démocratie", revoir: "formes",
      q: "Quelle forme de démocratie est décrite ?",
      colonnes: ["Directe", "Représentative", "Mixte"],
      lignes: [
        { t: "Le peuple vote lui-même les lois.", c: [0] },
        { t: "Le peuple élit des représentants qui décident à sa place.", c: [1] },
        { t: "Le peuple élit un parlement, mais peut aussi lancer des initiatives et des référendums.", c: [2] },
        { t: "C'est le système de la Confédération suisse.", c: [2] },
        { t: "La Landsgemeinde de Glaris, où les citoyens votent à main levée.", c: [0] },
        { t: "Le peuple élit ses députés et n'intervient plus jusqu'aux prochaines élections.", c: [1] },
      ],
      explication: "La Suisse est une démocratie mixte (on dit aussi semi-directe) : un parlement élu, complété par les droits populaires.",
    },
    {
      id: "f2", type: "trous", sujet: "Formes de démocratie", revoir: "formes",
      q: "Complétez la phrase.",
      texte: "La Suisse est une démocratie [[*mixte|directe|représentative]], car le peuple [[*élit ses représentants au parlement|vote lui-même toutes les lois|nomme les juges fédéraux]], mais il peut aussi intervenir directement grâce [[*à l'initiative et au référendum|à l'élection du Conseil fédéral|à la Landsgemeinde fédérale]].",
      explication: "Le Conseil fédéral n'est pas élu par le peuple, et il n'existe pas de Landsgemeinde fédérale (seulement dans deux cantons).",
    },
    {
      id: "f3", type: "ouverte", sujet: "Formes de démocratie", revoir: "formes",
      q: "Quand on parle d'un rapprochement entre la Suisse et l'UE, certaines personnes craignent une perte de la <b>démocratie directe</b>. Qu'est-ce qu'elles craignent concrètement ?",
      modele: "Elles craignent que le <b>peuple ne puisse plus décider lui-même</b> de certaines règles : si la Suisse devait reprendre du droit européen, ces règles pourraient s'appliquer sans que les citoyens puissent les accepter ou les refuser par <b>référendum</b>, ou les changer par une <b>initiative populaire</b>. Elles y voient une perte de souveraineté.",
      explication: "Il s'agit ici de comprendre l'argument, pas de dire s'il est juste ou non : le sujet est débattu.",
    },

    /* ============ 5. LA SUISSE, ÉTAT FÉDÉRAL ============ */
    {
      id: "c1", type: "choix", sujet: "La Suisse", revoir: "suisse",
      q: "La Suisse est un État fédéral organisé en trois niveaux. Lesquels ?",
      options: ["Communes · cantons · Confédération", "Districts · régions · Europe", "Villes · villages · cantons", "Communes · districts · régions"],
      correct: [0],
    },
    {
      id: "c2", type: "choix", sujet: "La Suisse", revoir: "suisse",
      q: "Une tâche n'est pas attribuée à la Confédération par la Constitution. Qui en est responsable ?",
      options: ["Les cantons", "La Confédération quand même", "Le Tribunal fédéral", "Personne"],
      correct: [0],
      explication: "Art. 3 Cst. : les cantons exercent tous les droits qui ne sont pas délégués à la Confédération. Art. 42 : la Confédération n'accomplit que les tâches que la Constitution lui attribue.",
    },
    {
      id: "c3", type: "choix", sujet: "La Suisse", revoir: "suisse",
      q: "Qu'est-ce que le <b>fédéralisme</b> ?",
      options: [
        "Le partage du pouvoir entre l'État central (Confédération) et des États membres (cantons) qui gardent une large autonomie",
        "Le fait que toutes les décisions sont prises à Berne",
        "L'obligation pour les cantons d'avoir les mêmes lois",
        "Le système de vote à la majorité",
      ],
      correct: [0],
    },
    {
      id: "c4", type: "vf", sujet: "La Constitution", revoir: "suisse",
      q: "À l'aide de la Constitution fédérale : vrai ou faux ?",
      items: [
        { t: "La Suisse compte trois langues nationales.", v: false, note: "<b>Art. 4 Cst.</b> : quatre langues nationales — allemand, français, italien et romanche." },
        { t: "La Confédération ne peut accomplir que les tâches prévues par la Constitution.", v: true, note: "<b>Art. 42 Cst.</b>" },
        { t: "La formation professionnelle est une tâche des cantons.", v: false, note: "<b>Art. 63 Cst.</b> : la Confédération légifère sur la formation professionnelle." },
        { t: "La grève est interdite en Suisse.", v: false, note: "<b>Art. 28 Cst.</b> : la grève est licite à certaines conditions (relations de travail, paix du travail)." },
      ],
    },
    {
      id: "c5", type: "vf", sujet: "La Constitution", revoir: "federal",
      q: "À l'aide de la Constitution fédérale : vrai ou faux ?",
      items: [
        { t: "Tout citoyen ayant le droit de vote peut être élu au Conseil fédéral.", v: true, note: "<b>Art. 143 Cst.</b> : éligibilité au Conseil national, au Conseil fédéral et au Tribunal fédéral." },
        { t: "Le Conseil national est composé de 46 membres.", v: false, note: "<b>Art. 149 Cst.</b> : 200 membres. Ce sont les 46 membres du Conseil des États (art. 150)." },
        { t: "Le Conseil fédéral est élu par le Conseil national.", v: false, note: "<b>Art. 175 Cst.</b> : par l'Assemblée fédérale (les deux Chambres réunies)." },
        { t: "L'organisation de l'armée relève de la Confédération.", v: true, note: "<b>Art. 58 et 60 Cst.</b>" },
      ],
    },

    /* ============ 5a. DROITS POPULAIRES ============ */
    {
      id: "c6", type: "choix", sujet: "Droits populaires", revoir: "droits-populaires",
      q: "Combien de signatures faut-il pour une <b>initiative populaire</b> fédérale ?",
      options: ["100 000 signatures en 18 mois", "50 000 signatures en 100 jours", "10 000 signatures en 1 an", "200 000 signatures en 6 mois"],
      correct: [0],
      explication: "Art. 139 Cst. L'initiative permet de proposer une modification de la Constitution.",
    },
    {
      id: "c7", type: "choix", sujet: "Droits populaires", revoir: "droits-populaires",
      q: "Combien de signatures faut-il pour un <b>référendum facultatif</b> contre une loi fédérale ?",
      options: ["50 000 signatures en 100 jours", "100 000 signatures en 18 mois", "5 000 signatures en 30 jours", "Aucune, il est automatique"],
      correct: [0],
      explication: "Art. 141 Cst. : 50 000 citoyens (ou 8 cantons) dans les 100 jours suivant la publication de la loi.",
    },
    {
      id: "c8", type: "choix", sujet: "Droits populaires", revoir: "droits-populaires",
      q: "Une modification de la Constitution fédérale doit être acceptée par…",
      options: [
        "la majorité du peuple ET la majorité des cantons",
        "le Parlement seulement",
        "le Conseil fédéral seulement",
        "la majorité du peuple seulement",
      ],
      correct: [0],
      explication: "C'est le référendum obligatoire, avec la « double majorité » (art. 140 et 142 Cst.).",
    },
    {
      id: "c9", type: "trous", sujet: "Droits populaires", revoir: "droits-populaires",
      q: "Complétez.",
      texte: "Avec l'[[*initiative populaire|référendum facultatif|élection]], les citoyens <b>proposent</b> une nouvelle règle. Avec le [[*référendum|initiative|recours]], ils peuvent <b>s'opposer</b> à une loi votée par le Parlement.",
      explication: "Initiative = moteur (on propose). Référendum = frein (on refuse ce que le Parlement a décidé).",
    },

    /* ============ 6. AUTORITÉS FÉDÉRALES ============ */
    {
      id: "a1", type: "tableau", sujet: "Autorités fédérales", revoir: "federal", multiple: true,
      q: "Cochez la ou les bonnes colonnes.",
      colonnes: ["Conseil national", "Conseil des États", "Conseil fédéral"],
      lignes: [
        { t: "Ses membres sont parfois appelés sénateurs", c: [1] },
        { t: "Ils forment ensemble l'Assemblée fédérale", c: [0, 1] },
        { t: "Ses membres sont élus pour 4 ans", c: [0, 1, 2] },
        { t: "Ses membres sont élus par le peuple", c: [0, 1] },
        { t: "Compte 200 membres", c: [0] },
        { t: "C'est le gouvernement", c: [2] },
        { t: "Appelé aussi « chambre basse » ou « Chambre du peuple »", c: [0] },
        { t: "Ses décisions sont collégiales", c: [2] },
      ],
      consigne: "Une ou plusieurs colonnes par ligne.",
      explication: "Le Conseil national et le Conseil des États forment l'Assemblée fédérale (législatif). Le Conseil fédéral (exécutif) est élu par l'Assemblée fédérale, pas par le peuple.",
    },
    {
      id: "a2", type: "choix", sujet: "Autorités fédérales", revoir: "federal",
      q: "Le Conseil des États compte 46 membres. Pourquoi pas 52 (26 cantons × 2) ?",
      options: [
        "Six cantons (les anciens « demi-cantons ») n'ont qu'un siège chacun",
        "Six cantons ont refusé de participer",
        "Les grands cantons ont plus de sièges",
        "Six sièges sont réservés au Conseil fédéral",
      ],
      correct: [0],
      explication: "20 cantons × 2 sièges + 6 cantons × 1 siège = 46. Obwald, Nidwald, Bâle-Ville, Bâle-Campagne, Appenzell Rhodes-Extérieures et Rhodes-Intérieures n'ont qu'un siège.",
    },
    {
      id: "a3", type: "choix", sujet: "Autorités fédérales", revoir: "federal",
      q: "Comment les 200 sièges du <b>Conseil national</b> sont-ils répartis ?",
      options: [
        "Entre les cantons selon leur population, puis entre les partis au système proportionnel",
        "Deux sièges par canton",
        "Au système majoritaire : le parti le plus fort prend tous les sièges",
        "Par tirage au sort",
      ],
      correct: [0],
      explication: "Chaque canton a au moins un siège. Zurich en a le plus, environ 36. Dans chaque canton, les sièges sont répartis entre les listes selon leur pourcentage de voix.",
    },
    {
      id: "a4", type: "choix", sujet: "Autorités fédérales", revoir: "federal",
      q: "Pourquoi le Parlement suisse a-t-il <b>deux chambres aux pouvoirs égaux</b> ?",
      options: [
        "Pour représenter à la fois le peuple (Conseil national) et les cantons (Conseil des États)",
        "Pour que les lois soient votées deux fois plus vite",
        "Parce que chaque langue nationale a sa chambre",
        "Pour séparer la gauche et la droite",
      ],
      correct: [0],
      explication: "C'est le bicamérisme. Au Conseil des États, un petit canton comme Uri pèse autant que Zurich : c'est une protection des petits cantons, typique du fédéralisme.",
    },
    {
      id: "a5", type: "choix", sujet: "Autorités fédérales", revoir: "federal",
      q: "Le Parlement suisse est un <b>parlement de milice</b>. Cela signifie que…",
      options: [
        "les parlementaires exercent leur mandat à côté de leur métier",
        "les parlementaires sont des militaires",
        "les parlementaires sont des professionnels de la politique à plein temps",
        "les parlementaires sont nommés par l'armée",
      ],
      correct: [0],
      explication: "Le Parlement siège en quatre sessions ordinaires de trois semaines par an (plus des sessions spéciales). Le reste du temps, la plupart des élus ont un autre métier.",
    },
    {
      id: "a6", type: "choix", sujet: "Conseil fédéral", revoir: "conseil-federal",
      q: "Qui élit le <b>Conseil fédéral</b> ?",
      options: ["L'Assemblée fédérale (les deux Chambres réunies)", "Le peuple", "Le Conseil national seul", "Les gouvernements cantonaux"],
      correct: [0],
      explication: "Art. 175 Cst. : 7 membres élus pour 4 ans par l'Assemblée fédérale.",
    },
    {
      id: "a7", type: "ouverte", sujet: "Conseil fédéral", revoir: "conseil-federal",
      q: "Expliquez le principe de <b>collégialité</b> du Conseil fédéral en donnant un exemple.",
      modele: "Les 7 conseillers fédéraux prennent leurs décisions <b>ensemble</b>, en collège. Une fois la décision prise, <b>chacun doit la défendre publiquement</b>, même s'il a voté contre. <br><i>Exemple</i> : un conseiller fédéral opposé à un projet de loi doit quand même le défendre devant le peuple avant une votation, au nom du Conseil fédéral.",
    },
    {
      id: "a8", type: "choix", sujet: "Conseil fédéral", revoir: "conseil-federal",
      q: "Que signifie le principe de <b>concordance</b> (« formule magique ») ?",
      options: [
        "Les sièges du Conseil fédéral sont répartis entre les principaux partis selon leur force électorale",
        "Le parti qui gagne les élections forme seul le gouvernement",
        "Chaque canton a un représentant au Conseil fédéral",
        "Les conseillers fédéraux doivent être du même parti",
      ],
      correct: [0],
      explication: "Il n'y a pas de gouvernement contre une opposition : les grands partis gouvernent ensemble. Depuis fin 2015, la répartition est de 2 UDC, 2 PS, 2 PLR et 1 Le Centre.",
    },
    {
      id: "a9", type: "choix", sujet: "Conseil fédéral", revoir: "conseil-federal",
      q: "Le <b>président de la Confédération</b>…",
      options: [
        "est l'un des 7 conseillers fédéraux, élu pour un an par l'Assemblée fédérale",
        "est élu par le peuple pour 4 ans",
        "peut prendre seul les décisions importantes",
        "est le chef de l'armée",
      ],
      correct: [0],
      explication: "Il est « le premier parmi ses pairs » : il dirige les séances et représente la Suisse, mais n'a pas plus de pouvoir que ses collègues.",
    },
    {
      id: "a10", type: "tableau", sujet: "Tribunaux fédéraux", revoir: "tribunaux",
      q: "Première instance ou dernière instance ?",
      colonnes: ["Première instance", "Dernière instance"],
      lignes: [
        { t: "Tribunal fédéral (Lausanne et Lucerne)", c: [1] },
        { t: "Tribunal pénal fédéral (Bellinzone)", c: [0] },
        { t: "Tribunal administratif fédéral (Saint-Gall)", c: [0] },
        { t: "Tribunal fédéral des brevets (Saint-Gall)", c: [0] },
      ],
      explication: "Le Tribunal fédéral est la cour suprême de la Suisse. Les trois autres tribunaux jugent en première instance ; leurs décisions peuvent être portées devant le Tribunal fédéral.",
    },
    {
      id: "a11", type: "choix", sujet: "Tribunaux fédéraux", revoir: "tribunaux",
      q: "Comment se nomme le tribunal de <b>dernière instance</b> en Suisse et où se trouve son siège ?",
      options: ["Le Tribunal fédéral, à Lausanne", "Le Tribunal fédéral, à Berne", "Le Tribunal pénal fédéral, à Bellinzone", "La Cour suprême, à Zurich"],
      correct: [0],
      explication: "Deux cours de droit social siègent à Lucerne, mais le siège du Tribunal fédéral est à Lausanne.",
    },

    /* ============ 7. CANTONS ET COMMUNES ============ */
    {
      id: "k1", type: "tableau", sujet: "Cantons et communes", revoir: "cantons", multiple: true,
      q: "En vous référant au canton de Fribourg, cochez le <b>pouvoir</b> et le <b>niveau</b> de chaque institution.",
      consigne: "Deux cases par ligne : le pouvoir et le niveau.",
      colonnes: ["Législatif", "Exécutif", "Judiciaire", "Confédération", "Canton", "Commune"],
      lignes: [
        { t: "Conseil fédéral", c: [1, 3] },
        { t: "Conseil d'État", c: [1, 4] },
        { t: "Conseil général", c: [0, 5] },
        { t: "Conseil communal", c: [1, 5] },
        { t: "Grand Conseil", c: [0, 4] },
        { t: "Assemblée communale", c: [0, 5] },
        { t: "Assemblée fédérale", c: [0, 3] },
        { t: "Tribunal cantonal", c: [2, 4] },
      ],
      explication: "Attention aux pièges : le <b>Conseil d'État</b> est un exécutif (cantonal) et le <b>Conseil général</b> un législatif (communal).",
    },
    {
      id: "k2", type: "vf", sujet: "Cantons et communes", revoir: "cantons",
      q: "Vrai ou faux ?",
      items: [
        { t: "Le Conseil communal est à la commune ce que le Grand Conseil est au canton.", v: false, note: "Le Conseil communal est un <b>exécutif</b> : il correspond au Conseil d'État. C'est le Conseil général qui correspond au Grand Conseil." },
        { t: "À Fribourg, le Conseil d'État compte 7 membres.", v: true },
        { t: "Il existe des tribunaux fédéraux, cantonaux et communaux.", v: false, note: "Les communes n'ont pas de pouvoir judiciaire." },
        { t: "La Landsgemeinde est au canton ce que l'assemblée communale est à la commune.", v: true, note: "Dans les deux cas, les citoyens se réunissent et votent eux-mêmes (démocratie directe)." },
        { t: "L'assemblée communale est en principe réservée aux grandes communes.", v: false, note: "C'est l'inverse : les petites communes ont une assemblée communale, les plus grandes un Conseil général élu." },
      ],
    },
    {
      id: "k3", type: "choix", sujet: "Cantons et communes", revoir: "cantons",
      q: "Dans le canton de Fribourg, comment appelle-t-on la personne qui préside le <b>Conseil communal</b> ?",
      options: ["Le syndic ou la syndique", "Le préfet", "Le maire", "Le conseiller d'État"],
      correct: [0],
      explication: "À Fribourg et dans le canton de Vaud, on parle de syndic. Ailleurs, on parle par exemple de maire (Genève, Jura) ou de président de commune (Valais).",
    },
    {
      id: "k4", type: "choix", sujet: "Cantons et communes", revoir: "cantons",
      q: "Combien de députés siègent au <b>Grand Conseil</b> fribourgeois ?",
      options: ["110", "200", "46", "7"],
      correct: [0],
    },
    {
      id: "k5", type: "choix", sujet: "Cantons et communes", revoir: "cantons",
      q: "Dans quels cantons la <b>Landsgemeinde</b> existe-t-elle encore ?",
      options: ["Glaris et Appenzell Rhodes-Intérieures", "Fribourg et Vaud", "Zurich et Berne", "Dans tous les cantons alémaniques"],
      correct: [0],
    },

    /* ============ 8. LIBERTÉS ============ */
    {
      id: "l1", type: "choix", sujet: "Libertés fondamentales", revoir: "libertes",
      q: "Lesquelles de ces libertés sont garanties par la Constitution fédérale ?",
      options: [
        "La liberté de conscience et de croyance",
        "La liberté d'établissement",
        "La liberté économique",
        "La garantie de la propriété",
        "Le droit de ne pas payer d'impôts",
        "Le droit de dire n'importe quoi sur n'importe qui",
      ],
      correct: [0, 1, 2, 3],
      explication: "Les libertés sont garanties, mais limitées : la liberté d'expression ne permet ni l'injure ni l'appel à la haine.",
    },
    {
      id: "l2", type: "choix", sujet: "Libertés fondamentales", revoir: "libertes",
      q: "À quelles conditions l'État peut-il <b>restreindre</b> une liberté fondamentale (art. 36 Cst.) ?",
      options: [
        "Il faut une base légale, un intérêt public et que la mesure soit proportionnée",
        "Jamais, les libertés sont absolues",
        "Dès que le Conseil fédéral le décide",
        "Dès qu'un sondage le demande",
      ],
      correct: [0],
      explication: "Et l'essence même du droit fondamental doit rester intacte.",
    },
    {
      id: "l3", type: "tableau", sujet: "Libertés fondamentales", revoir: "libertes",
      q: "Quelle liberté est limitée par chaque règle ?",
      colonnes: ["Propriété", "Expression", "Économique"],
      lignes: [
        { t: "Il faut un permis pour construire un garage sur son terrain.", c: [0] },
        { t: "Un terrain est exproprié pour construire une route.", c: [0] },
        { t: "L'incitation à la haine est punissable.", c: [1] },
        { t: "Un médecin ne peut pas révéler la maladie de son patient (secret professionnel).", c: [1] },
        { t: "Il faut une autorisation (patente) pour ouvrir un restaurant.", c: [2] },
        { t: "Un terrain situé en zone agricole ne peut pas accueillir d'immeuble.", c: [0] },
      ],
    },

    /* ============ 9. DEVOIRS ============ */
    {
      id: "o1", type: "choix", sujet: "Devoirs", revoir: "devoirs",
      q: "Lesquels sont des <b>devoirs</b> envers l'État ?",
      options: [
        "Payer ses impôts",
        "Aller à l'école pendant la scolarité obligatoire",
        "Le service militaire ou civil (pour les hommes suisses)",
        "Respecter les lois et les autres",
        "Être membre d'un parti politique",
        "Avoir un compte en banque suisse",
      ],
      correct: [0, 1, 2, 3],
    },
    {
      id: "o2", type: "choix", sujet: "Devoirs", revoir: "devoirs",
      q: "En quoi consiste le <b>devoir civique</b> ?",
      options: [
        "S'intéresser à la vie politique et participer aux votations et élections",
        "Payer ses impôts dans les délais",
        "Faire son service militaire",
        "Respecter le code de la route",
      ],
      correct: [0],
      explication: "C'est un devoir moral plutôt que juridique : en Suisse, le vote n'est obligatoire que dans le canton de Schaffhouse.",
    },

    /* ============ CAS PRATIQUES ============ */
    {
      id: "x1", type: "choix", sujet: "Cas pratique", revoir: "prive",
      q: "Lina, 17 ans, veut signer seule le bail de son premier appartement. Quelle règle doit-elle vérifier et où la trouve-t-elle ?",
      options: [
        "L'âge de la majorité (18 ans) — Code civil, droit des personnes",
        "Le contrat de bail — Constitution fédérale",
        "Le droit de vote — Code des obligations",
        "La liberté d'établissement — Code pénal",
      ],
      correct: [0],
      explication: "Avant 18 ans, elle a besoin du consentement de ses parents pour s'engager par contrat. La majorité est réglée à l'art. 14 CC.",
    },
    {
      id: "x2", type: "choix", sujet: "Cas pratique", revoir: "prive",
      q: "Marc achète un scooter d'occasion qui tombe en panne après deux jours. Il veut faire jouer la garantie. Quel code consulte-t-il ?",
      options: ["Le Code des obligations (contrat de vente)", "Le Code civil (droits réels)", "Le Code pénal", "La Constitution fédérale"],
      correct: [0],
    },
    {
      id: "x3", type: "choix", sujet: "Cas pratique", revoir: "public",
      q: "La commune refuse le permis de construire de Sofia, qui conteste la décision. De quel domaine du droit s'agit-il ?",
      options: ["Droit public — droit administratif", "Droit privé — droits réels", "Droit public — droit pénal", "Droit international"],
      correct: [0],
      explication: "Sofia est face à une autorité qui agit avec sa puissance publique : c'est du droit public. Contester la décision relève ensuite de la procédure administrative.",
    },
    {
      id: "x4", type: "choix", sujet: "Cas pratique", revoir: "droits-populaires",
      q: "Un groupe de citoyens n'est pas d'accord avec une loi fédérale que le Parlement vient d'adopter. Que peut-il faire ?",
      options: [
        "Lancer un référendum : récolter 50 000 signatures en 100 jours",
        "Lancer une initiative pour annuler la loi dans les 10 jours",
        "Demander au Tribunal fédéral d'annuler la loi",
        "Demander au président de la Confédération d'opposer son veto",
      ],
      correct: [0],
      explication: "Si le référendum aboutit, le peuple vote et la loi n'entre en vigueur que s'il l'accepte.",
    },
  ],
};
