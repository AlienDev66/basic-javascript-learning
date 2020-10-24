"use strict";

var usuario = {
  nome: "Domingos",
  idade: 19,
  endereco: {
    cidade: "Luanda",
    estado: "Cazenga"
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome, idade, cidade);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario);
