/* AMPERE ELECTRIC — DOWNLOADS JS */

document.addEventListener("DOMContentLoaded", () => {

  const cards = document.querySelectorAll(".download-card");

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
      {
        threshold: 0.18
      }
    );

    cards.forEach(card => {
      observer.observe(card);
    });

  } else {

    cards.forEach(card => {
      card.classList.add("is-visible");
    });

  }

});