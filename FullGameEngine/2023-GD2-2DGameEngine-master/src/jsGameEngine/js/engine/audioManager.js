import { AudioFiles } from './resources.js';
//Taking in audio from resources
class AudioManager {
    constructor() {
        this.jump = new Audio(AudioFiles.jump.src);
        this.ghostcollectible = new Audio(AudioFiles.ghostcollectible.src);
        this.doublejump = new Audio(AudioFiles.doublejump.src);
        this.victory = new Audio(AudioFiles.victory.src);
        this.damage = new Audio(AudioFiles.damage.src);
    }
//Methods to play audio
    jumpSound() {
        this.jump.play();
    }
    ghostcollectibleSound() {
        this.ghostcollectible.play();
    }
    doublejumpSound(){
        this.doublejump.play();
    }
    victorySound(){
        this.victory.play();
    }
    damageSound(){
        this.damage.play();
    }
}

export default AudioManager;
