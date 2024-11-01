
function revealElements (selector, options ={}){
  ScrollReveal().reveal(selector,{
   distance: '10px',
   duration: 500,
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

revealElements('.btn-hero',{
 origin: 'bottom',
 delay: 900
});

revealElements('.section-title',{
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

revealElements('.project-img',{
 origin: 'right',
 duration: 400,
 delay: 800
});

revealElements('.contacts-row',{
 origin: 'bottom',
 interval: 100
});

