let mycanvas = document.getElementById('mycanvas');
let ctx = mycanvas.getContext('2d');

let width = 400;
let height = 500;
mycanvas.width  = width;
mycanvas.height = height;
let platformWidth = 57;
let platformHeight = 20;

class Game {
  constructor() {
    this.numPlatforms = 7;
    this.platforms = [];
    this.points = 0;
    this.state = true;
    this.clouds = [];
    this.numClouds = 15;
    this.numCircles = 10;
    this.circles = [];
    this.yoshi = new Yoshi(this);
  }

  cover() {
    let cover = new Image();
    cover.onload = function() {
      ctx.drawImage(cover, 0, 0);
    };
    cover.src = './assets/images/yoshi-cover5.png';
  }

  clear() {
    ctx.fillStyle = '#009dff';
    ctx.beginPath();
    ctx.rect(0, 0, width, height);
    ctx.closePath();
    ctx.fill();
  }

  createClouds() {
    for (let i=0; i < this.numClouds; i++) {
      this.clouds.push(new Cloud());
    }
  }

  renderClouds() {
    for (let i=0; i < this.numClouds; i++) {
      ctx.drawImage(this.clouds[i].image, 0, 0, 100, 100,
        this.clouds[i].X, this.clouds[i].Y, 100, 100);
    }
  }

