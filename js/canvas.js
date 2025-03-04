let canvas;
let ctx;
let whatSt = document.querySelector(".what-st");

// 캔버스 생성 및 추가
canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width = 1000;
canvas.height = 550;
whatSt.appendChild(canvas);

let hamsterImage, tackImage;
let gameOver = false; // gameOver값이 true이면 게임종료
let score = 0;

// 햄스터 좌표
let hamX = canvas.width / 2 - 50;
let hamY = canvas.height - 99;

let bulletList = []; // 총알 저장 리스트
function Bullet() {
  this.x = 0;
  this.y = 0;
  this.alive = true; // true면 살아있는 총알
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

function generateRandomValue(min, max) {
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNum;
}

let enemyList = [];
let enemyImages = [
  "../img/lang-ic/html.png",
  "../img/lang-ic/css.png",
  "../img/lang-ic/js.png",
  "../img/lang-ic/jquery.png",
  "../img/lang-ic/react.png",
  "../img/lang-ic/mysql.png",
  "../img/lang-ic/github.png",
  "../img/lang-ic/word.png",
  "../img/lang-ic/power.png",
  "../img/lang-ic/excel.svg",
];

function Enemy() {
  this.x = 0;
  this.y = 0;
  this.image = null; // 랜덤 이미지를 저장할 변수
  this.init = function () {
    this.y = 0;
    this.x = generateRandomValue(100, canvas.width - 150);

    // 이미지 리스트에서 랜덤으로 하나를 선택
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

function loadImage() {
  hamsterImage = new Image();
  hamsterImage.src = "../img/card/Hamster.png";

  tackImage = new Image();
  tackImage.src = "../img/icon/rotated-tack.png";
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
  const interval = setInterval(function () {
    let e = new Enemy();
    e.init();
  }, 1500);
}

// 카운트다운 관련 변수
let countdown = 3;
let countdownStarted = false;
let countdownFinished = false;

function startCountdown() {
  countdownStarted = true;
  const interval = setInterval(function () {
    if (countdown > 0) {
      countdown--;
    } else {
      clearInterval(interval);
      countdownFinished = true;
    }
  }, 1000);
}

function update() {
  if (countdownFinished) {
    if ("ArrowRight" in keysDown) {
      hamX += 8;
    }
    if ("ArrowLeft" in keysDown) {
      hamX -= 8;
    }

    if (hamX <= 0) {
      hamX = 0;
    }
    if (hamX >= canvas.width - 100) {
      hamX = canvas.width - 100;
    }

    // 총알의 y좌표 업데이트 함수
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
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // 캔버스 초기화

  if (!countdownFinished) {
    ctx.font = "200px Arial";
    ctx.fillStyle = "white";
    ctx.fillText(countdown, canvas.width / 2 - 50, canvas.height / 2 + 55);
  } else {
    ctx.drawImage(hamsterImage, hamX, hamY, 100, 99);
    ctx.fillText(`Score: ${score}`, canvas.width - 150, 50);
    ctx.font = "30px Arial";
    ctx.fillStyle = "white";

    for (let i = 0; i < bulletList.length; i++) {
      if (bulletList[i].alive) {
        ctx.drawImage(tackImage, bulletList[i].x, bulletList[i].y, 100, 100);
      }
    }

    for (let i = 0; i < enemyList.length; i++) {
      const enemyWidth = 100;
      const enemyHeight = 100;
      ctx.drawImage(
        enemyList[i].image, // 랜덤 이미지를 사용
        enemyList[i].x,
        enemyList[i].y,
        enemyWidth,
        enemyHeight
      );
    }
  }
}

function main() {
  if (!countdownStarted) {
    startCountdown();
  }

  update();
  render();
  requestAnimationFrame(main);
}

loadImage();
setupKeyboardListener();
createEnemy();
main();
