class Yoshi {
  constructor() {
    this.X = 0;
    this.Y = 0;
    this.isJumping = false;
    this.isFalling = false;
    this.jumpVel = 0;
    this.fallVel = 0;
  }


  collideWith(platform) {

  }

  moveLeft() {

  }

  moveRight() {

  }

  draw(ctx) {
    let yoshi = new Image ();
    console.log("yoshi drawing");
    yoshi.onload = function() {
      ctx.drawImage(yoshi, 0, 250);
    };
    yoshi.src = "./assets/images/yoshi.png";
  }

}


module.exports = Yoshi;




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