  updateClouds (dX, dY) {
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

  makeCircles() {
    for (let i=0; i < this.numCircles; i++) {
      this.circles.push([
        Math.random() * width,
        Math.random() * height,
        Math.random() * 100,
        Math.random() / 1
      ]);
    }
  }

  drawCircles() {
    for (let i = 0; i < this.numCircles; i++) {
      ctx.fillStyle = 'rgba(255, 255, 255, ' + this.circles[i][3] + ')';
      ctx.beginPath();
      ctx.arc(
          this.circles[i][0],
          this.circles[i][1],
          this.circles[i][2],
          0,
          Math.PI * 2,
          true
      );
      ctx.closePath();
      ctx.fill();
    }
  }

  moveCircles(dY) {
    for (let i=0; i < this.numCircles; i++) {
      if (this.circles[i][1] - this.circles[i][2] > height) {
        this.circles[i][0] = Math.random() * width;
        this.circles[i][1] = 0 - this.circles[i][2];
        this.circles[i][2] = Math.random() * 100;
        this.circles[i][3] = Math.random() / 2;
      } else {
        this.circles[i][1] += dY;
      }
    }
  }

  checkMove() {
    if (keyLeft) {
      this.yoshi.image.src = "./assets/images/YoshiLeftSprites.png";
      this.yoshi.moveLeft();
    } else if (keyRight) {
      this.yoshi.image.src = "./assets/images/YoshiSprites.png";
      this.yoshi.moveRight();
    }
  }

  checkCollision() {
    this.platforms.forEach((platform, idx) => {
      if ((this.yoshi.isFalling) &&
          (this.yoshi.X < platform.x + 57) && //this.platformWidth = 57
          (this.yoshi.X + this.yoshi.width > platform.x) &&
          (this.yoshi.Y + this.yoshi.height > platform.y) &&
          (this.yoshi.Y + this.yoshi.height < platform.y + 20) //this.platformHeight = 20
    ) {
        platform.onCollide();
      }
    });
  }

  generatePlatforms() {
          debugger
    let position = 0;
    let type;
    for (let i = 0; i < this.numPlatforms; i++) {
      type = Math.floor((Math.random()*3));
      if (type === 0) {
        type = 1;
      } else {
        type = 0;
      }
      
      if (i < 1) {
        this.platforms[i] = new Platform(
          game,
          Math.random()*(width - 57),
          this.yoshi.Y + 50 + 50*Math.random(),
          type
        );
      } else if (i < 2) {
        this.platforms[i] = new Platform(
          game,
          Math.random()*(width - 57),
          this.yoshi.Y + 120 + 50*Math.random(),
          type
        );
      } else if (i < 3) {
        this.platforms[i] = new Platform(
          game,
          Math.random()*(width - 57),
          this.yoshi.Y + 190 + 50*Math.random(),
          type
        );
      } else if (i < 4) {
        this.platforms[i] = new Platform(
          game,
          Math.random()*(width - 57),
          this.yoshi.Y + 260 + 50*Math.random(),
          type
        );
      } else if (i < 5) {
        this.platforms[i] = new Platform(
          game,
          Math.random()*(width - 57),
          this.yoshi.Y + 330 + 50*Math.random(),
          type
        );
      } else if (i < 6) {
        this.platforms[i] = new Platform(
          game,
          Math.random()*(width - 57),
          this.yoshi.Y + 400 + 50*Math.random(),
          type
        );
      } else if (i < 7) {
        this.platforms[i] = new Platform(
          game,
          Math.random()*(width - 57),
          this.yoshi.Y + 470 + 50*Math.random(),
          type
        );
      } else {
        this.platforms[i] = new Platform(
          game,
          Math.random()*(width - 57),
          this.yoshi.Y + 530 + 50*Math.random(),
          type
        );
      }

   }
 }


  //     else if (i === 2) {
  //       this.platforms[i] = new Platform (game,
  //         172,
  //         500,
  //         type)
  //     } else if (i === 3) {
  //       this.platforms[i] = new Platform (game,
  //         172,
  //         430,
  //         type)
  //     } else if (i === 4) {
  //       this.platforms[i] = new Platform (game,
  //         172,
  //         360,
  //         type)
  //     } else if (i === 5) {
  //         this.platforms[i] = new Platform (game,
  //         172,
  //         290,
  //         type)
  //     } else if (i === 6) {
  //       this.platforms[i] = new Platform (game,
  //         172,
  //         220,
  //         type)
  //     } else {
  //       this.platforms[i] = new Platform (game,
  //         172,
  //         150,
  //         type)
  //     }
  //     if (position < height - 20) {
  //       position += Math.floor((height / this.numPlatforms));
  //     }
  //   }
  // }

  // generatePlatforms() {
  //   let position = 0;
  //   let type;
  //   for (let i = 0; i < this.numPlatforms; i++) {
  //     type = Math.floor((Math.random()*3));
  //     if (type === 0) {
  //       type = 1;
  //     } else {
  //       type = 0;
  //     }
  //     this.platforms[i] = new Platform (game,
  //       Math.random()*(width - 57),
  //       Math.random()*(height - 20),
  //       type,
  //     );
  //     if (position < height - 20) {
  //       position += Math.floor((height / this.numPlatforms));
  //     }
  //   }
  // }

  paintPoints() {
    ctx.fillStyle = "White";
    ctx.font = "12pt Helvetica";
    ctx.fillText("POINTS:" + this.points, 8, height-485);
  }

  startGame() {
    this.yoshi.reset();
    this.points = 0;
    this.state = true;
    this.generatePlatforms();
    this.yoshi.setPosition(
      Math.floor(((width - this.yoshi.width) / 2)),
      Math.floor(((height - this.yoshi.height) / 2))
    );
    this.yoshi.jump();
    this.gameLoop();
  }

  gameLoop() {
    this.checkMove();
    this.clear();
    this.makeCircles();
    this.moveCircles(6);
    this.drawCircles();
    this.createClouds();
    this.renderClouds();
    this.updateClouds(1, 1.5);
    this.checkCollision();
    if (this.yoshi.isJumping) this.yoshi.checkJump();
    if (this.yoshi.isFalling) this.yoshi.checkFall();
    this.yoshi.draw( );
    this.platforms.forEach((platform, idx) => {
        if (platform.isMoving) {
            if (platform.x < 0) {
                platform.direction = 1;
            } else if (platform.x > width - platformWidth) {
                platform.direction = -1;
            }
            platform.x += platform.direction * (idx / 2) * Math.floor((this.points / 80));
        }
        platform.draw();
    });
    this.paintPoints();

    if (this.state) {
        this.gameLoopId = setTimeout(this.gameLoop.bind(this), 1000 / 40);
    }
  }

  gameOver() {
    this.state = false;
    clearTimeout(this.gameLoopId);
    setTimeout(() => {
      music.pause();
      this.clear();
      let gameover = new Image();
      gameover.onload = function() {
        ctx.drawImage(gameover, width / 2 - 140, height / 2 - 80);
      };
      gameover.src = './assets/images/gameover2.png';
      ctx.fillStyle = "White";
      ctx.font = "13pt Helvetica";
      ctx.fillText("GAME OVER", width / 2 - 65, height / 2 - 50);
      ctx.fillText("YOUR SCORE: " + this.points, width / 2 - 65, height / 2 - 30);
      ctx.fillText("PRESS ENTER TO PLAY AGAIN" , width / 2 - 130, height / 2 +15);
    }, 100);
      gameover.play();
      setTimeout(()=> {
        gameover.pause();
        gameover.load()
      }, 8000);
      music.load();
  }
}


let game = new Game();
game.cover();
