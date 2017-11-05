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

	ctx.drawImage(image,0,0,32,48,0,0,256,384);

},0);