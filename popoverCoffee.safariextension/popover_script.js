
function populateSearchResults(results) {
  $('#linksList').html('');
  for(var i=0; i < results.length; i++) {
    var li = $('<li class="entry"></li>').html('<a href="'+results[i].href + '">' + results[i].text + '</a>');
    $('#linksList').append(li);
    $('.entry').draggable();
  }
}


$(document).ready(function () {
  $('#drop_container').droppable({
    hoverClass: "hoverDroppable",
    accept: ".entry",
    drop: function (event, ui) {
      var li = $("<li></li>").html(ui.draggable.html());
      $('#savedLinksList').append(li);
      ui.draggable.remove();
    }});
});
