/* ═══════════════════════════════════════════════
   AMPERE ELECTRIC — FORM HANDLER
   form.js
   ═══════════════════════════════════════════════ */

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnparbnw';

/* ── REDIRECT after success (set to '' to show inline success) ── */
const SUCCESS_REDIRECT = 'thank-you.html';

document.addEventListener('DOMContentLoaded', () => {

  /* ── LOCATE ALL ENQUIRY FORMS on page ── */
  const forms = document.querySelectorAll('[data-enquiry-form]');
  forms.forEach(form => initForm(form));

  /* ── PRESELECT REQUIREMENT FROM URL ── */
  preselectEnquiryInterest();

});
function preselectEnquiryInterest() {
  const params = new URLSearchParams(window.location.search);
  const interest = params.get('interest');

  if (!interest) {
    return;
  }

  const serviceField = document.getElementById('contact-service');

  if (!serviceField) {
    return;
  }

  const normalizedInterest = interest.trim().toLowerCase();

  const matchingOption = Array.from(serviceField.options).find(option => {
    return option.value.trim().toLowerCase() === normalizedInterest;
  });

  if (!matchingOption) {
    console.warn(`No matching enquiry option found for: ${interest}`);
    return;
  }

  serviceField.value = matchingOption.value;

  serviceField.dispatchEvent(
    new Event('change', {
      bubbles: true
    })
  );

  updateEnquiryMetadata(matchingOption.value);
}

function updateEnquiryMetadata(selectedInterest) {
  const subjectField = document.getElementById('contact-subject');
  const sourceField = document.getElementById('contact-source');
  const helpText = document.getElementById('ev-enquiry-help');

  const params = new URLSearchParams(window.location.search);
  const cameFromContextLink = params.has('interest');

  if (subjectField) {
    subjectField.value = selectedInterest
    ? `New Enquiry - ${selectedInterest}`
    : 'New Website Enquiry - Ampere Electric';
  }

  if (sourceField) {
    sourceField.value = cameFromContextLink
    ? `Contextual Enquiry Link - ${selectedInterest}`
    : 'Contact Page';
  }

  if (helpText) {
    const evSelections = [
      'EV Charging Solutions',
      'AC Chargers',
      'DC Chargers'
    ];

    helpText.hidden = !evSelections.includes(selectedInterest);
  }
}

function initForm(formEl) {

  const submitBtn = formEl.querySelector('[data-submit]');
  const successEl = formEl.parentElement.querySelector('.form-success');

    const serviceField = formEl.querySelector('#contact-service');

  if (serviceField) {
    serviceField.addEventListener('change', () => {
      const selectedInterest = serviceField.value;

      if (selectedInterest) {
        updateEnquiryMetadata(selectedInterest);
      }
    });
  }

  /* ── REAL-TIME VALIDATION ── */
  formEl.querySelectorAll('[required]').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => clearError(input));
  });

  /* ── SUBMIT ── */
  if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      handleSubmit(formEl, submitBtn, successEl);
    });
  }

  /* Also handle Enter key */
  formEl.querySelectorAll('input, select').forEach(el => {
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (submitBtn) handleSubmit(formEl, submitBtn, successEl);
      }
    });
  });
}

async function handleSubmit(formEl, btn, successEl) {

  /* Validate all required fields */
  let valid = true;
  formEl.querySelectorAll('[required]').forEach(input => {
    if (!validateField(input)) valid = false;
  });

  if (!valid) {
    const firstError = formEl.querySelector('.has-error input, .has-error select, .has-error textarea');
    if (firstError) firstError.focus();
    return;
  }

  /* Gather data */
  const data = {};
  formEl.querySelectorAll('input, select, textarea').forEach(el => {
    if (el.name || el.id) {
      data[el.name || el.id] = el.value.trim();
    }
  });

  /* Set loading state */
  btn.disabled = true;
  const originalHTML = btn.innerHTML;
  btn.innerHTML = '<span class="spinner"></span> Sending…';

  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data)
    });

    if (res.ok) {
      onSuccess(formEl, successEl);
    } else {
      const body = await res.json();
      if (body.errors) {
        onError(btn, originalHTML, body.errors.map(e => e.message).join(', '));
      } else {
        onError(btn, originalHTML, 'Submission failed. Please try again or call us directly.');
      }
    }
  } catch (err) {
    console.error('Form submission error:', err);

    onError(
    btn,
    originalHTML,
    'Network error. Please check your connection or contact us directly.'
    );
  }
}

function onSuccess(formEl, successEl) {
  if (SUCCESS_REDIRECT) {
    window.location.href = SUCCESS_REDIRECT;
  } else {
    formEl.style.display = 'none';
    if (successEl) successEl.style.display = 'block';
  }
}

function onError(btn, originalHTML, message) {
  btn.disabled = false;
  btn.innerHTML = originalHTML;
  showGlobalError(message);
}

function showGlobalError(message) {
  let el = document.getElementById('formGlobalError');
  if (!el) {
    el = document.createElement('p');
    el.id = 'formGlobalError';
    el.style.cssText = 'color:#f87171;font-size:0.82rem;margin-bottom:0.75rem;padding:0.75rem;background:rgba(248,113,113,0.08);border:1px solid rgba(248,113,113,0.3);border-radius:6px;';
    const btn = document.querySelector('[data-submit]');
    if (btn) btn.parentElement.insertBefore(el, btn);
  }
  el.textContent = '⚠ ' + message;
  setTimeout(() => { if (el) el.remove(); }, 8000);
}

/* ── FIELD VALIDATION ── */
function validateField(input) {
  const fg = input.closest('.fg, .form-row');
  if (!fg) return true;

  const value = input.value.trim();
  let errorMsg = '';

  if (input.hasAttribute('required') && !value) {
    errorMsg = 'This field is required.';
  } else if (input.type === 'email' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    errorMsg = 'Please enter a valid email address.';
  } else if (input.type === 'tel' && value && !/^[+\d\s\-()]{7,15}$/.test(value)) {
    errorMsg = 'Please enter a valid phone number.';
  }

  const errEl = fg.querySelector('.error-msg');
  if (errorMsg) {
    fg.classList.add('has-error');
    if (errEl) errEl.textContent = errorMsg;
    return false;
  } else {
    fg.classList.remove('has-error');
    if (errEl) errEl.textContent = '';
    return true;
  }
}

function clearError(input) {
  const fg = input.closest('.fg, .form-row');
  if (fg && fg.classList.contains('has-error') && input.value.trim()) {
    fg.classList.remove('has-error');
  }
}
