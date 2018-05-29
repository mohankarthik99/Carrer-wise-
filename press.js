$(document).ready(function(){
function sel(selector){
    return document.querySelector(selector);
}

function getUserInput(){
  var query=window.location.search.slice(1);
  scroll(sel("#"+query))

}

function scroll(el){
el.scrollIntoView();
window.scrollBy(0,-80);
}
getUserInput();
});