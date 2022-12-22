let mybutton = document.getElementById("topButton");

window.onscroll = function() {positionCheck()};

function positionCheck() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}