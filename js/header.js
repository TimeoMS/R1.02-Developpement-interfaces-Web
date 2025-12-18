const burger = document.getElementById("burger-menu");
const burgerOpened = document.getElementById("burger-opened");
const darkmode = document.getElementById("darkmode");
const css = document.getElementsByClassName("css");

burger.onclick = () => {
  burger.classList.toggle("activated");
  burgerOpened.classList.toggle("activated");
};

darkmode.onclick = () => {
  if (css[0].href.includes("css/dark.css")) {
    css[0].href = "css/index.css";
    css[1].href = "css/headerfooter.css";
  } else {
    css[1].href = "";
    css[0].href = "css/dark.css";
  }
};
