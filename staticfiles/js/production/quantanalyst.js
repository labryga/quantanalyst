"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
// crucial header settings for django "self.request.is_ajax()" returning "true"
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
[navigation_desktop_tablet, inhalt].forEach(function (item) {
  item.addEventListener("click", {
    handleEvent: function handleEvent(event) {
      event.preventDefault();

      if (event.target.id == "menu") {
        var list_elements = getMenuListElements();
        list_elements.forEach(function (item) {
          return item.classList.add("phone_screen");
        });
      }

      axios.get(event.target.pathname).then(function (response) {
        inhalt.innerHTML = response.data;
      });
    }
  });
});

function getMenuListElements() {
  return _toConsumableArray(navigation_desktop_tablet.getElementsByTagName("LI"));
}

function removeUlElements() {
  _toConsumableArray(navigation_desktop_tablet.getElementsByTagName("UL")).forEach(function (item) {
    return item.remove();
  });
}

(function () {
  var desktop_query = window.matchMedia("(min-width: 900px) and (max-width: 2000px)");

  function desktop_screen() {
    if (desktop_query.matches) {
      var list_elements = getMenuListElements();
      removeUlElements();
      var ul_element = document.createElement("UL");
      list_elements.forEach(function (item) {
        return ul_element.appendChild(item);
      });
      navigation_desktop_tablet.appendChild(ul_element);
      list_elements.forEach(function (item) {
        return item.style.display = "block";
      });
    }
  }

  desktop_screen();
  desktop_query.addListener(desktop_screen);
})();

(function () {
  var tablet_query = window.matchMedia("(min-width: 600px) and (max-width: 899px)");

  function tablet_screen() {
    if (tablet_query.matches) {
      var list_elements = getMenuListElements();
      removeUlElements();

      var ul_elements = _toConsumableArray(Array(3).keys()).map(function (item) {
        return document.createElement('UL');
      });

      ul_elements.forEach(function (ul_item) {
        _toConsumableArray(Array(3).keys()).forEach(function (value) {
          ul_item.appendChild(list_elements.shift());
          ul_item.classList.add("tablet");
        });
      });
      ul_elements.forEach(function (item) {
        return navigation_desktop_tablet.appendChild(item);
      });

      var list_elements_appended = _toConsumableArray(navigation_desktop_tablet.getElementsByTagName("LI"));

      list_elements_appended.forEach(function (item) {
        return item.style.display = "block";
      });
    }
  }

  tablet_screen();
  tablet_query.addListener(tablet_screen);
})();

(function () {
  var phone_query = window.matchMedia("(max-width: 599px)");

  function phone_screen() {
    if (phone_query.matches) {
      var list_elements = getMenuListElements();
      removeUlElements();
      var ul_element = document.createElement("UL");
      list_elements.forEach(function (item) {
        return ul_element.append(item);
      });
      navigation_desktop_tablet.appendChild(ul_element);

      var list_elements_appended = _toConsumableArray(navigation_desktop_tablet.getElementsByTagName("LI"));

      list_elements_appended.forEach(function (item) {
        return item.style.display = "none";
      });
    }
  }

  phone_screen();
  phone_query.addListener(phone_screen);
})();