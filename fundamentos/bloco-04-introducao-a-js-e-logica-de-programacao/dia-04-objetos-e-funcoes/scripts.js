//pra fixar

let player = {
  name: 'Marta',
  lasName:  'Silva',
  age: 34,
  medals: { goden: 2, silver: 3 },
  bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018]
}

console.log('A jogadora ' + player.name + ' ' + player.lasName + ' tem ' + player['age'] + ' anos de idade.')

console.log('A jogadora ' + player.name + ' foi eleita a melhor do mundo por 6 vezes: (' + player.bestInTheWorld + ').')