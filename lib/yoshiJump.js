let keyLeft = false;
let keyRight = false;

window.addEventListener("keydown", checkKeyPressed, false);
window.addEventListener("keyup", checkKeyLifted, false);

// let yoshiJump = new Game();


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
