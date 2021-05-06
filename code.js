//where animation happen
const container = document.querySelector(".wrapper");
const card = document.querySelector(".card");
//items
const sneaker = document.querySelector(".sneaker img");
const tittle = document.querySelector(".info h1");
const info = document.querySelector(".info h3");
const colors = document.querySelector(".colors");
const sizes = document.querySelector(".sizes");
const purchase = document.querySelector(".purchase");

//mouse capture for animations
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  card.style.transition = "none";
});

//animation in
container.addEventListener("mouseenter", (e) => {
  sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
  tittle.style.transform = "translateZ(150px)";
  info.style.transform = "translateZ(100px)";
  colors.style.transform = "translateZ(100px)";
  sizes.style.transform = "translateZ(100px)";
});

//animation out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease-out";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //back elements
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  tittle.style.transform = "translateZ(0px)";
  info.style.transform = "translateZ(0px)";
  colors.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
});
