let keyLeft = false;
let keyRight = false;

window.addEventListener("keydown", checkKeyPressed, false);
window.addEventListener("keyup", checkKeyLifted, false);

let music = new Audio("./assets/images/theme_song.mp3");
music.addEventListener("ended", function() {
  this.currentTime = 0;
  this.play();
}, false);
music.play();

function checkKeyPressed (event) {
    switch(event.keyCode) {
        case 37:
            keyLeft = true;
            break;
        case 39:
            keyRight = true;
            break;
        case 13:
            game.startGame();
            break;

    }
}

function checkKeyLifted (event) {
  keyLeft = false;
  keyRight = false;
}
