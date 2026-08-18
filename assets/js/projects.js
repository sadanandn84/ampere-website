/* AMPERE ELECTRIC — PROJECTS JS */

document.addEventListener("DOMContentLoaded", () => {
  const projectPills = document.querySelectorAll(".project-pill");
  const projectCards = document.querySelectorAll(".project-card");
  const revealItems = document.querySelectorAll(".project-card, .stat-card");
  const filterStatus = document.getElementById("projectFilterStatus");

  function getFilterLabel(category) {
    const labels = {
      all: "all project capabilities",
      automation: "Automation capabilities",
      motors: "Motors and Drives capabilities",
      panels: "Control Panel capabilities",
      electrical: "Electrical Execution capabilities",
      energy: "Energy Efficiency capabilities",
      monitoring: "Monitoring and Control capabilities"
    };

    return labels[category] || "selected project capabilities";
  }

  function filterProjects(category) {
    let visibleCount = 0;

    projectCards.forEach((card) => {
      const cardCategory = card.dataset.category;
      const shouldShow = 
        category === "all" || cardCategory === category;
      card.classList.toggle("is-hidden", !shouldShow);
      card.setAttribute("aria-hidden", String(!shouldShow));
      if (shouldShow) {
        visibleCount += 1;
      }
    });

    projectPills.forEach((pill) => {
      const isActive = pill.dataset.filter === category;
      pill.classList.toggle("active", isActive);
      pill.setAttribute("aria-pressed", String(isActive));
    });
    if (filterStatus) {
      const label = getFilterLabel(category);

      filterStatus.textContent =
        category === "all"
          ? `Showing all ${visibleCount} project capabilities.`
          : `Showing ${visibleCount} ${label}.`;
    }
  }

  if (projectPills.length && projectCards.length) {
    projectPills.forEach((pill) => {
      pill.addEventListener("click", () => {
        filterProjects(pill.dataset.filter);
      });
    });

    filterProjects("all");
  }

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    revealItems.forEach((item) => {
      observer.observe(item);
    });
  } else {
    revealItems.forEach((item) => {item.classList.add("is-visible");
    });
  }
});