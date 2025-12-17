const burger = document.getElementById("burger-menu");
const burgerOpened = document.getElementById("burger-opened");

burger.onclick = () => {
  burger.classList.toggle("activated");
  burgerOpened.classList.toggle("activated");
};
