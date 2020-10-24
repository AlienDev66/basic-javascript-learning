const usuario = {
  nome: "Domingos",
  idade: 19,
  endereco: {
    cidade: "Luanda",
    estado: "Cazenga",
  },
};

const {
  nome,
  idade,
  endereco: { cidade },
} = usuario;
console.log(nome, idade, cidade);

function mostraNome({ nome, idade }) {
  console.log(nome, idade);
}

mostraNome(usuario);
