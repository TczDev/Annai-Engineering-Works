$(document).ready(function(){

    $('.slider').slick({
    
       autoplay: true,
       infinite: true,
       loop:true,
       speed: 500,
       fade: true,
       dots:true,
       cssEase: 'linear'
      

   })
   $('.slider1').slick({
    
    autoplay: true,
    infinite: true,
    arrows:false,
    dots:true,
    slidesToShow: 4,
    slidesToScroll:1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
         
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
        }
      }
    ]

})
  
  })

    


