// Import necessary classes and resources
import Game from '../engine/game.js';
import Player from './player.js';
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
      new Platform(2 * (200 + 1040), this.canvas.height - 1250, 50, 300, 'gray', Images.wall1),

      new Platform(2 * (200 + 340), this.canvas.height - 750, 50, 300, 'gray', Images.wall1),
      new Platform(2 * (200 + 500), this.canvas.height - 450, 340, 100, 'gray', Images.floor1),
      new Platform(2 * (200 + 650), this.canvas.height - 450, 340, 100, 'gray', Images.floor1),
      new Platform(2 * (200 + 900), this.canvas.height - 450, 340, 100, 'gray', Images.floor1),
      //SECOND FLOOR
      new Platform(2 * (200 + 170), this.canvas.height - 750, 340, 100, 'gray', Images.floor1),
      new Platform(2 * (200 + -400), this.canvas.height - 750, 340, 100, 'gray', Images.floor1),
      new Platform(2 * (200 + -400), this.canvas.height - 1050, 50, 300, 'gray', Images.wall1),
      new Platform(2 * (200 + -400), this.canvas.height - 1300, 50, 300, 'gray', Images.wall1),
      new Platform(2 * (200 + -400), this.canvas.height - 1800, 50, 300, 'gray', Images.wall1),
      new Platform(2 * (200 + -400), this.canvas.height - 2500, 50, 300, 'gray', Images.wall1),
      new Platform(2 * (200 + -400), this.canvas.height - 2750, 50, 300, 'gray', Images.wall1),
      new Platform(2 * (200 + +1240), this.canvas.height - 2500, 50, 300, 'gray', Images.wall1),
      new Platform(2 * (200 + +1240), this.canvas.height - 2000, 50, 300, 'gray', Images.wall1),
      new Platform(2 * (200 + +1240), this.canvas.height - 1800, 50, 300, 'gray', Images.wall1),
      new Platform(2 * (200 + +1240), this.canvas.height - 2300, 50, 300, 'gray', Images.wall1),
      new Platform(2 * (200 + +1240), this.canvas.height - 2700, 50, 300, 'gray', Images.wall1),
      new Platform(2 * (200 + +1240), this.canvas.height - 2900, 50, 300, 'gray', Images.wall1),
      new Platform(2 * (200 + +2000), this.canvas.height - 2900, 50, 300, 'gray', Images.wall1),
      new Platform(2 * (200 + +2000), this.canvas.height - 2700, 50, 300, 'gray', Images.wall1),
      new Platform(2 * (200 + +2000), this.canvas.height - 2500, 50, 300, 'gray', Images.wall1),
      new Platform(2 * (200 + +2000), this.canvas.height - 2300, 50, 300, 'gray', Images.wall1),
      new Platform(2 * (200 + +2000), this.canvas.height - 2100, 50, 300, 'gray', Images.wall1),
      new Platform(2 * (200 + +2000), this.canvas.height - 1900, 50, 300, 'gray', Images.wall1),
      new Platform(2 * (200 + +2000), this.canvas.height - 1600, 50, 300, 'gray', Images.wall1),
      //Outside platforms
      new Platform(2 * (200 + +2025), this.canvas.height - 1600, 50, 300, 'gray', Images.wall1),
      new Platform(2 * (200 + +2025), this.canvas.height - 2500, 50, 300, 'gray', Images.wall1),
      new Platform(2 * (200 + -100), this.canvas.height - 1550, 340, 100, 'gray', Images.floor1),
      new Platform(2 * (200 + +1500), this.canvas.height - 1800, 340, 100, 'gray', Images.floor1),
      new Platform(2 * (200 + -1040), this.canvas.height - 1800, 340, 100, 'gray', Images.floor1),
      new Platform(2 * (200 + +900), this.canvas.height - 1800, 340, 100, 'gray', Images.floor1),
    ];
    for (const platform of platforms) {
      this.addGameObject(platform);
    }

    // Create enemies and add them to the game
    //this.addGameObject(new Enemy(50, this.canvas.height - 90));
    //this.addGameObject(new Enemy(platformWidth + gap + 50, this.canvas.height - 90));
    //this.addGameObject(new Enemy(2 * (platformWidth + gap) + 50, this.canvas.height - 90));

    // Create collectibles and add them to the game
    //this.addGameObject(new Collectible(250, this.canvas.height - 100, 50, 50, 'gold' , Images.ghost2,'collectible'));
    //this.addGameObject(new Collectible(450, this.canvas.height - 100, 50, 50, 'gold',Images.ghost1,'collectible'));
    this.addGameObject(new Collectible(350, this.canvas.height - 1900, 50, 50, 'gold',Images.heart,'heart'));
    //this.addGameObject(new Collectible(650, this.canvas.height - 100, 50, 50,'gold', Images.heart,'heart'));
    this.addGameObject(new Collectible(-1500, this.canvas.height - 1900, 50, 50, 'gold',Images.ghost1,'collectible'));
    this.addGameObject(new Collectible(+2350, this.canvas.height - 2100, 50, 50, 'gold',Images.ghost1,'collectible'));
    this.addGameObject(new Collectible(+3550, this.canvas.height - 2000, 50, 50, 'gold',Images.ghost1,'collectible'));
    
    //Making level
    //GHOST 1
    this.addGameObject(new Collectible(2350, this.canvas.height - 600, 50, 50, 'gold',Images.ghost1,'collectible'));
    //GHOST 2
    this.addGameObject(new Collectible(-200, this.canvas.height - 1000, 50, 50, 'gold',Images.ghost1,'collectible'));
    //GHOST 7
    this.addGameObject(new Collectible(+2000, this.canvas.height - 3000, 50, 50, 'gold',Images.ghost1,'collectible'));
    this.addGameObject(new Collectible(-400, this.canvas.height - 3000, 50, 50, 'gold',Images.ghost1,'collectible'));
  }
  
}

// Export the Level class as the default export of this module
export default Level;
