import { Container, Sprite } from "pixi.js";

export class SceneLevelComplete extends Container{

    constructor(){
        super();

        const fondo = Sprite.from('FondoBlue');
        fondo.scale.set(0.25);
        this.addChild(fondo);

        const stars = new Stars();
        //let margenHor= (fondo.width-stars.width)/2;
        stars.position.set(85,100);
        console.log(fondo.width,stars.width,stars.height);
        this.addChild(stars);

        

    }
}

class Stars extends Container{
    constructor(){
        super();
        const star = Sprite.from('Star');
        const star2 = Sprite.from('Star');
        const star3 = Sprite.from('Star');

        star.anchor.set(0.5);
        star2.anchor.set(0.5);
        star3.anchor.set(0.5);
        star.scale.set(0.25);
        star2.scale.set(0.3);
        star3.scale.set(0.25);
        star2.position.set(100,-20);
        star3.position.set(200,0);
        this.addChild(star);
        this.addChild(star2);
        this.addChild(star3);
    }
}