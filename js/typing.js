let dev = document.querySelector(".st1-tit");
let html = document.querySelector(".st1-html");
let css = document.querySelector(".st1-css");
let scss = document.querySelector(".st1-scss");
let js = document.querySelector(".st1-js");
let jq = document.querySelector(".st1-jq");
let react = document.querySelector(".st1-react");
let mysql = document.querySelector(".st1-mysql");
let st1Con = document.querySelector(".st1-con");

let items = [
  { element: dev, text: "Developer" },
  { element: html, text: "HTML" },
  { element: css, text: "CSS" },
  { element: scss, text: "SCSS" },
  { element: js, text: "JavaScript" },
  { element: jq, text: "jQuery" },
  { element: react, text: "React" },
  { element: mysql, text: "MySQL" },
];

function typeText(element, text, intervalTime) {
  return new Promise((resolve) => {
    let index = 0;
    let interval = setInterval(() => {
      if (index < text.length) {
        element.textContent += text[index];
        index++;
      } else {
        clearInterval(interval);
        // 타이핑 완료 시 Promise resolve
        resolve();
      }
    }, intervalTime);
  });
}

// 타이핑이 끝날 때까지 기다리기
async function startTyping() {
  for (let item of items) {
    await typeText(item.element, item.text, 100);
  }

  // 깜빡이기 효과 추가
  dev.classList.add("blink");
  st1Con.classList.add("blink");
}

startTyping();
