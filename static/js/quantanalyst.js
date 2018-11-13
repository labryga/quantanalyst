"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// my class
var Menu =
/*#__PURE__*/
function () {
  function Menu(elem) {
    _classCallCheck(this, Menu);

    this._elm = elem;
    elem.onclick = Null;
  }

  _createClass(Menu, [{
    key: "save",
    value: function save() {
      alert('saved!');
    }
  }, {
    key: "onClick",
    value: function onClick(event) {
      var action = event.target.datasset.action;

      if (action) {
        this[action]();
      }
    }
  }]);

  return Menu;
}();

var x = 20;
var y = "das ist was!";
//# sourceMappingURL=quantanalyst.js.map
