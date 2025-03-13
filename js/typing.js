// let dev = document.querySelector(".st1-tit");
// let html = document.querySelector(".st1-html");
// let css = document.querySelector(".st1-css");
// let scss = document.querySelector(".st1-scss");
// let js = document.querySelector(".st1-js");
// let jq = document.querySelector(".st1-jq");
// let react = document.querySelector(".st1-react");
// let mysql = document.querySelector(".st1-mysql");
// let st1Con = document.querySelector(".st1-con");

// let items = [
//   { element: dev, text: "Developer" },
//   { element: html, text: "HTML" },
//   { element: css, text: "CSS" },
//   { element: scss, text: "SCSS" },
//   { element: js, text: "JavaScript" },
//   { element: jq, text: "jQuery" },
//   { element: react, text: "React" },
//   { element: mysql, text: "MySQL" },
// ];

// function typeText(element, text, intervalTime) {
//   return new Promise((resolve) => {
//     let index = 0;
//     let interval = setInterval(() => {
//       if (index < text.length) {
//         element.textContent += text[index];
//         index++;
//       } else {
//         clearInterval(interval);
//         // 타이핑 완료 시 Promise resolve
//         resolve();
//       }
//     }, intervalTime);
//   });
// }

// // 타이핑이 끝날 때까지 기다리기
// async function startTyping() {
//   for (let item of items) {
//     await typeText(item.element, item.text, 100);
//   }

//   // 깜빡이기 효과 추가
//   dev.classList.add("blink");
//   st1Con.classList.add("blink");
// }

// startTyping();

// 수정
let typing = document.querySelector(".st1-layout2-text-con1-txt");

let i = 0; // 문자열 인덱스
let c = "Developer"; // 출력할 문자열
let a = ""; // 결과 문자열 초기화

function typeText() {
  if (i < c.length) {
    a += c[i]; // 한 글자씩 추가
    typing.textContent = a; // 요소의 텍스트 업데이트
    i++;
    setTimeout(typeText, 150); // 0.3초 간격으로 실행
  } else {
    // 문자열 끝에 도달하면 초기화
    setTimeout(() => {
      a = "";
      i = 0;
      typeText(); // 다시 타이핑 시작
    }, 150); // 타이핑 종료 후 1초 기다림
  }
}

if (typing) {
  typeText(); // 타이핑 시작
}
