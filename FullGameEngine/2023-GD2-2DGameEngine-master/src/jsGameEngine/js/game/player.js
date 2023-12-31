// Importing necessary components and resources
import GameObject from '../engine/gameobject.js';
import Renderer from '../engine/renderer.js';
import Physics from '../engine/physics.js';
import Input from '../engine/input.js';
import { Images } from '../engine/resources.js';
import GameManger from '../engine/gameManager.js';
import Platform from './platform.js';
import Collectible from './collectible.js';
import ParticleSystem from '../engine/particleSystem.js';
import AudioManager from '../engine/audioManager.js';
//import AnimationManager from '../engine/animationManager.js';
import Camera from '../engine/camera.js';

// Defining a class Player that extends GameObject
class Player extends GameObject {
  // Constructor initializes the game object and add necessary components
  constructor(x, y) {
    super(x, y); // Call parent's constructor
    this.gameManager = new GameManger(this);
    this.renderer = new Renderer('blue', 50, 50, Images.idle1); // Add renderer
    this.addComponent(this.renderer);
    this.addComponent(new Physics({ x: 0, y: 0 }, { x: 0, y: 0 })); // Add physics
    this.addComponent(new Input()); // Add input for handling user input
    
    // Initialize all the player specific properties
    this.isJumpKeyDown = false; // Add this line
    this.audioManager = new AudioManager();
    this.direction = 1;
    this.lives = 3;
    this.score = 0;
    this.isOnPlatform = false;
    this.isJumping = false;
    this.jumpForce = 20;
    this.jumpTime = 0.3;
    this.jumpTimer = 0;
    this.isInvulnerable = false;
    this.isGamepadMovement = false;
    this.isGamepadJump = false;
    this.jumpCounter = 0;
    
    
    

  }

  // The update function runs every frame and contains game logic
  update(deltaTime) {
    const physics = this.getComponent(Physics); // Get physics component
    const input = this.getComponent(Input); // Get input component

    this.handleGamepadInput(input);
    
    // Handle player movement
    if (!this.isGamepadMovement && input.isKeyDown('ArrowRight')) {
      physics.velocity.x = 15;
      this.direction = -1;
    } else if (!this.isGamepadMovement && input.isKeyDown('ArrowLeft')) {
      physics.velocity.x = -15;
      this.direction = 1;
    } else if (!this.isGamepadMovement) {
      physics.velocity.x = 0;
    }

    if (!this.isGamepadJump && input.isKeyDown('ArrowUp')) {
      if (!this.isJumpKeyDown) {
        this.startJump();
      }
      this.isJumpKeyDown = true;
    } else {
      this.isJumpKeyDown = false;
    }

    if (this.isJumping) {
      this.updateJump(deltaTime);
    }

    // Handle collisions with collectibles
    const collectibles = this.game.gameObjects.filter((obj) => obj instanceof Collectible);
    for (const collectible of collectibles) {
      if (physics.isColliding(collectible.getComponent(Physics))) {
        this.collect(collectible);
        this.game.removeGameObject(collectible);
      }
    }
  
    // // Handle collisions with platforms
    // this.isOnPlatform = false;  // Reset this before checking collisions with platforms
    // const platforms = this.game.gameObjects.filter((obj) => obj instanceof Platform);
    // for (const platform of platforms) {
    //   if (physics.isColliding(platform.getComponent(Physics))) {
    //     if (!this.isJumping) {
    //       physics.velocity.y = 0;
    //       physics.acceleration.y = 0;
    //       this.y = platform.y - this.renderer.height;
    //       this.isOnPlatform = true;
    //     }
    //   }
    // }
  
    // Check if player has fallen off the bottom of the screen
    if (this.y > this.game.canvas.height) {
      this.lives--;
      this.gameManager.resetPlayerState();
    }

    // Check if player has no lives left
    if (this.lives <= 0) {
      location.reload();
    }

    // Check if player has collected all collectibles
    if (this.score >= 7) {
      console.log('You win!');
      this.audioManager.victorySound();
      location.reload();
    }

    //Controling the sprites currently showing for my player animation
   
    if(physics.velocity.y < -1){
      this.renderer.image = Images.jump1;
    }
    else if(physics.velocity.y > 0){
      this.renderer.image = Images.jump2;
    }
    else if(physics.velocity.x == 0){
      this.renderer.image = Images.idle1;
    }
    else{
      this.renderer.image = Images.run1;
    }
    
     super.update(deltaTime);
  }

