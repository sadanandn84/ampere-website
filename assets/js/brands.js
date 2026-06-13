/* AMPERE ELECTRIC — BRANDS V4 JS */

document.addEventListener("DOMContentLoaded", () => {
  const brandCards = document.querySelectorAll(".brand-card");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    brandCards.forEach((card) => observer.observe(card));
  } else {
    brandCards.forEach((card) => card.classList.add("is-visible"));
  }
});