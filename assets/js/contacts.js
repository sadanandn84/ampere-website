/* AMPERE ELECTRIC — CONTACT JS */

document.addEventListener("DOMContentLoaded", () => {
  const revealItems = document.querySelectorAll(".contact-card, .contact-form-card");

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

  const enquiryType = document.getElementById("enquiryType");
  const requirement = document.getElementById("requirement");
  const message = document.getElementById("message");

  if (enquiryType && message) {
    enquiryType.addEventListener("change", () => {
      const type = enquiryType.value;

      if (!message.value.trim()) {
        message.value =
          `Hello Ampere Electric,\n\n` +
          `I would like to enquire about: ${type}\n\n` +
          `Requirement:\n\n` +
          `Please share details, availability and quotation.\n\n` +
          `Thank you.`;
      }
    });
  }

  if (requirement && message) {
    requirement.addEventListener("input", () => {
      if (requirement.value.trim()) {
        message.dataset.requirement = requirement.value.trim();
      }
    });
  }

  const contactForm = document.getElementById("contactForm");
  const formNote = document.getElementById("formNote");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (formNote) {
        formNote.textContent =
          "Thank you. Your enquiry is ready. Please connect this form to EmailJS, Formspree or backend API for live submissions.";
        formNote.style.color = "#1d7ed0";
        formNote.style.fontWeight = "700";
      }

      contactForm.classList.add("is-submitted");
    });
  }
});