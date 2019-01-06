enchant();

/*

Core
- rootScene
-- Sprite (bear)

*/

window.onload = function() {

	var core = new Core(320,320);
	//読んでくるイメージのサイズを指定
	core.preload('chara1.png');
	//coreにイメージイメージを読み込む
	core.fps = 15;
	
	core.onload = function(){
		//coreが読み終わったらやってください

		var bear = new Sprite(32, 32);
		//読み込みのイメージのサイズ(イメージのサイズが32だから指定をする)
		bear.image = core.assets['chara1.png'];
		//preloadしたものをこうやって読み込む事ができます
		bear.x = 0;
		bear.y = 0;
		//bearの座標を指定

		bear.addEventListener('enterframe',function(){
		//bearにイベント登録
		//frameに入った時のイベント
			if(core.input.left) this.x -= 5;
				//左が入力された時左に５移動
			if(core.input.right) this.x += 5;
				//右が入力された時右に５移動
			if(core.input.up) this.y -= 5;  
				//上が入力された時上に５移動
			if(core.input.down) this.y += 5;
				//下が入力された時上に５移動			
		});

		bear.on('touchstart',function(){
		//スマホで操作する時タッチした時起きるイベント
			core.rootScene.removeChild(this);
			//bearをタッチした時にクマが消える
		})

		core.rootScene.addChild(bear);
		//coreのrootシーンにbearを

	}
	core.start();
	//onloadが終わったらゲームスタート
};