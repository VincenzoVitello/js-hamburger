const open = document.querySelector(".fa-bars");
const hamburger = document.querySelector(".hamburger-menu");
const close = document.querySelector(".fa-times");

open.addEventListener('click', function(){
    // qui ci scrivi quello che deve accadere al click
   hamburger.classList.add('active');
}
);
close.addEventListener('click', function(){
    // qui ci scrivi quello che deve accadere al click
   hamburger.classList.remove('active');
}
);
