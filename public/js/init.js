let canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.body.appendChild(canvas);
let ctx = canvas.getContext('2d');

let image = new Image();
image.src = 'public/images/hero_1.png';


//// тестовый drawer !не юзать для постоянной отрисовки (позже сделаю нормальный)
setInterval(function(){
	ctx.drawImage(image,0,0,32,48,0,0,32,48);
},0);

class Person {

	constructor(){
		this.x = 0;
		this.y = 0;
		this.hp = 0;
		this.om = 0;
		this.skills = [];
	}

}


class Warrior extends Person {

}

/////////// __MORE _classes


class Stage {
	
	draw(){}

	mousedown(e){}
	
	mouseup(e){}
	
	mousemove(e){}
}


class Game extends Stage {
	
	draw(){
		//карта и персонажи
	}
	//эвенты и прочее
}


class Inventory extends Stage {
	
	draw(){
		//отрисовка инвенторя
	}
}