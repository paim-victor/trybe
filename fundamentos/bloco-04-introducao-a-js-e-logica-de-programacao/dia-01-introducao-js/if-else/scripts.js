// // // if - se
// // //else - senão

// // let trybe = 16.20;

// // if (trybe >= 14 && trybe < 14.40) {
// //   console.log("Esquenta")
// // }
// // else if(trybe >= 16.30 && trybe < 17.50) {
// //   console.log("Aula ao vivo")
// // }
// // else if(trybe >= 19.40 && trybe < 20) {
// //   console.log("Fechamento")
// // }
// // else {
// //   console.log("Fora dos momentos síncronos")
// // }

// Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
// Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se ela está na lista de espera. Para isso, considere as seguintes informações:
// Se a nota for maior ou igual a 80, imprima "Parabéns, você foi aprovada(o)!"
// Se a nota for menor que 80 e maior ou igual a 60, imprima "Você está na nossa lista de espera"
// Se a nota for menor que 60, imprima "Você foi reprovada(o)"
// Crie uma estrutura condicional utilizando o if, else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
// Altere o valor da nota para verificar se as condições que você implementou funcionam;

const notaPessoaCandidata = 50;

if(notaPessoaCandidata >= 80){
  console.log("Parabéns, você foi aprovada(o).")
} else if(notaPessoaCandidata <= 80 && notaPessoaCandidata >= 60){
  console.log("Você está na nossa lista de espera.")
} else if(notaPessoaCandidata < 60){
  console.log("Você foi reprovado(a).")
}else{
  
}