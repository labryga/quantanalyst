"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") { return Array.from(iter); } }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _a = [navigation_desktop_tablet, inhalt];

var _f = function _f(item) {
  item.addEventListener("click", {
    handleEvent: function handleEvent(event) {
      event.preventDefault();

      if (event.target.id == "menu") {
        list_menu_elements = _toConsumableArray(navigation_desktop_tablet.getElementsByTagName("LI"));
      } else {
        // crucial header settings for django "self.request.is_ajax()" returning "true"
        axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
        axios.get(event.target.pathname).then(function (response) {
          inhalt.innerHTML = response.data;
        });
      }
    }
  });
};

for (var _i = 0; _i < _a.length; _i++) {
  _f(_a[_i], _i, _a);
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
undefined;
var desktop_tablet_xl_device = window.matchMedia("(min-width: 900px) and (max-width: 2500px)");
get_deskotp_tablet_menu(desktop_tablet_xl_device);
desktop_tablet_xl_device.addListener(get_deskotp_tablet_menu);

function get_deskotp_tablet_menu(device) {
  if (device.matches) {
    alert("desktop tablet-xl device!");
  }
}

var tablet_device = window.matchMedia("(min-width: 600px) and (max-width: 899px)");
get_tablet_menu(tablet_device);
tablet_device.addListener(get_tablet_menu);

function get_tablet_menu(device) {
  if (device.matches) {
    alert(" tablet device!");
  }
}