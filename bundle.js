/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Yoshi = __webpack_require__(1);
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


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var player = new (function() {
  var that = this;
  that.image = new Image();
  that.image.src = "./assets/images/YoshiSprites.png";
  that.width = 65;
  that.height = 78;

  that.X = 0;
  that.Y = 0;

  that.setPosition = function(x, y) {
    that.X = x;
    that.Y = y;
  };

  that.frames = 1;
      that.actualFrame = 0;
      that.interval = 0;

      that.isJumping = false;
      that.isFalling = false;

      that.jumpSpeed = 0;
      that.fallSpeed = 0;

      that.draw = function() {
          try {
              ctx.drawImage(
          		that.image,
          		0,
          		that.height * that.actualFrame,
          		that.width,
          		that.height,
          		that.X,
          		that.Y,
          		that.width,
          		that.height
      		);
          } catch (e) {
          }

          if (that.interval == 3 ) {
              if (that.actualFrame == that.frames) {
                  that.actualFrame = 0;
              } else {
                  that.actualFrame++;
              }
              that.interval = 0;
          }

      	that.interval++;
      }

      that.jump = function() {
          if (!that.isJumping && !that.isFalling) {
              that.fallSpeed = 0;
              that.isJumping = true;
              that.jumpSpeed = 17;
          }
      }

      that.checkJump = function() {
          if (that.Y > height*0.4) {
              that.setPosition(that.X, that.Y - that.jumpSpeed);
          } else {
              if (that.jumpSpeed > 10) points++; //here!

              MoveCircles(that.jumpSpeed * 0.5);

              platforms.forEach(function(platform, ind) {
                  platform.y += that.jumpSpeed;

                  if (platform.y > height) {
                      var type = ~~(Math.random() * 5);

                      if (type == 0)
                          type = 1;
                      else
                          type = 0;

                      platforms[ind] = new Platform(
                          Math.random() * (width - platformWidth),
                          platform.y - height,
                          type
                      );
                  }
              });
          }

          that.jumpSpeed--;

          if (that.jumpSpeed == 0) {
              that.isJumping = false;
              that.isFalling = true;
              that.fallSpeed = 1;
          }
      }

      that.checkFall = function() {
          if (that.Y < height - that.height) {
              that.setPosition(that.X, that.Y + that.fallSpeed);
              that.fallSpeed++;
          } else {
              if (points == 0) {
                  that.fallStop();
              } else {
                  GameOver();
              }
          }
      }

      that.fallStop = function() {
          that.isFalling = false;
          that.fallSpeed = 0;
          that.jump();
      }

      that.moveLeft = function() {
          if (that.X > 0) {
              that.setPosition(that.X - 5, that.Y);
          }
      }

      that.moveRight = function() {
          if (that.X + that.width < width) {
              that.setPosition(that.X + 5, that.Y);
          }
      }
  })();





// class Yoshi {
//   constructor() {
//     this.x = 10;
//     this.y = 400;
//     this.dx = 0;
//     this.dy = 0;
//     this.gravity = 0.4
//     this.isJumping = false;
//     this.isFalling = false;
//     this.jumpVel = 0;
//     this.fallVel = 0;
//     this.width = 42;
//     this.height = 57;
//     this.jumpSpeed = 0;
//     this.fallSpeed = 0;
//     this.isMoving = true;
//
//   }
//
//   setPos(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//
//   draw(ctx) {
//     let yoshi = new Image ();
//     yoshi.onload = function() {
//       ctx.drawImage(yoshi, 200, 448);
//     };
//     yoshi.src = "./assets/images/yoshi.png";
//
//   }
//
//   jump() {
//       if (!this.isJumping && !this.isFalling) {
//         this.fallVel = 0;
//         this.isJumping = true;
//         this.jumpVel = 18;
//       }
//     }
//
//   fallStop() {
//       this.isFalling = false;
//       this.fallVel = 0;
//       this.jump();
//     }
//
//   moveLeft() {
//     if (this.X > 0) {
//       this.setPos(this.X - 10, this.Y);
//     }
//   }
//
//   moveRight() {
//     if (this.X < width - this.width) {
//       this.setPos(this.X + 10, this.Y);
//     }
//   }
//
//   reset() {
//     this.isJumping = false;
//     this.isFalling = false;
//     this.jumpVel = 0;
//     this.fallVel = 0;
//   }
//
// }
//
//
// module.exports = Yoshi;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map