let Platform = function(x, y, type) {
    let that = this;

    that.firstColor = 'rgba(99, 177, 79, 1)';
    that.secondColor = '#EEEE00';

    that.onCollide = function() {
        yoshi.fallStop();
    };

    if (type === 1) {
        that.firstColor = '#e71a5b';
        that.secondColor = '#698B22';

        that.onCollide = function() {
            yoshi.fallStop();
            yoshi.jumpSpeed = 50;
        };
    }

    that.x = ~~x;
    that.y = y;
    that.type = type;

    that.isMoving = ~~(Math.random() * 2);
    that.direction= ~~(Math.random() * 2) ? -1 : 1;

    // that.draw = function() {
    //   let platform = new Image();
    //   platform.src = './assets/images/platform.png';
    //   ctx.drawImage(platform, Math.random() * 450, Math.random() * 450);
    // };

    that.draw = function() {
        if (type === 1) {
          ctx.fillStyle = 'rgba(231, 26, 91, 1)';
        } else {
          ctx.fillStyle = 'rgba(99, 177, 79, 1)';
        }
        ctx.fillRect(
            that.x,
            that.y,
            platformWidth,
            platformHeight
        );


    };


    return that;
};
// class Platform {
//   constructor(image) {
//
//   }
//
//   draw(ctx) {
//     let image = new Image();
//     image.onload = function() {
//       ctx.drawImage(image, Math.random() * 350, Math.random() * 350);
//     };
//     image.src = './assets/images/board4-01.png';
//   }
//
// }
//
// module.exports = Platform;
