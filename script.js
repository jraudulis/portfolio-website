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
function revealElements (selector, options ={}){
  ScrollReveal().reveal(selector,{
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

revealElements('.load-hidden');

revealElements('.btn-hero',{
 origin: 'bottom',
 delay: 900
});

revealElements('.section-title',{
 origin: 'bottom',
 viewFactor: 1
});

revealElements('.techstack-icon-wrapper',{
  origin: 'bottom',
  viewFactor: 1,
  duration: 800,
  interval: 100
 });

revealElements('#about-title',{
  origin: 'bottom',
  viewFactor: 1
 });

revealElements('.about-text',{
 origin: 'right',
 interval: 0
});

revealElements('.picture',{
 origin: 'left',
 interval: 0
});

revealElements('.project-info-col',{
 origin: 'left',
 interval: 0
});

revealElements('.image-container',{
 origin: 'right',
 duration: 400,
 delay: 800
});

revealElements('.contacts-row',{
 origin: 'bottom',
 interval: 100
});

