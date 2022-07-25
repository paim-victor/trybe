//1-

// function verificaPalindrome(palavra){
//   for(index in palavra){
//     if(palavra[index] != palavra[(palavra.length - 1) - index]){
//       return false;
//     }
//   }
//   return true;
// }


// function verificaPalindrome(string) {
//   let reverse = string.split('').reverse().join('');
//   if (reverse === string) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(verificaPalindrome('abacaxi'))

//2

// function indexDoMaior (numeros){
//   let indexMaior = 0;
//   for (let index in numeros){
//     if (numeros[indexMaior] < numeros[index]){
//     indexMaior = index;
//     }
//   }
//   return indexMaior;
// }

// console.log(indexDoMaior([2, 3, 6, 7, 10, 1]))

//3

// function indexDoMenor (numeros){
//   let indexMenor = 0;
//   for(let index in numeros){
//     if (numeros[indexMenor] > numeros[index]){
//       indexMenor = index;
//     }
//   }
//   return indexMenor
// }

// console.log(indexDoMenor([2, 4, 6, 7, 10, 0, -3]))

//4

// function nomeMaior (nomes){
//   let nomeMaior = nomes[0];
//   for(let index in nomes){
//     if (nomeMaior.length < nomes[index].length){
//       nomeMaior = nomes[index]
//     }
//   }
//   return nomeMaior
// }

// console.log(nomeMaior(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

//5

// function numeroRepete (numeros){
//   let contadorRepetido = 0;
//   let contadorNumero = 0;
//   let indexNumeroRepetido = 0;
//   for (let index in numeros){
//     let verificaNumero = numeros[index];
//     for (let index2 in numeros) {
//       if (verificaNumero === numeros[index2]){
//         contadorNumero += 1;
//       }
//     }
//     if (contadorNumero > contadorRepetido){
//       contadorRepetido = contadorNumero;
//       indexNumeroRepetido = index;
//     }
//     contadorNumero = 0;
//   }
//   return numeros[indexNumeroRepetido]
// }


// console.log(numeroRepete([2, 3, 2, 5, 8, 2, 3]));

//6

// function somaTudo(numeros) {
//   let total = 0;
//   for (let i = 1; i <= numeros; i += 1) {
//     total = total + i;
//   }
//   return total;
// }
// console.log(somaTudo(5))

// //7 *

//  function verificaFinal(palavra, finalPalavra) {
//   let inversoPalavra = palavra.split('').reverse().join('');
//   let inversoFinalPalavra = finalPalavra.split('').reverse().join('');
//   let resultado = 0;

//   for(let i = 0; i <= inversoFinalPalavra.length; i += 1){
//     if (inversoPalavra[i] !== inversoFinalPalavra[i]) {
//       resultado = false;
      
//     } else {
//       resultado = true;
//     }
//   }
//   return resultado
//  }

//  console.log(verificaFinal('victorpaim', 'im'));