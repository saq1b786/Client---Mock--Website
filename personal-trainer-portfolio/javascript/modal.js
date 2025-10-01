document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('contactModal');
  const buttons = document.querySelectorAll('.cta-button, .program-button');
  const closeBtn = document.querySelector('.close-modal');
  
  // Open modal when any CTA button is clicked
  buttons.forEach(button => {
      button.addEventListener('click', function(e) {
          e.preventDefault();
          modal.style.display = 'flex';
      });
  });
  
  // Close modal
  closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
  });
  
  // Close when clicking outside modal
  window.addEventListener('click', function(e) {
      if (e.target === modal) {
          modal.style.display = 'none';
      }
  });
  
  // Form submission
  document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      // Add form submission logic here
      alert('Thank you! We will contact you soon.');
      modal.style.display = 'none';
  });
});









// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    // Disable scroll when menu is open
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
});

// Close menu when clicking a link (for single-page sites)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});