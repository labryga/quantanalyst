"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Men = function Men(arg01, arg02) {
  _classCallCheck(this, Men);

  this.arg01 = arg01;
};

var Sld =
/*#__PURE__*/
function () {
  function Sld(arg01, arg02) {
    _classCallCheck(this, Sld);

    this.arg01 = arg01;
    this.arg02 = arg02;
  }

  _createClass(Sld, [{
    key: "slide",
    value: function slide() {
      return this.arg01 + this.arg02;
    }
  }]);

  return Sld;
}();