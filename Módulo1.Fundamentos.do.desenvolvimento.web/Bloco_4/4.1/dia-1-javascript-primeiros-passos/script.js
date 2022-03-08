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

// let peca = "BISPO";
// let result = peca.toLowerCase()

// if (result === "bispo") {
//   console.log("diagonais");
// }
// else if (result === "peao") {
//   console.log("frente");
// }
// else if (result === "rainha") {
//   console.log("todos os lados");
// }
// else if (result === "rei") {
//   console.log("todos os lados, 1 casa");
// }
// else if (result === "cavalo") {
//   console.log("em L");
// }
// else if (result === "torre") {
//   console.log("linha");
// }
// else {
//   console.log("Erro. Peça não encontrada")
// }

// Exercício 7

// const nota = 10;

// if (nota > 90 && nota <= 100) {
//   console.log("Nota A");
// }
// else if (nota >= 80 && nota < 90) {
//   console.log("Nota B");
// }
// else if (nota >= 70 && nota < 80) {
//   console.log("Nota C");
// }
// else if (nota >= 60 && nota < 70) {
//   console.log("Nota D");
// }
// else if (nota >= 50 && nota < 60) {
//   console.log("Nota E");
// }
// else if (nota < 50 && nota > 0) {
//   console.log("Nota F");
// }
// else {
//   console.log("Erro! Nota inválida.")
// }

// Exercício 8

// const a = 1;
// const b = 1;
// const c = 3;

// if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
//   console.log(true);
// }
// else{
//   console.log(false);
// }

// Exercício 9

// const a = 1;
// const b = 2;
// const c = 2;

// if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
//   console.log(true);
// }
// else{
//   console.log(false);
// }

// Exercício 10

// const custo = 100;
// const custoTotal = custo + custo * 0.2;
// const venda = 200;
// const quantidade = 1000;

// if (custo < 0 || custoTotal < 0 || venda < 0) {
//   console.log("Erro! Valor incorreto.")
// }
// else {
//   console.log("O lucro de 1.000un vendidas é:", (venda - custoTotal) * quantidade)
// }

// Exercício 11

const salarioBruto = 3000;
let inss = null;
let salarioInss = null;
let ir = null;
let salarioLiquido = null;

if (salarioBruto <= 1556.94) {
  inss = salarioBruto * 0.08;
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  inss = salarioBruto * 0.09;
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  inss = salarioBruto * 0.11;
}
else {
  inss = 570.88;
}

salarioInss = salarioBruto - inss

console.log(salarioInss)

// if (salarioBruto <= 1903.98) {
//   ir = 0;
// }
// else if (salarioBruto )