  handleGamepadInput(input){
    const gamepad = input.getGamepad(); // Get the gamepad input
    const physics = this.getComponent(Physics); // Get physics component
    if (gamepad) {
      // Reset the gamepad flags
      this.isGamepadMovement = false;
      this.isGamepadJump = false;

      // Handle movement
      const horizontalAxis = gamepad.axes[0];
      // Move right
      if (horizontalAxis > 0.1) {
        this.isGamepadMovement = true;
        physics.velocity.x = 100;
        this.direction = -1;
      } 
      // Move left
      else if (horizontalAxis < -0.1) {
        this.isGamepadMovement = true;
        physics.velocity.x = -100;
        this.direction = 1;
      } 
      // Stop
      else {
        physics.velocity.x = 0;
      }
      
      // Handle jump, using gamepad button 0 (typically the 'A' button on most gamepads)
      if (input.isGamepadButtonDown(0) && this.isOnPlatform) {
        this.isGamepadJump = true;
        this.startJump();
      }
    }
  }

  startJump() {
    // Initiate a jump if the player is on a platform
    if (this.isOnPlatform) { 
      this.emitParticles('brown','brown',3,1,1);
      console.log("single jump");
      console.log("Your jump counter is "+this.jumpCounter);
      this.isJumping = true;
      this.jumpTimer = this.jumpTime;
      this.getComponent(Physics).velocity.y = -this.jumpForce;
      this.isOnPlatform = false;

      // play jump sound from the audioManager
      this.audioManager.jumpSound();

    }
    else if(!this.isOnPlatform && this.jumpCounter < 5){
      console.log("double jump");
      this.emitParticles('black','brown',5,1,1);
      this.isJumping = true;
      this.jumpTimer = this.jumpTime;
      this.getComponent(Physics).velocity.y = -this.jumpForce;
      this.isOnPlatform = false;
      this.jumpCounter++;
      // play jump sound from the audioManager
      this.audioManager.doublejumpSound();
    }
  }
  
  updateJump(deltaTime) {
    // Updates the jump progress over time
    this.jumpTimer -= deltaTime;
    if (this.jumpTimer <= 0 || this.getComponent(Physics).velocity.y > 0) {
      this.isJumping = false;
    }
  }

  

  collect(collectible) {
    // Handle collectible pickup
if(collectible.tag === 'collectible'){
    this.score += collectible.value;
    
    this.audioManager.ghostcollectibleSound();
    //Take in colour amount, lifeduration and emit duration
    this.emitParticles('black','white',5,2,2);
  }
else if(collectible.tag === 'heart'){
    // Handle collectible pickup
    this.lives += collectible.value;
    console.log(`Score: ${this.score}`);
    this.audioManager.ghostcollectibleSound();
    this.emitParticles('red','red',5,2,2);
  }

this.game.removeGameObject(collectible);
  }
  emitParticles(colour1,colour2,amount,lifeDuration,emitDuration) {
    // Create a particle system at the player's position when a collectible is collected
    //Colour, Particles emitted, Life duration, Emit duration
    const particleSystem = new ParticleSystem(this.x, this.y, [colour1, colour2],amount, lifeDuration, emitDuration);
    this.game.addGameObject(particleSystem);
  }

  resetGame() {
    this.gameManager.resetGame();
  }
}

export default Player;