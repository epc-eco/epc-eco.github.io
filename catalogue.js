/* =========================================================
   Catalogue des thèmes — c'est le seul fichier à modifier
   pour ajouter ou activer un thème sur la page d'accueil.
   ---------------------------------------------------------
   Les thèmes s'affichent dans l'ordre de cette liste (ordre d'enseignement).
   annee    : 1, 2 ou 3 (voir « annees »)
   code     : "volume-chapitre", p. ex. "01-10" = volume 1, chapitre 10
   domaine  : "droit" (orange), "ecopol" (vert), "ecoent" (bleu)
   resume   : courte description (facultatif)
   dossier  : nom du dossier dans themes/ (quand le thème est prêt)
   pret     : true quand la théorie et l'entraînement existent
   apprentissage : true pour afficher le bouton « Apprentissage »
   relu     : false = chapitre pas encore relu (astérisque * sur l'accueil + mention
              dans le chapitre). Mettre true (ou effacer) une fois le chapitre contrôlé.
   ========================================================= */
window.CATALOGUE = {
  annees: [
    { id: 1, nom: "1re année" },
    { id: 2, nom: "2e année" },
    { id: 3, nom: "3e année" },
  ],
  domaines: [
    { id: "droit", nom: "Droit", couleur: "#e9812b" },
    { id: "ecopol", nom: "Économie politique", couleur: "#87a13a" },
    { id: "ecoent", nom: "Économie d'entreprise", couleur: "#00a1bf" },
  ],
  themes: [
    { annee: 1, code: "01-11", domaine: "ecopol", titre: "Besoins et types de biens",
      resume: "Besoins et leur évolution, biens libres et économiques, biens et services, facteurs de production et leur rémunération.",
      dossier: "11-besoins-et-biens", pret: true, apprentissage: true, relu: false },
    { annee: 1, code: "01-04", domaine: "ecoent", titre: "L'environnement macro-économique", pret: false },
    { annee: 1, code: "01-05", domaine: "ecoent", titre: "L'environnement micro-économique", pret: false },
    { annee: 1, code: "01-06", domaine: "ecoent", titre: "L'entreprise : typologie et éthique", pret: false },
    { annee: 1, code: "01-07", domaine: "ecoent", titre: "L'entreprise et l'organisation", pret: false },
    { annee: 1, code: "01-08", domaine: "ecoent", titre: "Marketing", pret: false },
    { annee: 1, code: "01-09", domaine: "ecoent", titre: "Marketing-mix", pret: false },
    { annee: 1, code: "01-10", domaine: "droit", titre: "Les bases du droit et de l'État",
      resume: "Divisions du droit, démocratie, séparation des pouvoirs, autorités fédérales, cantonales et communales.",
      dossier: "10-bases-du-droit", pret: true, apprentissage: true, relu: false },
    { annee: 1, code: "01-16", domaine: "droit", titre: "Droit de procédure", pret: false },
    { annee: 1, code: "01-17", domaine: "droit", titre: "Sources du droit et procédure législative", pret: false },
    { annee: 1, code: "01-15", domaine: "droit", titre: "Droit privé", pret: false },
    { annee: 1, code: "01-18", domaine: "droit", titre: "Création de l'obligation", pret: false },
    { annee: 1, code: "01-19", domaine: "droit", titre: "Droit des contrats", pret: false },
    { annee: 1, code: "01-20", domaine: "droit", titre: "Contrat de vente", pret: false },
    { annee: 2, code: "01-21", domaine: "droit", titre: "Endettement, poursuite et budget", pret: false },
    { annee: 2, code: "02-26", domaine: "ecoent", titre: "Personnel", pret: false },
    { annee: 2, code: "02-27", domaine: "ecoent", titre: "Les assurances", pret: false },
    { annee: 2, code: "02-28", domaine: "droit", titre: "Contrats d'exécution d'un service : travail, entreprise, mandat", pret: false },
    { annee: 2, code: "02-29", domaine: "droit", titre: "Le contrat de bail (y compris bail à ferme)", pret: false },
    { annee: 2, code: "02-30", domaine: "droit", titre: "Droit fiscal", pret: false },
    { annee: 2, code: "02-33", domaine: "ecopol", titre: "Le chômage", pret: false },
    { annee: 2, code: "02-34", domaine: "ecopol", titre: "Équilibre social / AVS", pret: false },
    { annee: 2, code: "02-39", domaine: "droit", titre: "Droit des sociétés",
      resume: "Entreprise individuelle, société simple, snc, SA et Sàrl ; registre du commerce, raison de commerce, organes, libération du capital, protection des créanciers.",
      dossier: "39-droit-des-societes", pret: true, apprentissage: true, relu: true },
    { annee: 2, code: "02-31", domaine: "droit", titre: "Droit de la famille", pret: false },
    { annee: 2, code: "02-32", domaine: "droit", titre: "Successions", pret: false },
    { annee: 3, code: "03-38", domaine: "ecoent", titre: "Financement et placement",
      resume: "Sources de financement, crédits et garanties, leasing, LCC, crédit hypothécaire, papiers-valeurs, obligations, actions, objectifs de placement, fonds et bourse.",
      dossier: "38-financement-et-placement", pret: true, apprentissage: true, relu: false },
    { annee: 3, code: "02-40", domaine: "ecopol", titre: "Circuit économique, prestation économique",
      resume: "Circuit simple et élargi, cinq agents économiques, PIB et PNB, trois approches de calcul, PIB réel, comparaisons, défauts du PIB, IDH et indicateurs écologiques.",
      dossier: "40-circuit-economique", pret: true, apprentissage: true, relu: false },
    { annee: 3, code: "02-41", domaine: "ecopol", titre: "Économie de marché",
      resume: "Offre et demande, déplacements des courbes, élasticité, équilibre du marché, formes de marché et monopoles, prix plafond et prix plancher.",
      dossier: "41-economie-de-marche", pret: true, apprentissage: true, relu: false },
    { annee: 3, code: "02-42", domaine: "ecopol", titre: "Écologie et énergie",
      resume: "Effet de serre (animation), émissions, coût économique du réchauffement, externalités et réponses de l'État, sources d'énergie, politique énergétique, développement durable.",
      dossier: "42-ecologie-et-energie", pret: true, apprentissage: true, relu: false },
    { annee: 3, code: "03-43", domaine: "ecopol", titre: "Déséquilibre des masses monétaires",
      resume: "Monnaie et ses fonctions, inflation, déflation, stagflation, politique monétaire de la BNS, IPC et panier-type.",
      dossier: "43-desequilibres-monetaires", pret: true, apprentissage: true, relu: false },
    { annee: 3, code: "03-45", domaine: "ecopol", titre: "Croissance et changement structurel",
      resume: "Vue d'ensemble des chapitres 43 à 48, PIB et RNB, bien-être, facteurs de croissance, bienfaits et méfaits, secteurs économiques et changement structurel.",
      dossier: "45-croissance", pret: true, apprentissage: true, relu: false },
    { annee: 3, code: "03-46", domaine: "ecopol", titre: "Cycle conjoncturel",
      resume: "Conjoncture et indicateurs, phases du cycle, politique conjoncturelle de la BNS et de l'État, frein à l'endettement, libéralisme et keynésianisme.",
      dossier: "46-cycle-conjoncturel", pret: true, apprentissage: true, relu: false },
    { annee: 3, code: "03-47", domaine: "ecopol", titre: "Objectifs de la politique économique et sociale",
      resume: "Politiques conjoncturelle, structurelle et sociale, forces et défis de la Suisse, carré magique de Kaldor, polygone magique et conflits d'objectifs.",
      dossier: "47-objectifs-politique-economique", pret: true, apprentissage: true, relu: false },
    { annee: 3, code: "03-48", domaine: "ecopol", titre: "Politique fiscale et monétaire",
      resume: "Histoire, formes et fonctions de la monnaie, agrégats M0 à M3, BNS, création de monnaie, politique monétaire et système fiscal suisse.",
      dossier: "48-politique-fiscale-et-monetaire", pret: true, apprentissage: true, relu: false },
    { annee: 3, code: "03-49", domaine: "ecopol", titre: "Mondialisation",
      resume: "Définition et histoire, protectionnisme et libre-échange, OMC et accords, avantages et inconvénients, retour du protectionnisme, limites planétaires et décroissance.",
      dossier: "49-mondialisation", pret: true, apprentissage: true, relu: false },
    { annee: 3, code: "03-65", domaine: "ecopol", titre: "Commerce extérieur et balance des paiements",
      resume: "Avantages absolus et comparatifs, structure de la balance des paiements, la Suisse en chiffres, excédent et déficit, prix du franc, change fixe ou flexible.",
      dossier: "65-commerce-exterieur", pret: true, apprentissage: true, relu: false },
  ],
};
