
class Game extends Stage {

	constructor(){
		super();
		this.keys = {// перемещение персонажа
			up:false,
			left:false,
			right:false,
			down:false,
			shift:false
		}
		this.time_Step = 0;
	}


	drawTexture(id,x,y) {
		
	}
	
	draw(){

		if (!ctx) return;
		ctx.clearRect(0,0,canvas.width,canvas.height);// <-- чистка экрана
		let w = Math.round(canvas.width / size_block) + 2;// кол-во блоков на ширину экрана (лучше перенески в resize)
		let h = Math.round(canvas.height /size_block) + 2;// ^-- repeat for height

		if (w % 2 == 0) w++;// число должно быть нечетным
		if (h % 2 == 0) h++;// ^--

		let X = Math.round((canvas.width / 2) - (size_block * (w / 2)) - (size_block / 2));// координаты начала для отрисовки
		let Y = Math.round((canvas.height / 2) - (size_block * (h / 2)));

		X -= Math.round(size_block * (person.x % 1));// сдвигать по юзеру( для плавного движения)
		Y -= Math.round(size_block * (person.y % 1))// ^--

		//..

		for (let z = 0; z < 1; z++) {//если нужно больше слоев поверхности, то нужно изменить условие
			//отрисовываем видимю облать вокруг игрока 
			for (let y = Math.round(person.y - (h / 2)); y <= Math.round(person.y + (h / 2)); y++) {//отрисовываем область

				for (let x = Math.round(person.x - (w / 2)); x <= Math.round(person.x + (w / 2)); x++) {
					//рисуем блок карты 
					if (!world[y] || !world[y][x]) {
						X += size_block;
						continue;
					}
					switch(world[y][x].id){
						case 1:ctx.fillStyle = 'green';break;
						default:ctx.fillStyle = 'black';break;
					}
					
					ctx.fillRect(X,Y,size_block - 1,size_block - 1);

					X += size_block;
				}
				X -= size_block * (w + 1);
				Y += size_block;
			}
			Y -= size_block * (h + 1)
		}

		// v--  отрисовка персонажа
		//if... все дела... 

		ctx.drawImage(person.image, person.animate_step * 32, (()=>{
			switch (person.position) {
				case 1: return 3;
				case 2: return 1;
				case 3: return 2;
				case 4: return 0;
				default: return 0;
			}
		})()*48, 32, 48, canvas.width/2 - 32, canvas.height/2 - 96, 64, 96);

	}
	//эвенты и прочее


	//
	update() {

		// if (this.keys.shift) person.acceleration = person.max_acceleration;
		// else person.acceleration = 1;

		if (this.keys.up) {
			person.y -= person.speed * .005 * person.acceleration * time.delta;
			person.position = 1;
			person.movement();
		}
		if (this.keys.left) {
			person.x -= person.speed * .005 * person.acceleration * time.delta;
			person.position = 2;
			person.movement();
		}
		if (this.keys.right) {
			person.x += person.speed * .005 * person.acceleration * time.delta;
			person.position = 3;
			person.movement();
		}
		if (this.keys.down) {
			person.y += person.speed * .005 * person.acceleration * time.delta;
			person.position = 4;
			person.movement();
		} 
	}

	keydown(e) {
		//console.log(e);
		switch (e.keyCode) {
			case 87: this.keys.up = true; break;
			case 65: this.keys.left = true; break;
			case 68: this.keys.right = true; break;
			case 83: this.keys.down = true; break;
			case 16: this.keys.shift = true; break;
		}
	}

	keyup (e) {
		switch (e.keyCode) {
			case 87: this.keys.up = false; break;
			case 65: this.keys.left = false; break;
			case 68: this.keys.right = false; break;
			case 83: this.keys.down = false; break;
			case 16: this.keys.shift = false; break;
		}
	}
}