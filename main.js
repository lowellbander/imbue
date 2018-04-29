function onClick(event) {
  console.log({event});
  console.log(event.pageX, event.pageY);
  $('#main').append(`<p style="position: absolute; left: ${event.pageX}px; top: ${event.pageY}px;">ou no</p>`);
}

$(document).ready(function(){
  $('#main').click(onClick);
});




