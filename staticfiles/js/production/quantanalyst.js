"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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