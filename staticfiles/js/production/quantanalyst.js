"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// menu navigation
var Menu =
/*#__PURE__*/
function () {
  function Menu(element) {
    var _this = this;

    _classCallCheck(this, Menu);

    ['', ''].forEach(function (item) {
      return element.addEventListener(item, _this);
    });
  }

  _createClass(Menu, [{
    key: "handleEvent",
    value: function handleEvent(event) {
      var eventtype = 'on' + event.type[0].toUpperCase() + event.type.slice(1);
      this[eventtype](event);
    }
  }, {
    key: "onClick",
    value: function onClick(event) {
      alert(event.target.innerHTML + 'hi!!');
    }
  }, {
    key: "onMouseover",
    value: function onMouseover(event) {
      if (event.target.nodeName !== 'A') return;
      alert(event.type + ' over ' + event.target.innerText);
    }
  }]);

  return Menu;
}();

new Menu(navigation);
var key = 'P3BEBNSP69FH7J4K';

var Item = function Item(width, height) {
  _classCallCheck(this, Item);

  this.width = width;
  this.height = height;
}; // chart 01


var daten = [[10, 15], [80, 15], [60, 15], [35, 15], [120, 15]].map(function (item) {
  return new Item(item[0], item[1]);
});
var daten_width = daten.map(function (item) {
  return item.width;
});
var daten_width_max = Math.max.apply(null, daten_width);
var chart = d3.select('#chart');
var svg_width = '100%';
var scale = d3.scaleLinear().domain([0, daten_width_max]).range([0, svg_width]);
var scale_color = d3.scaleLinear().domain([0, daten_width_max]).range(['#bbdc00', '#ff4135']);
var canvas = chart.append('svg').attrs({
  'width': svg_width,
  'height': '500px',
  'fill': 'skyblue'
}).append('g').attrs({
  'transform': 'translate(0,50)'
});
canvas.append('line').attrs({
  'x1': '0px',
  'y1': '0px',
  'x2': '100%',
  'y2': '50%',
  'stroke': 'cyan',
  'stroke-width': '1px'
});
var bars = canvas.selectAll('rect').data(daten).enter().append('rect').attrs({
  "width": function width(d, i) {
    return scale(d.width * 0.4);
  },
  "height": function height(d) {
    return d.height;
  },
  "y": function y(d, i) {
    return i * 15;
  },
  "fill": function fill(d, i) {
    return scale_color(d.width);
  }
});
bars.transition().duration(6000).delay(300).attrs({
  "width": function width(d, i) {
    return scale(d.width);
  },
  "y": function y(d, i) {
    return i * 20;
  }
});
d3.json('stock.json').then(function (data2) {
  var diagram_canvas = d3.select('#diagram').append('svg').attrs({
    'width': width,
    'height': '500px'
  });
  var width = '100%';
  var dat2_x_vlaues = data2.map(function (item) {
    return item.x;
  });
  var dat2_x_max = Math.max.apply(null, dat2_x_vlaues);
  var diagram_scale = d3.scaleLinear().domain([0, dat2_x_max]).range([0, width]);
  var diagram_color_scale = d3.scaleLinear().domain([0, dat2_x_max]).range(['#0074d9', '#ff4136']);
  var balken = diagram_canvas.selectAll('rect').data(data2).enter().append('rect').attrs({
    'width': function width(d) {
      return d.x * 0.001;
    },
    'height': '15px',
    'fill': function fill(d, i) {
      return diagram_color_scale(d.x);
    },
    'y': function y(d, i) {
      return i * 17;
    }
  });
  balken.transition().duration(6000).delay(200).attrs({
    'width': function width(d, i) {
      return diagram_scale(d.x);
    },
    'height': '20px',
    'y': function y(d, i) {
      return i * 22;
    }
  });
  balken.append('path');
});