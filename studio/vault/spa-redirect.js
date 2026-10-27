// spa-github-pages deep-link restore shim (companion to public/404.html).
// Kept in its own file because the app's CSP allows only scripts from 'self'
// — an inline <script> in index.html is blocked and logs a CSP violation.
(function () {
  var l = window.location;
  if (l.search && l.search.indexOf("?/") === 0) {
    var path = l.search.slice(2).split("&")[0];
    window.history.replaceState(null, "", l.pathname + path + l.hash);
  }
})();
