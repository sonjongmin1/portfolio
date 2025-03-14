let layOut = document.querySelector(".lay-out");
let video = document.querySelector("video");

setTimeout(() => {
  video.classList.add("hidden");
}, 3000);

setTimeout(() => {
  layOut.classList.remove("on");
}, 3000);
