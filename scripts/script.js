// scripts/script.js

// Smooth scroll to sections
const navLinkItems = document.querySelectorAll('.nav-links a');

navLinkItems.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

const menuToggle = document.getElementById('mobile-menu');
const navLinksContainer = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinksContainer.classList.toggle('show');
});


// Future interactivity placeholder
console.log("CODEARNING script loaded ✅");
