"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var data = [4, 8, 16, 16, 26, 42];
var width = 420,
    barHeight = 20;

var _x = d3.scaleLinear().domain([0, d3.max(data)]).range([0, width]);

var chart = d3.select('.chart').attr('widt', width).attr('height', barHeight * data.length);
var bar = chart.selectAll('g').data(data).enter().append('g').attr('transform', function (d, i) {
  return 'translate(0,' + i * barHeight + ')';
});
bar.append('rect').attr('width', _x).attr('height', barHeight - 1); // bar.append('text')
// 		.attr('x', function(d) { return x(d) - 20; })
// 		.attr('y', barHeight / 2)
// 		.attr('dy', '.4em')
// 		.attr('font-size', '0.8em')
// 		.text(function(d) { return d; });

bar.append('text').attrs({
  'x': function x(d) {
    return _x(d) - 20;
  },
  'y': barHeight / 2,
  'dy': '0.4em',
  'font-size': '0.8em',
  'text': function text(d) {
    return d;
  }
});

navigation.onclick = function (event) {
  var lists = navigation.getElementsByTagName('UL');
  [].forEach.call(lists, function (item) {
    return item.style.display = "none";
  });
  var list_title = event.target.dataset.navigationType;
  document.getElementById(list_title).style.display = "block";
};

navigation_mobile.onclick = function (event) {
  var list_navigation_type = event.target.dataset.navigationType;

  if (list_navigation_type === "menu_mobile") {
    var lists_mobile_collection = navigation_mobile.getElementsByTagName('UL');

    var lists_mobile = _toConsumableArray(lists_mobile_collection);

    var lists_mobile_submenus = lists_mobile.slice(1);
    lists_mobile_submenus.forEach(function (item) {
      return item.style.display = "none";
    });
  } else {
    document.getElementById(list_navigation_type).style.display = "block";
  }
};