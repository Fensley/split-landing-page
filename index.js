// mouseenter -- mouseleave

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container")

left.addEventListener("mouseenter" , ()=> container.classList.add("hover-left"));

left.addEventListener("mouseleave" , ()=> container.classList.remove("hover-left"))

right.addEventListener("mouseenter" , function (){
  container.classList.add("hover-right")
});

right.addEventListener("mouseleave" , function leave(){
  container.classList.remove("hover-right")
})   