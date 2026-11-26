/* Page entraînement : tirage, une question à la fois, résultat final */
(function () {
  "use strict";
  const { el, melanger, rendre } = window.Quiz;
  const THEME = window.THEME;
  const BANQUE = window.QUESTIONS.questions;
  const SECTIONS = window.QUESTIONS.sections || {};
  const TAILLE_RAPIDE = 20;
  const racine = document.getElementById("test");

  function accueil() {
    racine.innerHTML = "";
    const bloc = el("div", { class: "accueil-test" });
    bloc.innerHTML = `
      <h1>Entraînez-vous</h1>
      <p class="sous">${THEME.titre} — la correction s'affiche après chaque question, avec un lien vers la partie de la théorie à revoir.</p>`;
    const modes = el("div", { class: "modes" });
    const n = Math.min(TAILLE_RAPIDE, BANQUE.length);
    modes.appendChild(el("button", { class: "mode", type: "button", onclick: () => lancer(melanger(BANQUE).slice(0, n)) },
      `<span class="n">${n}</span><span class="t">Série au hasard</span><span class="d">${n} questions tirées au hasard. Chaque essai est différent.</span>`));
    modes.appendChild(el("button", { class: "mode", type: "button", onclick: () => lancer(melanger(BANQUE)) },
      `<span class="n">${BANQUE.length}</span><span class="t">Toutes les questions</span><span class="d">La banque complète, pour réviser avant l'épreuve.</span>`));
    bloc.appendChild(modes);
    racine.appendChild(bloc);
  }

  function lancer(serie) {
    const scores = [];
    racine.innerHTML = "";
    // En-tête collant : reste visible pendant qu'on fait défiler les questions
    const entete = el("div", { class: "test-entete" });
    const tete = el("div", { class: "test-tete" });
    const compteur = el("span", { class: "compteur" });
    const live = el("span", { class: "score-live" });
    tete.append(compteur, live);
    const prog = el("div", { class: "barre-prog" }, "<div></div>");
    entete.append(tete, prog);
    const liste = el("div", { class: "liste-q" });
    racine.append(entete, liste);

    const total = () => scores.reduce((a, b) => a + b, 0);
    const fmt = (x) => (Math.round(x * 10) / 10).toString().replace(".", ",");
    const majEntete = () => {
      compteur.textContent = `${scores.length} / ${serie.length} répondue${scores.length > 1 ? "s" : ""}`;
      live.innerHTML = `Points : <b>${fmt(total())}</b> / ${scores.length}`;
      prog.firstChild.style.width = (scores.length / serie.length) * 100 + "%";
    };

    // Ajoute la question i sous les précédentes
    function ajouter(i) {
      const carte = el("div", { class: "carte-q", id: "q" + (i + 1) });
      carte.appendChild(el("div", { class: "num-q" }, `Question ${i + 1} <span>/ ${serie.length}</span>`));
      carte.appendChild(rendre(serie[i], {
        lienTheorie: THEME.theorie, sections: SECTIONS, afficherSujet: true,
        onRepondu: (sc) => {
          scores[i] = sc;
          carte.classList.add("repondue");
          majEntete();
          const retour = carte.querySelector(".retour");
          const suite = i + 1 < serie.length ? ajouter(i + 1) : resultat(serie, scores);
          // On garde la correction visible et on fait apparaître la suite juste dessous
          requestAnimationFrame(() => {
            const haut = (retour || carte).getBoundingClientRect().top + window.scrollY - 150;
            window.scrollTo({ top: Math.max(haut, 0), behavior: "smooth" });
            const focus = suite && suite.querySelector("button, select, textarea");
            if (focus) focus.focus({ preventScroll: true });
          });
        },
      }));
      liste.appendChild(carte);
      return carte;
    }
    majEntete();
    ajouter(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function resultat(serie, scores) {
    const pts = scores.reduce((a, b) => a + b, 0);
    const pct = Math.round((pts / serie.length) * 100);

    const msg = pct >= 90 ? ["Excellent !", "Vous maîtrisez ce chapitre."]
      : pct >= 70 ? ["Bon travail !", "Encore quelques points à consolider."]
      : pct >= 50 ? ["Vous êtes sur la bonne voie", "Revoyez les parties ci-dessous puis réessayez."]
      : ["Il faut encore réviser", "Relisez la théorie en priorité sur les points ci-dessous."];

    const C = 2 * Math.PI * 80;
    const r = el("div", { class: "resultat carte-q", id: "resultat" });
    r.innerHTML = `
      <div class="anneau">
        <svg viewBox="0 0 190 190"><circle cx="95" cy="95" r="80" fill="none" stroke="var(--surface-3)" stroke-width="14"/>
        <circle cx="95" cy="95" r="80" fill="none" stroke="var(--accent)" stroke-width="14" stroke-linecap="round"
          stroke-dasharray="${C}" stroke-dashoffset="${C}" style="transition:stroke-dashoffset 1s ease"/></svg>
        <div class="val"><b>${pct}%</b><span>${(Math.round(pts * 10) / 10).toString().replace(".", ",")} / ${serie.length} pts</span></div>
      </div>
      <h2>${msg[0]}</h2>
      <p class="sous">${msg[1]}</p>`;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      r.querySelectorAll("circle")[1].style.strokeDashoffset = C * (1 - pct / 100);
    }));

    const ratees = serie.map((q, i) => ({ q, s: scores[i] })).filter((x) => x.s < 0.999);
    if (ratees.length) {
      const bloc = el("div", { class: "a-revoir" }, "<h3>À revoir</h3>");
      const ul = el("ul");
      ratees.forEach(({ q, s }) => {
        const tmp = document.createElement("div"); tmp.innerHTML = q.q;
        const li = el("li");
        li.appendChild(el("span", {}, tmp.textContent));
        const droite = el("span", { style: "display:flex;gap:14px;align-items:center" });
        droite.appendChild(el("span", { class: "pts" }, `${(Math.round(s * 10) / 10).toString().replace(".", ",")} / 1`));
        if (q.revoir) droite.appendChild(el("a", { href: THEME.theorie + "#" + q.revoir, "data-onglet": true }, (SECTIONS[q.revoir] || "Théorie") + " →"));
        li.appendChild(droite);
        ul.appendChild(li);
      });
      bloc.appendChild(ul);
      r.appendChild(bloc);
    }
    const act = el("div", { class: "actions-centre" });
    act.appendChild(el("button", { class: "bouton", type: "button", onclick: accueil }, "Recommencer"));
    act.appendChild(el("a", { class: "bouton secondaire", href: THEME.theorie, "data-onglet": true }, "Revoir la théorie"));
    act.appendChild(el("a", { class: "bouton secondaire", href: THEME.accueil || "../../index.html" }, "Tous les thèmes"));
    r.appendChild(act);
    racine.appendChild(r);
    return r;
  }

  accueil();
})();
