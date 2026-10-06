// Loads Google Sans from Google Fonts for the whole frontend (via frontend.extra_module_url).
// Themes can only name fonts, not load them; Minimal Dark then sets --ha-font-family-* to
// "Google Sans". Without this, or offline, the theme falls back to Roboto.
for (const [rel, href, crossOrigin] of [
  ["preconnect", "https://fonts.googleapis.com"],
  ["preconnect", "https://fonts.gstatic.com", "anonymous"],
  // Google Sans is a variable font with weights 400 to 700
  ["stylesheet", "https://fonts.googleapis.com/css2?family=Google+Sans:wght@400..700&display=swap"],
]) {
  const link = document.createElement("link");
  link.rel = rel;
  link.href = href;
  if (crossOrigin) link.crossOrigin = crossOrigin;
  document.head.appendChild(link);
}

// HA's index.html hard-codes Roboto on body, which the sidebar inherits.
const style = document.createElement("style");
style.textContent = `
body {
  font-family: var(--ha-font-family-body, Roboto, Noto, sans-serif);
}`;
document.head.appendChild(style);
