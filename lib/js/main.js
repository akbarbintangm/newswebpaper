// Init for Jquery
(function($) {
    "use strict"; // Start of use strict  
    // Back to Top or Scroll to() Script
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 75
    });
    
})(jQuery); // End of use strict

document.addEventListener("DOMContentLoaded", function(){
    el_autohide = document.querySelector('.autohide');
    btn_height = document.querySelector('.btnnext').offsetHeight;
    document.body.style.paddingTop = btn_height + 'px';
    if(el_autohide){
        var last_scroll_top = 0;
        window.addEventListener('scroll', function() {
            let scroll_top = window.scrollY;
            if(scroll_top > last_scroll_top) {
                el_autohide.classList.remove('d-inline', 'animate__fadeIn');
                el_autohide.classList.add('d-none', 'animate__fadeOut');
            }
            else {
                el_autohide.classList.remove('d-none', 'animate__fadeOut');
                el_autohide.classList.add('d-inline', 'animate__fadeIn');
            }
            last_scroll_top = scroll_top;
        }); 
        // window.addEventListener
    }
    
    el_autohide2 = document.querySelector('.scrollto');
    btn_height2 = document.querySelector('.btnup').offsetHeight;
    document.body.style.paddingTop = btn_height + 'px';
    if(el_autohide2){
        var last_scroll_top3 = 600;
        window.addEventListener('scroll', function() {
            let scroll_top3 = window.scrollY;
            if(scroll_top3 > last_scroll_top3) {
                el_autohide2.classList.remove('d-none', 'animate__fadeOut');
                el_autohide2.classList.add('d-inline', 'animate__fadeIn');
            }
            else {
                el_autohide2.classList.remove('d-inline', 'animate__fadeIn');
                el_autohide2.classList.add('d-none', 'animate__fadeOut');
            }
            last_scroll_top3 = scroll_top3
        }); 
        // window.addEventListener
    }
    
    el_autocolor = document.querySelector('.select-navbar');
    navbar_height = document.querySelector('.btnnext').offsetHeight;
    document.body.style.paddingTop = navbar_height + 'px';
    if(el_autocolor){
        var last_scroll_top2 = 600;
        window.addEventListener('scroll', function() {
            let scroll_top2 = window.scrollY;
            if(scroll_top2 > last_scroll_top2) {
                el_autocolor.classList.remove('navbar-light', 'bg-light', 'text-dark');
                el_autocolor.classList.add('navbar-dark', 'bg-dark', 'text-light');
            }
            else {
                el_autocolor.classList.add('navbar-light', 'bg-light', 'text-dark');
                el_autocolor.classList.remove('navbar-dark', 'bg-dark', 'text-light');
            }
            last_scroll_top = scroll_top;
        }); 
        // window.addEventListener
    }
}); 
// DOMContentLoaded  end

// Waves
Waves.init();
Waves.attach('.btn', ['waves-float']); 
Waves.attach('.card', ['waves-float']); 
Waves.attach('.img-fluid', ['waves-float']); 
Waves.attach('.toast', ['waves-float']); 

// Toasts
$(document).ready(function(){
    $('.toast').toast('show');
});

// Wow
new WOW().init();