// REST

function soma(a, b, ...pararms) {
  return pararms;
}

console.log(soma(1, 3, 8, 10, 40));

// SPREAD

const usuario = {
  nome: "Domingos",
  idade: 19,
  empresa: "SNIR",
};

const usuario2 = { ...usuario, nome: "João" };

console.log(usuario2);
