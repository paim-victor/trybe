let person = {
  name: 'Marcelo',
  brithdate: '29/10/1970',
  eyeColor: 'Verdes',
  height: '1,79',
  local: { city: 'Salvador', state: 'Bahia' }
}

console.log(person);
console.table(person);
console.log(person.name);
console.log(person.local.city);

person.bloodType = 'A+';

console.log(person);

person['sport'] = 'Natação'
person['eyeColor'] = 'Azuis'

console.log(person);