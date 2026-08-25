/* ═══════════════════════════════════════════════
   AMPERE ELECTRIC — MAIN JS
   main.js
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── MOBILE NAV ── */
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  if (hamburger && navMenu) {
    const closeMenu = () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('open');
      document.body.classList.remove('menu-open');

      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.setAttribute('aria-label', 'Open navigation menu');
    };

    const openMenu = () => {
      hamburger.classList.add('active');
      navMenu.classList.add('open');
      document.body.classList.add('menu-open');

      hamburger.setAttribute('aria-expanded', 'true');
      hamburger.setAttribute('aria-label', 'Close navigation menu');
    };

    hamburger.addEventListener('click', () => {
      const isOpen = navMenu.classList.contains('open');

      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (event) => {
      if (
        navMenu.classList.contains('open') &&
        !hamburger.contains(event.target) &&
        !navMenu.contains(event.target)
      ) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navMenu.classList.contains('open')) {
        closeMenu();
        hamburger.focus();
      }
    });
  }

  /* ── NAV SCROLL SHADOW ── */
  const siteNav = document.querySelector('.site-nav');
  if (siteNav) {
    const onScroll = () => {
      siteNav.classList.toggle('scrolled', window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── ACTIVE NAV LINK (based on current page) ── */
  const currentPage =
    window.location.pathname.split('/').pop() || 'index.html';
  
  const navSectionMap = {
    'index.html': 'index.html',
  
    'about-us.html': 'about-us.html',
    'our-skills.html': 'about-us.html',
    'why-ampere.html': 'about-us.html',
    'company-journey.html': 'about-us.html',
  
    'products.html': 'products.html',
    'product-details.html': 'products.html',
  
    'services.html': 'services.html',
    'projects.html': 'services.html',
  
    'industries.html': 'industries.html',
    'contact.html': 'contact.html'
  };
  
  const activeTopLevelHref = navSectionMap[currentPage];
  
  document.querySelectorAll('.nav-menu > li').forEach((item) => {
    item.classList.remove('active');
  
    const link = item.querySelector(':scope > a');
    if (!link) return;
  
    const linkPage = link.getAttribute('href')?.split('#')[0];
  
    if (linkPage === activeTopLevelHref) {
      item.classList.add('active');
    }
  });

  /* ── SCROLL REVEAL ── */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

  if ('IntersectionObserver' in window) {
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          // Stagger siblings in a grid
          const parent = el.parentElement;
          const siblings = [...parent.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')];
          const idx = siblings.indexOf(el);
          setTimeout(() => el.classList.add('visible'), idx * 70);
          revealObs.unobserve(el);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => revealObs.observe(el));
  } else {
    // Fallback for old browsers
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ── ANIMATED COUNTERS ── */
  function animateCounter(el) {
    const target  = parseInt(el.getAttribute('data-target'), 10);
    const suffix  = el.getAttribute('data-suffix') || '';
    const duration = 1800;
    const step    = 16;
    const increment = target / (duration / step);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = Math.floor(current) + suffix;
    }, step);
  }

  if ('IntersectionObserver' in window) {
    const counterObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('.counter').forEach(el => counterObs.observe(el));
  }

  /* ── SMOOTH SCROLL for anchor links ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80; // nav height
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ── STICKY NAV SHRINK on scroll ── */
  // Already handled by scrolled class above

  /* ── BACK TO TOP ── */
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.style.opacity = window.scrollY > 400 ? '1' : '0';
      backToTop.style.pointerEvents = window.scrollY > 400 ? 'all' : 'none';
    }, { passive: true });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

});
