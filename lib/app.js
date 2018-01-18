document.addEventListener("DOMContentLoaded", function(){
  let canvasEl = document.getElementById("mycanvas");
  let ctx = canvasEl.getContext('2d');
  let ground = new Image();
  ground.onload = function() {
    ctx.drawImage(ground, 0, 250);
  };
  ground.src = './assets/images/yoshi-ground.png';

  ctx.fillStyle = "#009dff";
  ctx.fillRect(0, 0, 400, 500);


});

//
// var canvas = document.getElementById('myCanvas');
// var context = canvas.getContext('2d');
// var imageObj = new Image();
//
// imageObj.onload = function() {
//   context.drawImage(imageObj, 69, 50);
// };
// imageObj.src = 'https://www.html5canvastutorials.com/demos/assets/darth-vader.jpg';
//
//
//
// document.addEventListener("DOMContentLoaded", start);
// function start() {
//
//     const canvasEl = document.getElementById("mycanvas");
//     canvasEl.width = 500;
//     canvasEl.height = 750;
//     const ctx = canvasEl.getContext("2d");
//     ctx.fillStyle = "#009dff";
//     const ground = new Image();
//     ground.src = '../assets/images/yoshi-ground.png';
//     ctx.drawImage('ground', 100, 150);
// }




// NOTHIN POPULATES -

// document.addEventListener("DOMContentLoaded", function(){
//
//   const canvasEl = document.getElementById("mycanvas");
//   const ctx = canvasEl.getContext("2d");
//
//   const ground = new Image();
//   ground.onload = function() {
//     ctx.drawImage(ground, 50, 50);
//   };
//   ground.src = '../assets/images/yoshi-ground.png';
//
// });
