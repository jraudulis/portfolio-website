
function revealElements (selector, options ={}){
  ScrollReveal().reveal(selector,{
   distance: '10px',
   duration: 700,
   easing: 'ease-in-out',
   origin: 'left',
   opacity: 0,
   scale: 1,
   delay: 300,
   interval: 500,
   viewFactor: 0.5,
   reset: false,
   ...options 
 });
}

revealElements('.load-hidden');
revealElements('.button',{
 origin: 'bottom',
 delay: 700
});



revealElements('.section-title',{
 origin: 'bottom',
 distance: '10px',
 duration: 500,
});

revealElements('.about-info',{
 origin: 'right'
});

