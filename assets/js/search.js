export function initSearch() {
  const form = document.getElementById("searchForm");
  const input = document.getElementById("query");

  if (!form || !input) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = input.value.trim();
    if (!query) return;

    const encoded = encodeURIComponent(query).replace(/%20/g, "+");
    window.location.href = `https://www.google.com/search?q=${encoded}`;
  });
}
