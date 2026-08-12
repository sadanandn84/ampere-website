/* ================================================
   AMPERE ELECTRIC
   FLOATING CONTACT WIDGET
================================================ */

document.addEventListener("DOMContentLoaded", () => {

  const existingWidget =
    document.querySelector(".floating-contact");

  if (existingWidget) return;

  const widget = document.createElement("div");

  widget.className = "floating-contact";

  widget.innerHTML = `

    <button
      class="fc-launcher"
      type="button"
      aria-expanded="false"
      aria-controls="fcPanel"
      aria-label="Contact Ampere Electric">

      <span class="fc-launcher-icon" aria-hidden="true">
        <i class="fa-solid fa-comments"></i>
      </span>

    </button>


    <div
      class="fc-panel"
      id="fcPanel"
      aria-hidden="true">

      <div class="fc-panel-header">

        <div>
          <span class="fc-eyebrow">
            Need Assistance?
          </span>

          <strong>
            Contact Ampere Electric
          </strong>
        </div>

        <button
          class="fc-close"
          type="button"
          aria-label="Close contact options">

          <i
            class="fa-solid fa-xmark"
            aria-hidden="true">
          </i>

        </button>

      </div>


      <div class="fc-actions">

        <a
          href="https://wa.me/919307213349?text=Hello%20Ampere%20Electric%2C%20I%20would%20like%20to%20discuss%20an%20electrical%20requirement."
          target="_blank"
          rel="noopener noreferrer"
          class="fc-action fc-action--whatsapp">

          <span class="fc-icon" aria-hidden="true">
            <i class="fa-brands fa-whatsapp"></i>
          </span>

          <span class="fc-content">
            <strong>WhatsApp</strong>
            <small>Quick response</small>
          </span>

          <span class="fc-arrow" aria-hidden="true">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </span>

        </a>


        <a
          href="tel:+919307213349"
          class="fc-action">

          <span class="fc-icon" aria-hidden="true">
            <i class="fa-solid fa-phone"></i>
          </span>

          <span class="fc-content">
            <strong>Call an Engineer</strong>
            <small>Mon–Sat · 9 AM–6 PM</small>
          </span>

          <span class="fc-arrow" aria-hidden="true">
            <i class="fa-solid fa-arrow-right"></i>
          </span>

        </a>


        <a
          href="mailto:sales@amperegroup.in"
          class="fc-action">

          <span class="fc-icon" aria-hidden="true">
            <i class="fa-solid fa-envelope"></i>
          </span>

          <span class="fc-content">
            <strong>Request a Quote</strong>
            <small>Send your requirement</small>
          </span>

          <span class="fc-arrow" aria-hidden="true">
            <i class="fa-solid fa-arrow-right"></i>
          </span>

        </a>

      </div>

    </div>
  `;

  document.body.appendChild(widget);

  const launcher =
    widget.querySelector(".fc-launcher");

  const panel =
    widget.querySelector(".fc-panel");

  const closeButton =
    widget.querySelector(".fc-close");


  const openPanel = () => {

    widget.classList.add("is-open");

    launcher.setAttribute(
      "aria-expanded",
      "true"
    );

    panel.setAttribute(
      "aria-hidden",
      "false"
    );

    closeButton.focus();

  };


  const closePanel = () => {

    widget.classList.remove("is-open");

    launcher.setAttribute(
      "aria-expanded",
      "false"
    );

    panel.setAttribute(
      "aria-hidden",
      "true"
    );

  };


  launcher.addEventListener(
    "click",
    () => {

      if (
        widget.classList.contains("is-open")
      ) {

        closePanel();

      } else {

        openPanel();

      }

    }
  );


  closeButton.addEventListener(
    "click",
    closePanel
  );


  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape" &&
        widget.classList.contains("is-open")
      ) {

        closePanel();
        launcher.focus();

      }

    }
  );


  document.addEventListener(
    "click",
    event => {

      if (
        widget.classList.contains("is-open") &&
        !widget.contains(event.target)
      ) {

        closePanel();

      }

    }
  );

});