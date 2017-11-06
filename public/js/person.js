
class Person {

	constructor(){
		this.size = 2.0;//множитель размера || оригинал 48 пикселей
		this.animate_step = 1;// шаги анимации (нужны для движения) максимум: 2
		this.position = 4;//поворот персонажа (его вхор) 1(персонаж к нам спиной) 2(его левая часть) 4 (к нам лицом)
		this.image = null;// тексура персонажа
		this.texture_link = '';// ссылка на изображение персонажа
		this.x = 0.0;
		this.y = 0.0;
		this.hp = 0;// здоровье персонажа
		this.om = 0;// кол-во маны у персонажа
		this.skills = [];//индексы скиллов у персонажа
		this.inventory = [];
	}

	getJSON() {
		//нужно решить что получать с сервер
	}

	setJSON(json) {
		// нужно решить что отдавать на сервер
	}

	loadTexture() {
		this.image = new Image();
		this.image.src = 'public/images/hero_1.png';
	}

	addInv(a) {//a - item 
		// добавление в инвентаь
	}

	removeInv(k) {//k - index (key)
		//удаление из инвенторя по индексу
	}

}
