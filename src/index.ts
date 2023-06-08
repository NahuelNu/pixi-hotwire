import { Application, Assets, Container, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});


Assets.add('Casco','casco.png');
Assets.add('Bicho','bicho.png');

Assets.load(['Casco','Bicho']).then(()=>{

	const bicho: Sprite = Sprite.from('Bicho');
	bicho.scale.set(0.5);

	const casco: Sprite = Sprite.from('Casco');
	casco.scale.set(0.35);
	casco.position.set(93,-4);
	casco.rotation = -Math.PI/9;

	const bichoandcasco: Container = new Container();
	bichoandcasco.position.set(192,92);

	app.stage.addChild(bichoandcasco);
	bichoandcasco.addChild(bicho);
	bichoandcasco.addChild(casco);
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