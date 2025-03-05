let canvas;
let ctx;
let whatSt = document.querySelector(".what-st");
let gameStartBtn = document.querySelector(".what-game-btn"); // 게임 시작 버튼
let countdownDiv = document.createElement("div"); // 카운트다운 표시를 위한 div
countdownDiv.style.position = "absolute";
countdownDiv.style.top = "50%";
countdownDiv.style.left = "50%";
countdownDiv.style.transform = "translate(-50%, -50%)";
countdownDiv.style.fontSize = "50px";
countdownDiv.style.color = "white";
countdownDiv.style.textAlign = "center";
whatSt.appendChild(countdownDiv);

let gameReady = true; // 게임 대기 상태
let gameOver = false;
let score = 0;

canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 550;
whatSt.appendChild(canvas);

let hamsterImage, tackImage;

// 햄스터 좌표
let hamX = canvas.width / 2 - 50;
let hamY = canvas.height - 99;

let bulletList = [];
let enemyList = [];
let enemyImages = [
  "./img/lang-ic/html.png",
  "./img/lang-ic/css.png",
  "./img/lang-ic/js.png",
  "./img/lang-ic/jquery.png",
  "./img/lang-ic/react.png",
  "./img/lang-ic/mysql.png",
  "./img/lang-ic/github.png",
  "./img/lang-ic/word.png",
  "./img/lang-ic/power.png",
  "./img/lang-ic/excel.svg",
];

function Bullet() {
  this.x = 0;
  this.y = 0;
  this.alive = true;
  this.init = function () {
    this.x = hamX;
    this.y = hamY - 80;
    bulletList.push(this);
  };
  this.update = function () {
    this.y -= 7;
  };
  this.checkHit = function () {
    for (let i = 0; i < enemyList.length; i++) {
      if (
        this.y <= enemyList[i].y &&
        this.x >= enemyList[i].x - 30 &&
        this.x <= enemyList[i].x + 130
      ) {
        score++;
        this.alive = false;
        enemyList.splice(i, 1);
      }
    }
  };
}

function Enemy() {
  this.x = 0;
  this.y = 0;
  this.image = null;
  this.init = function () {
    this.y = 0;
    this.x = generateRandomValue(100, canvas.width - 150);
    this.image = new Image();
    let randomIndex = generateRandomValue(0, enemyImages.length - 1);
    this.image.src = enemyImages[randomIndex];
    enemyList.push(this);
  };
  this.update = function () {
    this.y += 1;
    if (this.y >= canvas.height - 100) {
      gameOver = true;
    }
  };
}

function generateRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function loadImage() {
  hamsterImage = new Image();
  hamsterImage.src = "./img/card/Hamster.png";
  tackImage = new Image();
  tackImage.src = "./img/icon/rotated-tack.png";
}

let keysDown = {};
function setupKeyboardListener() {
  document.addEventListener("keydown", function (event) {
    keysDown[event.key] = true;
  });
  document.addEventListener("keyup", function (event) {
    delete keysDown[event.key];
    if (event.key === " ") {
      createBullet();
    }
  });
}

function createBullet() {
  let b = new Bullet();
  b.init();
}

function createEnemy() {
  setInterval(function () {
    if (!gameReady && !gameOver) {
      let e = new Enemy();
      e.init();
    }
  }, 1500);
}

function update() {
  if (gameReady || gameOver) return;

  if ("ArrowRight" in keysDown) hamX += 8;
  if ("ArrowLeft" in keysDown) hamX -= 8;

  if (hamX <= 0) hamX = 0;
  if (hamX >= canvas.width - 100) hamX = canvas.width - 100;

  for (let i = 0; i < bulletList.length; i++) {
    if (bulletList[i].alive) {
      bulletList[i].update();
      bulletList[i].checkHit();
    }
  }

  for (let i = 0; i < enemyList.length; i++) {
    enemyList[i].update();
  }
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(hamsterImage, hamX, hamY, 100, 99);
  ctx.fillText(`Score: ${score}`, canvas.width - 150, 50);
  ctx.font = "30px Arial";
  ctx.fillStyle = "white";

  if (!gameReady) {
    for (let i = 0; i < bulletList.length; i++) {
      if (bulletList[i].alive) {
        ctx.drawImage(tackImage, bulletList[i].x, bulletList[i].y, 100, 100);
      }
    }

    for (let i = 0; i < enemyList.length; i++) {
      ctx.drawImage(
        enemyList[i].image,
        enemyList[i].x,
        enemyList[i].y,
        100,
        100
      );
    }
  }
}

function main() {
  update();
  render();
  if (!gameOver) requestAnimationFrame(main);
}

function startCountdown() {
  let countdown = 3;
  countdownDiv.innerHTML = countdown;
  countdownDiv.style.fontSize = "150px";
  const interval = setInterval(() => {
    countdown--;
    countdownDiv.innerHTML = countdown;
    if (countdown === 0) {
      clearInterval(interval);
      countdownDiv.style.display = "none";
      gameReady = false;
      main();
    }
  }, 1000);
}

gameStartBtn.addEventListener("click", function () {
  if (gameReady) {
    startCountdown();
    gameStartBtn.style.display = "none"; // 시작 버튼 숨기기
  }
});

loadImage();
setupKeyboardListener();
createEnemy();
main();
