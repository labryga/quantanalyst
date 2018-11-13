// my class

class Menu {
	constructor(elem) {
		this._elm = elem;
		elem.onclick = Null;
	}

	save() {
		alert('saved!');
	}

	onClick(event) {
		let action = event.target.datasset.action;
		if (action) {
			this[action]();
		}
	}
}

let x = 20;
let y = "das ist was!";
