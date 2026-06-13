/* ═══════════════════════════════════════════════
   AMPERE ELECTRIC
   FLOATING CONTACT WIDGET
   assets/js/floating-contact.js
   ═══════════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {

  const existingWidget = document.querySelector(".floating-contact");

  if (existingWidget) return;

  const widget = document.createElement("div");
  widget.className = "floating-contact";

  widget.innerHTML = `
  
    <a
      href="https://wa.me/919307213349"
      target="_blank"
      class="fc-whatsapp">

      <span class="icon">💬</span>
      <span class="label">WhatsApp Us</span>

    </a>

    <a
      href="tel:+919307213349"
      class="fc-call">

      <span class="icon">📞</span>
      <span class="label">Call Now</span>

    </a>

    <a
      href="mailto:sales@amperegroup.in"
      class="fc-email">

      <span class="icon">✉️</span>
      <span class="label">Email Us</span>

    </a>

  `;

  document.body.appendChild(widget);

});