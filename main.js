function getStyle(x, y) {
  return `position: absolute; left: ${x}px; top: ${y}px;`;
}

function onClick(event) {
  const width = 200;
  const style = getStyle(event.pageX - width / 2, event.pageY - width / 4);
  const element = `<video autoplay style="width: ${width}px; ${style}" src="video.mov"/>`
  $('#main').append(element);
  $('video').on('ended', function(e){
    $(e.target).remove()
  });
}

$(document).ready(function(){
  $('#main').click(onClick);
});




