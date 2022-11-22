// window.onscroll = function() {myFunction()};
window.addEventListener('scroll', myFunction);

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("headsticky");
  } else {
    header.classList.remove("headsticky");
  }
}