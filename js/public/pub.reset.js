/*  reset.js */ !function(n,d){var e=n.document,t=e.documentElement,o="orientationchange"in n?"orientationchange":"resize",w=450,a=function(){var c=t.clientWidth,n=c>w?(Object.assign(e.body.style,{marginLeft:"auto",marginRight:"auto",maxWidth:w+"px"}),w):c;t.style.fontSize=(n/d)*100+"px"};if(e.addEventListener){n.addEventListener(o,a,false),e.addEventListener("DOMContentLoaded",a,false)}}(window,750);