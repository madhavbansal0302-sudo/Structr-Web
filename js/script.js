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

  // Motion Text Horizontal Scroll
  const motionText = document.getElementById("motion-text");
  if (motionText) {
    gsap.to(motionText, {
      xPercent: -50, // Move left by 50%
      ease: "none",
      scrollTrigger: {
        trigger: motionText.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: 1 // Link animation to scroll bar directly
      }
    });
  }

  // Scale Text Horizontal Motion
  const scaleText = document.getElementById("scale-text");
  if (scaleText) {
    gsap.to(scaleText, {
      xPercent: -150, // Move across completely
      ease: "none",
      scrollTrigger: {
        trigger: ".motion-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });
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
      e.preventDefault();
      
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerText;
      submitBtn.innerText = "Sending...";
      submitBtn.disabled = true;

      const formData = new FormData(contactForm);
      fetch(contactForm.action, {
        method: 'POST',
        body: formData
      })
      .then(response => {
        window.location.href = "thank-you.html";
      })
      .catch(error => {
        console.error('Error!', error.message);
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
        alert("There was an error submitting the form. Please try again later.");
      });
    });
  }
});
