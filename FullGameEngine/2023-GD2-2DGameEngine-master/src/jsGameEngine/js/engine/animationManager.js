import { Images } from '../engine/resources.js';

class AnimationManager {
    constructor(player) {
        this.player = player;
    }

    updateAnimation() {
        const {physics, renderer} = this.player;

        if (physics.velocity.y < -1) {
            renderer.image = Images.jump1;
        }
        else if(physics.velocity.y > 0){
            renderer.image = Images.jump2;
        }
        else if(physics.velocity.x == 0){
            renderer.image = Images.idle1;
        }
        else{
            renderer.image = Images.run1;
        }

    }
}

export default AnimationManager;