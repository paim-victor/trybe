let myArray = [34, 55, 27, 12, 97, 58];

console.log(myArray);


// console.log(myArray.length);

//for (valor-inicial; condição-de-parada; incremento/decremento) {}

for (let index = 0; index < myArray.length; index += 2) {
  console.log(index, '-->', myArray[index])
}

// for (let array of myArray) {
//   console.log(array);
// }
