// Create an Images object to hold the Image instances for the player 


const Images = {
  player: new Image(), // The Image instance for the player.
  player2: new Image(), // The Image instance for the player frame 2.

  player3: new Image(), // The Image instance for the player frame 2.
  idle1: new Image(), // 
  idle2: new Image(), // 
  idle3: new Image(), // 
  idle4: new Image(), // 
  run1: new Image(), //
  run2: new Image(), //
  run3: new Image(), //
  run4: new Image(), //
  run5: new Image(), //
  run6: new Image(), //
  run7: new Image(), //
  run8: new Image(), //
  jump1: new Image(), //
  jump2: new Image(), //
  jump3: new Image(), //
  floor1: new Image(), //
  wall1: new Image(), //
  heart: new Image(), //
  ghost1: new Image(), //
  ghost2: new Image(), //
  
};

// Create an AudioFiles object to hold the file paths of the audio resources.
const AudioFiles = {
  jump: new Audio(), // The file path of the jump sound.
  ghostcollectible: new Audio(), // The file path of the collect sound.
  doublejump: new Audio(),
  victory: new Audio(),
  damage: new Audio(),
  // Add more audio file paths as needed
};

//Set the source of the jump sound.C:\Users\kay\Desktop\!!!!!!CA2JavaScript\CA2JavaScriptGameEngineEoinHamill\FullGameEngine\2023-GD2-2DGameEngine-master\src\jsGameEngine\resources\images\audio
AudioFiles.jump.src = './resources/images/audio/jump.mp3'; // Update the audio path

//Set the source of the collect sound.
AudioFiles.ghostcollectible.src = './resources/images/audio/ghostcollectible.mp3'; // Update the audio path
AudioFiles.doublejump.src = './resources/images/audio/doublejump.mp3';
AudioFiles.victory.src = './resources/images/audio/victory.mp3';
AudioFiles.damage.src = './resources/images/audio/damage.mp3';

// Set the source of the player image.
Images.player.src = './resources/images/player/player.jpg'; // Update the image path
Images.player2.src = './resources/images/player/player.png'; // Update the image path
Images.player3.src = './resources/images/player/maddad.png'; // Update the image path
Images.idle1.src = './resources/images/player/idle/idle1.png'; // Update the image path
Images.idle2.src = './resources/images/player/idle/idle2.png'; // Update the image path
Images.idle3.src = './resources/images/player/idle/idle3.png'; // Update the image path
Images.idle4.src = './resources/images/player/idle/idle4.png'; // Update the image path
Images.run1.src = './resources/images/player/run/run1.png'; // Update the image path
Images.run2.src = './resources/images/player/run/run2.png'; // Update the image path
Images.run3.src = './resources/images/player/run/run3.png'; // Update the image path
Images.run4.src = './resources/images/player/run/run4.png'; // Update the image path
Images.run5.src = './resources/images/player/run/run5.png'; // Update the image path
Images.run6.src = './resources/images/player/run/run6.png'; // Update the image path
Images.run7.src = './resources/images/player/run/run7.png'; // Update the image path
Images.run8.src = './resources/images/player/run/run8.png'; // Update the image path
Images.jump1.src = './resources/images/player/jump/jump1.png'; // Update the image path
Images.jump2.src = './resources/images/player/jump/jump2.png'; // Update the image path
Images.jump3.src = './resources/images/player/jump/jump3.png'; // Update the image path
Images.floor1.src = './resources/images/tiles/floor.png'; // Update the image path
Images.wall1.src = './resources/images/tiles/wall.png'; // Update the image path
Images.heart.src = './resources/images/heart/heart.png'; // Update the image path
Images.ghost1.src = './resources/images/ghost/ghost1.png'; // Update the image path
Images.ghost2.src = './resources/images/ghost/ghost2.png'; // Update the image path


// Export the Images and AudioFiles objects so they can be imported and used in other modules.
export { Images, AudioFiles };
