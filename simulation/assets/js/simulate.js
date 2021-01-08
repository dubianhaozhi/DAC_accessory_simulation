// TODO: コメント入れる
// TODO: リファクタしたい

const targets = []
const moveables = []

$('.product__imgWrapper').click(function() {
  const countOfTarget = $('.target').length
  const numOfTarget = countOfTarget + 1
  const id = `target--${numOfTarget}`
  const imgSrc = $(this).find('.product__img').attr('src')
  const simulationImgSrc = imgSrc.replace('ring', 'ring_for_simulation')
  const targetElem = `<img class="target" id="${id}" src="${simulationImgSrc}" load="loaded()">`
  $('.simulation__target').append(targetElem)
  $(`#${id}`).bind('load', function() {
    const $this = $(this)
    targets.push($this)
    const moveable = move(id)
    moveables.push(moveable)
    $(`.moveable__${id} .moveable-direction.moveable-ne`).click(function() {
      $this.remove()
      moveable.destroy()
    })
  })
})

$('#simulation__reset').click(function() {
  targets.forEach(function(target) {
    target.remove()
  })
  moveables.forEach(function(moveable) {
    if (moveable.tempElement) { // FIXME: もっといい実装あるかも
      moveable.destroy()
    }
  })
})