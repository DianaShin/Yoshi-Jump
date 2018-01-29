let keyLeft = false;
let keyRight = false;

window.addEventListener("keydown", checkKeyPressed, false);
window.addEventListener("keyup", checkKeyLifted, false);

let music = new Audio("./assets/sounds/theme_song.mp3");
  music.addEventListener("ended", function() {
    this.currentTime = 0;
    this.play();
  }, false);

music.play();

let gameover = new Audio("./assets/sounds/yoshi-gameover.mp3");
  gameover.addEventListener("ended", function() {
    this.currentTime = 0;
    this.play();
  }, false);

let highjump = new Audio("./assets/sounds/highjump.mp3");

  highjump.addEventListener("ended", function() {
    this.currentTime = 0;
    this.play();
    this.pause();
    this.load();
  }, false);

let jump = new Audio("./assets/sounds/jump.mp3");
  jump.addEventListener("ended", function() {
    this.currentTime = 0;
    this.play();
    this.pause();
    this.load();
  }, false);

function checkKeyPressed (event) {
    switch(event.keyCode) {
        case 37:
            keyLeft = true;
            break;
        case 39:
            keyRight = true;
            break;
        case 13:
            music.play();
            game.startGame();
            break;
        case 77:
        if (music.paused) {
          music.play();
        } else {
          music.pause();
        }
    }
}

function checkKeyLifted (event) {
  keyLeft = false;
  keyRight = false;
}
