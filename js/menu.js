let index = 0;
const menuItems = document.querySelectorAll(".menu > li");
const totalItems = menuItems.length;

const intervalId = setInterval(function () {
  if (index < totalItems) {
    menuItems[index].classList.remove("on");
    index++;
  } else {
    clearInterval(intervalId);
  }
}, 300);
