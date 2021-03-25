$('.nav-item-inner').hide()

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
