
$(function(){


  $(".back_to_top").click(function(){
    $("html, body").animate({
        scrollTop:0
    }, 500)
  });
  
  $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    
    if(scrolling > 50){
        $(".back_to_top").fadeIn(500);
    }
    else{
        $(".back_to_top").fadeOut(500);
    }
    if(scrolling > 50){
        $(".nav_main").addClass("nav_br");
    }
    else{
        $(".nav_main").removeClass("nav_br");
    }
  });
  
  
  // banner part start

$('.banner_main').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    autoplay: true,
  });

// banner part end


// about part start




// about part end


// Clients part start


$('.services_slick').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow:'.s_pre',
  nextArrow:'.s_next',
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
  ]
});

$('.services_slick_two').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow:'.p_pre',
  nextArrow:'.p_next',
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
  ]
});




// Clients part end



// Products part start

var mixer = mixitup('.Products_main');

// Products part end


// wow js start

new WOW().init();

// wow js end



});

// funcion start

$(".faq").accordion({
  questionClass: '.question',
  answerClass: '.answer',
  itemClass: '.item'
});

// funcion end
