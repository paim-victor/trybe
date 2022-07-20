// const a = 10;
// const b = 2;

// let adicao = a + b;
// let subtracao = a - b;
// let multiplicacao = a * b;
// let divisao = a / b;
// let modulo = a % b;

// console.log(adicao);
// console.log(subtracao);
// console.log(multiplicacao);
// console.log(divisao);
// console.log(modulo);


// const numeroUm = 15;
// const numeroDois = 8;

// if(numeroUm > numeroDois) {
//   console.log(numeroUm)
// } else if (numeroDois > numeroUm) {
//   console.log(numeroDois)
// }
// else{

// }

// const numeroUm = 27;
// const numeroDois = 33;
// const numeroTres = 21;

// if(numeroUm > numeroDois && numeroUm > numeroTres) {
//   console.log(numeroUm);
// } 
// else if (numeroDois > numeroUm && numeroDois > numeroTres) {
//   console.log(numeroDois);
// }
// else if(numeroTres > numeroUM && numeroTres > numeroDois) {
//   console.log(numeroTres)
// }
// else { 

// }

// const valor = -2;

// if(valor > 0) {
//   console.log("positive")
// } else if (valor < 0) {
//   console.log("negative")
// } else {

// }

// const angulo1 = 90;
// const angulo2 = 45;
// const angulo3 = 45;

// if(angulo1 + angulo2 + angulo3 == 180) {
//   console.log("true")
// }
// else if (angulo1 + angulo2 + angulo3 != 180) {
//  console.log("false")
// }
// else {

// }

// let pecaDeXadrez = "peão";

// if (pecaDeXadrez == "bispo") {
//   console.log("movimentos em diagonal")
// } else if (pecaDeXadrez != "bispo" ){
//   console.log("ERR0R!!!")
// }

// let nota = 3.75;

// if (nota >= 9) {
//   console.log("A")
// } 
// else if(nota >= 8) {
//   console.log("B")
// } 
// else if(nota >= 7) {
//   console.log("C")
// }
// else if(nota >= 6) {
//   console.log("D")
// }
// else if(nota >= 5) {
//   console.log("E")
// }
// else if(nota < 5) {
//   console.log("F")
// } 
// else {

// }

// const numero1 = 10;
// const numero2 = 11;
// const numero3 = 13;

// if (numero1 % 2 === 0|| numero2 % 2 === 0 || numero3 % 2 === 0) {
//   console.log("true")
// } 
// else {
//   console.log("false")
// }

// const numero1 = 10;
// const numero2 = 12;
// const numero3 = 8;

// if (numero1 % 2 === 1 || numero2 % 2 === 1 || numero3 % 2 === 1) {
//   console.log("true")
// }
// else {
//   console.log("false")
// }

// const custoProduto = 20; 
// const valorDeVenda = 15;
// const imposto = 0.2;
// let lucro = 0;

// lucro = (custoProduto * imposto) - valorDeVenda 

// if(lucro > 0) {
//   console.log(lucro)
// }
// else {
//   console.log("ERROR!!!")
// }

let salarioBruto = 5200.00;
let salarioLiquido = 0;
let inss = 0;
let ir = 0;

if(salarioBruto <= 1556.94) {
  inss = salarioBruto * 0.08
  salarioLiquido = salarioBruto - inss 
  console.log(salarioLiquido)
} 
else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
  inss = salarioBruto * 0.09
  salarioLiquido = salarioBruto - inss
  console.log(salarioLiquido)
}
else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
  inss = salarioBruto * 0.11
  salarioLiquido = salarioBruto - inss
  console.log(salarioLiquido)
}
else if (salarioBruto > 5189.82) {
  inss = 570.88
  salarioLiquido = salarioBruto - inss
  console.log(salarioLiquido)
}
else {

}

