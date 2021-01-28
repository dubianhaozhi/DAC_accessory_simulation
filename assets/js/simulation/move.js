// 参考サイト: https://github.com/daybrush/moveable

const isRing = tab === 'ring'

// TODO: リファクタ(不要なコードとかあるかも)
const move = function(targetId) {
  const className = `moveable__${targetId}`;
  const moveable = new Moveable(document.body, {
    className: className, // .targetを削除するために使用(ゴリ押し)
    target: document.querySelector(`#${targetId}`),
    draggable: true,
    throttleDrag: 0,
    startDragRotate: 0,
    throttleDragRotate: 0,
    zoom: 1.3,
    origin: false,
    padding: {"left":36,"top":36,"right":36,"bottom":36},
    rotatable: true,
    throttleRotate: 0,
    rotationPosition: "top",
    scalable: isRing,
    keepRatio: true,
    throttleScale: 0,
    renderDirections: isRing ? ["nw","ne","sw","se"] : ["ne"],
    edge: false,
  });
  let frame = {
    translate: [0,0],
    rotate: 0,
    scale: [1,1],
  };
  moveable.on("dragOriginStart", ({ dragStart }) => {
    dragStart && dragStart.set(frame.translate);
  }).on("dragStart", ({ set }) => {
    set(frame.translate);
  }).on("drag", ({ beforeTranslate }) => {
    frame.translate = beforeTranslate;
  }).on("rotateStart", ({ set }) => {
    set(frame.rotate);
  }).on("rotate", ({ beforeRotate }) => {
    frame.rotate = beforeRotate;
  }).on("scaleStart", ({ set }) => {
    set(frame.scale);
  }).on("scale", ({ scale }) => {
    frame.scale = scale
  }).on("render", ({ target }) => {
    const scaleRate = isSP ? (295 / 390) : 1;
    const { translate, rotate, scale } = frame;
    target.style.transform = `translate(calc(-50% + 100px + ${translate[0]}px), calc(-50% + 100px + ${translate[1]}px))`
      + ` rotate(${rotate}deg)`
      + ` scale(calc(${scale[0]}/4 * ${scaleRate}), calc(${scale[1]}/4 * ${scaleRate})) `; // 4倍書き出しのため
  });
  return moveable;
}

// focusしてるときだけmoveableを表示する
// TODO: リファクタする(パフォーマンス大丈夫？)
$(document).on('click touchstart', function(e) {
  $target = $(e.target)
  $('.moveable-control-box').hide()
  if ($target.hasClass('target') || $target.hasClass('moveable-rotation') || $target.hasClass('moveable-control') || $target.hasClass('moveable-line')) {
    const id = $target.attr('id')
    $(`.moveable-control-box.moveable__${id}`).show()
  }
});
