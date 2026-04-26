document.addEventListener("DOMContentLoaded", (event) => {
  // Register GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Navbar background change on scroll
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(5, 5, 5, 0.95)";
      navbar.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.5)";
    } else {
      navbar.style.background = "rgba(5, 5, 5, 0.8)";
      navbar.style.boxShadow = "none";
    }
  });

  // Hero Animations (run immediately)
  const heroElements = document.querySelectorAll(".hero .gs-reveal");
  gsap.fromTo(heroElements, 
    { y: 50, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2 }
  );

  // Scroll Reveal Animations for cards and sections
  const revealElements = document.querySelectorAll("section:not(.hero) .gs-reveal");
  
  revealElements.forEach((elem) => {
    let delayVal = 0;
    if (elem.style.transitionDelay) {
      delayVal = parseFloat(elem.style.transitionDelay);
      elem.style.transitionDelay = ''; // Clear so it doesn't fight GSAP
    }

    gsap.fromTo(elem,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: delayVal,
        ease: "power2.out",
        scrollTrigger: {
          trigger: elem,
          start: "top 85%", // Reveal when element is 85% down the viewport
          toggleActions: "play none none reverse"
        }
      }
    );
  });

  // Premium Line Reveal Animation
  const revealLines = document.querySelectorAll("#scale-text-anim .reveal-line");
  if (revealLines.length > 0) {
    gsap.fromTo(revealLines,
      { y: "120%", rotation: 3, opacity: 0 },
      {
        y: "0%",
        rotation: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: "#scale-text-anim",
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }

  // Hamburger Menu
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // Contact Form Submission Intercept
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      // The form will naturally submit to the hidden iframe.
      // We just update the button UI and set a flag for the iframe's onload handler.
      window.submitted = true;
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      submitBtn.innerText = "Sending...";
      submitBtn.disabled = true;
      
      // Removed fetch() completely to rely on native HTML form submission to hidden iframe, 
      // avoiding all CORS issues with Google Apps Script.
    });
  }
});
