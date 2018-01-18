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

// let platform = new Image();
//   platform.src = './assets/images/board4-01.png';

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
  let yoshi = new Yoshi (ctx);
  yoshi.draw(ctx);

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


/***/ }),
/* 1 */
/***/ (function(module, exports) {

let Yoshi = function (game) {
  this.yoshiImg = new Image();
  this.yoshiImg.src = "./assets/images/yoshi.png";
  this.width = 42;
  this.height = 57;
  this.X = 0;
  this.Y = 0;
  this.isJumping = false;
  this.isFalling = false;
  this.jumpVel = 0;
  this.fallVel = 0;
};

Yoshi.prototype = {
    setPos: function (x, y) {
    this.X = x;
    this.Y = y;
  },
    draw(ctx) {
      console.log("yoshi drawing");
      let yoshi = new Image ();
        yoshi.onload = function() {
          ctx.drawImage(yoshi, 50, 50);
        yoshi.src = "./assets/images/yoshi.png";
      };
    }
};

module.exports = Yoshi;

// class Yoshi {
//   constructor(startingPos) {
//     this.x = startingPos[0];
//     this.y = startingPos[0];
//   }
//
//   collideWith(platform ) {
//
//   }
//
//   move( ){
//
//   }
//
//   draw(ctx) {
//     let yoshi = new Image ();
//     yoshi.onload = function() {
//       ctx.drawImage(yoshi, 0, 250);
//     yoshi.src = "./assets/images/yoshi.png";
//   };
//  }
// }
//
// module.exports = Yoshi;




// later for sprites
//  in <script></script> for index.html
//  var x = 0 ;
// var y = 0 ;
// var srcX;
// var srcY;
// var sheetWidth = 900;
// var sheetHeight = 280;
// var frameCount = 9;
// var cols = 8;
// var rows = 2;
// var width = sheetWidth/ frameCount
// var height = sheetHeight/ rows;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map