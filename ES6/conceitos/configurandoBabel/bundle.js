"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// REST
function soma(a, b) {
  for (var _len = arguments.length, pararms = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    pararms[_key - 2] = arguments[_key];
  }

  return pararms;
}

console.log(soma(1, 3, 8, 10, 40)); // SPREAD

var usuario = {
  nome: "Domingos",
  idade: 19,
  empresa: "SNIR"
};

var usuario2 = _objectSpread(_objectSpread({}, usuario), {}, {
  nome: "João"
});

console.log(usuario2);
