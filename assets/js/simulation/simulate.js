// TODO: コメント入れる
// TODO: リファクタしたい

const targets = []
const moveables = []

$('.product__imgWrapper').click(function() {
  const countOfTarget = $('.target').length
  const numOfTarget = countOfTarget + 1
  const id = `target--${numOfTarget}`
  const imgSrc = $(this).find('.product__img').attr('src')
  const simulationImgSrc = imgSrc.replace(tab, `${tab}_for_simulation`)
  const targetElem = `<img class="target" id="${id}" src="${simulationImgSrc}" load="loaded()">`
  $(`#simulation__target--${tab}`).append(targetElem)
  $(`#${id}`).bind('load', function() {
    const $this = $(this)
    targets.push($this)
    const moveable = move(id)
    moveables.push(moveable)
    $(`.moveable__${id} .moveable-direction.moveable-ne`).on('click touchstart', function() {
      $this.remove()
      moveable.destroy()
    })
  })
})

// リセットボタン押したら
$('[id^=simulation__reset]').click(function() {
  $('.target').remove()
  $('.moveable-control-box').remove()
})

// 削除ボタン押したら
$('[id^=simulation__delete]').on('click touchstart', function() {
  $('.moveable-control-box').each(function(i, elem) {
    $controlBox = $(elem)
    if ($controlBox.css('display') === 'block') {
      const classNames = $controlBox.attr('class').split(' ')
      const controlBoxClassName = classNames.find(function(name) {
        return name.includes('moveable__target')
      })
      const targetIdName = controlBoxClassName.replace('moveable__', '')
      console.log({
        targetIdName,
        'aaa': 'aaa'
      })
      $(`#${targetIdName}`).remove()
      $(`.${controlBoxClassName}`).remove()
    }
  })
})