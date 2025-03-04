document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "/img/who/who-img1.jpeg",
    "/img/who/who-img2.jpg",
    "/img/who/who-img3.jpeg",
    "/img/who/who-img4.jpeg",
    "/img/who/who-img5.jpeg",
    "/img/who/who-img6.jpeg",
  ];

  const pfElement = document.querySelector(".who-pf");
  let currentIndex = 0;

  function changeImage() {
    pfElement.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length; // 이미지 배열의 마지막까지 갔다가 처음으로 돌아감
  }

  // 페이지가 로드될 때 첫 번째 이미지 설정
  changeImage();

  // 3초마다 이미지 변경
  setInterval(changeImage, 1500);
});
