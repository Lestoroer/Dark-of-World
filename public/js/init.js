let canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.body.appendChild(canvas);
let ctx = canvas.getContext('2d');

let image = new Image();
image.src = 'public/images/hero_1.png';


//   v-- убираем blur на пикселях
ctx.mozImageSmoothingEnabled = false;
ctx.webkitImageSmoothingEnabled = false;
ctx.msImageSmoothingEnabled = false;
ctx.imageSmoothingEnabled = false;


//// тестовый drawer !не юзать для постоянной отрисовки (позже сделаю нормальный)
setInterval(function(){

	ctx.drawImage(image,0,0,32,48,0,0,64,96);

},0);

///// items ///// <-- вещи в игре (можешь перенести все классы по разным файлам)

// вещи - это объексты(не числа) нужно создать разные типы объектов для разных вещей

//items_list

///// end /////

class Person {

	constructor(){
		this.x = 0;
		this.y = 0;
		this.hp = 0;// здоровье персонажа
		this.om = 0;// кол-во маны у персонажа
		this.skills = [];//индексы скиллов у персонажа
		this.inventory = []; 
	}

	addInv(a) {
		// добавление в инвентаь
	}

	removeInv(k) {
		//удаление из инвенторя по индексу
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