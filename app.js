let hero = document.querySelector(".hero");
let slider = document.querySelector(".slider");
let animation = document.querySelector("section.animation-wrapper");

const timeLine = new TimelineMax();
// params: target, duration, original state, end state, seconds ahead
timeLine
  .fromTo(hero, 1, { height: "0%" }, { height: "100%", ease: Power2.easeInOut })
  .fromTo(hero, 1.2, { width: "8%" }, { width: "100%", ease: Power2.easeInOut })
  .fromTo(
    slider,
    1,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(animation, 0.3, { opacity: "1" }, { opacity: "0" });

window.setTimeout(() => {
  animation.style.pointerEvents = "none";
}, 2500);

// disable enter key for whole project
window.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
  }
});
// disable the submit form behavior for all buttons
let allButtons = document.querySelectorAll("button");
allButtons.forEach((button) =>
  button.addEventListener("click", (event) => {
    event.preventDefault();
  })
);

let allSelects = document.querySelectorAll("select");
allSelects.forEach((select) => {
  select.addEventListener("change", (event) => {
    changeColor(event.target); // event.target => <select> tag itself
  });
});

const changeColor = (target) => {
  if (target.value === "A" || target.value === "A-") {
    target.style.backgroundColor = "lightgreen";
  } else if (
    target.value === "B" ||
    target.value === "B+" ||
    target.value === "B-"
  ) {
    target.style.backgroundColor = "yellow";
  } else if (
    target.value === "C" ||
    target.value === "C+" ||
    target.value === "C-"
  ) {
    target.style.backgroundColor = "orange";
  } else if (
    target.value === "D" ||
    target.value === "D+" ||
    target.value === "D-"
  ) {
    target.style.backgroundColor = "red";
  } else if (target.value === "F") {
    target.style.backgroundColor = "grey";
    target.style.color = "white";
  } else {
    target.style.backgroundColor = "white";
  }
};
