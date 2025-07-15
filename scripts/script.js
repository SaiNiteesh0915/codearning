// Smooth scroll to sections
const navLinkItems = document.querySelectorAll('.nav-links a');

navLinkItems.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: 'smooth',
      });
    }
  });
});

// Mobile toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Fade in on scroll
const fadeElements = document.querySelectorAll('.fade-in');

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  fadeElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ✅ Feature module logic
document.addEventListener("DOMContentLoaded", () => {
  const modules = document.querySelectorAll(".module");
  const sections = document.querySelectorAll("section[id]");

  modules.forEach((module) => {
    module.addEventListener("click", () => {
      const id = module.getAttribute("data-target");

      // Hide all sections
      sections.forEach((sec) => (sec.style.display = "none"));

      // Show selected section
      const targetSection = document.getElementById(id);
      if (targetSection) {
        targetSection.style.display = "block";
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

// Future interactivity placeholder
console.log("CODEARNING script loaded ✅");
