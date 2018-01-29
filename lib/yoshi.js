class Yoshi {
  constructor(game) {
    this.game = game;
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
    this.reset = this.reset.bind(this);
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
        // jump.play();
        // setTimeout(()=> {
        //   jump.pause();
        //   jump.load();
        // }, 2000);
    }
  }

  checkJump() {
    if (this.Y > height*0.4) {
      this.setPosition(this.X, this.Y - this.jumpSpeed);
    } else {
      if (this.jumpSpeed > 10) this.game.points++;
      this.game.moveCircles(this.jumpSpeed * 0.5);
      let that = this;
      this.game.platforms.forEach((platform, idx) => {
        platform.y += that.jumpSpeed;
        if (platform.y > height) {
          let type = Math.floor((Math.random() * 5));
          // debugger
          if (type === 0) {
            type = 0} else {
              type = Math.floor(Math.random()*1.5);
              this.game.platforms[idx] = new Platform(
                  this.game,
                  Math.random() * (width - 57),
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
      if (this.game.points === 0) {
        this.fallStop();
      } else {
        this.game.gameOver();
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

  reset() {
    this.isJumping = false;
    this.isFalling = false;
    this.jumpSpeed = 0;
    this.fallSpeed = 0;
  }

}
