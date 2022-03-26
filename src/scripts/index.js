import "../styles/index.css";

let menuTrigger = document.getElementsByClassName("tham")[0];
let userMenu = document.getElementById("user-menu");
let step = document.getElementsByClassName("step");
let tooltip = document.getElementsByClassName("tooltip");
let flipContent = document.getElementById("flip-move");
let flipTrigger = document.getElementsByClassName("flip-trigger");

for (let i = 0; i < flipTrigger.length; i++) {
  flipTrigger[i].addEventListener("click", () => {
    flipContent.classList.toggle("flip-card");
  });
}

for (let i = 0; i < step.length; i++) {
  step[i].addEventListener("click", () => {
    let currentTooltip = step[i].getElementsByClassName("tooltip")[0];

    // for (let i = 0; i < tooltip.length; i++) {
    //   if (tooltip[i].classList.contains("show-tooltip")) {
    //     tooltip[i].classList.remove("show-tooltip");
    //   }
    // }
    if (
      step[i].classList.contains("loaded") ||
      step[i].classList.contains("current-step")
    ) {
      if (!currentTooltip.classList.contains("show-tooltip")) {
        currentTooltip.classList.toggle("show-tooltip");
        for (let i = 0; i < tooltip.length; i++) {
          if (tooltip[i].classList.contains("show-tooltip")) {
            tooltip[i].classList.remove("show-tooltip");
          }
        }
      }
      if (currentTooltip) {
        currentTooltip.classList.toggle("show-tooltip");
      }
    }
  });
}

menuTrigger.addEventListener("click", () => {
  menuTrigger.classList.toggle("tham-active");
  userMenu.classList.toggle("-translate-x-full");
});
