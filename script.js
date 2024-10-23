
function revealElements (selector, options ={}){
  ScrollReveal().reveal(selector,{
   distance: '100%',
   duration: 1000,
   easing: 'ease-in-out',
   origin: 'left',
   opacity: 0,
   scale: 1,
   delay: 400,
   interval: 800,
   viewFactor: 0.5,
   reset: false,
   ...options 
 });
}

revealElements('.load-hidden');

revealElements('.button', {
 origin: 'bottom',
 delay: 1500,
});

revealElements('.section-title',{
 origin: 'bottom',
 distance: '20%',
 duration: 500,
});

revealElements('.about-info',{
 origin: 'right'
});

