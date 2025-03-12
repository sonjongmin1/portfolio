document.addEventListener("DOMContentLoaded", function () {
  let index = 0;
  const menuItems = document.querySelectorAll(".menu > li");
  const totalItems = menuItems.length;
  const hireBtn = document.querySelector("#hire-btn");
  const hrModal = document.querySelector(".hr-modal");
  const cardClBtn = document.querySelectorAll(".card-cl-btn");

  const intervalId = setInterval(function () {
    if (index < totalItems) {
      menuItems[index].classList.remove("on");
      index++;
    } else {
      clearInterval(intervalId);
    }
  }, 500);

  hireBtn.addEventListener("click", function () {
    hrModal.classList.toggle("on");
  });

  cardClBtn.forEach((item) => {
    item.addEventListener("click", function () {
      hrModal.classList.remove("on");
    });
  });

  let closeBtnWhite = document.querySelector(".close-btn-white");
  let menu = document.querySelector(".menu");
  let whiteBtn = document.querySelector(".white-btn");
  let menuBtn = document.querySelector("#menu-btn");

  whiteBtn.addEventListener("click", function () {
    menu.classList.add("on");
    whiteBtn.style.display = "none";
    closeBtnWhite.display = "block";
    menuBtn.style.display = "none";
  });

  closeBtnWhite.addEventListener("click", function () {
    menu.classList.remove("on");
    closeBtnWhite.display = "none";
    whiteBtn.style.display = "block";
    menuBtn.style.display = "flex";
  });
});
