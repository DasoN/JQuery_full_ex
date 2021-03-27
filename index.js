$('.nav-item-inner').hide()
$('nav > a > img').hide()

//using slick
$('.slider').slick({
      infinite: true,
      dots: true,
      focusOnSelect: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      speed: 400,
      autoplay: true,
      autoplaySpeed: 2000
});
//using avgrund
$('#showModal').avgrund({
  width: 380, // max is 640px
  height: 280, // max is 350px
  showClose: true, // switch to 'true' for enabling close button
  showCloseText: 'close', // type your text for close button
  closeByEscape: true, // enables closing popup by 'Esc'..
  closeByDocument: true, // ..and by clicking document itself
  enableStackAnimation: false, // another animation type
  openOnEvent: true, // set to 'false' to init on load
  setEvent: 'click', // use your event like 'mouseover', 'touchmove', etc.
  template: 'Comming soon...' // or function (elem) { }, or $('.content')
});

$('.nav > li').hover(function(){
  $(this).addClass('active')
  let cThis = this
  $(this).on('click', function(){
    $(cThis).children().last().show()
  })
}, function(){
  $('.nav-item-inner').hide()
  $(this).removeClass('active')
})

$('.aside-show').on('click', function(){
  $('main > aside').css({
    "opacity": "0"
  })
  $('nav > a > img').show()
})

$('nav > a > img').on('click', function(){
  $('main > aside').css({
    "opacity": "100%"
  })
})
