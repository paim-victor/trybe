//1 -
  let resultado = 10;
  for (let i = 1; i < 10; i += 1) {
    resultado *= i;
  }
  console.log(resultado)

//2 - 
  let palavra = 'tryber';
  let inverterPalavra = '';
  
  for (let index = 0; index <palavra.length; index += 1) {
    inverterPalavra += palavra[palavra.length - 1 - index]
  }

console.log(inverterPalavra)

//3-

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];
let menorPalavra = array[0];

for (let i = 0; i < array.length; i += 1) {
  if(array[i].length > maiorPalavra.length){
    maiorPalavra = array[i];
  }
}

for (let i = 0; i < array.length; i += 1) {
  if (array[i].length < menorPalavra.length) {
    menorPalavra = array[i];
  }
}

console.log(maiorPalavra);
console.log(menorPalavra);

//4-

let maiorPrimo = 0;

for(let i = 2; i <= 50; i += 1) {
  let primo = true;
  for (let j = 2; j < i; j += 1) {
    if (i % j === 0) {
      primo = false
      break;
    }
  }
  if (primo) {
    maiorPrimo = i;
  }
}
console.log(maiorPrimo)