const marker = `ADOBE_MASLIBS_XSS_${location.hostname}`;
document.title = marker;
window.__adobeMaslibsXss = {
  marker,
  href: location.href,
  origin: location.origin,
  script: import.meta.url,
  time: new Date().toISOString(),
};

const banner = document.createElement("div");
banner.id = "adobe-maslibs-xss-marker";
banner.textContent = marker;
Object.assign(banner.style, {
  position: "fixed",
  zIndex: "2147483647",
  inset: "12px auto auto 12px",
  padding: "10px 12px",
  background: "#fff3a3",
  border: "2px solid #111",
  color: "#111",
  font: "14px/1.3 sans-serif",
});
document.documentElement.appendChild(banner);

export const Log = {
  module: () => ({
    debug: () => {},
    warn: () => {},
    error: () => {},
  }),
};

export const Defaults = class {};
