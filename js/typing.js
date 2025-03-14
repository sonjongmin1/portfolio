let typing = document.querySelector(".st1-layout2-text-con1-txt");

let i = 0;
let c = "Developer";
let a = "";

function typeText() {
  if (i < c.length) {
    a += c[i];
    typing.textContent = a;
    i++;
    setTimeout(typeText, 200);
  } else {
    setTimeout(() => {
      a = "";
      i = 0;
      typing.classList.add("blink");
      setTimeout(() => {
        typing.classList.remove("blink");
        setTimeout(typeText, 2500);
      }, 1000);
    }, 1000);
  }
}

if (typing) {
  typeText();
}
