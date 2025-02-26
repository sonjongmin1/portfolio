let index = 0;
const menuItems = document.querySelectorAll(".menu > li");
const totalItems = menuItems.length;
const hireBtn = document.querySelector("#hire-btn");
const hrModal = document.querySelector(".hr-modal");

const intervalId = setInterval(function () {
  if (index < totalItems) {
    menuItems[index].classList.remove("on");
    index++;
  } else {
    clearInterval(intervalId);
  }
}, 300);

hireBtn.addEventListener("click", function () {
  hrModal.classList.toggle("on");
});
