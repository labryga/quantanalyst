"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") { return Array.from(iter); } }

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
var _a = [navigation_desktop_tablet, inhalt];

var _f = function _f(item) {
  item.addEventListener("click", {
    handleEvent: function handleEvent(event) {
      event.preventDefault();

      if (event.target.id == "menu") {
        var list_elements = getMenuListElements();
        var _a17 = list_elements;

        var _f17 = function _f17(item) {
          return item.style.display = "block";
        };

        for (var _i17 = 0; _i17 < _a17.length; _i17++) {
          _f17(_a17[_i17], _i17, _a17);
        }

        undefined;
        var menu_item = document.createElement("DIV");
        menu_item.innerHTML = "zurück";
        var ul_item = navigation_desktop_tablet.getElementsByTagName("UL")[0];
        ul_item.insertBefore(menu_item, ul_item.firstElementChild);
        ul_item.classList.add("phone_screen");

        ul_item.onclick = function () {
          ul_item.classList.remove("phone_screen");
          var _a18 = list_elements;

          var _f18 = function _f18(item) {
            return item.style.display = "none";
          };

          for (var _i18 = 0; _i18 < _a18.length; _i18++) {
            _f18(_a18[_i18], _i18, _a18);
          }

          undefined;
          ul_item.firstElementChild.remove();
        };
      } else {
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

undefined;

(function () {
  var desktop_query = window.matchMedia("(min-width: 900px) and (max-width: 2000px)");

  function desktop_screen() {
    if (desktop_query.matches) {
      var list_elements = getMenuListElements();
      removeUlElements();
      var ul_element = document.createElement("UL");
      var _a2 = list_elements;

      var _f2 = function _f2(item) {
        return ul_element.appendChild(item);
      };

      for (var _i2 = 0; _i2 < _a2.length; _i2++) {
        _f2(_a2[_i2], _i2, _a2);
      }

      undefined;
      navigation_desktop_tablet.appendChild(ul_element);
      var _a3 = list_elements;

      var _f3 = function _f3(item) {
        return item.style.display = "block";
      };

      for (var _i3 = 0; _i3 < _a3.length; _i3++) {
        _f3(_a3[_i3], _i3, _a3);
      }

      undefined;
    }
  }

  desktop_screen();
  desktop_query.addListener(desktop_screen);
})();

(function () {
  var phone_query = window.matchMedia("(max-width: 599px)");

  function phone_screen() {
    if (phone_query.matches) {
      var list_elements = getMenuListElements();
      removeUlElements();
      var ul_element = document.createElement("UL");
      var _a4 = list_elements;

      var _f4 = function _f4(item) {
        return ul_element.append(item);
      };

      for (var _i4 = 0; _i4 < _a4.length; _i4++) {
        _f4(_a4[_i4], _i4, _a4);
      }

      undefined;
      navigation_desktop_tablet.appendChild(ul_element);

      var list_elements_appended = _toConsumableArray(navigation_desktop_tablet.getElementsByTagName("LI"));

      var _a5 = list_elements_appended;

      var _f5 = function _f5(item) {
        return item.style.display = "none";
      };

      for (var _i5 = 0; _i5 < _a5.length; _i5++) {
        _f5(_a5[_i5], _i5, _a5);
      }

      undefined;
    }
  }

  phone_screen();
  phone_query.addListener(phone_screen);
})();

function getMenuListElements() {
  return _toConsumableArray(navigation_desktop_tablet.getElementsByTagName("LI"));
}

function removeUlElements() {
  var _a6 = _toConsumableArray(navigation_desktop_tablet.getElementsByTagName("UL"));

  var _f6 = function _f6(item) {
    return item.remove();
  };

  for (var _i6 = 0; _i6 < _a6.length; _i6++) {
    _f6(_a6[_i6], _i6, _a6);
  }

  undefined;
} // crucial header settings for django "self.request.is_ajax()" returning "true"


axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
var _a7 = [navigation_desktop_tablet, inhalt];

var _f7 = function _f7(item) {
  item.addEventListener("click", {
    handleEvent: function handleEvent(event) {
      event.preventDefault();

      if (event.target.id == "menu") {
        var list_elements = getMenuListElements();
        var _a19 = list_elements;

        var _f19 = function _f19(item) {
          return item.style.display = "block";
        };

        for (var _i19 = 0; _i19 < _a19.length; _i19++) {
          _f19(_a19[_i19], _i19, _a19);
        }

        undefined;
        var menu_item = document.createElement("DIV");
        menu_item.innerHTML = "zurück";
        var ul_item = navigation_desktop_tablet.getElementsByTagName("UL")[0];
        ul_item.insertBefore(menu_item, ul_item.firstElementChild);
        ul_item.classList.add("phone_screen");

        ul_item.onclick = function () {
          ul_item.classList.remove("phone_screen");
          var _a20 = list_elements;

          var _f20 = function _f20(item) {
            return item.style.display = "none";
          };

          for (var _i20 = 0; _i20 < _a20.length; _i20++) {
            _f20(_a20[_i20], _i20, _a20);
          }

          undefined;
          ul_item.firstElementChild.remove();
        };
      } else {
        axios.get(event.target.pathname).then(function (response) {
          inhalt.innerHTML = response.data;
        });
      }
    }
  });
};

for (var _i7 = 0; _i7 < _a7.length; _i7++) {
  _f7(_a7[_i7], _i7, _a7);
}

undefined;

(function () {
  var desktop_query = window.matchMedia("(min-width: 900px) and (max-width: 2000px)");

  function desktop_screen() {
    if (desktop_query.matches) {
      var list_elements = getMenuListElements();
      removeUlElements();
      var ul_element = document.createElement("UL");
      var _a8 = list_elements;

      var _f8 = function _f8(item) {
        return ul_element.appendChild(item);
      };

      for (var _i8 = 0; _i8 < _a8.length; _i8++) {
        _f8(_a8[_i8], _i8, _a8);
      }

      undefined;
      navigation_desktop_tablet.appendChild(ul_element);
      var _a9 = list_elements;

      var _f9 = function _f9(item) {
        return item.style.display = "block";
      };

      for (var _i9 = 0; _i9 < _a9.length; _i9++) {
        _f9(_a9[_i9], _i9, _a9);
      }

      undefined;
    }
  }

  desktop_screen();
  desktop_query.addListener(desktop_screen);
})();

function getMenuListElements() {
  return _toConsumableArray(navigation_desktop_tablet.getElementsByTagName("LI"));
}

function removeUlElements() {
  var _a10 = _toConsumableArray(navigation_desktop_tablet.getElementsByTagName("UL"));

  var _f10 = function _f10(item) {
    return item.remove();
  };

  for (var _i10 = 0; _i10 < _a10.length; _i10++) {
    _f10(_a10[_i10], _i10, _a10);
  }

  undefined;
}

(function () {
  var tablet_query = window.matchMedia("(min-width: 600px) and (max-width: 899px)");

  function tablet_screen() {
    if (tablet_query.matches) {
      var list_elements = getMenuListElements();
      removeUlElements();

      var _a11 = _toConsumableArray(Array(3).keys());

      var _f11 = function _f11(item) {
        return document.createElement('UL');
      };

      var _r11 = [];

      for (var _i11 = 0; _i11 < _a11.length; _i11++) {
        _r11.push(_f11(_a11[_i11], _i11, _a11));
      }

      var ul_elements = _r11;
      var _a12 = ul_elements;

      var _f12 = function _f12(ul_item) {
        var _a15 = _toConsumableArray(Array(3).keys());

        var _f15 = function _f15(value) {
          ul_item.appendChild(list_elements.shift());
          ul_item.classList.add("tablet");
        };

        for (var _i15 = 0; _i15 < _a15.length; _i15++) {
          _f15(_a15[_i15], _i15, _a15);
        }

        undefined;
      };

      for (var _i12 = 0; _i12 < _a12.length; _i12++) {
        _f12(_a12[_i12], _i12, _a12);
      }

      undefined;
      var _a13 = ul_elements;

      var _f13 = function _f13(item) {
        return navigation_desktop_tablet.appendChild(item);
      };

      for (var _i13 = 0; _i13 < _a13.length; _i13++) {
        _f13(_a13[_i13], _i13, _a13);
      }

      undefined;

      var list_elements_appended = _toConsumableArray(navigation_desktop_tablet.getElementsByTagName("LI"));

      var _a14 = list_elements_appended;

      var _f14 = function _f14(item) {
        return item.style.display = "block";
      };

      for (var _i14 = 0; _i14 < _a14.length; _i14++) {
        _f14(_a14[_i14], _i14, _a14);
      }

      undefined;
    }
  }

  tablet_screen();
  tablet_query.addListener(tablet_screen);
})();

function getMenuListElements() {
  return _toConsumableArray(navigation_desktop_tablet.getElementsByTagName("LI"));
}

function removeUlElements() {
  var _a16 = _toConsumableArray(navigation_desktop_tablet.getElementsByTagName("UL"));

  var _f16 = function _f16(item) {
    return item.remove();
  };

  for (var _i16 = 0; _i16 < _a16.length; _i16++) {
    _f16(_a16[_i16], _i16, _a16);
  }

  undefined;
}