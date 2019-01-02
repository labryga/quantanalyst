let desktop_tablet_xl_device = window.matchMedia("(min-width: 900px) and (max-width: 2500px)");
get_deskotp_tablet_menu(desktop_tablet_xl_device);
desktop_tablet_xl_device.addListener(get_deskotp_tablet_menu);

function get_deskotp_tablet_menu(device) {
	if (device.matches) {

		let menu_list_raw = reset_menu_list();
		let ul_element = document.createElement("UL");

		menu_list_raw.menu_li_elements
			.forEach(li_element => ul_element.appendChild(li_element));
		menu_list_raw.ul_navigation.appendChild(ul_element);
		menu.appendChild(menu_list_raw.ul_navigation);
	}
}



// chart 01
// let daten = [[10,15], [80,15], [60,15], [35,15], [120,15]]
// 	.map( item => new Item(item[0], item[1]) ); 
//
// let daten_width = daten.map(item => item.width);
// let daten_width_max = Math.max.apply(null, daten_width);
//
//
// let chart = d3.select('#chart');
// let svg_width = '100%';
//
// let scale = d3.scaleLinear()
// 			  .domain([0, daten_width_max])
// 			  .range([0, svg_width]);
//
// let scale_color = d3.scaleLinear()
// 					.domain([0, daten_width_max])
// 					.range(['#bbdc00', '#ff4135']);
//
//
//
//
// let canvas = chart.append('svg')
// 			.attrs({'width': svg_width,
// 					'height': '500px',
// 					'fill': 'skyblue'})
// 			.append('g')
// 			.attrs({'transform': 'translate(0,50)'});
//
//
// canvas.append('line')
// 	  .attrs({
// 		  'x1': '0px',
// 		  'y1': '0px',
// 		  'x2': '100%',
// 		  'y2': '50%',
// 		  'stroke': 'cyan',
// 		  'stroke-width': '1px',
// 	  });
//
//
// let bars = canvas.selectAll('rect')
// 			  .data(daten)
// 			  .enter()
// 			  .append('rect')
// 			  .attrs({"width": function(d, i) { return scale(d.width * 0.4); },
// 					  "height": function(d) { return d.height; },
// 					  "y": function(d, i) { return i * 15; },
// 					  "fill": function(d, i) { return scale_color(d.width); } });
//
// bars.transition()
// 			  .duration(6000)
// 			  .delay(300)
// 			  .attrs({"width": function(d, i) { return scale(d.width); },
// 					  "y": function(d, i) { return i * 20; },
// 					  });
//
// // strich
// d3.json('stock.json').then(function(data2) {
//
// 	let width = '100%';
//
// 	let diagram_canvas = d3.select('#diagram')
// 		.append('svg')
// 		.attrs({'width': '100%', 'height': '500px'});
//
//
// 	let dat2_x_vlaues = data2.map(item => item.x);
// 	let dat2_x_max = Math.max.apply(null, dat2_x_vlaues);
//
//
// 	let diagram_scale = d3.scaleLinear()
// 		  .domain([0, dat2_x_max])
// 		  .range([0, width]);
//
// 	let diagram_color_scale = d3.scaleLinear()
// 		  .domain([0, dat2_x_max])
// 		  .range(['#0074d9', '#ff4136']);
//
// 	let balken = diagram_canvas.selectAll('rect')
// 		  .data(data2)
// 		  .enter().append('rect')
// 		  .attrs({'width': function(d) { return d.x * 0.001; }, 
// 				  'height': '15px', 
// 				  'fill': function(d, i) { return diagram_color_scale(d.x); },
// 				  'y': function(d, i) { return i * 17; } });
//
// 		balken.transition()
// 		  .duration(6000)
// 		  .delay(200)
// 		  .attrs({'width': function(d, i) { return diagram_scale(d.x); }, 
// 				  'height': '20px', 
// 				  'y': function(d, i) { return i * 22; } });
//
// 		
// 	let pathline = d3.line()
// 		  .x(function(d) { return (d.x); })
// 		  .y(function(d) { return (d.y); });
//
// 	let	strich = diagram_canvas.selectAll('path')
// 		  .data([data2])
// 		  .enter().append('path')
// 		  .attrs({'d': pathline,
// 				 'fill': 'none',
// 				 'stroke': 'cyan',
// 				 'stroke-width': '1.5px'});
//
//
// 		});
//
//
// let schleife_canvas = d3.select('#schleife')
// 	  .append('svg')
// 	  .attrs({'width': '100%', 'height': '100%'});
//
// let pfadData = [
//   {source: {y: 10, x: 175},
// 	target: {y: 300, x: 10} 
//   },
// ]
//
// let pfad = d3.linkHorizontal()
// 	  .x(function(d) { return d.y; })
// 	  .y(function(d) { return d.x; });
//
//
// 	schleife_canvas.selectAll('path')
// 	  .data(pfadData)
// 	  .enter().append('path')
// 	  .attrs({'d': pfad,
// 			 'stroke': 'cyan',
// 			 'stroke-width': '2px',
// 			 'fill': 'none'});
//


