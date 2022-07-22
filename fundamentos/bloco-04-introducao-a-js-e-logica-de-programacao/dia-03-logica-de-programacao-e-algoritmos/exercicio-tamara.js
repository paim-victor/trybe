//simulando dados de acesso ao sistema

let userName = 'Tamara Simões';
let userPassword = 1234;
let password = 1234;
let access;

// 1 - Como validar se a senha passada é igual para ser validada?

if (userName === 'Tamara Simões' && password === userPassword) {
  console.log('Acesso permitido!')
  access = true
} else {
  console.log('Acesso negado!')
  access = false
}

// 2 - Faça um programa que com determinada quantidade, adicione pães em uma sacola e exiba quantos pães foram adicionados um por um se o acesso for permitido. Se não permitido o acesso, mostre uma mensagem de erro.

const paes = 10;
let sacola;

if(access === true) {
  for (let index = 1; index <= paes; index += ) {
    sacola = index;
    console.log('Quantidade de pães ' + sacola)
  }
} else {
  console.log('ERROR! Acesso negado')
}

// 3 - Code Review - Crie a primeira receita do robô. Ingredientes: Pão, 5 pedaços de queijo, pão, 5 pedaõs de queijo e fecha com o pão de fechamento

for (let index = 0; index < 2; index += 1) {
  console.log('Pão');

  for (let indexQueijo = 1; indexQueijo <= 5; indexQueijo += 1){
    console.log('Queijo')
  }
}
console.log('Pão de fechamento')