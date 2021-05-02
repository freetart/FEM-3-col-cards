const btns = [...document.querySelectorAll(".btn")];
const cardImg = [...document.querySelectorAll(".card-img")];

btns.forEach((btn) => {
  btn.addEventListener("mouseover", (e) => {
    cardImg.forEach((img) => {
      if (e.target.dataset.id === img.dataset.id) {
        img.style.transform = "translate(100%, 100%) scale(1.5)";
        img.style.opacity = 0.5;
      }
    });
  });

  btn.addEventListener("mouseout", (e) => {
    cardImg.forEach((img) => {
      if (e.target.dataset.id === img.dataset.id) {
        img.style.transform = "translateX(0) scale(1)";
        img.style.opacity = 1;
      }
    });
  });
});
