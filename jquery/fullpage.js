$("#fullpage").fullpage({
  anchors: ["btn-1", "btn-2", "btn-3", "btn-4"],
  menu: "#menu-btn",
  onLeave: function (index, nextIndex, direction) {
    // 메뉴 항목에 'act' 클래스 추가/제거
    $("#menu-btn >li")
      .eq(nextIndex - 1)
      .addClass("act")
      .siblings()
      .removeClass("act");
    console.log(index);
    console.log("nextIndex" + nextIndex);

    $(".menu-ln").removeClass("on");
    switch (nextIndex) {
      case 1:
        $(".menu-ln").eq(0).addClass("on");
        break;
      case 2:
        $(".menu-ln").eq(1).addClass("on");
        break;
      case 3:
        $(".menu-ln").eq(2).addClass("on");
        break;
      case 4:
        $(".menu-ln").eq(3).addClass("on");
        break;
      default:
        break;
    }
  },
});

$("#menu>li").click(function () {
  $(this).addClass("act").siblings().removeClass("act");
});
