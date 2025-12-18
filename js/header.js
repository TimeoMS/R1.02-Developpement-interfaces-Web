const burger = document.getElementById("burger-menu");
const burgerOpened = document.getElementById("burger-opened");
const darkmode = document.getElementById("darkmode");
const css = document.getElementsByClassName("css");

burger.onclick = () => {
  burger.classList.toggle("activated");
  burgerOpened.classList.toggle("activated");
};

darkmode.onclick = () => {
  if (css[0].href.includes("mcss/dark.min.css")) {
    css[0].href = "mcss/index.min.css";
    css[1].href = "mcss/headerfooter.min.css";
  } else {
    css[1].href = "";
    css[0].href = "mcss/dark.min.css";
  }
};
