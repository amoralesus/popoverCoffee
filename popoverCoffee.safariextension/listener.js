function clickHandler(o,recursive) {
  var e=(recursive)?o:o.target;
  if ($(e).is('a')) {
    safari.self.tab.dispatchMessage("link", $(e).get(0).href);
  }
  else {
    var parent = $(e).parents("a").get(0);
    if(parent) {
      clickHandler(parent,true);
    }
  }
}

$(document).on("click",clickHandler);

