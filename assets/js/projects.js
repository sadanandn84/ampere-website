/* AMPERE ELECTRIC — PROJECTS JS */

document.addEventListener("DOMContentLoaded", () => {
  const projectPills = document.querySelectorAll(".project-pill");
  const projectCards = document.querySelectorAll(".project-card");
  const revealItems = document.querySelectorAll(".project-card, .stat-card");

  function filterProjects(category) {
    projectCards.forEach((card) => {
      const cardCategory = card.getAttribute("data-category");

      if (category === "all" || cardCategory === category) {
        card.classList.remove("is-hidden");
      } else {
        card.classList.add("is-hidden");
      }
    });

    projectPills.forEach((pill) => {
      pill.classList.toggle("active", pill.dataset.filter === category);
    });
  }

  projectPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      const category = pill.dataset.filter;
      filterProjects(category);
    });
  });

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

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
});