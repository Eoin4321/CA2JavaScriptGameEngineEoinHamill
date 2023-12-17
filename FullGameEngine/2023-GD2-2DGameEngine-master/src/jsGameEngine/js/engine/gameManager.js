import Physics from '../engine/physics.js';

class gameManager{
    constructor(player){
        this.player = player;
    }

    //Method to reset game
    resetGame(){
        this.player.lives = 3;
        this.player.score = 0;
        this.resetPlayerState();
    }
    //Method to reset player state
    resetPlayerState(){
        this.player.x = this.player.game.canvas.width / 2;
        this.player.y = this.player.game.canvas.height / 2;
        this.player.getComponent(Physics).velocity = { x: 0, y: 0 };    
        this.player.getComponent(Physics).acceleration = { x: 0, y: 0 };
        this.player.direction = 1;
        this.player.isOnPlatform = false;
        this.player.isJumping = false;
        this.player.isDoubleJumping = false;
        this.player.jumpTimer = 0;
    }
}

export default gameManager;