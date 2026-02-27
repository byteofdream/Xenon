const STORAGE_KEY = "xenon-lang";

const I18N = {
  ru: {
    subtitle: "Точный поиск без лишнего шума",
    placeholder: "Что хотите найти?",
    search: "Найти",
    description: "Xenon создан как минималистичная стартовая страница: быстрый ввод запроса, мгновенный переход в поиск и гибкая кастомизация интерфейса.",
    chip1: "Мгновенный редирект",
    chip2: "Светлая/тёмная тема",
    chip3: "Liquid Glass режим",
    chip4: "Русский/English",
    hint: "Подсказка: нажми Enter, чтобы отправить запрос быстрее.",
    language: "Language: RU",
    about: "О проекте",
    theme: { light: "Theme: Light", dark: "Theme: Dark" },
    glass: { on: "Liquid: On", off: "Liquid: Off" }
  },
  en: {
    subtitle: "Precise search with zero clutter",
    placeholder: "What do you want to find?",
    search: "Search",
    description: "Xenon is built as a minimal start page: type quickly, launch search instantly, and tailor the interface to your workflow.",
    chip1: "Instant redirect",
    chip2: "Light/Dark mode",
    chip3: "Liquid Glass mode",
    chip4: "Russian/English",
    hint: "Hint: press Enter to submit your query faster.",
    language: "Language: EN",
    about: "About",
    theme: { light: "Theme: Light", dark: "Theme: Dark" },
    glass: { on: "Liquid: On", off: "Liquid: Off" }
  }
};

function getState() {
  const html = document.documentElement;
  const lang = html.getAttribute("data-lang") === "en" ? "en" : "ru";
  const theme = html.getAttribute("data-theme") === "dark" ? "dark" : "light";
  const glass = html.getAttribute("data-glass") === "on" ? "on" : "off";
  return { html, lang, theme, glass };
}

function text(id, value) {
  const node = document.getElementById(id);
  if (node) node.textContent = value;
}

function applyLanguage() {
  const { lang, theme, glass } = getState();
  const dict = I18N[lang];

  text("subtitle", dict.subtitle);
  text("searchBtn", dict.search);
  text("description", dict.description);
  text("chip1", dict.chip1);
  text("chip2", dict.chip2);
  text("chip3", dict.chip3);
  text("chip4", dict.chip4);
  text("hint", dict.hint);
  text("langToggle", dict.language);
  text("themeToggle", dict.theme[theme]);
  text("glassToggle", dict.glass[glass]);
  text("aboutLink", dict.about);

  const input = document.getElementById("query");
  if (input) {
    input.placeholder = dict.placeholder;
  }
}

export function initLanguageToggle() {
  const { html } = getState();
  const button = document.getElementById("langToggle");
  if (!button) return;

  const saved = localStorage.getItem(STORAGE_KEY);
  const initial = saved === "en" ? "en" : "ru";
  html.setAttribute("data-lang", initial);
  applyLanguage();

  button.addEventListener("click", () => {
    const current = html.getAttribute("data-lang") === "en" ? "en" : "ru";
    const next = current === "en" ? "ru" : "en";
    html.setAttribute("data-lang", next);
    localStorage.setItem(STORAGE_KEY, next);
    applyLanguage();
  });

  window.addEventListener("xenon:statechange", applyLanguage);
}
