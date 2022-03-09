let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

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

let soma = 0;
let media = 0;

for (let i = 0; i < numbers.length; i += 1) {
    soma += numbers[i];
  }
  media = soma / numbers.length;
  console.log(media);