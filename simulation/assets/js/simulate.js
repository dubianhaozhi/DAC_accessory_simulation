$('.product__imgWrapper').click(function() {
  const countOfTarget = $('.target').length
  const numOfTarget = countOfTarget + 1
  const id = `target--${numOfTarget}`
  const imgSrc = $(this).find('.product__img').attr('src')
  const simulationImgSrc = imgSrc.replace('ring', 'ring_for_simulation')
  const targetElem = `<div class="simulation__targetElem"><img class="target" id="${id}" src="${simulationImgSrc}" load="loaded()"></div>`
  $('.simulation__target').append(targetElem)
  $(`#${id}`).bind('load', function() {
    move(id)
  })
})