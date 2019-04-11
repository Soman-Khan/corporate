// $(document).ready(function(){
//
//   $('.your-class').slick({
//     setting-name: setting-value
//   });
//
//   $('.portfolio-slider').slick({
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 2000,
//     });
//
//  });
$(document).ready(function(){
    $('.portfolio-slider').slick({
      autoplay:true,
      mobileFirst:true,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });
});
