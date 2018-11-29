
// menu navigation
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

const key = 'P3BEBNSP69FH7J4K';


class Item {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}
}

// chart 01
let daten = [[10,15], [80,15], [60,15], [35,15], [120,15]]
	.map( item => new Item(item[0], item[1]) ); 

let daten_width = daten.map(item => item.width);
let daten_width_max = Math.max.apply(null, daten_width);


let chart = d3.select('#chart');
let svg_width = '100%';

let scale = d3.scaleLinear()
			  .domain([0, daten_width_max])
			  .range([0, svg_width]);

let scale_color = d3.scaleLinear()
					.domain([0, daten_width_max])
					.range(['#bbdc00', '#ff4135']);




let canvas = chart.append('svg')
			.attrs({'width': svg_width,
					'height': '500px',
					'fill': 'skyblue'})
			.append('g')
			.attrs({'transform': 'translate(0,50)'});


canvas.append('line')
	  .attrs({
		  'x1': '0px',
		  'y1': '0px',
		  'x2': '100%',
		  'y2': '50%',
		  'stroke': 'cyan',
		  'stroke-width': '1px',
	  });


let bars = canvas.selectAll('rect')
			  .data(daten)
			  .enter()
			  .append('rect')
			  .attrs({"width": function(d, i) { return scale(d.width * 0.4); },
					  "height": function(d) { return d.height; },
					  "y": function(d, i) { return i * 15; },
					  "fill": function(d, i) { return scale_color(d.width); } });

bars.transition()
			  .duration(6000)
			  .delay(300)
			  .attrs({"width": function(d, i) { return scale(d.width); },
					  "y": function(d, i) { return i * 20; },
					  });


d3.json('stock.json').then(function(data2) {

	let diagram_canvas = d3.select('#diagram')
		.append('svg')
		.attrs({'width': width, 'height': '500px'});

	let width = '100%';

	let dat2_x_vlaues = data2.map(item => item.x);
	let dat2_x_max = Math.max.apply(null, dat2_x_vlaues);


	let diagram_scale = d3.scaleLinear()
		  .domain([0, dat2_x_max])
		  .range([0, width]);

	let diagram_color_scale = d3.scaleLinear()
		  .domain([0, dat2_x_max])
		  .range(['#0074d9', '#ff4136']);

	let balken = diagram_canvas.selectAll('rect')
		  .data(data2)
		  .enter().append('rect')
		  .attrs({'width': function(d) { return d.x * 0.001; }, 
				  'height': '15px', 
				  'fill': function(d, i) { return diagram_color_scale(d.x); },
				  'y': function(d, i) { return i * 17; } });

		balken.transition()
		  .duration(6000)
		  .delay(200)
		  .attrs({'width': function(d, i) { return diagram_scale(d.x); }, 
				  'height': '20px', 
				  'y': function(d, i) { return i * 22; } });
		
		balken.append('path')


		});


