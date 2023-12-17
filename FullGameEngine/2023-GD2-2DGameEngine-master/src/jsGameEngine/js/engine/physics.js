// Import the required modules and classes.
import Component from './component.js';
import Renderer from './renderer.js';
import Platform from '../game/platform.js';
import Player from '../game/player.js';

// The Physics class extends Component and handles the physics behavior of a game object.
class Physics extends Component {
  // The constructor initializes the physics component with optional initial velocity, acceleration, and gravity.
  constructor(velocity = { x: 0, y: 0 }, acceleration = { x: 0, y: 0 }, gravity = { x: 100, y: 60 }) {
    super(); // Call the parent constructor.
    this.velocity = velocity; // Initialize the velocity.
    this.acceleration = acceleration; // Initialize the acceleration.
    this.gravity = gravity; // Initialize the gravity.
  }

  // The update method handles how the component's state changes over time.
  update(deltaTime) {

    // Update velocity based on acceleration and gravity.
    this.velocity.x += this.acceleration.x * deltaTime;
    this.velocity.y += (this.acceleration.y + this.gravity.y) * deltaTime;

    //Getting all the platforms in the game
    //Most of this code was assisted with by Copilot
    const platforms = this.gameObject.game.gameObjects.filter((obj) => obj instanceof Platform);
    // Run a for loop to check the horizontal position with
    for(let i = 0; i < Math.abs(this.velocity.x); i++) {
    this.gameObject.x += Math.sign(this.velocity.x);
    //for loop to check collision with each platform
    for (const platform of platforms) {
      if (this.isColliding(platform.getComponent(Physics))) {
        //Then if colliding move the player back to the previous position and stop horizontal movement
        this.gameObject.x -= Math.sign(this.velocity.x);
        this.velocity.x = 0;
        break;
      }
      }
     
    }
    this.gameObject.isOnPlatform = false;

    // Update vertical position while checking collision with platforms. Same as other loop but for vertical movement
    for(let i=0;i<Math.abs(this.velocity.y);i++)
    {
      this.gameObject.y += Math.sign(this.velocity.y);
      // Checking collisions with each platform
      for (const platform of platforms) {
        if (this.isColliding(platform.getComponent(Physics))) {
          // If colliding revert position and stop vertical movement
          this.gameObject.y -= Math.sign(this.velocity.y);
          this.velocity.y = 0;
          this.gameObject.isOnPlatform = true;
          this.gameObject.jumpCounter =5-this.gameObject.score;

          break;
      
        }
      }
    }
  }

  // The isColliding method checks if this game object is colliding with another game object.
  isColliding(otherPhysics) {
    // Get the bounding boxes of both game objects.
    const [left, right, top, bottom] = this.getBoundingBox();
    const [otherLeft, otherRight, otherTop, otherBottom] = otherPhysics.getBoundingBox();

    // Check if the bounding boxes overlap. If they do, return true. If not, return false.
    return left < otherRight && right > otherLeft && top < otherBottom && bottom > otherTop;
  }




  // The getBoundingBox method returns the bounding box of the game object in terms of its left, right, top, and bottom edges.
  getBoundingBox() {
    // Get the Renderer component of the game object to get its width and height.
    const renderer = this.gameObject.getComponent(Renderer);
    // Calculate the left, right, top, and bottom edges of the bounding box.
    const left = this.gameObject.x;
    const right = this.gameObject.x + renderer.width;
    const top = this.gameObject.y;
    const bottom = this.gameObject.y + renderer.height;

    // Return the bounding box.
    return [left, right, top, bottom];
  }
}

// The Physics class is then exported as the default export of this module.
export default Physics;
