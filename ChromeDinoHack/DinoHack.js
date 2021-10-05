var currentGame = this.Runner.instance_;
var UPDATE_FREQUENCY_MS = 5 // Milliseconds

function updDino(){
    var currentObstacles = Game.horizon.obstacles;
    var currentDino = currentGame.tRex;
    var OriginalSpeed = 6;

    if (currentDino.ducking){
        currentDino.setDuck(true);
    }
    if (currentGame.crashed){
        alert("Game Over!");
    }

    if (currentObstacles.length > 0){
        var action = "Jump";
        var obstacle = currentObstacles[0];
        action = "Jump";

        if (obstacle.xPos <= ((75 / OriginalSpeed) * currentGame.currentSpeed)){
            currentDino.startJump(currentGame.currentSpeed);
        }
    }
    startGame();
}

function startGame(){
    if (!currentGame.crashed){
        setTimeout(updDino, UPDATE_FREQUENCY_MS)
    }
}

alert("Hack Injected!")
startGame();