[menu, inhalt].forEach(function(item) {
		item.addEventListener("click", {
				handleEvent(event) {
						event.preventDefault(); 
						if (event.target.id == "menu_phone") {

								if (phone.style.display == "block") {
									phone.style.display = "none";
									phone.classList.remove("phone_list");
								} else { 
										phone.style.display = "block";
										phone.classList.add("phone_list");
								}

						} else if (event.target.nodeName == "A" && event.target.closest("DIV").id == "menu" ) {
								// crucial header settings for django "self.request.is_ajax()" returning "true"
								let li_items = [...menu.getElementsByTagName("A")];
								li_items.forEach(li_item => li_item.classList.remove("menu_item"));
								event.target.classList.add("menu_item");
								axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
								axios.get(event.target.pathname)
									.then(function (response) {
											inhalt.innerHTML = response.data;}); 
						} else if (event.target.id == "menu_mobile") {
								alert("mobile!");
					
						} else {
									alert("else done");
									axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
									axios.get(event.target.pathname)
										.then(function (response) {
												inhalt.innerHTML = response.data;}); 
						}
				}
		});
});

function reset_menu_list() {
		let menu_li_elements = [...menu.getElementsByTagName("LI")];
		let ul_elements_remove = [...menu.getElementsByTagName("UL")];
		ul_elements_remove.forEach(ul_element => ul_element.remove());
		menu_li_elements.forEach(li_item => li_item.style.display = "block");
		let ul_navigation = document.createDocumentFragment(); 
		return {menu_li_elements, ul_navigation}
}

function reset_raw() {
	return {
		menu_li_elements: [...menu.getElementsByTagName("LI")],
		ul_elements: [...menu.getElementsByTagName("UL")],
		ul_elements_remove() {this.ul_elements
													.forEach(item => item.remove())},
		ul_navigation: document.createDocumentFragment(),
	};
}

let phone_device = window.matchMedia("(max-width: 599px)");
get_phone_menu(phone_device);
phone_device.addListener(get_phone_menu);

function get_phone_menu(device) {
	if (device.matches) {
		let menu_li_elements = [...menu.getElementsByTagName("LI")]
		let ul_elements_remove = [...menu.getElementsByTagName("UL")];

		ul_elements_remove.forEach(ul_element => ul_element.remove());
		let ul_navigation = document.createDocumentFragment();
		let ul_element = document.createElement("UL");
		ul_element.style.display = "none";
		ul_element.id = "phone";
		menu_li_elements.forEach(li_element => {
			ul_element.appendChild(li_element);
		});
		ul_navigation.appendChild(ul_element);
		menu.appendChild(ul_navigation);
	}
}

let tablet_device = window.matchMedia("(min-width: 600px) and (max-width: 899px)");
get_tablet_menu(tablet_device);
tablet_device.addListener(get_tablet_menu);

function get_tablet_menu(device) {
	if (device.matches) {

		let menu_list_raw = reset_menu_list();

		let ul_elements = [...Array(3).keys()].map(element => document.createElement("UL"));

		ul_elements.forEach(ul_element => {
			[...Array(3).keys()].forEach(value => {
				ul_element.appendChild(menu_list_raw.menu_li_elements.shift())
			})
		});

		ul_elements.forEach(ul_element => {menu_list_raw.ul_navigation
				.appendChild(ul_element)});
		menu.appendChild(menu_list_raw.ul_navigation);
	}
}
