class Player {
  constructor() {
    this.image = new Image();
    this.image.src = "./assets/images/YoshiSprites.png";
    this.width = 65;
    this.height = 78;
    this.X = 0;
    this.Y = 0;
    this.frames = 1;
    this.actualFrame = 0;
    this.interval = 0;

    this.isJumping = false;
    this.isFalling = false;

    this.jumpSpeed = 0;
    this.fallSpeed = 0;
  }

  setPosition(x, y) {
    this.X = x;
    this.Y = y;
  }

  draw() {
    try {
        ctx.drawImage(
        this.image,
        0,
        this.height * this.actualFrame,
        this.width,
        this.height,
        this.X,
        this.Y,
        this.width,
        this.height
      );
      } catch (e) {
    }

    if (this.interval === 3 ) {
        if (this.actualFrame === this.frames) {
            this.actualFrame = 0;
        } else {
            this.actualFrame++;
        }
        this.interval = 0;
    }

  this.interval++;
  }

  jump() {
    if (!this.isJumping && !this.isFalling) {
        this.fallSpeed = 0;
        this.isJumping = true;
        this.jumpSpeed = 17;
    }
  }

  checkJump() {
    if (this.Y > height*0.4) {
      this.setPosition(this.X, this.Y - this.jumpSpeed);
    } else {
      if (this.jumpSpeed > 10) points++;
      MoveCircles(this.jumpSpeed*0.5);
      platforms.forEach(function(platform, idx) {
        platform.y += this.jumpSpeed;

        if (platform.y > height) {
          let type = ~~(Math.random() * 5);
          if (type === 0) {
            type = 1} else {
              type = 0;
              platforms[idx] = new Platform(
                  Math.random() * (width - platformWidth),
                  platform.y - height,
                  type
              );
            }
          }
      });
    }
    this.jumpSpeed--;

    if (this.jumpSpeed === 0) {
        this.isJumping = false;
        this.isFalling = true;
        this.fallSpeed = 1;
    }
  }

  checkFall() {
    if (this.Y < height - this.height) {
      this.setPosition(this.X, this.Y + this.fallSpeed);
      this.fallSpeed++;
    } else {
      if (points === 0) {
        this.fallStop();
      } else {
        GameOver();
      }
    }
  }

  fallStop() {
    this.isFalling = false;
    this.fallSpeed = 0;
    this.jump();
  }

  moveLeft() {
    if (this.X > 0) {
      this.setPosition(this.X - 5, this.Y);
    }
  }

  moveRight() {
    if (this.X + this.width < width) {
      this.setPosition(this.X + 5, this.Y);
    }
  }

}



let player = new (function() {
  let that = this;
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
