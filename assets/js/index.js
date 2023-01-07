let imgcentral = document.querySelector("#imgcentral");
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");
let img3 = document.querySelector("#img3");
let btnleft = document.querySelector("#btnleft");
let btnright = document.querySelector("#btnright");
let pop = document.querySelector(".pop");
let btnpop = document.querySelector("#btnpop");
let closed = document.querySelector("#closed");
const time = 5000;
let imgalterna = 2;
let direcao = 0;

img1.addEventListener("click", function () {
  imgcentral.setAttribute("src", img1.src);
  imgalterna = 2;
});

img2.addEventListener("click", function () {
  imgcentral.setAttribute("src", img2.src);
  imgalterna = 3;
});

img3.addEventListener("click", function () {
  imgcentral.setAttribute("src", img3.src);
  imgalterna = 1;
});

function alternaimg() {
  if (direcao === 0) {
    switch (imgalterna) {
      case 1:
        imgcentral.setAttribute("src", img1.src);
        imgalterna = 2;
        break;
      case 2:
        imgcentral.setAttribute("src", img2.src);
        imgalterna = 3;
        break;
      case 3:
        imgcentral.setAttribute("src", img3.src);
        imgalterna = 1;
        break;
    }
  } else {
    switch (imgalterna) {
      case 1:
        imgcentral.setAttribute("src", img2.src);
        imgalterna = 3;
        break;
      case 2:
        imgcentral.setAttribute("src", img3.src);
        imgalterna = 1;
        break;
      case 3:
        imgcentral.setAttribute("src", img1.src);
        imgalterna = 2;
        break;
    }
    direcao = 0;
  }
}
function openpop() {
  switch (imgalterna) {
    case 1:
      imgpop.setAttribute("src", "/assets/images/3g.webp");
      break;
    case 2:
      imgpop.setAttribute("src", "/assets/images/1g.webp");
      break;
    case 3:
      imgpop.setAttribute("src", "/assets/images/2g.webp");
      break;
  }
}
setInterval(alternaimg, time);

btnleft.addEventListener("click", function () {
  direcao = 1;
  alternaimg();
});

btnright.addEventListener("click", function () {
  alternaimg();
});

btnpop.addEventListener("click", function () {
  openpop();
  pop.classList.add("active");
});

closed.addEventListener("click", function () {
  pop.classList.remove("active");
});
