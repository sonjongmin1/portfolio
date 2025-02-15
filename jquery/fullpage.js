$("#fullpage").fullpage({
  anchors: ["btn-1", "btn-2", "btn-3", "btn-4"],
  menu: "#menu",
  onLeave: function (index, nextIndex, direction) {
    // 메뉴 항목에 'act' 클래스 추가/제거
    $("#menu>li")
      .eq(nextIndex - 1)
      .addClass("act")
      .siblings()
      .removeClass("act");
    console.log(index);
    console.log("nextIndex" + nextIndex);
  },
});

$("#menu>li").click(function () {
  $(this).addClass("act").siblings().removeClass("act");
});
