/* =========================================================
   Page théorie (fichier publié)
   - Mode lecture : page qui défile (élèves, téléphone)
   - Mode présentation : PAS ici, dans commun/presentation.js (fichier de l'enseignant, non publié).
     Sans ce fichier, la page n'a ni bouton « Présenter » ni touche P.
     Ce fichier lui fournit les fonctions communes via window.Theorie.
   - Mode apprentissage (?mode=apprentissage) : une diapo à la fois pour l'élève, sur téléphone ou ordinateur.
     On avance en touchant l'écran (ou en glissant) : les éléments apparaissent un à un et les mots en gras
     sont d'abord masqués. Questions éclair facultatives. Le navigateur retient la dernière diapo vue.
   ========================================================= */
(function () {
  "use strict";
  const corps = document.body;
  const diapos = [...document.querySelectorAll(".diapo")];
  const sommaire = document.querySelector(".sommaire");
  const liens = [...document.querySelectorAll(".sommaire ol > li > a[href^='#']")];
  const cleMarque = "cours:marque:" + location.pathname;
  const enPres = () => corps.classList.contains("presentation");
  const enApp = () => corps.classList.contains("apprentissage");
  const enDiapo = () => enPres() || enApp();

  /* ---------- Questions éclair (tirées de la banque du thème) ---------- */
  const banque = (window.QUESTIONS && window.QUESTIONS.questions) || [];
  function rendreEclair(zone) {
    const q = banque.find((x) => x.id === zone.dataset.q);
    if (!q) return;
    zone.innerHTML = '<div class="eclair-tete"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 3 14h7l-1 8 10-12h-7z"/></svg>Question éclair<button type="button" class="eclair-solution" data-action="solution">Voir la réponse</button></div>';
    zone.appendChild(window.Quiz.rendre(q, { lienTheorie: false }));
  }
  document.querySelectorAll(".eclair[data-q]").forEach(rendreEclair);
  // R : révèle la solution de la question éclair affichée ; une 2e pression remet la question à zéro
  function solutionEclair(basculer, zoneChoisie) {
    const zone = zoneChoisie || document.querySelector(".diapo.active .eclair[data-q]");
    if (!zone) return;
    const bloc = zone.querySelector(".q");
    if (bloc && bloc.dataset.repondu) { if (basculer) rendreEclair(zone); }
    else if (bloc) bloc.reveler();
  }

  /* ---------- Onglets des schémas ---------- */
  function choisirOnglet(bloc, i) {
    const btns = [...bloc.querySelectorAll(".schema-onglets button")];
    const panneaux = [...bloc.querySelectorAll(".schema-panneau")];
    btns.forEach((x, j) => x.setAttribute("aria-selected", i === j ? "true" : "false"));
    panneaux.forEach((p, j) => (p.hidden = i !== j));
  }
  document.querySelectorAll("[data-onglets]").forEach((bloc) => {
    bloc.querySelectorAll(".schema-onglets button").forEach((b, i) => b.addEventListener("click", () => choisirOnglet(bloc, i)));
  });

  /* ---------- Préparation des diapos ---------- */
  diapos.forEach((d) => {
    const sec = d.closest("section");
    if (d.querySelector(".eclair")) d.classList.add("diapo-centre");
    if (!sec || d.querySelector(".section-tete")) return;
    const num = sec.querySelector(".section-num");
    const titre = sec.querySelector("h2");
    if (!num || !titre) return;
    const k = document.createElement("div");
    k.className = "diapo-kicker";
    k.innerHTML = `<span class="num">${num.textContent}</span>${titre.textContent}`;
    d.prepend(k);
  });

  /* ---------- Sommaire déroulant : les diapos de chaque partie ---------- */
  diapos.forEach((d, i) => { if (!d.id) d.id = "diapo-" + (i + 1); });
  const texte = (html) => { const t = document.createElement("div"); t.innerHTML = html; return t.textContent.trim(); };
  const couper = (t, n) => (t.length > n ? t.slice(0, n - 1).trimEnd() + "…" : t);
  function titreDiapo(d) {
    if (d.dataset.titre) return d.dataset.titre;
    const h3 = d.querySelector(":scope > h3");
    if (h3) return h3.textContent.trim();
    const eclair = d.querySelector(".eclair[data-q]");
    if (eclair) {
      const q = banque.find((x) => x.id === eclair.dataset.q);
      return "⚡ " + (q ? couper(texte(q.q), 46) : "Question éclair");
    }
    const h2 = d.querySelector("h2");
    return h2 ? h2.textContent.trim() : "Diapo " + (diapos.indexOf(d) + 1);
  }
  const sousListes = [];
  liens.forEach((a) => {
    const sec = document.querySelector(a.getAttribute("href"));
    if (!sec) return;
    const li = a.parentElement;
    li.classList.add("partie");
    const ul = document.createElement("ul");
    ul.className = "sous";
    sec.querySelectorAll(".diapo").forEach((d) => {
      const sli = document.createElement("li");
      const sa = document.createElement("a");
      sa.href = "#" + d.id;
      sa.dataset.diapo = diapos.indexOf(d);
      sa.textContent = titreDiapo(d);
      if (d.querySelector(".eclair")) sa.classList.add("sous-eclair");
      sli.appendChild(sa); ul.appendChild(sli);
    });
    // Flèche pour déplier / replier les diapos de la partie
    const fl = document.createElement("button");
    fl.type = "button";
    fl.className = "chevron";
    fl.setAttribute("aria-expanded", "false");
    fl.setAttribute("aria-label", "Afficher les diapos de « " + a.textContent.trim() + " »");
    fl.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg>';
    fl.addEventListener("click", (e) => {
      e.preventDefault(); e.stopPropagation();
      const ouvert = li.classList.toggle("ouvert");
      fl.setAttribute("aria-expanded", ouvert ? "true" : "false");
      fl.blur();
    });
    li.appendChild(fl);
    li.appendChild(ul);
    sousListes.push({ li, sec });
  });

  /* ---------- Mots-clés (mode apprentissage) : les mots en gras du contenu ---------- */
  const EXCLUS = ".eclair, h1, h2, h3, h4, .etiquette, .section-tete, figure, svg, .diapo-kicker, .bandeau, .schema-onglets, .piece";
  function motsDe(d) {
    return [...d.querySelectorAll("b, strong")].filter((b) => !b.closest(EXCLUS) && b.textContent.trim().length > 1);
  }
  const proprietaire = (b) => b.closest(".frag") || b.closest("li, p, td, th, .definition, .formule, .exemple, .carte") || b.parentElement;
  document.addEventListener("click", (e) => {
    const m = e.target.closest(".mot-cache");
    if (!m || !enApp()) return;
    e.stopPropagation();
    m.classList.remove("mot-cache"); m.classList.add("vu-main");
  }, true);

  // Étapes d'une diapo.
  // Présentation : apparitions (.frag) puis onglets des schémas.
  // Apprentissage : dans l'ordre du texte, chaque bloc apparaît, puis ses mots-clés se dévoilent.
  function etapesDe(d) {
    const frags = [...d.querySelectorAll(".frag")];
    const onglets = d.querySelector("[data-onglets]");
    const nbOnglets = onglets ? onglets.querySelectorAll(".schema-onglets button").length : 0;
    const actions = [];
    if (enApp()) {
      const mots = motsDe(d);
      const groupes = new Map();
      mots.forEach((b) => { const o = proprietaire(b); if (!groupes.has(o)) groupes.set(o, []); groupes.get(o).push(b); });
      const points = [...new Set([...frags, ...groupes.keys()])]
        .sort((a, b) => (a === b ? 0 : a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));
      points.forEach((n) => {
        if (n.classList && n.classList.contains("frag")) actions.push({ frag: n });
        if (groupes.has(n)) actions.push({ mots: groupes.get(n) });
      });
    } else {
      frags.forEach((f) => actions.push({ frag: f }));
    }
    for (let i = 1; i < nbOnglets; i++) actions.push({ onglet: i });
    return { frags, onglets, actions, total: actions.length };
  }

  /* ---------- État ---------- */
  let idx = 0, etape = 0;
  // Crochets remplis par presentation.js (s'il est présent)
  const T = { majPres: () => {}, placer: () => {} };

  function appliquerEtapes() {
    const d = diapos[idx];
    const { frags, onglets, actions } = etapesDe(d);
    frags.forEach((f) => f.classList.remove("vu"));
    const mots = enApp() ? motsDe(d) : [];
    document.querySelectorAll(".mot-cache").forEach((b) => b.classList.remove("mot-cache"));
    mots.forEach((b) => { if (!b.classList.contains("vu-main")) b.classList.add("mot-cache"); });
    let onglet = 0;
    actions.slice(0, etape).forEach((a) => {
      if (a.frag) a.frag.classList.add("vu");
      if (a.mots) a.mots.forEach((b) => b.classList.remove("mot-cache"));
      if (a.onglet) onglet = a.onglet;
    });
    if (onglets) choisirOnglet(onglets, onglet);
    d.querySelectorAll("[data-assemblage]").forEach((a) => assemblage(a, a.classList.contains("vu") ? "complet" : "zero"));
  }

  /* ---------- Assemblage animé : des morceaux des cartes « volent » vers une formule ----------
     <div class="formule frag" data-assemblage> <span class="piece" data-source="id">…</span> … </div>
     Un morceau avec data-source part de l'élément #id ; les autres apparaissent simplement.
     L'animation se lance quand on atteint l'étape avec → ; avec ↓ ou ←, tout est affiché ou masqué d'un coup. */
  function assemblage(el, mode) {
    (el._minuteurs || []).forEach(clearTimeout);
    el._minuteurs = [];
    document.querySelectorAll(".clone-vol").forEach((c) => c.remove());
    const pieces = [...el.querySelectorAll(".piece")];
    if (mode !== "animer") { pieces.forEach((p) => p.classList.toggle("vue", mode === "complet")); return; }
    pieces.forEach((p) => p.classList.remove("vue"));
    let t = 550; // le temps que l'encadré apparaisse
    pieces.forEach((p) => {
      const src = p.dataset.source && document.getElementById(p.dataset.source);
      if (src) { el._minuteurs.push(setTimeout(() => voler(src, p), t)); t += 1050; }
      else { el._minuteurs.push(setTimeout(() => p.classList.add("vue"), t)); t += 380; }
    });
  }
  function voler(src, cible) {
    const d = cible.closest(".diapo");
    const s = parseFloat(corps.style.getPropertyValue("--s")) || 1;
    const rd = d.getBoundingClientRect(), rs = src.getBoundingClientRect(), rc = cible.getBoundingClientRect();
    const cs = getComputedStyle(src);
    const c = src.cloneNode(true);
    c.removeAttribute("id");
    c.className = "clone-vol";
    Object.assign(c.style, {
      left: (rs.left - rd.left) / s + d.scrollLeft + "px", top: (rs.top - rd.top) / s + d.scrollTop + "px",
      font: cs.font, letterSpacing: cs.letterSpacing, textTransform: cs.textTransform, color: cs.color,
    });
    d.appendChild(c);
    const dx = (rc.left - rs.left) / s, dy = (rc.top - rs.top) / s, k = rc.height / Math.max(rs.height, 1);
    const vol = c.animate([
      { transform: "translate(0, 0) scale(1)" },
      { transform: `translate(${dx * 0.5}px, ${dy * 0.5 - 30}px) scale(${(1 + k) / 2})`, offset: 0.5 },
      { transform: `translate(${dx}px, ${dy}px) scale(${k})`, color: getComputedStyle(cible).color },
    ], { duration: 900, easing: "cubic-bezier(.45,0,.25,1)", fill: "forwards" });
    vol.onfinish = () => {
      cible.classList.add("vue");
      c.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, fill: "forwards" }).onfinish = () => c.remove();
    };
  }

  function majInterface() {
    const sec = diapos[idx].closest("section");
    liens.forEach((a) => a.classList.toggle("actif", !!sec && a.getAttribute("href") === "#" + sec.id));
    document.querySelectorAll(".sommaire .sous a").forEach((a) => a.classList.toggle("actif", +a.dataset.diapo === idx));
    const actifSous = document.querySelector(".sommaire .sous a.actif");
    if (actifSous && enPres()) actifSous.scrollIntoView({ block: "nearest" });
    T.majPres(idx);
    if (navApp) {
      navApp.querySelector("[data-app-compteur]").textContent = `${idx + 1} / ${diapos.length}`;
      navApp.querySelector("[data-app-avance]").style.width = ((idx + 1) / diapos.length) * 100 + "%";
      const fin = idx === diapos.length - 1 && etape >= etapesDe(diapos[idx]).total;
      navApp.querySelector("[data-action='suivant'] span").textContent = fin ? "Fin" : "Suivant";
    }
  }

  function aller(i, e) {
    i = Math.max(0, Math.min(diapos.length - 1, i));
    diapos[idx].classList.remove("active");
    idx = i;
    etape = e === "fin" ? etapesDe(diapos[idx]).total : 0;
    diapos[idx].classList.add("active");
    appliquerEtapes();
    majInterface();
    T.placer();
    history.replaceState(null, "", "#diapo-" + (idx + 1));
    if (enApp()) {
      try { localStorage.setItem(cleMarque, String(idx)); } catch (err) { /* rien */ }
      window.scrollTo({ top: 0 });
    }
  }
  // En apprentissage, on saute les étapes déjà faites à la main (mots touchés)
  function etapeInutile(a) { return a && a.mots && a.mots.every((b) => b.classList.contains("vu-main")); }
  function suivant() {
    const { actions, total } = etapesDe(diapos[idx]);
    while (etape < total && etapeInutile(actions[etape])) etape++;
    if (etape < total) {
      etape++; appliquerEtapes();
      const a = actions[etape - 1];
      if (a.frag && a.frag.matches("[data-assemblage]")) assemblage(a.frag, "animer");
      if (enApp()) {
        const cible = a.frag || (a.mots && a.mots[0]);
        if (cible) cible.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
      majInterface();
    }
    else if (idx < diapos.length - 1) aller(idx + 1, 0);
  }
  function precedent() {
    if (etape > 0) { etape--; appliquerEtapes(); majInterface(); }
    else if (idx > 0) aller(idx - 1, "fin");
  }

  // Diapo correspondant à une ancre (#federal, #diapo-12…)
  function diapoDepuisAncre(hash) {
    if (!hash) return null;
    const m = hash.match(/^#diapo-(\d+)$/);
    if (m) return Math.min(diapos.length, Math.max(1, +m[1])) - 1;
    const cible = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (!cible) return null;
    const d = cible.classList.contains("diapo") ? cible : (cible.closest(".diapo") || cible.querySelector(".diapo"));
    return d ? diapos.indexOf(d) : null;
  }

  /* ---------- Mode apprentissage ---------- */
  let navApp = null;
  function apprendre(depart) {
    corps.classList.remove("presentation");
    corps.classList.add("apprentissage");
    document.querySelectorAll(".onglets a").forEach((a) => {
      const app = a.dataset.mode === "apprentissage";
      a.classList.toggle("actif", app);
      if (app) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    navApp = document.createElement("nav");
    navApp.className = "app-nav";
    navApp.setAttribute("aria-label", "Navigation de l'apprentissage");
    navApp.innerHTML = `
      <button type="button" class="app-btn" data-action="sommaire-app" aria-label="Sommaire"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg></button>
      <button type="button" class="app-btn" data-action="precedent" aria-label="Précédent"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg></button>
      <div class="app-progression"><span data-app-compteur></span><div class="app-barre"><div data-app-avance></div></div></div>
      <button type="button" class="app-suivant" data-action="suivant"><span>Suivant</span><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg></button>`;
    corps.appendChild(navApp);
    let i = depart;
    let reprise = false;
    if (i == null) {
      try { const m = parseInt(localStorage.getItem(cleMarque), 10); if (m > 0 && m < diapos.length) { i = m; reprise = true; } } catch (e) { /* rien */ }
    }
    diapos.forEach((d) => d.classList.remove("active"));
    idx = 0; aller(i || 0, 0);
    if (reprise) {
      const t = document.createElement("div");
      t.className = "app-reprise";
      t.innerHTML = `Vous reprenez à la diapo ${i + 1}. <button type="button" data-action="recommencer">Recommencer au début</button>`;
      corps.appendChild(t);
      setTimeout(() => t.classList.add("cache"), 6000);
      setTimeout(() => t.remove(), 6600);
    }
  }
  // Toucher la diapo = avancer ; glisser vers la gauche / droite = suivant / précédent
  const INTERACTIF = "a, button, select, textarea, input, label, .opt, .q-zone, .schema-onglets, .mot-cache, .vf-ligne, .case-btn";
  document.addEventListener("click", (e) => {
    if (!enApp() || !e.target.closest(".diapo.active") || e.target.closest(INTERACTIF)) return;
    if (window.getSelection && String(window.getSelection())) return; // l'élève sélectionne du texte
    suivant();
  });
  let toucheX = null, toucheY = null;
  document.addEventListener("touchstart", (e) => { if (enApp()) { toucheX = e.touches[0].clientX; toucheY = e.touches[0].clientY; } }, { passive: true });
  document.addEventListener("touchend", (e) => {
    if (!enApp() || toucheX == null) return;
    const dx = e.changedTouches[0].clientX - toucheX, dy = e.changedTouches[0].clientY - toucheY;
    toucheX = null;
    if (Math.abs(dx) > 60 && Math.abs(dy) < 50) { if (dx < 0) suivant(); else precedent(); }
  }, { passive: true });

  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-action]");
    if (b) {
      const a = b.dataset.action;
      if (a === "suivant") suivant();
      else if (a === "precedent") precedent();
      else if (a === "sommaire-app") corps.classList.toggle("sommaire-ouvert");
      else if (a === "solution") solutionEclair(false, b.closest(".eclair"));
      else if (a === "recommencer") { b.parentElement.remove(); aller(0, 0); }
      b.blur();
      return;
    }
    // Liens du sommaire : une partie s'ouvre et montre ses diapos
    const lien = e.target.closest(".sommaire a[href^='#']");
    if (!lien) return;
    lien.blur(); // pas de cadre de sélection qui reste après le clic
    if (enDiapo()) {
      e.preventDefault();
      const i = diapoDepuisAncre(lien.getAttribute("href"));
      if (i != null) aller(i, 0);
      corps.classList.remove("sommaire-ouvert");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const t = e.target;
    if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "SELECT" || t.isContentEditable)) return;
    const k = e.key;
    if (!enApp()) return; // les touches de la présentation sont dans presentation.js
    if (k === "ArrowRight" || k === "PageDown" || (k === " " && t.tagName !== "BUTTON")) { e.preventDefault(); suivant(); }
    else if (k === "ArrowLeft" || k === "PageUp") { e.preventDefault(); precedent(); }
    else if (k === "Home") { e.preventDefault(); aller(0, 0); }
    else if (k === "End") { e.preventDefault(); aller(diapos.length - 1, "fin"); }
  });

  /* ---------- Fonctions communes, utilisées par presentation.js ---------- */
  window.Theorie = Object.assign(T, {
    diapos, sommaire, aller, suivant, precedent, solutionEclair, diapoDepuisAncre,
    get idx() { return idx; },
    afficherTout() {
      diapos.forEach((d) => d.classList.remove("active"));
      document.querySelectorAll(".frag").forEach((f) => f.classList.add("vu"));
    },
  });

  /* ---------- Mode lecture : barre de lecture et sommaire actif ---------- */
  const barre = document.querySelector(".progression-lecture");
  if (barre) {
    const maj = () => {
      const h = document.documentElement;
      const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      barre.style.width = (p * 100).toFixed(1) + "%";
    };
    document.addEventListener("scroll", maj, { passive: true });
    maj();
  }
  const sections = liens.map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window && sections.length) {
    const io = new IntersectionObserver((entrees) => {
      if (enDiapo()) return;
      entrees.forEach((e) => {
        if (e.isIntersecting) {
          liens.forEach((a) => a.classList.toggle("actif", a.getAttribute("href") === "#" + e.target.id));
        }
      });
    }, { rootMargin: "-20% 0px -70% 0px" });
    sections.forEach((s) => io.observe(s));
  }

  window.addEventListener("hashchange", () => {
    if (!enDiapo()) return;
    const i = diapoDepuisAncre(location.hash);
    if (i != null && i !== idx) aller(i, 0);
  });

  /* ---------- Démarrage (le mode présentation démarre dans presentation.js) ---------- */
  if (new URLSearchParams(location.search).get("mode") === "apprentissage") {
    apprendre(diapoDepuisAncre(location.hash));
  }
})();
