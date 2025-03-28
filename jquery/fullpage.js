$("#fullpage").fullpage({
  anchors: ["btn-1", "btn-2", "btn-3", "btn-4"],
  menu: "#menu-btn",
  keyboardScrolling: false,
  onLeave: function (index, nextIndex, direction) {
    // 메뉴 항목에 'act' 클래스 추가/제거
    $("#menu-btn >li")
      .eq(nextIndex - 1)
      .addClass("act")
      .siblings()
      .removeClass("act");

    $(".menu-ln").removeClass("on");
    switch (nextIndex) {
      case 1:
        $(".menu-ln").eq(0).addClass("on");
        $(".menu").removeClass("on");
        $(".white-btn").css("display", "block");
        $(".white-btn").css(
          "background-image",
          "url('./img/icon/white-menu-btn.svg')"
        );
        $("#menu-btn").css("display", "flex");
        $("#hire-btn").removeClass("blink");
        break;
      case 2:
        $(".menu-ln").eq(1).addClass("on");
        $(".menu").removeClass("on");
        $(".white-btn").css("display", "block");
        $(".white-btn").css(
          "background-image",
          "url('./img/icon/white-menu-btn.svg')"
        );
        $("#menu-btn").css("display", "flex");
        $(".restart-box").css("display", "none");
        $("#hire-btn").addClass("blink");
        break;
      case 3:
        $(".menu-ln").eq(2).addClass("on");
        $(".menu").removeClass("on");
        $(".white-btn").css("display", "block");
        $(".white-btn").css(
          "background-image",
          "url('./img/icon/menu-btn-main-col.svg')"
        );
        $("#menu-btn").css("display", "flex");
        $(".restart-box").css("display", "flex");
        $("#hire-btn").removeClass("blink");
        break;
      case 4:
        $(".menu-ln").eq(3).addClass("on");
        $(".menu").removeClass("on");
        $(".white-btn").css("display", "block");
        $(".white-btn").css(
          "background-image",
          "url('./img/icon/white-menu-btn.svg')"
        );
        $("#menu-btn").css("display", "none");
        $(".restart-box").css("display", "none");
        $("#hire-btn").addClass("blink");
        break;
      default:
        break;
    }
  },
});

$("#menu>li").click(function () {
  $(this).addClass("act").siblings().removeClass("act");
});
