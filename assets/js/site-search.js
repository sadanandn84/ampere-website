/* AMPERE ELECTRIC — SITE SEARCH */

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".site-search-wrap")) return;

  const searchWrap = document.createElement("div");
  searchWrap.className = "site-search-wrap";

  searchWrap.innerHTML = `
    <button class="site-search-toggle" type="button" aria-label="Open search">
      🔍
    </button>

    <div class="site-search-panel">
      <div class="site-search-box">
        <input
          type="search"
          id="siteSearchInput"
          placeholder="Search products, brands, services..."
          autocomplete="off"
        />

        <button class="site-search-close" type="button" aria-label="Close search">
          ×
        </button>
      </div>

      <div class="site-search-results" id="siteSearchResults">
        <p class="site-search-hint">
          Try searching: IE3, Danfoss, APFC, Automation, Pumps
        </p>
      </div>
    </div>
  `;

  document.body.appendChild(searchWrap);

  const toggleBtn = searchWrap.querySelector(".site-search-toggle");
  const closeBtn = searchWrap.querySelector(".site-search-close");
  const panel = searchWrap.querySelector(".site-search-panel");
  const input = searchWrap.querySelector("#siteSearchInput");
  const results = searchWrap.querySelector("#siteSearchResults");

  function openSearch() {
    panel.classList.add("is-open");
    setTimeout(() => input.focus(), 100);
  }

  function closeSearch() {
    panel.classList.remove("is-open");
    input.value = "";
    showHint();
  }

  function showHint() {
    results.innerHTML = `
      <p class="site-search-hint">
        Try searching: IE3, Danfoss, APFC, Automation, Pumps
      </p>
    `;
  }

  function renderResults(query) {
    const searchData =
      typeof AMPERE_SEARCH_DATA !== "undefined" ? AMPERE_SEARCH_DATA : [];

    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      showHint();
      return;
    }

    const matches = searchData.filter((item) => {
      const searchableText = `
        ${item.title}
        ${item.category}
        ${item.keywords}
      `.toLowerCase();

      return searchableText.includes(normalizedQuery);
    });

    if (!matches.length) {
      results.innerHTML = `
        <p class="site-search-hint">
          No results found. Try searching for Motors, Drives, Panels or Automation.
        </p>
      `;
      return;
    }

    results.innerHTML = matches
      .map(
        (item) => `
          <a href="${item.url}" class="site-search-result">
            <span>${item.category}</span>
            <strong>${item.title}</strong>
            <small>${item.keywords}</small>
          </a>
        `
      )
      .join("");
  }

  toggleBtn.addEventListener("click", openSearch);
  closeBtn.addEventListener("click", closeSearch);

  input.addEventListener("input", () => {
    renderResults(input.value);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeSearch();
    }

    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      openSearch();
    }
  });
});