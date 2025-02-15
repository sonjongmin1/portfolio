$("#fullpage").fullpage({
  sectionsColor: ["#daea99", "#bdeaf1", "#e8d4ef", "#f2ddc7"],
  anchors: ["firstPage", "secondPage", "3rdPage", "4thpage"],
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
