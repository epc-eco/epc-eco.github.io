/* =========================================================
   Onglets réutilisables
   Un lien avec l'attribut data-onglet s'ouvre dans un onglet séparé.
   Si cet onglet est déjà ouvert, on bascule dessus au lieu d'en ouvrir un
   nouveau (et sans recharger la page : l'entraînement en cours est conservé).
   ========================================================= */
(function () {
  "use strict";
  const PREFIXE = "ed:";
  const nomPour = (url) => PREFIXE + url.pathname;

  // Chaque page se nomme d'après son adresse, pour pouvoir être retrouvée.
  try { window.name = nomPour(new URL(location.href)); } catch (e) { /* rien */ }

  function ouvrir(href) {
    const url = new URL(href, location.href);
    const w = window.open("", nomPour(url));
    if (!w) { location.href = url.href; return; } // fenêtre bloquée : on ouvre ici
    let nouveau = false;
    try { nouveau = w.location.href === "about:blank"; } catch (e) { nouveau = false; } // déjà ouvert (autre origine)
    if (nouveau) {
      w.location.href = url.href;
    } else if (url.hash || url.search) {
      // Onglet déjà ouvert : on va seulement à la bonne partie (pas de rechargement)
      try { w.location.href = url.href; } catch (e) { /* rien */ }
    }
    try { w.focus(); } catch (e) { /* rien */ }
  }

  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-onglet]");
    if (!a || e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    ouvrir(a.getAttribute("href"));
  });

  window.Onglets = { ouvrir };
})();
