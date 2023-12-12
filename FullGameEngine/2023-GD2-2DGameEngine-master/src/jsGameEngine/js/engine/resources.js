// Create an Images object to hold the Image instances for the player and the enemy.
const Images = {
  player: new Image(), // The Image instance for the player.
  enemy: new Image(), // The Image instance for the enemy.
};

// Create an AudioFiles object to hold the file paths of the audio resources.
const AudioFiles = {
  jump: new Audio(), // The file path of the jump sound.
  collect: new Audio(), // The file path of the collect sound.
  // Add more audio file paths as needed
};

//Set the source of the jump sound.C:\Users\kay\Desktop\!!!!!!CA2JavaScript\CA2JavaScriptGameEngineEoinHamill\FullGameEngine\2023-GD2-2DGameEngine-master\src\jsGameEngine\resources\images\audio
AudioFiles.jump.src = './resources/images/audio/jump.mp3'; // Update the audio path

//Set the source of the collect sound.
AudioFiles.collect.src = './resources/images/audio/collect.mp3'; // Update the audio path

// Set the source of the player image.
Images.player.src = './resources/images/player/player.png'; // Update the image path

// Set the source of the enemy image.
Images.enemy.src = './resources/images/enemy/enemy.png'; // Update the image path

// Export the Images and AudioFiles objects so they can be imported and used in other modules.
export { Images, AudioFiles };
