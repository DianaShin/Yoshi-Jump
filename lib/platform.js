let Platform = function (game, x, y, type) {
  this.game = game;
  this.x = Math.floor(x);
  this.y = y;
  this.type = type;
  this.isMoving = Math.floor((Math.random() * 2));
  this.direction = Math.floor((Math.random() * 2)) ? -1 : 1;
  this.platformWidth = 57;
  this.platformHeight = 20;
};

Platform.prototype.onCollide = function() {
  if (this.type === 1) {
    highjump.play();
    setTimeout(()=> {
      highjump.pause();
      highjump.load();
    }, 21500);
    this.game.yoshi.fallStop();
    this.game.yoshi.jumpSpeed = 50;
  }
  this.game.yoshi.fallStop();
};

Platform.prototype.draw = function() {
  if (this.type === 1) {
    ctx.fillStyle = 'rgba(231, 26, 91, 1)';
  } else {
    ctx.fillStyle = 'rgba(99, 177, 79, 1)';
  }
  ctx.fillRect(
      this.x,
      this.y,
      this.platformWidth,
      this.platformHeight
  );
  return this;
};
