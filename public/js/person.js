
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

		this.speed = 1; // Скорость персонажа
		this.acceleration = 1; // Ускорение персонажа
		//this.max_acceleration = 1.2; // Ускорение персонажа
		this.can_go = true; // Можно ли менять спрайт движения
	}

	getJSON() {
		//нужно решить что получать с сервера
	}

	setJSON(json) {
		// нужно решить что отдавать на сервера
	}

	loadTexture() {
		this.image = new Image();
		this.image.src = '/images/heroes.png';
	}

	movement() {
		if (this.can_go) {
			this.can_go = false;
			setTimeout(()=>{
				switch (this.animate_step) {
					case 2:
						this.animate_step = 1; break;
					case 1:
						this.animate_step = 0; break;
					case 0:
						this.animate_step = 2; break;
				}
				this.can_go = true;
			}, 100 / (this.speed * this.acceleration));
		} 
	}

	addInv(a) {//a - item 
		// добавление в инвентаь
	}

	removeInv(k) {//k - index (key)
		//удаление из инвенторя по индексу
	}

}
