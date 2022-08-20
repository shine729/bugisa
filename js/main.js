$(document).ready(function(){
  $('#story').slick({
  centerMode: true,
  centerPadding: '40px',
  slidesToShow: 5,
  autoPlay:true,
  responsive: [

{
centerMode: true,
 breakpoint: 851,
 settings: {
   arrows: false,
   centerPadding: '100px',
   slidesToShow:1
 }
},
{
centerMode: true,
 breakpoint: 480,
 settings: {
   arrows: false,
   centerPadding: '100px',
   slidesToShow:1
 }
}
]

});

$('.main_slide').slick({
  slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autospeed: 1000,
    speed: 100,
    cssEase: 'linear',
    dots: false,
    arrows: false
});

$('.s_slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autospeed: 1000,
    speed: 100,
    cssEase: 'linear',
    dots:false,
});

$('.p_slide').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [ 
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          arrows: false,
        }
      }
    ],
});

$('.n_slide').slick({
  slidesToShow: 3,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 2000,
responsive: [ // 반응형 웹 구현 옵션
      {
        breakpoint: 992, //화면 사이즈 960px
        settings: {
          slidesToShow: 1,
          centerMode: true,
          arrows: false,
        }
      }
    ],
});

$('.menu_btn').on('click',function(){
  $('.menu_wrap').toggleClass('on');
});

$('.menu_box ul li').on('click',function(){
  $(this).toggleClass('on');
});


});