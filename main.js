function getStyle(x, y) {
  return `position: absolute; left: ${x}px; top: ${y}px;`;
}

function onClick(event) {
  const style = getStyle(event.pageX, event.pageY);
  const element = `<video autoplay style="width: 200px; ${style}" src="video.mov"/>`
  $('#main').append(element);
}

$(document).ready(function(){
  $('#main').click(onClick);
});




