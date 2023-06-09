//menü színének megváltoztatása
$(document).ready (function() {
  $(window).scroll (function() {
   let scroll = $(window).scrollTop();
   if (scroll > 150) {
    $(".navbar").css("background", "#222");
    $(".navbar").css("box-shadow", "rgba(0, 0, 0, 0.1) 0px 4px 12px");
   }
   else {
    $(".navbar").css("background", "transparent");
    $(".navbar").css("box-shadow", "none");
   }
  })
});

//finomabb görgetés
let navbarHeigth = $(".navbar").outerHeight();
$(".navbar-menu a").click(function(e){
    let targetHref = $(this).attr ("href");
    $("html, body").animate ({
        scrollTop: $(targetHref).offset().top - navbarHeigth
    }, 1000)
    e.preventDefault();
});

//mobil verzió menüsor
const mobile = document.querySelector(".menu-toggle");
const mobileLink = document.querySelector(".navbar-menu");

mobile.addEventListener("click", function(){
    mobile.classList.toggle("is-active");
    mobileLink.classList.toggle("active");
})

mobileLink.addEventListener("click", function(){
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth <= 768 && menuBars) {
        mobile.classList.toggle("is-active");
        mobileLink.classList.remove("active");
    }
})

//Slideshow

let swiper = new Swiper (".mySwiper",
    {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetwen: 10,
        pagintation: {
            el: ".swiper-pagination",
            clickable: true,
        },

        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetwen: 20,
            },
            768: {
                slidesPerView: 3,
                spaceBetwen: 40,
            },
            1024:{
                slidesPerView: 3,
                spaceBetwen: 50,
            }

        }

    }
    
    
    
    )