const btns = [...document.querySelectorAll(".btn")];
const cardImg = [...document.querySelectorAll(".card-img")];

function mouseoverFocusAnimation(e) {
  cardImg.forEach((img) => {
    if (e.target.dataset.id === img.dataset.id) {
      img.style.transform = "translate(100%, 100%) scale(1.5)";
      img.style.opacity = 0.5;
    }
  });
}

function mouseoutFocusOutAnimation(e) {
  cardImg.forEach((img) => {
    if (e.target.dataset.id === img.dataset.id) {
      img.style.transform = "translateX(0) scale(1)";
      img.style.opacity = 1;
    }
  });
}

btns.forEach((btn) => {
  btn.addEventListener("mouseover", (e) => {
    mouseoverFocusAnimation(e);
  });

  btn.addEventListener("focus", (e) => {
    mouseoverFocusAnimation(e);
  });

  btn.addEventListener("mouseout", (e) => {
    mouseoutFocusOutAnimation(e);
  });

  btn.addEventListener("focusout", (e) => {
    mouseoutFocusOutAnimation(e);
  });
});
