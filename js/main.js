/* ============================================================
   STRUCTR — main.js

   Handles:
   - Mobile navigation toggle
   - Active link highlighting
   - Contact form mock submit (replace with real backend / Formspree)
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ----------------------------------------------------------
     MOBILE NAV TOGGLE
  ---------------------------------------------------------- */
  const toggle    = document.querySelector('.nav-toggle');
  const navLinks  = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('is-open');
      toggle.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close nav if user clicks outside of it
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.nav-inner')) {
        navLinks.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }


  /* ----------------------------------------------------------
     ACTIVE NAV LINK
     Compares the current file name to each link's href and
     adds .active to the matching anchor.
  ---------------------------------------------------------- */
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-links a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentFile || (currentFile === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });


  /* ----------------------------------------------------------
     CONTACT FORM
     Basic client-side validation + success state.

     To make this actually send emails, replace the submit
     handler below with a Formspree / EmailJS / backend call.
     Example with Formspree:
       form.action = "https://formspree.io/f/YOUR_FORM_ID"
       form.method = "POST"
     Then remove the preventDefault() below.
  ---------------------------------------------------------- */
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Remove this line once you connect a real backend

      const name    = contactForm.querySelector('[name="name"]').value.trim();
      const email   = contactForm.querySelector('[name="email"]').value.trim();
      const message = contactForm.querySelector('[name="message"]').value.trim();

      // Simple validation
      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }

      if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      // Show success message (swap form for confirmation)
      const formWrapper = document.getElementById('form-wrapper');
      const successMsg  = document.getElementById('form-success');

      if (formWrapper && successMsg) {
        formWrapper.style.display = 'none';
        successMsg.style.display  = 'block';
      }
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }


  /* ----------------------------------------------------------
     SMOOTH SCROLL for anchor links (e.g. #section-id)
     Native scroll-behavior: smooth handles most cases, but
     this catches any edge cases in older browsers.
  ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
