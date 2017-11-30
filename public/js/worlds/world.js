class World{

	constructor() {
		this.w = [];

		this.name = 'default';

		for(let y = 0; y <= 20; y++) {
		
			for(let x = 0; x <= 20; x++) {
		
				if (!this.w[y]) this.w[y] = [];
		
				if (!this.w[y][x]) this.w[y][x] = {id:this.generate(x,y,0)};
		
			}
		
		}
	
	}

	getWorld() {
		return this.w;
	}

	generate(x, y, z) {

		switch(rand(1,2)) {

			case 1:return 1;
			
			default:return 0;
		
		}

	}

}