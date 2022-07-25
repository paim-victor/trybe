//pedidos de pizza

let pizzas = {
  sabor: 'Palmito',
  preco: 39.90,
  bordaCatupiry: true
};

for (let key in pizzas) {
  console.log(pizzas[key]);
};

let pizzasDoces = ['chocolate', 'banana', 'morando']

for (let key in pizzasDoces) {
  console.log(key, pizzasDoces[key])
}

let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let index in car) {
  console.log(index, car[index]);
}

