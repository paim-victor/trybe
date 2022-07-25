// 1 - crie uma função que retorne uma saudação matinal.

  function morningGreeting() {
    return 'Bom dia!'
  };

// chamando a função para verificar

  console.log(morningGreeting());

// 2 - crie uma função que receba dois números (como parâmetros) e retorne a soma entre eles.

  function soma (numero1, numero2) {
    return numero1 + numero2;
  }

  console.log(soma(3, 8))

// 3 - crie uma função que receba dois números inteiros e retorne o menor valor entre eles.

function menorNum (num1, num2) {
  if (num1 < num2){
    return num1
  } 
  return num2
}

console.log(menorNum(5, 10)) 