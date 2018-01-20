let mycanvas = document.getElementById('mycanvas');
let ctx = mycanvas.getContext('2d');

let width = 400;
let height = 500;
mycanvas.width  = width;
mycanvas.height = height;

let gameLoop;
// let yoshi = new Yoshi();
let points = 0;
let state = true;
var clouds = [];
var numClouds =15;

function clear() {
  ctx.fillStyle = '#009dff';
  ctx.beginPath();
  ctx.rect(0, 0, width, height);
  ctx.closePath();
  ctx.fill();
}

function createClouds() {
  for (let i=0; i < this.numClouds; i++) {
    this.clouds.push(new Cloud());
  }
}

function renderClouds() {
  for (let i=0; i < this.numClouds; i++) {
    ctx.drawImage(this.clouds[i].image, 0, 0, 100, 100,
      this.clouds[i].X, this.clouds[i].Y, 100, 100);
  }
}

function updateClouds(dX, dY) {
  for (let i = 0; i < this.numClouds; i++) {
    if (this.clouds[i].Y - 20 > height) {
      this.clouds[i].X = Math.random() * width;
      this.clouds[i].Y = 20;
    } else {
      this.clouds[i].X += Math.random() * -dX;
      this.clouds[i].Y += Math.random() * dY;
    }
  }
}

let numCircles = 10;
let circles = [];

for (let i=0; i < numCircles; i++) {
  circles.push([
    Math.random() * width,
    Math.random() * height,
    Math.random() * 75,
    Math.random() / 1
  ]);
}

function drawCircles() {
  for (let i = 0; i < numCircles; i++) {
    ctx.fillStyle = 'rgba(255, 255, 255, ' + circles[i][3] + ')';
    ctx.beginPath();
    ctx.arc(
        circles[i][0],
        circles[i][1],
        circles[i][2],
        0,
        Math.PI * 2,
        true
    );
    ctx.closePath();
    ctx.fill();
  }
}

function moveCircles(dY) {
  for (let i=0; i < numCircles; i++) {
    // for the case when the circle has moved outside of the canvas, move a new circle onto canvas
    if (circles[i][1] - circles[i][2] > height) {
      circles[i][0] = Math.random() * width;
      circles[i][1] = 0 - circles[i][2];
      circles[i][2] = Math.random() * 100;
      circles[i][3] = Math.random() / 2;
    } else {
      circles[i][1] += dY;
    }
  }
}

function checkCollision() {
  platforms.forEach(function(e, idx) {
    if ((yoshi.isFalling) &&
        (yoshi.X < e.x + platformWidth) &&
        (yoshi.X + yoshi.width > e.x) &&
        (yoshi.Y + yoshi.height > e.y) &&
        (yoshi.Y + yoshi.height < e.y + platformHeight)
  ) {
      e.onCollide();
    }
  });
}




function GameLoop() {
  // this.yoshi = new Yoshi();
  clear();
  moveCircles(6);
  drawCircles();
  createClouds();
  renderClouds();
  updateClouds(1, 1.5);
  checkCollision();
  if (yoshi.isJumping) yoshi.checkJump();
  if (yoshi.isFalling) yoshi.checkFall();
  yoshi.draw();

  platforms.forEach(function(platform, index) {
      if (platform.isMoving) {
          if (platform.x < 0) {
              platform.direction = 1;
          } else if (platform.x > width - platformWidth) {
              platform.direction = -1;
          }
          platform.x += platform.direction * (index / 2) * ~~(points / 100);
      }
      platform.draw();
  });

  ctx.fillStyle = "Black";
  ctx.fillText("SCORE:" + points, 10, height-510);

  if (state) {
      gameLoop = setTimeout(GameLoop, 1000 / 40);
  }
}

let numPlatforms = 6;
let  platforms = [];
let  platformWidth = 57;
let  platformHeight = 20;

function generatePlatforms() {
  let position = 0;
  let type;

  for (let i = 0; i < numPlatforms; i++) {
    type = Math.floor((Math.random()*5));

    if (type === 0) {
      type = 1;
    } else {
      type = 0;
    }

    platforms[i] = new Platform (
      Math.random()*(width - platformWidth),
      position,
      type
    );

    if (position < height - platformHeight) {
      position += Math.floor((height / numPlatforms));
    }
  }
}

generatePlatforms();
// let yoshi = new Yoshi();
yoshi.setPosition(
    Math.floor(((width-yoshi.width) / 2)),
    Math.floor(((height - yoshi.height) / 2))
);

yoshi.jump();


function gameOver() {
  state = false;
  clearTimeout(gameLoop);
  setTimeout(function() {
    clear();
    ctx.fillStyle = "Black";
    ctx.font = "13pt Helvetica";
    ctx.fillText("GAME OVER", width / 2 - 60, height / 2 - 50);
    ctx.fillText("YOUR SCORE:" + points, width / 2 - 60, height / 2 - 30);
  }, 100);
}

function startGame() {
  state = true;
  gameLoop();
}


document.onmousemove = function(e) {
    if (yoshi.X + mycanvas.offsetLeft > e.pageX) {
        yoshi.moveLeft();
    } else if (yoshi.X + mycanvas.offsetLeft < e.pageX) {
        yoshi.moveRight();
    }
};

// let keyLeft = false;
// let keyRight = false;
//
// window.addEventListener("keydown", checkKeyPressed);
// window.addEventListener("keyup", checkKeyLifted);
//
//
// function checkMove() {
//   if (keyLeft) {
//     yoshi.moveLeft();
//   } else if (keyRight) {
//     yoshi.moveRight();
//   }
// }
//
// function checkKeyPressed (e) {
//     switch(e.keyCode) {
//         case 37: //this is left arrow
//             e.preventDefault();
//             keyLeft = true;
//             yoshi.moveLeft();
//             break;
//         case 39: //this is right arrow
//             e.preventDefault();
//             keyRight = true;
//             yoshi.moveRight();
//             break;
//         case 13: //this is 'enter'
//             e.preventDefault();
//             startGame();
//             break;
//         case 80: //this is 'p'
//             e.preventDefault();
//             clearTimeout(gameLoop); //how to pause without restarting entire game?
//       }
//   }
//
// function checkKeyLifted (e) {
//   keyLeft = false;
//   keyRight = false;
// }

GameLoop();
