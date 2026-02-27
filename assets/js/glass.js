const STORAGE_KEY = "xenon-glass";

export function initGlassToggle() {
  const html = document.documentElement;
  const button = document.getElementById("glassToggle");
  if (!button) return;

  const saved = localStorage.getItem(STORAGE_KEY);
  const initial = saved === "on" ? "on" : "off";

  html.setAttribute("data-glass", initial);
  window.dispatchEvent(new Event("xenon:statechange"));

  button.addEventListener("click", () => {
    const current = html.getAttribute("data-glass") === "on" ? "on" : "off";
    const next = current === "on" ? "off" : "on";

    html.setAttribute("data-glass", next);
    localStorage.setItem(STORAGE_KEY, next);
    window.dispatchEvent(new Event("xenon:statechange"));
  });
}
