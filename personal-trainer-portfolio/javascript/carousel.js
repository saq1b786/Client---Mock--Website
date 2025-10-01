document.addEventListener('DOMContentLoaded', function() {
  const testimonials = document.querySelectorAll('.testimonial');
  const indicators = document.querySelectorAll('.indicator');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentIndex = 0;

  // Show current testimonial
  function showTestimonial(index) {
      testimonials.forEach(testimonial => testimonial.classList.remove('active'));
      indicators.forEach(indicator => indicator.classList.remove('active'));
      
      testimonials[index].classList.add('active');
      indicators[index].classList.add('active');
      currentIndex = index;
  }

  // Next testimonial
  function nextTestimonial() {
      currentIndex = (currentIndex + 1) % testimonials.length;
      showTestimonial(currentIndex);
  }

  // Previous testimonial
  function prevTestimonial() {
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
      showTestimonial(currentIndex);
  }

  // Event listeners
  nextBtn.addEventListener('click', nextTestimonial);
  prevBtn.addEventListener('click', prevTestimonial);

  // Indicator click events
  indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => showTestimonial(index));
  });

  // Auto-rotate (optional)
  let interval = setInterval(nextTestimonial, 5000);

  // Pause on hover
  const carousel = document.querySelector('.testimonial-carousel');
  carousel.addEventListener('mouseenter', () => clearInterval(interval));
  carousel.addEventListener('mouseleave', () => {
      interval = setInterval(nextTestimonial, 5000);
  });
});