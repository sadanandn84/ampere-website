/* AMPERE ELECTRIC — TESTIMONIAL RENDERING */

document.addEventListener("DOMContentLoaded", () => {

  const section = document.getElementById("testimonials");
  const grid = document.getElementById("testimonialsGrid");

  if (!section || !grid) {
    return;
  }

  if (
    typeof AMPERE_TESTIMONIALS === "undefined" ||
    !Array.isArray(AMPERE_TESTIMONIALS) ||
    AMPERE_TESTIMONIALS.length === 0
  ) {
    section.hidden = true;
    return;
  }

  const testimonials = AMPERE_TESTIMONIALS
    .filter(item => item && item.quote)
    .slice(0, 6);

  if (testimonials.length === 0) {
    section.hidden = true;
    return;
  }

  grid.innerHTML = testimonials.map(item => {

    const name = item.name || "Customer";
    const role = item.role || "";
    const company = item.company || "";
    const location = item.location || "";

    const meta = [role, company]
      .filter(Boolean)
      .join(" · ");

    const initials =
      item.initials ||
      name
        .split(" ")
        .map(part => part.charAt(0))
        .join("")
        .slice(0, 2)
        .toUpperCase();

    return `
      <article class="testi reveal">

        <div class="testi-quote-icon" aria-hidden="true">
          <i class="fa-solid fa-quote-left"></i>
        </div>

        <blockquote>
          ${escapeHtml(item.quote)}
        </blockquote>

        <div class="testi-author">

          <div class="av" aria-hidden="true">
            ${escapeHtml(initials)}
          </div>

          <div class="testi-author-info">

            <strong>
              ${escapeHtml(name)}
            </strong>

            ${
              meta
                ? `<small>${escapeHtml(meta)}</small>`
                : ""
            }

            ${
              location
                ? `<small class="testi-location">${escapeHtml(location)}</small>`
                : ""
            }

          </div>

        </div>

      </article>
    `;
  }).join("");

});


function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}