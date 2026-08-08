/* ==========================================================
   AMPERE ELECTRIC
   ABOUT PREMIUM
   assets/js/about.js
========================================================== */

document.addEventListener('DOMContentLoaded', () => {

   /* ======================================================
      SKILL BAR ANIMATION
   ====================================================== */

   const skillBars = document.querySelectorAll('.skill-fill');

   if (skillBars.length) {

      const skillObserver = new IntersectionObserver((entries) => {

         entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const bar = entry.target;

            const finalWidth = getComputedStyle(bar)
               .getPropertyValue('--skill');

            bar.style.width = finalWidth;

            skillObserver.unobserve(bar);

         });

      }, {
         threshold: 0.25
      });

      skillBars.forEach(bar => {

         bar.style.width = '0';

         skillObserver.observe(bar);

      });

   }

   /* ======================================================
      FLOATING IMAGE PARALLAX
   ====================================================== */

   const imageStack = document.querySelector('.profile-images');

   if (imageStack) {

      const imageCards = imageStack.querySelectorAll('.img-card');

      imageStack.addEventListener('mousemove', (e) => {

         const rect = imageStack.getBoundingClientRect();

         const x = (e.clientX - rect.left) / rect.width - 0.5;
         const y = (e.clientY - rect.top) / rect.height - 0.5;

         imageCards.forEach((card, index) => {

            const speed = (index + 1) * 10;

            card.style.transform =
               `translate(${x * speed}px, ${y * speed}px)`;

         });

      });

      imageStack.addEventListener('mouseleave', () => {

         imageCards.forEach(card => {

            card.style.transform = '';

         });

      });

   }


   /* ======================================================
      HERO GLOW MOVEMENT
   ====================================================== */

   const glow1 =
      document.querySelector('.hero-glow-1');

   const glow2 =
      document.querySelector('.hero-glow-2');

   if (glow1 && glow2) {

      let mouseX = 0;
      let mouseY = 0;

      document.addEventListener('mousemove', (e) => {

         mouseX =
            (e.clientX / window.innerWidth) - 0.5;

         mouseY =
            (e.clientY / window.innerHeight) - 0.5;

      });

      function animateGlow() {

         glow1.style.transform =
            `translate(${mouseX * 40}px,
                   ${mouseY * 40}px)`;

         glow2.style.transform =
            `translate(${mouseX * -30}px,
                   ${mouseY * -30}px)`;

         requestAnimationFrame(animateGlow);

      }

      animateGlow();

   }

   /* ======================================================
      HERO PARALLAX
   ====================================================== */

   const hero =
      document.querySelector('.about-hero');

   if (hero) {

      window.addEventListener('scroll', () => {

         const scrollY = window.scrollY;

         hero.style.backgroundPositionY =
            `${scrollY * 0.3}px`;

      }, {
         passive: true
      });

   }

   /* ======================================================
      VALUE BOX HOVER GLOW
   ====================================================== */

   const valueBoxes =
      document.querySelectorAll('.value-box');

   valueBoxes.forEach(box => {

      box.addEventListener('mousemove', (e) => {

         const rect =
            box.getBoundingClientRect();

         const x =
            e.clientX - rect.left;

         const y =
            e.clientY - rect.top;

         box.style.background =
            `radial-gradient(
          circle at ${x}px ${y}px,
          rgba(22,120,201,.25),
          white 70%
        )`;

      });

      box.addEventListener('mouseleave', () => {

         box.style.background = '';

      });

   });

   /* ======================================================
      WHY CARD FLOAT
   ====================================================== */

   const whyCards =
      document.querySelectorAll('.why-card');

   whyCards.forEach(card => {

      card.addEventListener('mouseenter', () => {

         card.style.transform =
            'translateY(-10px)';

      });

      card.addEventListener('mouseleave', () => {

         card.style.transform =
            '';

      });

   });

   /* ======================================================
      SNAPSHOT CARD TILT
   ====================================================== */

   const snapshotCards =
      document.querySelectorAll('.snapshot-card');

   snapshotCards.forEach(card => {

      card.addEventListener('mousemove', (e) => {

         const rect =
            card.getBoundingClientRect();

         const x =
            e.clientX - rect.left;

         const y =
            e.clientY - rect.top;

         const rotateX =
            (y / rect.height - 0.5) * -10;

         const rotateY =
            (x / rect.width - 0.5) * 10;

         card.style.transform =
            `perspective(1000px)
         rotateX(${rotateX}deg)
         rotateY(${rotateY}deg)
         translateY(-5px)`;

      });

      card.addEventListener('mouseleave', () => {

         card.style.transform = '';

      });

   });

});