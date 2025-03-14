let typing = document.querySelector(".st1-layout2-text-con1-txt");

let i = 0; // 문자열 인덱스
let c = "Developer"; // 출력할 문자열
let a = ""; // 결과 문자열 초기화

function typeText() {
  if (i < c.length) {
    a += c[i]; // 한 글자씩 추가
    typing.textContent = a; // 요소의 텍스트 업데이트
    i++;
    setTimeout(typeText, 200); // 0.3초 간격으로 실행
  } else {
    // 문자열 끝에 도달하면 초기화
    setTimeout(() => {
      a = "";
      i = 0;
      typing.classList.add("blink"); // Add blink class for the last "|" character
      setTimeout(() => {
        typing.classList.remove("blink"); // Remove blink class after the reset
        setTimeout(typeText, 2500); // 3초 후 다시 타이핑 시작
      }, 1000); // 타이핑 종료 후 1초 기다림
    }, 1000); // 타이핑 종료 후 1초 기다림
  }
}

if (typing) {
  typeText(); // 타이핑 시작
}
