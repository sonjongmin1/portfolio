$(document).ready(() => {
  const totalSlides = 7; // 슬라이드의 총 개수
  let currentSlide = 1; // 현재 슬라이드 번호

  const updateCount = () => {
    $("#pt-count").text(`${currentSlide}/${totalSlides}`);
  };

  // Get the current screen width
  const getSlideWidth = () => {
    return $(window).width() <= 768 ? -300 : -1300; // 모바일에서는 -300px, PC에서는 -1300px
  };

  //왼쪽방향 화살표 클릭
  const no = $("#slide").find(".active").index();
  let active = true;
  $("#btn button")
    .eq(0)
    .click(() => {
      if (active) {
        active = false;
        const slideWidth = getSlideWidth(); // Get appropriate slide width for current device
        $("#slide").css("transition", "left 1s");
        $("#slide").css("left", 0);
        $("#slide section")
          .eq(no - 1)
          .addClass("active")
          .siblings()
          .removeClass("active");

        currentSlide = currentSlide === 1 ? totalSlides : currentSlide - 1; // 페이지 번호 갱신
        updateCount();

        setTimeout(() => callback(slideWidth, "prepend"), 1000);
      }
    });

  const callback = (slideWidth, action) => {
    $("#slide").css("transition", "none");
    $("#slide").css("left", slideWidth + "px");
    if (action === "prepend") {
      $("#slide").prepend($("#slide").children().last());
    } else {
      $("#slide").append($("#slide").children().first());
    }
    active = true;
  };

  //오른쪽방향 화살표 클릭
  $("#btn button")
    .eq(1)
    .click(() => {
      if (active) {
        active = false;
        const slideWidth = getSlideWidth(); // Get appropriate slide width for current device
        const rightSlideWidth = $(window).width() <= 768 ? -600 : -2600; // 모바일에서는 -600px, PC에서는 -2600px
        $("#slide").css("transition", "left 1s");
        $("#slide").css("left", rightSlideWidth + "px"); // Adjust for the device's slide width
        $("#slide section")
          .eq(no + 1)
          .addClass("active")
          .siblings()
          .removeClass("active");

        currentSlide = currentSlide === totalSlides ? 1 : currentSlide + 1; // 페이지 번호 갱신
        updateCount();

        setTimeout(() => callback(slideWidth, "append"), 1000);
      }
    });

  updateCount();
}); //............js end
