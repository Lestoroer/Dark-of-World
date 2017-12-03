/*
══════════▄█▀▀▀▀▀▀█▄══▄▀▀▀▀▀▀▄
════════▄▀░░░░░░▄▄▄▄▀█░░░░░░░░▀▄
═══════█░░░░░░▀▀░░░░▀▀█▄▀▀▀▀▀▀▀█▄
══════█░░░░░░░░▄▄████████▄░▄███████▄
═════▄▀░░░░░░░▀███████████▄██████████▄
════█▀░░░░░▄▀▀█▀░▄█▄███▄░▀█░▄█▄███░░░█
═══█░░░░░░░▀▀█▀▀▄▄█████▄▄▀▀▄▄█████▀▀▀█
══█▀░░░░░░░░░░▀▄▄▄▄▄▄▄▄▄▄▀░░░░░░░░▄█▀
══█░░░░░░░░░░░░░░░░░░▄▀░░░░░░▀█▀▀▀█▄
══█░░░░░░░░░░░▄▄▄▄░░░░░░░░░░░░░░░░░█
══█░░░░░░░░▄▀▀░▄▄░▀▀▀▀▀▄▄▄▄▄▄▄▀▀▀▀▀▀█
══▀█░░░░░█░▀▄▀▀░░▀▀▀▀▀▄▄▄▄▄▄▄▄▄▄▄▄▄█
══▄█▄▄░░░▀▄░░▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▄▄▄▄▄▄▀
▄▀▀░▀██▄░░░▀▀░░░░░░░░░░░░░░▄▄▄▀▀
░░░░░░▀▀███▄▄▄▄▄▄▄▄▄▄▄▄▄████▄
░░░░░░░░░░▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀░░░▀█▄
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░█
*/


let canvas = document.createElement('canvas');

document.body.appendChild(canvas);

let ctx = canvas.getContext('2d');

//   v-- убираем blur на пикселях

let stage;// <-- сама сцена
let person;

const time = {// v-- время нужно для подсчета дельты
	delta:0,
	last_time:Date.now()
}

let size_block = 50;// азмер одной ячейки.. нужен для размеров интерфейса

function is_mobile() {
	return (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent));
}


function resize() {

	if (canvas) {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		// console.log(canvas.width,canvas.height);
	}

	if (ctx) {// v-- нужно переотключать после resize
		ctx.mozImageSmoothingEnabled = false;
		ctx.webkitImageSmoothingEnabled = false;
		ctx.msImageSmoothingEnabled = false;
		ctx.imageSmoothingEnabled = false;
	}
	
}

window.onload = function () {

	resize();
	window.addEventListener('resize', resize, false);

	if (is_mobile()) {
		// touch events
		document.addEventListener('touchstart',function(e) {stage.mousedown(e);}, false);
		document.addEventListener('touchmove',function(e) {stage.mousemove(e);}, false);
		document.addEventListener('touchend',function(e) {stage.mouseup(e);}, false);
	} else {
		// mouse + key events
		document.addEventListener('mousedown',function(e) {stage.mousedown(e);}, false);
		document.addEventListener('mousemove',function(e) {stage.mousemove(e);}, false);
		document.addEventListener('mouseup',function(e) {stage.mouseup(e);}, false);
		document.addEventListener('keydown',function(e) {stage.keydown(e);}, false);
		document.addEventListener('keyup',function(e) {stage.keyup(e);}, false);
	}

	//autorization <-- нужно сделать авторизацию
	person = new Person();

	person.loadTexture();

	stage = new Game();

	setInterval(function(){
		
		if (stage) {
			// v-- отрисовка
			stage.draw();
			// v-- обновление (возможно)
			stage.update();
		}

		time.delta = Date.now() - time.last_time; 
		time.last_time = Date.now();
		// console.log(1000 / time.delta) // <-- FPS
		// console.log(time.delta); // <-- дельта нужна для времени в игре

	}, 1);// ^-- нормальный drawer
}

function rand(min, max) {return parseInt(min + ((max - min)*Math.random()));}

//подгрузка вещей и блоков в игре
let items = new Items();
items.loadList();

//загрузка мира
let world = new World().getWorld();

let texture = new Image();
texture.src = '../images/textures.png';