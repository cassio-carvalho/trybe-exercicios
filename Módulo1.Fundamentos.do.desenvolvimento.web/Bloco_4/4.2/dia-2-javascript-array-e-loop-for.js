

//  // Exercicio 1

//  for (let i = 0; i < numbers.length; i += 1) {
//   console.log(i);
// }

// Exercício 2

// let soma = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     soma += numbers[i];
//   }
//   console.log(soma);

// Exercício 3

// let soma = 0;
// let media = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     soma += numbers[i];
//   }
//   media = soma / numbers.length;
//   console.log(media);

// Exercício 4

// let soma = 0;
// let media = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     soma += numbers[i];
//   }
//   media = soma / numbers.length;
//   if (media > 20) {
//     console.log("Valor maior que 20");
//   }
//   else {
//     console.log("Valor menor que 20");
//   }

// Exercício 5

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let maiorNum = 0;
// let numero = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//   numero = numbers[i];
//   maiorNum = Math.max(maiorNum, numero)
// }
// console.log(maiorNum)

// Exercício 6

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impares = 0;
let numero = 0;

for (let i = 0; i < numbers.length; i += 1) {
  numero = numbers[i];
  if (numero % 2 != 0) {
    impares += 1;
  }
}
if (impares > 0) {
  console.log(impares);
}
else {
  console.log("nenhum valor ímpar encontrado");
}
