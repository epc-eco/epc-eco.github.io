/* =========================================================
   Moteur de questions — commun à tous les thèmes
   ---------------------------------------------------------
   Types de questions (dans questions.js de chaque thème) :

   choix    { type:"choix", q, options:[...], correct:[i, ...] }
            → plusieurs bonnes réponses = cases à cocher
   tableau  { type:"tableau", q, colonnes:[...], lignes:[{t, c:[i]}], multiple:false }
   vf       { type:"vf", q, items:[{t, v:true|false, note}] }
   trous    { type:"trous", q, texte:"La Suisse est [[*fédérale|centralisée]]…" }
            → l'option juste est précédée de *
   ouverte  { type:"ouverte", q, modele:"réponse modèle" }
            → l'élève compare et s'auto-évalue

   Champs communs : id, q, consigne, explication, revoir:"id-section", sujet
   ========================================================= */
(function () {
  "use strict";

  const TITRES_OK = ["Juste !", "Exact !", "Bravo !", "Parfait !", "Très bien !"];
  const TITRES_KO = ["Pas tout à fait…", "Raté, mais on apprend !", "Pas encore…", "Presque… mais non"];

  const el = (tag, attrs = {}, html) => {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") e.className = v;
      else if (k.startsWith("on")) e.addEventListener(k.slice(2), v);
      else if (v !== false && v != null) e.setAttribute(k, v === true ? "" : v);
    }
    if (html != null) e.innerHTML = html;
    return e;
  };
  const melanger = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const hasard = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const ICONE_OK = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
  const ICONE_KO = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>';
  const ICONE_LIVRE = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/></svg>';

  /* ---------- Retour (correction) ---------- */
  function retour(q, score, opts, detail) {
    const cls = score >= 0.999 ? "ok" : score <= 0.001 ? "ko" : "mi";
    let titre = cls === "ok" ? hasard(TITRES_OK) : cls === "ko" ? hasard(TITRES_KO) : "En partie juste";
    if (detail) titre += ` <span style="font-weight:500;opacity:.8">(${detail})</span>`;
    const ico = cls === "ok" ? ICONE_OK : cls === "ko" ? ICONE_KO : ICONE_OK;
    const box = el("div", { class: "retour " + cls, role: "status" });
    box.innerHTML = `<div class="retour-titre">${ico}${titre}</div>` + (q.explication ? `<p>${q.explication}</p>` : "");
    if (q.revoir && opts.lienTheorie !== false) {
      const titreSection = (opts.sections && opts.sections[q.revoir]) || "la théorie";
      const href = (opts.lienTheorie || "") + "#" + q.revoir;
      box.appendChild(el("a", { class: "revoir", href, "data-onglet": true }, `${ICONE_LIVRE} Revoir : ${titreSection}`));
    }
    return box;
  }

  function boutonValider(onClick, actif = false) {
    return el("button", { class: "bouton", type: "button", disabled: !actif, onclick: onClick }, "Valider");
  }

  /* ---------- Types ---------- */
  const TYPES = {};

  TYPES.choix = function (q, zone, fin, reveler) {
    const multiple = q.correct.length > 1 || q.multiple;
    const ordre = q.melanger === false ? q.options.map((_, i) => i) : melanger(q.options.map((_, i) => i));
    const choisis = new Set();
    const liste = el("div", { class: "q-options", role: multiple ? "group" : "radiogroup" });
    const lettres = "ABCDEFGH";
    const boutons = ordre.map((idx, pos) => {
      const b = el("button", { class: "opt" + (multiple ? "" : " rond"), type: "button", "aria-pressed": "false" },
        `<span class="marque">${lettres[pos]}</span><span>${q.options[idx]}</span>`);
      b.addEventListener("click", () => {
        if (multiple) {
          choisis.has(idx) ? choisis.delete(idx) : choisis.add(idx);
        } else {
          choisis.clear(); choisis.add(idx);
        }
        boutons.forEach((bb, p) => bb.setAttribute("aria-pressed", choisis.has(ordre[p]) ? "true" : "false"));
        valider.disabled = choisis.size === 0;
      });
      liste.appendChild(b);
      return b;
    });
    zone.appendChild(liste);
    const actions = el("div", { class: "q-actions" });
    const valider = boutonValider(() => {
      const bonnes = new Set(q.correct);
      let tp = 0, fp = 0;
      boutons.forEach((b, p) => {
        const idx = ordre[p];
        b.disabled = true;
        b.removeAttribute("aria-pressed");
        const m = b.querySelector(".marque");
        if (bonnes.has(idx) && choisis.has(idx)) { b.classList.add("juste"); m.innerHTML = "✓"; tp++; }
        else if (!bonnes.has(idx) && choisis.has(idx)) { b.classList.add("faux"); m.innerHTML = "✕"; fp++; }
        else if (bonnes.has(idx)) { b.classList.add("manque"); }
      });
      let score = multiple ? Math.max(0, (tp - fp) / bonnes.size) : (tp === 1 && fp === 0 ? 1 : 0);
      actions.remove();
      fin(score, multiple && score < 1 && score > 0 ? `${tp} sur ${bonnes.size}` : "");
    });
    actions.appendChild(valider);
    zone.appendChild(actions);
    reveler(() => {
      const bonnes = new Set(q.correct);
      boutons.forEach((b, p) => {
        b.disabled = true; b.removeAttribute("aria-pressed");
        if (bonnes.has(ordre[p])) { b.classList.add("juste"); b.querySelector(".marque").innerHTML = "✓"; }
      });
      actions.remove();
    });
  };

  TYPES.tableau = function (q, zone, fin, reveler) {
    const multiple = !!q.multiple;
    const lignes = q.melanger === false ? q.lignes : melanger(q.lignes);
    const etat = lignes.map(() => new Set());
    const wrap = el("div", { class: "q-tableau-wrap" });
    const t = el("table", { class: "q-tableau" });
    t.innerHTML = `<thead><tr><th>${q.entete || ""}</th>${q.colonnes.map((c) => `<th>${c}</th>`).join("")}</tr></thead>`;
    const tb = el("tbody");
    const cases = [];
    lignes.forEach((l, i) => {
      const tr = el("tr");
      tr.appendChild(el("td", {}, l.t));
      cases[i] = q.colonnes.map((col, j) => {
        const td = el("td", { class: "case" });
        const b = el("button", { class: "case-btn" + (multiple ? "" : " rond"), type: "button", "aria-pressed": "false", "aria-label": `${col}` }, "✓");
        b.addEventListener("click", () => {
          if (multiple) { etat[i].has(j) ? etat[i].delete(j) : etat[i].add(j); }
          else { etat[i].clear(); etat[i].add(j); }
          cases[i].forEach((bb, jj) => bb.setAttribute("aria-pressed", etat[i].has(jj) ? "true" : "false"));
          valider.disabled = etat.some((s) => s.size === 0);
        });
        td.appendChild(b); tr.appendChild(td);
        return b;
      });
      tb.appendChild(tr);
    });
    t.appendChild(tb); wrap.appendChild(t); zone.appendChild(wrap);
    const actions = el("div", { class: "q-actions" });
    const valider = boutonValider(() => {
      let justes = 0;
      lignes.forEach((l, i) => {
        const bonnes = new Set(l.c);
        let ok = bonnes.size === etat[i].size && [...bonnes].every((x) => etat[i].has(x));
        if (ok) justes++;
        tb.rows[i].classList.add(ok ? "ligne-juste" : "ligne-fausse");
        cases[i].forEach((b, j) => {
          b.disabled = true; b.removeAttribute("aria-pressed");
          if (bonnes.has(j) && etat[i].has(j)) { b.classList.add("juste"); b.textContent = "✓"; }
          else if (etat[i].has(j)) { b.classList.add("faux"); b.textContent = "✕"; }
          else if (bonnes.has(j)) { b.classList.add("manque"); b.textContent = ""; }
          else { b.textContent = ""; }
        });
      });
      actions.remove();
      fin(justes / lignes.length, `${justes} ligne${justes > 1 ? "s" : ""} juste${justes > 1 ? "s" : ""} sur ${lignes.length}`);
    });
    actions.appendChild(valider);
    zone.appendChild(actions);
    reveler(() => {
      lignes.forEach((l, i) => {
        const bonnes = new Set(l.c);
        cases[i].forEach((b, j) => {
          b.disabled = true; b.removeAttribute("aria-pressed");
          if (bonnes.has(j)) { b.classList.add("juste"); b.textContent = "✓"; } else b.textContent = "";
        });
      });
      actions.remove();
    });
  };

  TYPES.vf = function (q, zone, fin, reveler) {
    const items = q.melanger === false ? q.items : melanger(q.items);
    const rep = items.map(() => null);
    const lignes = items.map((it, i) => {
      const ligne = el("div", { class: "vf-ligne" });
      ligne.appendChild(el("div", {}, it.t));
      const choix = el("div", { class: "vf-choix" });
      const bV = el("button", { type: "button", "aria-pressed": "false" }, "Vrai");
      const bF = el("button", { type: "button", "aria-pressed": "false" }, "Faux");
      const set = (v) => {
        rep[i] = v;
        bV.setAttribute("aria-pressed", v === true ? "true" : "false");
        bF.setAttribute("aria-pressed", v === false ? "true" : "false");
        valider.disabled = rep.some((r) => r === null);
      };
      bV.onclick = () => set(true); bF.onclick = () => set(false);
      choix.append(bV, bF); ligne.appendChild(choix);
      zone.appendChild(ligne);
      return { ligne, bV, bF };
    });
    const actions = el("div", { class: "q-actions" });
    const valider = boutonValider(() => {
      let justes = 0;
      items.forEach((it, i) => {
        const { ligne, bV, bF } = lignes[i];
        const ok = rep[i] === it.v;
        if (ok) justes++;
        ligne.classList.add(ok ? "juste" : "faux");
        [bV, bF].forEach((b) => { b.disabled = true; b.removeAttribute("aria-pressed"); });
        (it.v ? bV : bF).classList.add("bonne");
        if (!ok) (it.v ? bF : bV).classList.add("mauvaise");
        if (it.note) ligne.appendChild(el("div", { class: "vf-note" }, it.note));
      });
      actions.remove();
      fin(justes / items.length, `${justes} sur ${items.length}`);
    });
    actions.appendChild(valider);
    zone.appendChild(actions);
    reveler(() => {
      items.forEach((it, i) => {
        const { ligne, bV, bF } = lignes[i];
        [bV, bF].forEach((b) => { b.disabled = true; b.removeAttribute("aria-pressed"); });
        (it.v ? bV : bF).classList.add("bonne");
        if (it.note) ligne.appendChild(el("div", { class: "vf-note" }, it.note));
      });
      actions.remove();
    });
  };

  TYPES.trous = function (q, zone, fin, reveler) {
    const bloc = el("div", { class: "trous" });
    const trous = [];
    const html = q.texte.replace(/\[\[(.+?)\]\]/g, (_, contenu) => {
      const opts = contenu.split("|").map((s) => s.trim());
      const bonne = opts.find((o) => o.startsWith("*")).slice(1);
      trous.push({ opts: melanger(opts.map((o) => o.replace(/^\*/, ""))), bonne });
      return `<span data-trou="${trous.length - 1}"></span>`;
    });
    bloc.innerHTML = html;
    const selects = trous.map((tr, i) => {
      const s = el("select", { "aria-label": `Trou ${i + 1}` });
      s.appendChild(el("option", { value: "" }, "…"));
      tr.opts.forEach((o) => s.appendChild(el("option", { value: o }, o)));
      s.addEventListener("change", () => { valider.disabled = selects.some((x) => !x.value); });
      bloc.querySelector(`[data-trou="${i}"]`).appendChild(s);
      return s;
    });
    zone.appendChild(bloc);
    const actions = el("div", { class: "q-actions" });
    const valider = boutonValider(() => {
      let justes = 0;
      selects.forEach((s, i) => {
        const ok = s.value === trous[i].bonne;
        if (ok) justes++;
        s.classList.add(ok ? "juste" : "faux");
        s.disabled = true;
        if (!ok) s.insertAdjacentElement("afterend", el("span", { class: "correction-trou" }, `→ ${trous[i].bonne}`));
      });
      actions.remove();
      fin(justes / trous.length, trous.length > 1 ? `${justes} sur ${trous.length}` : "");
    });
    actions.appendChild(valider);
    zone.appendChild(actions);
    reveler(() => {
      selects.forEach((sel, i) => { sel.value = trous[i].bonne; sel.classList.add("juste"); sel.disabled = true; });
      actions.remove();
    });
  };

  TYPES.ouverte = function (q, zone, fin, reveler) {
    const ta = el("textarea", { placeholder: "Écrivez votre réponse ici, puis comparez avec la réponse modèle…", "aria-label": "Votre réponse" });
    zone.appendChild(ta);
    const actions = el("div", { class: "q-actions" });
    const voir = el("button", { class: "bouton", type: "button" }, "Voir la réponse modèle");
    voir.onclick = () => {
      ta.readOnly = true;
      actions.remove();
      const m = el("div", { class: "modele" }, `<span class="etiquette">Réponse modèle</span>${q.modele}`);
      zone.appendChild(m);
      const ev = el("div", { class: "auto-eval" }, "<span>Votre réponse était…</span>");
      [["juste", 1], ["en partie juste", 0.5], ["fausse", 0]].forEach(([lib, sc]) => {
        ev.appendChild(el("button", { type: "button", onclick: () => { ev.remove(); fin(sc, "auto-évaluation", { sansExplication: false }); } }, lib.charAt(0).toUpperCase() + lib.slice(1)));
      });
      zone.appendChild(ev);
    };
    actions.appendChild(voir);
    zone.appendChild(actions);
    reveler(() => {
      ta.readOnly = true;
      actions.remove();
      zone.appendChild(el("div", { class: "modele" }, `<span class="etiquette">Réponse modèle</span>${q.modele}`));
    });
  };

  /* ---------- Rendu d'une question ---------- */
  function rendre(q, opts = {}) {
    const bloc = el("div", { class: "q", "data-id": q.id || "" });
    if (opts.afficherSujet && q.sujet) bloc.appendChild(el("span", { class: "theme-q" }, q.sujet));
    bloc.appendChild(el("div", { class: "q-enonce" }, q.q));
    const consigneDefaut = {
      choix: q.correct && q.correct.length > 1 ? "Plusieurs réponses sont justes." : "Une seule réponse est juste.",
      tableau: q.multiple ? "Cochez une ou plusieurs cases par ligne." : "Cochez une case par ligne.",
      vf: "Vrai ou faux ? Répondez pour chaque affirmation.",
      trous: "Complétez avec les menus déroulants.",
      ouverte: "Répondez par écrit, puis comparez avec la réponse modèle.",
    }[q.type];
    bloc.appendChild(el("div", { class: "q-consigne" }, q.consigne || consigneDefaut));
    const zone = el("div", { class: "q-zone" });
    bloc.appendChild(zone);
    const fn = TYPES[q.type];
    if (!fn) { zone.textContent = "Type de question inconnu : " + q.type; return bloc; }
    let solution = null;
    fn(q, zone, (score, detail) => {
      bloc.dataset.repondu = "1";
      bloc.appendChild(retour(q, score, opts, detail));
      if (opts.onRepondu) opts.onRepondu(score);
    }, (f) => { solution = f; });
    // Affiche directement la solution, sans réponse de l'élève (mode présentation)
    bloc.reveler = () => {
      if (bloc.dataset.repondu || !solution) return false;
      bloc.dataset.repondu = "1";
      solution();
      if (q.explication) {
        bloc.appendChild(el("div", { class: "retour sol", role: "status" },
          `<div class="retour-titre">💡 Solution</div><p>${q.explication}</p>`));
      }
      return true;
    };
    return bloc;
  }

  /* ---------- Stockage du meilleur score (navigateur de l'élève) ---------- */
  const stock = {
    lire(cle) { try { return JSON.parse(localStorage.getItem("cours:" + cle)); } catch (e) { return null; } },
    ecrire(cle, v) { try { localStorage.setItem("cours:" + cle, JSON.stringify(v)); } catch (e) { /* stockage indisponible */ } },
  };

  window.Quiz = { rendre, melanger, el, stock };
})();
