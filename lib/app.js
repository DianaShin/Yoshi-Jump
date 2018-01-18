const Yoshi = require("./yoshi");

let cloud1 = new Image();
  cloud1.src = './assets/images/cloud1-01.png';
let cloud2 = new Image();
  cloud2.src = './assets/images/cloud2-01.png';
let cloud3 = new Image();
  cloud3.src = './assets/images/cloud3-01.png';
let cloud4 = new Image();
  cloud4.src = './assets/images/cloud4.png';
let cloud5 = new Image();
  cloud5.src = './assets/images/cloud1-01.png';
let cloud6 = new Image();
  cloud6.src = './assets/images/cloud2-01.png';
let cloud7 = new Image();
  cloud7.src = './assets/images/cloud3-01.png';
let clouds = [cloud1, cloud2, cloud3, cloud4, cloud5, cloud6, cloud7];

document.addEventListener("DOMContentLoaded", start);

function start() {
  let canvasEl = document.getElementById("mycanvas");
  let ctx = canvasEl.getContext('2d');
  // let yoshi = new Image();
  // yoshi.onload = function() {
  //   ctx.drawImage(yoshi, 120, 400);
  // };
  // yoshi.src = "./assets/images/yoshi.png";

  let ground = new Image();
  ground.onload = function() {
    ctx.drawImage(ground, 0, 280);
  };
  ground.src = './assets/images/yoshi-ground.png';

  debugger

  let yoshi = new Yoshi(ctx);

  ctx.fillStyle = "#009dff";
  ctx.fillRect(0, 0, 400, 500);


  drawClouds();
  drawPlatforms();
  // debugger

  // }
  // draw(ctx) {
  //   console.log("yoshi drawing");
  //   let yoshi = new Image ();
  //     yoshi.onload = function() {
  // }

  // ctx.clearRect(0, 0, 400, 525);
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
    };
  }
}
