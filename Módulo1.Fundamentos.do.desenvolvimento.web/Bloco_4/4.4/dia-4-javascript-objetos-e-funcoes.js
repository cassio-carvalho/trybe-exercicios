let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

// Exercício 1

  // console.log('Bem vinda, ' + info.personagem);

 // Exercício 2

info.recorrente = 'Sim';
console.log(info);

// Exercício 3

for (dado in info) {
  console.log(dado);
}

// Exercício 4

// for (dado in info) {
//   console.log(info[dado]);
// }