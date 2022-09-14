// Aos Animation =====================
AOS.init();
// End Aos Animation ================


// Our Best Swiper Slider==============

var swiper = new Swiper(".ourBestswiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-nextour",
      prevEl: ".swiper-button-prevour",
    },
    breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
    },
  },
  });

//   End Our Best Slider =====================

// Our Team Swiper Slider =====================
var swiper = new Swiper(".ourTeam", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //   },
    navigation: {
      nextEl: ".swiper-button-nexteam",
      prevEl: ".swiper-button-prevteam",
    },
    breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 15,
      slidesPerGroup: 1,
    },
  },
  });
//  End Swiper Slider ======================

// nav-item Active Class====================
$(document).ready(function(){
    $('.nav-item').click(function(){
        $(this).toggleClass('active_items');
        $(this).siblings().removeClass('active_items');
    });
});
// End nav-item Active =========================
// Sticky header =====================
$(window).scroll(function(){
    if($(this).scrollTop() > 100 ){
        $('nav.navbar').addClass('sticky_navbar');
        $('.scroll_add_cladd').addClass('text-white');
    }else{
        $('nav.navbar').removeClass('sticky_navbar');
        $('.scroll_add_cladd').removeClass('text-white');
    }
})
// End sticky header =======================

// Number Count For ===================

  $('.counting').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },
    {
      duration: 10000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }
    });  
  });
// Number Count For ===================