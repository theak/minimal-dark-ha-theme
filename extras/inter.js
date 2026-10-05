// Registers the self-hosted Inter variable font for the whole frontend (loaded via
// frontend.extra_module_url). Themes can only name fonts, not load them; Minimal Dark then sets
// --ha-font-family-* to "Inter Variable".
const faces = [
  {
    file: "inter-latin-wght-normal.woff2",
    range:
      "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD",
  },
  {
    file: "inter-latin-ext-wght-normal.woff2",
    range:
      "U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF",
  },
];

const style = document.createElement("style");
style.textContent =
  faces
    .map(
      (f) => `@font-face {
  font-family: "Inter Variable";
  font-style: normal;
  font-display: swap;
  font-weight: 100 900;
  src: url("/local/fonts/${f.file}") format("woff2-variations");
  unicode-range: ${f.range};
}`
    )
    .join("\n") +
  // HA's index.html hard-codes Roboto on body, which the sidebar inherits. Inter also reads
  // better slightly tightened (its recommended tracking at 16px); both inherit into cards.
  `
body {
  font-family: var(--ha-font-family-body, Roboto, Noto, sans-serif);
  letter-spacing: -0.011em;
}`;
document.head.appendChild(style);
