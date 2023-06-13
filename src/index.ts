import { Application, Assets } from 'pixi.js'
import { assets } from './assets';
import { BichoHat } from './BichoHat';

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});


Assets.addBundle('myAssets',assets);
Assets.loadBundle('myAssets').then(()=>{

	

	const bichoandcasco: BichoHat = new BichoHat();
	bichoandcasco.position.set(192,92);

	app.stage.addChild(bichoandcasco);
	
})

addEventListener("resize",()=>{
	let scaleX = window.innerWidth /app.screen.width;
	let scaleY = window.innerHeight /app.screen.height;
	let scale = Math.min(scaleX,scaleY);

	let gameWidth = Math.round(scale * app.screen.width);
	let gameHeight = Math.round(scale * app.screen.height);

	app.view.style!.width= gameWidth + "px";
	app.view.style!.height= gameHeight + "px";

	let marginHorizontal = Math.floor((window.innerWidth - gameWidth)/2);  
	let marginVertical = Math.floor((window.innerHeight-gameHeight)/2);

	(app.view.style as any).marginLeft= marginHorizontal+"px";
	(app.view.style as any).marginTop= marginVertical+"px";
	
});
dispatchEvent(new Event("resize"));