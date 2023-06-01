import { Application, Assets, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 640,
	height: 480
});


Assets.add('clampy','clampy.png');
Assets.add('bicho','bicho.png');

Assets.load(['clampy','bicho']).then(()=>{
	const clampy: Sprite = Sprite.from('bicho');
	
	//clampy.anchor.set(0.5);
	//clampy.x = clampy.width /2;
	//clampy.y = clampy.height /2;

	console.log(clampy.width , clampy.height,clampy);

	app.stage.addChild(clampy);
})

