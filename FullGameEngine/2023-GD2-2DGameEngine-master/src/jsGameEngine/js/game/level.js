// Import necessary classes and resources
import Game from '../engine/game.js';
import Player from './player.js';
import Enemy from './enemy.js';
import PlayerUI from './playerUI.js';
import Platform from './platform.js';
import Collectible from './collectible.js';
import {Images} from '../engine/resources.js';

// Define a class Level that extends the Game class from the engine
class Level extends Game {
  
  // Define the constructor for this class, which takes one argument for the canvas ID
  constructor(canvasId) {
    // Call the constructor of the superclass (Game) with the canvas ID
    super(canvasId);
    
    // Create a player object and add it to the game
    const player = new Player(this.canvas.width / 2 - 25, this.canvas.height / 2 - 25);
    this.addGameObject(player);
    
    // Add the player UI object to the game
    this.addGameObject(new PlayerUI(10, 10));

    // Set the game's camera target to the player
    this.camera.target = player;

    // Define the platform's width and the gap between platforms
    const platformWidth = 500;
    const gap = 100;

    // Create platforms and add them to the game
    const platforms = [
      //horizontal, vertical, width , height, colour, sprite.
      //Spawn platform
      new Platform(2 * (200 + 340), this.canvas.height - 450, 340, 100, 'gray', Images.floor1),
      //right wall
      new Platform(2 * (200 + 480), this.canvas.height - 750, 50, 100,'gray', Images.wall1),
      //left wall
      new Platform(2 * (200 + 1040), this.canvas.height - 750, 50, 300, 'gray', Images.wall1),
      new Platform(2 * (200 + 1040), this.canvas.height - 1000, 50, 300, 'gray', Images.wall1),
      
      new Platform(2 * (200 + 340), this.canvas.height - 750, 50, 300, 'gray', Images.wall1),
      new Platform(2 * (200 + 500), this.canvas.height - 450, 340, 100, 'gray', Images.floor1),
      new Platform(2 * (200 + 650), this.canvas.height - 450, 340, 100, 'gray', Images.floor1),
      new Platform(2 * (200 + 900), this.canvas.height - 450, 340, 100, 'gray', Images.floor1),
      //SECOND FLOOR
      new Platform(2 * (200 + 170), this.canvas.height - 750, 340, 100, 'gray', Images.floor1),
      new Platform(2 * (200 + -400), this.canvas.height - 750, 340, 100, 'gray', Images.floor1),
      
    ];
    for (const platform of platforms) {
      this.addGameObject(platform);
    }

    // Create enemies and add them to the game
    this.addGameObject(new Enemy(50, this.canvas.height - 90));
    this.addGameObject(new Enemy(platformWidth + gap + 50, this.canvas.height - 90));
    this.addGameObject(new Enemy(2 * (platformWidth + gap) + 50, this.canvas.height - 90));

    // Create collectibles and add them to the game
    this.addGameObject(new Collectible(250, this.canvas.height - 100, 50, 50, 'gold' , Images.ghost2,'collectible'));
    this.addGameObject(new Collectible(450, this.canvas.height - 100, 50, 50, 'gold',Images.ghost1,'collectible'));
    this.addGameObject(new Collectible(650, this.canvas.height - 100, 50, 50,'gold', Images.heart,'heart'));
    //Making level
    this.addGameObject(new Collectible(2350, this.canvas.height - 600, 50, 50, 'gold',Images.ghost1,'collectible'));
  }
  
}

// Export the Level class as the default export of this module
export default Level;
