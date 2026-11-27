/* =========================================================
   Mode présentation — fichier de l'ENSEIGNANT, à NE PAS publier
   (exclu de GitHub par .gitignore).
   Sans ce fichier, la page théorie n'a ni bouton « Présenter » ni touche P :
   les élèves ont seulement la lecture et l'apprentissage.

   Diapositives 16:9 pour projeter en classe :
     → / Espace / Page suivante : avancer pas à pas      ← / Page précédente : reculer pas à pas
     ↓ / ↑ : diapo suivante / précédente, entièrement affichée (avec la solution des questions éclair)
     R : afficher / masquer la solution de la question éclair
     Début / Fin : première / dernière diapo   S : sommaire   F : plein écran   P : changer de mode
   Doit être chargé APRÈS theorie.js (il utilise window.Theorie).
   ========================================================= */
(function () {
  "use strict";
  const T = window.Theorie;
  if (!T) return;
  const corps = document.body;
  const diapos = T.diapos;
  const L = 1024, H = 576, LARG_SOMMAIRE = 280;
  const cleMode = "cours:mode-theorie";
  const enPres = () => corps.classList.contains("presentation");

  /* ---------- Éléments ajoutés à la page ---------- */
  // Bouton « Présenter » dans la barre du haut (avant les onglets)
  const nav = document.querySelector(".barre .onglets") || document.querySelector(".onglets");
  if (nav) nav.insertAdjacentHTML("beforebegin", `
  <button type="button" class="bouton-presenter" data-action="presenter" title="Mode présentation (touche P)">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7 4v16l13-8z"/></svg>Présenter
  </button>`);

  // Commandes en bas du sommaire (visibles seulement en présentation)
  const KBD_G = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>';
  const KBD_D = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>';
  if (T.sommaire) T.sommaire.insertAdjacentHTML("beforeend", `
    <div class="pres-controles">
      <div class="pres-compteur"><b data-compteur>1</b> / <span data-total>${diapos.length}</span></div>
      <div class="pres-barre"><div data-avance></div></div>
      <div class="pres-boutons">
        <button type="button" data-action="precedent" title="Précédent (←)" aria-label="Précédent">${KBD_G}</button>
        <button type="button" data-action="suivant" title="Suivant (→)" aria-label="Suivant">${KBD_D}</button>
      </div>
      <div class="pres-outils">
        <button type="button" data-action="sommaire" title="Masquer le sommaire (S)">Masquer le sommaire <kbd>S</kbd></button>
        <button type="button" data-action="plein-ecran" title="Plein écran (F)">Plein écran <kbd>F</kbd></button>
        <button type="button" data-action="presenter" title="Quitter la présentation (P)">Mode lecture <kbd>P</kbd></button>
      </div>
      <p class="pres-aide"><kbd>←</kbd> <kbd>→</kbd> pas à pas<br><kbd>↑</kbd> <kbd>↓</kbd> diapo complète<br><kbd>R</kbd> solution de la question éclair<br><kbd>Début</kbd> <kbd>Fin</kbd></p>
    </div>`);

  // Petit compteur flottant quand le sommaire est masqué
  const flottant = document.createElement("div");
  flottant.className = "pres-flottant";
  flottant.innerHTML = '<span data-mini></span><button type="button" data-action="sommaire">Sommaire</button>';
  corps.appendChild(flottant);

  const compteur = document.querySelector("[data-compteur]");
  const avance = document.querySelector("[data-avance]");
  T.majPres = (idx) => {
    if (compteur) compteur.textContent = idx + 1;
    if (avance) avance.style.width = ((idx + 1) / diapos.length) * 100 + "%";
    flottant.querySelector("[data-mini]").textContent = `${idx + 1} / ${diapos.length}`;
  };

  /* ---------- Mise à l'échelle : la diapo 1024 × 576 remplit l'écran ---------- */
  function placer() {
    if (!enPres()) return;
    const gauche = corps.classList.contains("sans-sommaire") ? 0 : LARG_SOMMAIRE;
    const w = window.innerWidth - gauche, h = window.innerHeight;
    const s = Math.min(w / L, h / H);
    corps.style.setProperty("--s", s);
    corps.style.setProperty("--x", gauche + (w - L * s) / 2 + "px");
    corps.style.setProperty("--y", (h - H * s) / 2 + "px");
  }
  T.placer = placer;
  window.addEventListener("resize", placer);

  /* ---------- Changement de mode ---------- */
  function presenter(actif, depart) {
    if (actif && depart == null && !enPres()) {
      // diapo actuellement visible à l'écran (mesurée avant de passer en présentation)
      depart = diapos.findIndex((d) => d.getBoundingClientRect().bottom > 120);
      if (depart < 0) depart = 0;
    }
    if (actif) corps.classList.remove("apprentissage", "sommaire-ouvert");
    corps.classList.toggle("presentation", actif);
    try { localStorage.setItem(cleMode, actif ? "presentation" : "lecture"); } catch (e) { /* rien */ }
    if (actif) {
      const i = depart == null ? T.idx : depart;
      diapos.forEach((d) => d.classList.remove("active"));
      T.aller(i, 0);
    } else {
      const d = diapos[T.idx];
      T.afficherTout();
      history.replaceState(null, "", location.pathname + location.search);
      requestAnimationFrame(() => d.scrollIntoView({ block: "start" }));
    }
  }
  function basculerSommaire() { corps.classList.toggle("sans-sommaire"); placer(); }
  function pleinEcran() {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen && document.documentElement.requestFullscreen().catch(() => {});
    else document.exitFullscreen && document.exitFullscreen();
  }

  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-action]");
    if (!b) return;
    const a = b.dataset.action;
    if (a === "presenter") presenter(!enPres());
    else if (a === "sommaire") basculerSommaire();
    else if (a === "plein-ecran") pleinEcran();
    else return;
    b.blur();
  });

  /* ---------- Clavier ---------- */
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const t = e.target;
    if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "SELECT" || t.isContentEditable)) return;
    const k = e.key;
    if (k === "p" || k === "P") { presenter(!enPres()); return; }
    if (!enPres()) return;
    // La navigation au clavier ne doit pas faire apparaître de cadre dans le sommaire
    if (document.activeElement && T.sommaire && T.sommaire.contains(document.activeElement)) document.activeElement.blur();
    const idx = T.idx, n = diapos.length;
    if (k === "ArrowRight" || k === "PageDown" || (k === " " && t.tagName !== "BUTTON")) { e.preventDefault(); T.suivant(); }
    else if (k === "ArrowLeft" || k === "PageUp") { e.preventDefault(); T.precedent(); }
    else if (k === "ArrowDown") { e.preventDefault(); T.aller(idx < n - 1 ? idx + 1 : idx, "fin"); T.solutionEclair(false); }
    else if (k === "ArrowUp") { e.preventDefault(); if (idx > 0) T.aller(idx - 1, "fin"); T.solutionEclair(false); }
    else if (k === "r" || k === "R") T.solutionEclair(true);
    else if (k === "Home") { e.preventDefault(); T.aller(0, 0); }
    else if (k === "End") { e.preventDefault(); T.aller(n - 1, "fin"); }
    else if (k === "s" || k === "S") basculerSommaire();
    else if (k === "f" || k === "F") pleinEcran();
  });

  /* ---------- Démarrage ---------- */
  let modeMemo = null;
  try { modeMemo = localStorage.getItem(cleMode); } catch (e) { /* rien */ }
  const forcer = new URLSearchParams(location.search).get("mode");
  if (forcer ? forcer === "presentation" : modeMemo === "presentation") {
    const depuisAncre = T.diapoDepuisAncre(location.hash);
    presenter(true, depuisAncre != null ? depuisAncre : 0);
  }
})();
