import {Images} from '../engine/resources.js';
import Renderer from "./renderer.js";
import Component from './component.js';

class animationManager extends Component{


constructor(){

    super();
    this.animations = []; 
    this.frame = 0;
    this.animationspeed = 6;
    this.currentAnimation = 0;
}

addAnimation(animation){
    this.animations.push(animation);
}

update(deltaTime){
    this.frame += deltaTime * this.animationspeed;
    if(this.frame >= this.animations[this.currentAnimation].length){
        this.frame = 0;
    }

    let renderer = this.gameObject.getComponent(Renderer);
    if (renderer){
    renderer.image = this.animations[this.currentAnimation][Math.floor(this.frame)];
}
}


}

export default animationManager;