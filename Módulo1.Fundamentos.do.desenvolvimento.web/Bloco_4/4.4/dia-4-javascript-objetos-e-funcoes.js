// let info = {
//   personagem: 'Margarida',
//   origem: 'Pato Donald',
//   nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
// };

// Exercício 1

  // console.log('Bem vinda, ' + info.personagem);

 // Exercício 2

// info.recorrente = 'Sim';
// console.log(info);

// Exercício 3

// for (dado in info) {
//   console.log(dado);
// }

// Exercício 4

// for (dado in info) {
//   console.log(info[dado]);
// }

// Exercício 5
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info.recorrente = 'Sim';
console.log(info);

let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim',
};

function imprimeAmbos (d1, d2) {
  for (dado in d1) {
    if (dado === 'recorrente' && d1[dado] === 'Sim' && d2[dado] === 'Sim'){
      console.log('Ambos recorrentes');
    }
    else {
      console.log(d1[dado] + ' e ' + d2[dado]);
    }
  }
}
imprimeAmbos (info, info2);