
class Menu {
	constructor(element) {
		['', ''].forEach(
			item => element.addEventListener(item, this));
	}

	handleEvent(event) {
		let eventtype = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
		this[eventtype](event)
	}

	onClick(event) { alert(event.target.innerHTML + 'hi!!'); }

	onMouseover(event) { 
		if (event.target.nodeName !== 'A') return;
		alert(event.type + ' over ' + event.target.innerText); }
}

new Menu(navigation);

