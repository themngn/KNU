document.getElementById("head-title").style.transitionDuration= "0s";
window.onscroll = function() {scrollFunction()};
document.getElementById("head-title").style.transitionDuration= "1s";

var last_scroll=0

function scrollFunction() {
  if (document.documentElement.scrollTop > 250 ) {

    document.getElementById("head-title").style.marginTop= "0.5rem";
    document.getElementById("head-title").style.marginBottom= "0.5rem";
  } else if(document.documentElement.scrollTop <=0) {
    document.getElementById("head-title").style.marginTop= "7.5rem";
    document.getElementById("head-title").style.marginBottom= "7.5rem";
  }
  last_scroll=document.documentElement.scrollTop;
}