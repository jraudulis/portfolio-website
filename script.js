//  Caching DOM Elements  //
const themeToggle = document.getElementById('theme-toggle');
const backToTopBtn = document.getElementById('back-to-top');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section'); // Cache for setActiveNavLink()
const contactForm = document.getElementById('contact-form');
const emailTriggers = document.querySelectorAll('.email-trigger'); // Group elements with same class for email trigger
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const navbar = document.querySelector('.navbar');
const techIconWrappers = document.querySelectorAll('.techstack-icon-wrapper');
const heroBtn = document.querySelector('.btn-hero');
const headingColor = document.querySelector('.text-color-main');

//  Open Email on Button Click  //
function openEmail() {
  window.location.href = "mailto:jraudulis@gmail.com?subject=Hello&body=Your message here!";
}
emailTriggers.forEach(trigger => trigger.addEventListener('click', openEmail));

//  Scroll to Top Button  //
function toggleBackToTopButton() {
  backToTopBtn?.classList.toggle('visible', window.scrollY > 300);
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
backToTopBtn?.addEventListener('click', scrollToTop);

//  Active Navigation Link Based on Scroll  //
function setActiveNavLink() {
  const scrollPosition = window.scrollY;
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
      activeLink?.classList.add('active');
    }
  });
}

//  Project Filtering  //
function filterProjects(category) {
  projectCards.forEach(card => {
    const categories = card.dataset.category?.split(' ') || [];
    const isVisible = category === 'all' || categories.includes(category);
    card.style.display = isVisible ? 'flex' : 'none';
    card.style.opacity = isVisible ? '1' : '0';
    card.style.transform = isVisible ? 'translateY(0)' : 'translateY(20px)';
  });
}
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    filterProjects(btn.getAttribute('data-filter'));
  });
});

//  Navbar Scroll Effect  //
function handleNavbarScroll() {
  const scrolled = window.scrollY > 50;
  navbar.style.padding = scrolled ? '0.5rem 0' : '1rem 0';
  navbar.style.boxShadow = scrolled ? '0 2px 10px rgba(0, 0, 0, 0.2)' : '0 2px 10px rgba(0, 0, 0, 0.1)';
}

//  Hover Effects for Tech Stack Icons  //
techIconWrappers.forEach(wrapper => {
  const techIcon = wrapper.querySelector('.fas'); 
  const techIconText = wrapper.querySelector('.tech-icon-names');
  wrapper.addEventListener('mouseover', () => {
    techIcon.style.color = techIconText.style.color = '#5C6BC0';
  });
  wrapper.addEventListener('mouseout', () => {
    techIcon.style.color = techIconText.style.color = '#F5F5F5';
  });
});

//  Hover Effect for Hero Heading  //
heroBtn?.addEventListener('mouseover', () => (headingColor.style.color = '#A5D6A7'));
heroBtn?.addEventListener('mouseout', () => (headingColor.style.color = '#5C6BC0'));

//  ScrollReveal Animations  //
function revealElements(selector, options = {}) {
  ScrollReveal().reveal(selector, {
    distance: '10px',
    duration: 500,
    easing: 'ease-in-out',
    origin: 'left',
    opacity: 0,
    scale: 1,
    delay: 100,
    interval: 100,
    viewFactor: 0,
    reset: false,
    ...options
  });
}

function initScrollReveal() {
  revealElements('.load-hidden');
  revealElements('.btn-hero', { origin: 'bottom', delay: 300 });
  revealElements('.section-title', { origin: 'bottom' });
  revealElements('.techstack-icon-wrapper', { origin: 'bottom', duration: 500, interval: 100 });
  revealElements('#about-title', { origin: 'bottom' });
  revealElements('.about-text', { origin: 'right' });
  revealElements('.picture', { origin: 'left' });
  revealElements('.project-info-col', { origin: 'left' });
  revealElements('.image-container', { origin: 'right', duration: 300, delay: 300 });
  revealElements('.contacts-row', { origin: 'bottom', interval: 100 });
}

//  Event Listeners  //
window.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  setActiveNavLink();
  window.addEventListener('scroll', () => {
    toggleBackToTopButton();
    setActiveNavLink();
    handleNavbarScroll();
  });
});
