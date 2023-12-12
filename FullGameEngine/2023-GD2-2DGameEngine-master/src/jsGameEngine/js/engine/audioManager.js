import { AudioFiles } from './resources.js';


class AudioManager {
    constructor() {
        this.jump = new Audio(AudioFiles.jump.src);
    }
    jumpSound() {
        this.jump.play();
    }
}

export default AudioManager;
