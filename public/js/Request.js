///// SENDER /////

class Request{

	constructor(link='/', callback = null, method='post') {
		this.xhr = new new XMLHttpRequest();
		this.link = link;
		this.method = method;
		
		this.xhr.open(method, link, true);
		this.xhr.setRequestHeader('Content-type', 'application/json');
		this.xhr.onreadystatechange = () => {

			if (xhr.readyState == 4 && xhr.status == 200) { 
				callback(xhr.responseText);
			} else {
				//ошибка доступа к серверу
			}
		}

		this.data = {};
	}

	send(data) {
		//data == object
		this.data = data;
		return this;
	}

	run() {
		this.xhr.send(JSON.stringify(this.data));
	}

	run_unobject() {
		this.xhr.send(this.data);
	}

	repeat(time) {
		//
	}

}