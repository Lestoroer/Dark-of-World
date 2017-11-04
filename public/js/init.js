let canvas = document.createElement('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.body.appendChild(canvas);

let ctx = canvas.getContext('2d');

let image = new Image();

image.src = 'public/images/hero_one.png';
ctx.strokeStyle = 'red';
ctx.strokeRect(0,0,window.innerWidth,window.innerHeight);


setInterval(function(){
	ctx.drawImage(image,0,0,32,48,0,0,32,48);
},0);