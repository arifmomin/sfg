$('.banner_slider').slick({
    autoplay:true,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    nextArrow:'<i class="fa-solid fa-angle-right nxt_arw"></i>',
    prevArrow:'<i class="fa-solid fa-angle-left prv_arw"></i>',
  });
  $('.banner_scnd_slider').slick({
    dots: true,
    autoplay:true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    nextArrow: false,
    prevArrow: false,
  });
  $('.arrival_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:false,
    nextArrow:false,

  });
  $('.collection_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    prevArrow:false,
    nextArrow:false,
  });
  $('.flash_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    dots: true,
    nextArrow:'<i class="fa-solid fa-arrow-right-long nxt_arrow"></i>',
    prevArrow:'<i class="fa-solid fa-arrow-left-long prv_arrow"></i>',
  });
  $('.topRated_Slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    dots: true,
    nextArrow:'<i class="fa-solid fa-arrow-right-long next_arrow"></i>',
    prevArrow:'<i class="fa-solid fa-arrow-left-long prev_arrow"></i>',
  });
  $('.blog_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    nextArrow: false,
    prevArrow: false,
  });
  $('.sale_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    nextArrow:'<i class="fa-solid fa-angle-right sale_next"></i>',
    prevArrow: false,
  });