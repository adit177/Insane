
var typingElement = document.querySelector(".typing-text");
var typeArray = ["Tussle", "Hackathon", "Tradeverse", "Adjuxta"];
var index = 0,
  isAdding = true,
  typeIndex = 0;

function playAnim() {
  setTimeout(
    function () {
      typingElement.innerText = typeArray[typeIndex].slice(0, index);
      

      // If typing
      if (isAdding) {
        if (index >= typeArray[typeIndex].length) {
          isAdding = false;
          // If text typed completely, wait 2s before starting to remove it.
          setTimeout(function () {
            playAnim();
          }, 2000);
          return;
        } else {
          // Continue to typing text by increasing index
          index++;
        }
      } else {
        // If removing
        if (index === 0) {
          isAdding = true;
          //If text removed completely, move on to next text by increasing typeIndex
          typeIndex++;
          if (typeIndex >= typeArray.length) {
            // Turn to beginning when reached to last text
            typeIndex = 0;
          }
        } else {
          // Continue to removing text by decreasing index
          index--;
        }
      }
      // Call the function always
      playAnim();
    },

    /* 
      If typing text, call it every 120ms
      If removing text, call it every 60ms
      Type slower, remove faster
    */
    isAdding ? 120 : 60
  );
}

// Start typing text
playAnim();

"use strict"


const carouselButtons = document.querySelectorAll(".carousel-btn");
const carouselButtonLeft = document.querySelector(".btn-left");
const carouselButtonRight = document.querySelector(".btn-right");
const carouselImage1 = document.querySelector(".carousel-image-1");
const carouselImage2 = document.querySelector(".carousel-image-2");
const carouselImage3 = document.querySelector(".carousel-image-3");
const numberOfImages = document.querySelectorAll(".carousel-image").length;
let imageIndex = 1;
let translateX = 0;

carouselButtonLeft.addEventListener("click", slideLeft);
carouselButtonRight.addEventListener("click", slideRight);

function slideLeft(){
    if (imageIndex !== 1){
        imageIndex--;
        translateX += 400;
        carouselImage1.style.transform = `translateX(${translateX}px)`;
        carouselImage2.style.transform = `translateX(${translateX}px)`;
        carouselImage3.style.transform = `translateX(${translateX}px)`;
    }
    
}

function slideRight(){
    if (imageIndex !== numberOfImages){
        imageIndex++;
        translateX -= 400;
        carouselImage1.style.transform = `translateX(${translateX}px)`;
        carouselImage2.style.transform = `translateX(${translateX}px)`;
        carouselImage3.style.transform = `translateX(${translateX}px)`;
    }
    
}
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
