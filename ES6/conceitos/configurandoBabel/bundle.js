"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Matermatica = /*#__PURE__*/function () {
  function Matermatica() {
    _classCallCheck(this, Matermatica);
  }

  _createClass(Matermatica, null, [{
    key: "soma",
    value: function soma(num1, num2) {
      return num1 + num2;
    }
  }]);

  return Matermatica;
}();

console.log(Matermatica.soma(84645465465446, 54654651681616161561616));
