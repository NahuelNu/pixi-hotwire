import { Container, Sprite } from "pixi.js";

export class BichoHat extends Container{
    constructor(){
        super();
        const bicho: Sprite = Sprite.from('Bicho');
	    bicho.scale.set(0.5);

	    const casco: Sprite = Sprite.from('Casco');
	    casco.scale.set(0.35);
	    casco.position.set(93,-4);
	    casco.rotation = -Math.PI/9;
        
        this.addChild(bicho);
	    this.addChild(casco);

		const alienV: Sprite = Sprite.from('alien1');

		this.addChild(alienV);
    }
}