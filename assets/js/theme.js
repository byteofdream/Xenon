const STORAGE_KEY = "xenon-theme";

export function initThemeToggle() {
  const html = document.documentElement;
  const button = document.getElementById("themeToggle");
  if (!button) return;

  const saved = localStorage.getItem(STORAGE_KEY);
  const initial = saved === "dark" ? "dark" : "light";

  html.setAttribute("data-theme", initial);
  window.dispatchEvent(new Event("xenon:statechange"));

  button.addEventListener("click", () => {
    const current = html.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";

    html.setAttribute("data-theme", next);
    localStorage.setItem(STORAGE_KEY, next);
    window.dispatchEvent(new Event("xenon:statechange"));
  });
}
