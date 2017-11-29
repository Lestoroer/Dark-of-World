class Items{

	constructor(){
		this.items = {};
	}

	loadList(){
		this.add(0,'трава',[0,0,64]);
	}

	getJSON(){
		return JSON.stringify(this.items);
	}

	setJSON(items){
		this.items = JSON.parse(items);
	}

	getItems(){
		return this.items;
	}

	add(id, name, t, type) {
		let item = {};
		item.id = id;
		item.name = name;
		// v-- нужно решить память или скорость
		item.texture = [(t[0]-1)*t[2],(t[1]-1)*t[2],t[0]*t[2],t[1]*t[2]];
		item.type = (type)? type: 0;
		this.items[id] = item;
	}

}