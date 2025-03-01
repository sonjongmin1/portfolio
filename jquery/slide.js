$(document).ready(() => {
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
        setTimeout(callback_2, 1000);
      }
    });
  const callback_2 = () => {
    $("#slide").css("transition", "none");
    $("#slide").css("left", "-1300px");
    $("#slide").append($("#slide").children().first());
    active = true;
  };
}); //............js end
