// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const backToTopBtn = document.getElementById('back-to-top');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contact-form');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const navbar = document.querySelector('.navbar');


// Back to top button functionality
function toggleBackToTopButton() {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Active nav link functionality
function setActiveNavLink() {
  const scrollPosition = window.scrollY;
  
  // Get all sections
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // Remove active class from all links
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      
      // Add active class to current section link
      const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
      if (activeLink) {
        activeLink.classList.add('active');
      }
    }
  });
}

// Project filtering functionality
function filterProjects(category) {
  projectCards.forEach(card => {
    const categories = card.dataset.category ? card.dataset.category.split(' ') : [];
    
    if (category === 'all' || categories.includes(category)) {
      card.style.display = 'flex';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 100);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      setTimeout(() => {
        card.style.display = 'none';
      }, 300);
    }
  });
}

// Contact form submission
function handleFormSubmit(e) {
  e.preventDefault();
  
  // Get form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Add loading state to submit button
  const submitBtn = contactForm.querySelector('.btn-submit');
  submitBtn.classList.add('loading');
  
  // Simulate form submission (in real implementation, you would send data to server)
  setTimeout(() => {
    // Remove loading state
    submitBtn.classList.remove('loading');
    
    // Show success message
    let successMessage = document.querySelector('.form-success-message');
    if (!successMessage) {
      successMessage = document.createElement('div');
      successMessage.className = 'form-success-message';
      successMessage.textContent = `Thank you ${name}! Your message has been sent successfully.`;
      contactForm.appendChild(successMessage);
    }
    successMessage.classList.add('visible');
    contactForm.reset(); 
    // Hide success message after 5 seconds
    setTimeout(() => {
      successMessage.classList.remove('visible');
    }, 5000);
  }, 1500);
}

// Navbar scroll effect
function handleNavbarScroll() {
  if (window.scrollY > 50) {
    navbar.style.padding = '0.5rem 0';
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
  } else {
    navbar.style.padding = '1rem 0';
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
}

// Tech stack icons hover effect
const techIconWrappers = document.querySelectorAll('.techstack-icon-wrapper');
const heroBtn = document.querySelector('.btn-hero');
const headingColor = document.querySelector('.text-color-main');

techIconWrappers.forEach(wrapper => {
  const techIcon = wrapper.querySelector('.fas'); 
  const techIconText = wrapper.querySelector('.tech-icon-names');

  function changeColor() {
    techIcon.style.filter = 'brightness(80%)';
    techIconText.style.filter = 'brightness(80%)';
  }

  function resetColor() {
    techIcon.style.filter = 'brightness(100%)';
    techIconText.style.filter = 'brightness(100%)';
  }

  wrapper.addEventListener('mouseover', changeColor);
  wrapper.addEventListener('mouseout', resetColor);
});

function changeHeadingColor() {
  headingColor.style.color = '#A5D6A7'
}

function resetHeadingColor() {
  headingColor.style.color = '#5C6BC0'
}

heroBtn.addEventListener('mouseover', changeHeadingColor);
heroBtn.addEventListener('mouseout', resetHeadingColor);

// Scroll animation functionality
function revealElements(selector, options = {}) {
  ScrollReveal().reveal(selector, {
    distance: '10px',
    duration: 500,
    easing: 'ease-in-out',
    origin: 'left',
    opacity: 0,
    scale: 1,
    delay: 300,
    interval: 300,
    viewFactor: 0.5,
    reset: false,
    ...options 
  });
}

// Initialize ScrollReveal animations
function initScrollReveal() {
  revealElements('.load-hidden');
  
  revealElements('.btn-hero', {
    origin: 'bottom',
    delay: 900
  });
  
  revealElements('.section-title', {
    origin: 'bottom',
    viewFactor: 1
  });
  
  revealElements('.techstack-icon-wrapper', {
    origin: 'bottom',
    viewFactor: 1,
    duration: 800,
    interval: 100
  });
  
  revealElements('#about-title', {
    origin: 'bottom',
    viewFactor: 1
  });
  
  revealElements('.about-text', {
    origin: 'right',
    interval: 0
  });
  
  revealElements('.picture', {
    origin: 'left',
    interval: 0
  });
  
  revealElements('.project-info-col', {
    origin: 'left',
    interval: 0
  });
  
  revealElements('.image-container', {
    origin: 'right',
    duration: 400,
    delay: 800
  });
  
  revealElements('.contacts-row', {
    origin: 'bottom',
    interval: 100
  });
}

// Event Listeners
window.addEventListener('DOMContentLoaded', () => {
  // Initialize
  initScrollReveal();
  setActiveNavLink();
  
  // Set up event listeners
  backToTopBtn.addEventListener('click', scrollToTop);
  window.addEventListener('scroll', toggleBackToTopButton);
  window.addEventListener('scroll', setActiveNavLink);
  window.addEventListener('scroll', handleNavbarScroll);
  contactForm.addEventListener('submit', handleFormSubmit);
  
  // Project filtering
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      filterProjects(category);
    });
  });
});

