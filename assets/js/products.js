/* ═══════════════════════════════════════════════
   AMPERE ELECTRIC — PRODUCTS V4 JS
   assets/js/products.js
   ═══════════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {
  const categorySelect = document.getElementById("productCategoryFilter");
  const categoryPills = document.querySelectorAll(".product-pill");
  const categoryBlocks = document.querySelectorAll(".product-category-block");

  function filterProducts(category) {
    categoryBlocks.forEach((block) => {
      const blockCategory = block.getAttribute("data-category");

      if (category === "all" || blockCategory === category) {
        block.classList.remove("is-hidden");
      } else {
        block.classList.add("is-hidden");
      }
    });

    categoryPills.forEach((pill) => {
      pill.classList.toggle("active", pill.dataset.filter === category);
    });

    if (categorySelect) {
      categorySelect.value = category;
    }
  }

  categoryPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const selectedCategory = pill.dataset.filter;
      filterProducts(selectedCategory);

      const productsMain = document.querySelector(".products-main");
      if (productsMain) {
        productsMain.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  if (categorySelect) {
    categorySelect.addEventListener("change", () => {
      filterProducts(categorySelect.value);

      const productsMain = document.querySelector(".products-main");
      if (productsMain) {
        productsMain.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  }

  /* Read category from URL:
     products.html?category=ht-lt-motors
  */
  const urlParams = new URLSearchParams(window.location.search);
  const categoryFromUrl = urlParams.get("category");

  if (categoryFromUrl) {
    filterProducts(categoryFromUrl);
  }

  /* Smooth scroll for product dropdown anchor links */
  const dropdownLinks = document.querySelectorAll('.mega-products a[href^="#"]');

  dropdownLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const targetId = link.getAttribute("href").replace("#", "");
      const targetBlock = document.getElementById(targetId);

      if (targetBlock) {
        filterProducts(targetId);

        setTimeout(() => {
          targetBlock.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }, 120);
      }
    });
  });

  /* Product card reveal animation */
  const productCards = document.querySelectorAll(".product-card");

  if ("IntersectionObserver" in window) {
    const cardObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18
      }
    );

    productCards.forEach((card) => {
      cardObserver.observe(card);
    });
  } else {
    productCards.forEach((card) => {
      card.classList.add("is-visible");
    });
  }

  /* Preserve selected category when browser back/forward is used */
  window.addEventListener("popstate", () => {
    const params = new URLSearchParams(window.location.search);
    const activeCategory = params.get("category") || "all";
    filterProducts(activeCategory);
  });
});