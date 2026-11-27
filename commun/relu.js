/* =========================================================
   Chapitres « non relus »
   Dans catalogue.js, un chapitre avec  relu: false  affiche :
   - sur l'accueil : un astérisque à côté du n° de chapitre (géré par index.html) ;
   - dans le chapitre : une mention sous le titre (théorie) ou en haut (entraînement).
   Pour l'enlever : mettre  relu: true  (ou effacer relu: false) dans catalogue.js.
   ========================================================= */
(function () {
  "use strict";
  const TEXTE = "Chapitre pas encore relu par l'enseignant : il peut contenir des erreurs ou des approximations.";
  const m = location.pathname.match(/\/themes\/([^/]+)\/[^/]*$/);
  if (!m) return; // seulement dans les pages de chapitre
  const dossier = decodeURIComponent(m[1]);

  function afficher() {
    const cat = window.CATALOGUE;
    if (!cat) return;
    const t = cat.themes.find((x) => x.dossier === dossier);
    if (!t || t.relu !== false) return;
    const meta = document.querySelector(".bandeau-meta");
    if (meta) {
      const s = document.createElement("span");
      s.className = "non-relu-bandeau";
      s.title = TEXTE;
      s.textContent = "* Non relu : peut contenir des erreurs";
      meta.appendChild(s);
    } else {
      const p = document.createElement("p");
      p.className = "non-relu-page";
      p.innerHTML = `<span class="non-relu">*</span> ${TEXTE}`;
      const ancre = document.querySelector(".barre");
      if (ancre) ancre.insertAdjacentElement("afterend", p);
    }
  }

  if (window.CATALOGUE) { afficher(); return; }
  const s = document.createElement("script");
  s.src = new URL("../../catalogue.js", location.href).href;
  s.onload = afficher;
  document.head.appendChild(s);
})();
