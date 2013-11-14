
function addLink(link) {
  var li = '<li class="entry"><span class="time">'+getDateTime()+'</span><span class="link" onclick=\'openLink("'+link+'")\'>'+getShortLinkName(link)+'</span></li>';
  $("#linksList").append(li);
  $('.entry').draggable({appendTo: "body", helper: "clone"});
}

function getShortLinkName( str) {
  var limit = 70;
  if (str.length > limit) {
    return str.substring(0,limit)+"...";
  } else {
    return str;
  }
}

function openLink(link) {
  safari.application.activeBrowserWindow.openTab().url=link;
}

function getDateTime() {
  var currentdate = new Date(); 
  var datetime = ('0' + (currentdate.getMonth()+1)).slice(-2) + "/" + ('0' + currentdate.getDate()).slice(-2) + "/" + "/" + currentdate.getFullYear();
  return datetime;
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
