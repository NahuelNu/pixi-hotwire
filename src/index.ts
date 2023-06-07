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
	casco.rotation=-Math.PI/9;

	const bichoandcasco: Container = new Container();
	bichoandcasco.position.set(100,100);

	app.stage.addChild(bichoandcasco);
	bichoandcasco.addChild(bicho);
	bichoandcasco.addChild(casco);
})

