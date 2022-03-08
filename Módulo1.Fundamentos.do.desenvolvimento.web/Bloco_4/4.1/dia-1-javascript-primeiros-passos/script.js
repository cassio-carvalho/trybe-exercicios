// // Exercício 1
// const a = 5;
// const b = 10;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// // Exercício 2

// const num1 = 2;
// const num2 = 3;

// if (num1 > num2) {
//   console.log("Maior é", num1);
// }
// else {
//   console.log("Maior é", num2)
// }

// // Exercício 3

// const num3 = 20;
// const num4 = 30;
// const num5 = 40;

// if (num3 > num4 && num3 > num5) {
//   console.log("Maior número é", num3);
// }
// else if (num4 > num3 && num4 > num5) {
//   console.log("Maior número é", num4);
// }
// else {
//   console.log("Maior número é", num5);
// }

// Exercício 4

// const n = -1;

// if (n > 0) {
//   console.log("positive");
// }
// else if (n < 0) {
//   console.log("negative");
// }
// else {
//   console.log("zero")
// }

// // Exercício 5

// const a = 30;
// const b = 30;
// const c = 120;

// if (a + b + c === 180) {
//   console.log(true);
// }
// else if (a < 0 || b < 0 || c < 0) {
//   console.log("Erro! Ângulo negativo.");
// }
// else {
//   console.log(false);
// }

// Exercício 6

let peca = "BISPO";
let result = peca.toLowerCase()

if (result === "bispo") {
  console.log("diagonais");
}
else if (result === "peao") {
  console.log("frente");
}
else if (result === "rainha") {
  console.log("todos os lados");
}
else if (result === "rei") {
  console.log("todos os lados, 1 casa");
}
else if (result === "cavalo") {
  console.log("em L");
}
else if (result === "torre") {
  console.log("linha");
}
else {
  console.log("Erro. Peça não encontrada")
}