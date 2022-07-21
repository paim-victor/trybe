// Nosso Jogo
let studentGame = [21, 26, 19, 30, 33, 60];

// Jogo Sorteado
// let number1 = Math.floor(Math.random() *60) +1;
// let number2 = Math.floor(Math.random() *60) +1;
// let number3 = Math.floor(Math.random() *60) +1;
// let number4 = Math.floor(Math.random() *60) +1;
// let number5 = Math.floor(Math.random() *60) +1;
// let number6 = Math.floor(Math.random() *60) +1;

let megaSenaNumbers = [];

for (let index = 0; index < 6; index += 1) {
  let randomNumber = Math.floor(Math.random() *60) +1;

  megaSenaNumbers.push(randomNumber);
}

// Quantidade de Acertos
let numberOfHits = 0;

for (let index = 0; index < megaSenaNumbers.length; index += 1) {
  let drawNumber = megaSenaNumbers[index]

  for (let index2 = 0; index2 < studentGame.length; index2 += 1) {
    let studentNumber = studentGame[index2]

    if (studentNumber === drawNumber) {
      numberOfHits += 1;
    }
  }
}

console.log('Jogo do Túlio', studentGame);
console.log('Jogo sorteado', megaSenaNumbers);
console.log('Acertos', numberOfHits);