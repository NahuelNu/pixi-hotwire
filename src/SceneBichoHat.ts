import { Container } from "pixi.js";
import { BichoHat } from "./BichoHat";

export class SceneBichoHat extends Container{
    constructor(){
        super();
        const bichoandcasco: BichoHat = new BichoHat();
	    bichoandcasco.position.set(192,92);
        this.addChild(bichoandcasco);
    }
}