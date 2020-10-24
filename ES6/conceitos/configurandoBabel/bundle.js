"use strict";

var arr = [1, 3, 4, 5, 6];
var newArray = arr.map(function (item) {
  return item * 2;
});
console.log(newArray);

var teste = function teste() {
  return {
    nome: "Domingos"
  };
};

console.log(teste());
