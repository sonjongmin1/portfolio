document.addEventListener("DOMContentLoaded", function () {
  const tack = document.querySelector(".tack");
  const card = document.querySelector(".card");

  // tack 구현
  tack.addEventListener("click", () => {
    const isFixed = tack.getAttribute("data-fixed") === "true";

    if (isFixed) {
      // 뒷면 고정 해제
      card.classList.remove("flipped");
      tack.setAttribute("data-fixed", "false");
    } else {
      // 뒷면 고정
      card.classList.add("flipped");
      tack.setAttribute("data-fixed", "true");
    }
  });
});
