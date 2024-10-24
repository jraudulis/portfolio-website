
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
 delay: 900
});

revealElements('.section-title',{
 origin: 'bottom',
 duration: 500
});

revealElements('.about-info',{
 origin: 'right'
});

revealElements('.picture',{
 origin: 'left'
});

revealElements('.project-info-col',{
 origin: 'left'
});

revealElements('.project-img',{
 origin: 'right'
});

