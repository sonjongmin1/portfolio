let whatMdClose = document.querySelector(".what-md-close");
let whatModalBox = document.querySelector(".what-modal-box");
let mainSkill = document.querySelector("#main-skill");

mainSkill.addEventListener("click", function () {
  whatModalBox.classList.add("on");
});

whatMdClose.addEventListener("click", function () {
  whatModalBox.classList.remove("on");
});

const tabs = document.querySelectorAll(".what-md-st3 li");
const pages = document.querySelectorAll(".what-md-st2 > div");

// 초기 설정: 첫 번째 페이지만 표시
pages.forEach((page, index) => {
  page.style.display = index === 0 ? "block" : "none";
  page.style.opacity = index === 0 ? "1" : "0";
  page.style.transition = "opacity 0.5s ease";
});

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // 모든 페이지 페이드 아웃
    pages.forEach((page) => {
      page.style.opacity = "0";
      setTimeout(() => {
        page.style.display = "none";
      }, 500); // transition 시간과 일치
    });

    // 클릭한 탭의 페이지 페이드 인
    setTimeout(() => {
      pages[index].style.display = "block";
      pages[index].style.opacity = "1";
    }, 500); // transition 시간과 일치

    // 선택된 탭에 스타일 적용 (예: 활성화 표시)
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
  });
});

// what 모달시작
let word = document.querySelector("#word");
let sql = document.querySelector("#sql");
let mos = document.querySelector("#mos");

// Word 관련 이벤트
word.addEventListener("click", function () {
  word.classList.toggle("on");
  updateCursor(word);
  console.log("word 클릭");
});

word.addEventListener("mouseenter", () => updateCursor(word));

word.addEventListener("mouseleave", () => {
  word.style.cursor = "pointer"; // 기본 커서
});

// SQL 관련 이벤트
sql.addEventListener("click", function () {
  sql.classList.toggle("on");
  updateCursor(sql);
  console.log("sql 클릭");
});

sql.addEventListener("mouseenter", () => updateCursor(sql));

sql.addEventListener("mouseleave", () => {
  sql.style.cursor = "pointer"; // 기본 커서
});

// MOS 관련 이벤트
mos.addEventListener("click", function () {
  mos.classList.toggle("on");
  updateCursor(mos);
  console.log("mos 클릭");
});

mos.addEventListener("mouseenter", () => updateCursor(mos));

mos.addEventListener("mouseleave", () => {
  mos.style.cursor = "pointer"; // 기본 커서
});

// 커서 업데이트 함수
function updateCursor(element) {
  if (element.classList.contains("on")) {
    element.style.cursor = "url('../img/icon/ft-close-btn.svg'), auto";
  } else {
    element.style.cursor = "pointer";
  }
}
