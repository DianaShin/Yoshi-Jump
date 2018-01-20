const Yoshi = require("./yoshi");
// const Platform = require("./platform");

let cloud1 = new Image();
  cloud1.src = './assets/images/cloud0.png';
let cloud2 = new Image();
  cloud2.src = './assets/images/cloud1.png';
let cloud3 = new Image();
  cloud3.src = './assets/images/cloud2.png';
let cloud4 = new Image();
  cloud4.src = './assets/images/cloud3.png';
let cloud5 = new Image();
  cloud5.src = './assets/images/cloud0.png';
let cloud6 = new Image();
  cloud6.src = './assets/images/cloud1.png';
let cloud7 = new Image();
  cloud7.src = './assets/images/cloud2.png';
let clouds = [cloud1, cloud2, cloud3, cloud4, cloud5, cloud6, cloud7];

let platforms = [];

document.addEventListener("DOMContentLoaded", start);

function start() {
  let canvasEl = document.getElementById("mycanvas");
  let ctx = canvasEl.getContext('2d');

  let ground = new Image();
  ground.onload = function() {
    ctx.drawImage(ground, 0, 280);
  };
  ground.src = './assets/images/yoshi-ground.png';

  ctx.fillStyle = "#009dff";
  ctx.fillRect(0, 0, 400, 500);

  drawClouds();
  drawPlatforms();

}

function drawClouds() {
  let canvasEl = document.getElementById("mycanvas");
  let ctx = canvasEl.getContext('2d');
  clouds.forEach(cloud => {
    cloud.onload = function() {
      ctx.drawImage(cloud, Math.random() * 350, Math.random() * 350);
    };
  });
}

function drawPlatforms() {
  let canvasEl = document.getElementById("mycanvas");
  let ctx = canvasEl.getContext('2d');
  let numPlatforms = 6;
  for (let i = 0; i < numPlatforms; i++) {
    platform = new Image();
    platform.src = './assets/images/board4-01.png';
    platform.onload = function() {
      ctx.drawImage(platform, Math.random() * 350, Math.random() * 350);
      let yoshi = new Yoshi();
      yoshi.draw(ctx);

    };
  }
}

// const Game = require('./game.js');
//
// let width = 400;
// let height = 525;
// let keyLeft = false;
// let keyRight = false;
//
// window.addEventListener("keydown", checkKeyPressed, false);
// window.addEventListener("keyup", checkKeyLifted, false);
//
//
// let myCanvas = document.getElementById("mycanvas");
// myCanvas.width = width;
// myCanvas.height = height;
// let ctx = myCanvas.getContext("2d");
//
// let yoshiJump = new Game();
//
// function checkKeyPressed (event) {
//     switch(event.keyCode) {
//         case 37:
//             keyLeft = true;
//             break;
//         case 39:
//             keyRight = true;
//             break;
//         case 13:
//             yoshiJump.startGame();
//             break;
//
//     }
// }
//
// function checkKeyLifted (event) {
//   keyLeft = false;
//   keyRight = false;
// }
