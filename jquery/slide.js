$(document).ready(() => {
  const totalSlides = 7; // 슬라이드의 총 개수
  let currentSlide = 1; // 현재 슬라이드 번호

  const updateCount = () => {
    $("#pt-count").text(`${currentSlide}/${totalSlides}`);
  };

  //왼쪽방향 화살표 클릭
  const no = $("#slide").find(".active").index();
  // const activeWidth = $(".active").innerWidth();
  // console.log(activeWidth);
  let active = true;
  $("#btn button")
    .eq(0)
    .click(() => {
      if (active) {
        active = false;
        $("#slide").css("transition", "left 1s");
        $("#slide").css("left", 0);
        $("#slide section")
          .eq(no - 1)
          .addClass("active")
          .siblings()
          .removeClass("active");

        currentSlide = currentSlide === 1 ? totalSlides : currentSlide - 1; // 페이지 번호 갱신
        updateCount();

        setTimeout(callback_1, 1000);
      }
    });
  const callback_1 = () => {
    $("#slide").css("transition", "none");
    $("#slide").css("left", "-1300px");
    $("#slide").prepend($("#slide").children().last());
    active = true;
  };

  //오른쪽방향 화살표 클릭
  $("#btn button")
    .eq(1)
    .click(() => {
      if (active) {
        active = false;
        $("#slide").css("transition", "left 1s");
        $("#slide").css("left", "-2600px");
        $("#slide section")
          .eq(no + 1)
          .addClass("active")
          .siblings()
          .removeClass("active");

        currentSlide = currentSlide === totalSlides ? 1 : currentSlide + 1; // 페이지 번호 갱신
        updateCount();

        setTimeout(callback_2, 1000);
      }
    });
  const callback_2 = () => {
    $("#slide").css("transition", "none");
    $("#slide").css("left", "-1300px");
    $("#slide").append($("#slide").children().first());
    active = true;
  };
  updateCount();
}); //............js end

// 페이지카운트
