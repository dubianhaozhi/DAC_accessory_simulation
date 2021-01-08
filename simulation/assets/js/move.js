// 参考サイト: https://github.com/daybrush/moveable

// TODO: リファクタ(不要なコードとかあるかも)
const move = function(targetId) {
  const moveable = new Moveable(document.body, {
    className: `moveable__${targetId}`, // .targetを削除するために使用(ゴリ押し)
    target: document.querySelector(`#${targetId}`),
    draggable: true,
    throttleDrag: 0,
    startDragRotate: 0,
    throttleDragRotate: 0,
    zoom: 1.3,
    origin: false,
    padding: {"left":0,"top":0,"right":0,"bottom":0},
    rotatable: true,
    throttleRotate: 0,
    rotationPosition: "top",
    scalable: true,
    keepRatio: true,
    throttleScale: 0,
    renderDirections: ["nw","ne","sw","se"],
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
    const { translate, rotate, scale } = frame;
    target.style.transform = `translate(${translate[0]}px, ${translate[1]}px)`
      + ` rotate(${rotate}deg)`
      + ` scale(${scale[0]}, ${scale[1]}) `;
  });
  return moveable;
}
