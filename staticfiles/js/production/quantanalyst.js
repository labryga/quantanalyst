"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") { return Array.from(iter); } }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var _a = [menu, inhalt];

var _f = function _f(item) {
  item.addEventListener("click", {
    handleEvent: function handleEvent(event) {
      event.preventDefault();

      if (event.target.id == "menu") {} else {
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
    var menu_li_elements = _toConsumableArray(menu.getElementsByTagName("LI"));

    var ul_elements_remove = _toConsumableArray(menu.getElementsByTagName("UL"));

    var _a2 = ul_elements_remove;

    var _f2 = function _f2(ul_element) {
      return ul_element.remove();
    };

    for (var _i2 = 0; _i2 < _a2.length; _i2++) {
      _f2(_a2[_i2], _i2, _a2);
    }

    undefined;
    var ul_navigation = document.createDocumentFragment();
    var ul_element = document.createElement("UL");
    var _a3 = menu_li_elements;

    var _f3 = function _f3(li_element) {
      return ul_element.appendChild(li_element);
    };

    for (var _i3 = 0; _i3 < _a3.length; _i3++) {
      _f3(_a3[_i3], _i3, _a3);
    }

    undefined;
    ul_navigation.appendChild(ul_element);
    menu.appendChild(ul_navigation);
  }
}

var phone_device = window.matchMedia("(max-width: 599px)");
get_phone_menu(phone_device);
phone_device.addListener(get_phone_menu);

function get_phone_menu(device) {
  if (device.matches) {
    var menu_li_elements = _toConsumableArray(menu.getElementsByTagName("LI"));

    var ul_element = document.createElement("UL");
    menu.appendChild(ul_element);
  }
}

var tablet_device = window.matchMedia("(min-width: 600px) and (max-width: 899px)");
get_tablet_menu(tablet_device);
tablet_device.addListener(get_tablet_menu);

function get_tablet_menu(device) {
  if (device.matches) {
    var menu_li_elements = _toConsumableArray(menu.getElementsByTagName("LI"));

    var ul_elements_remove = _toConsumableArray(menu.getElementsByTagName("UL"));

    var _a4 = ul_elements_remove;

    var _f4 = function _f4(ul_element) {
      return ul_element.remove();
    };

    for (var _i4 = 0; _i4 < _a4.length; _i4++) {
      _f4(_a4[_i4], _i4, _a4);
    }

    undefined;
    var ul_navigation = document.createDocumentFragment();

    var _a5 = _toConsumableArray(Array(3).keys());

    var _f5 = function _f5(element) {
      return document.createElement("UL");
    };

    var _r5 = [];

    for (var _i5 = 0; _i5 < _a5.length; _i5++) {
      _r5.push(_f5(_a5[_i5], _i5, _a5));
    }

    var ul_elements = _r5;
    var _a6 = ul_elements;

    var _f6 = function _f6(ul_element) {
      return ul_navigation.appendChild(ul_element);
    };

    for (var _i6 = 0; _i6 < _a6.length; _i6++) {
      _f6(_a6[_i6], _i6, _a6);
    }

    undefined;
    menu.appendChild(ul_navigation);
  }
}