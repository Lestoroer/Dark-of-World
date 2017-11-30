

class Inventory extends Stage {
	
	draw(){
		ctx.clearRect(0,0,canvas.width,canvas.height);
		new Game().draw();
		ctx.fillStyle = 'rgba(0,0,0,.8)';
		ctx.fillRect(0,0,canvas.width,canvas.height);
	}

	keyup (e) {
		switch(e.keyCode) {
			case 69:stage = new Game();break;
		}
	}
}