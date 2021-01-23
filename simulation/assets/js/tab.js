let tab = 'ring'

// タブが切り替えられたら
$('[class^=simulation__tabBtn]').click(function() {
  const $this = $(this)
  const id = $this.attr('id')
  tab = id.replace('simulation__tabBtn--', '')
  $('[id^=simulation__playground]').css({'display': 'none'})
  $(`#simulation__playground--${tab}`).css({'display': 'flex'})

  // targetを削除
  $('.target').remove()
  $('.moveable-control-box').remove()
})