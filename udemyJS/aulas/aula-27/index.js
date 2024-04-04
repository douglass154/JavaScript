
// Objeto Math aula 27

let num1 = 9.54286;
// num1 = Math.ceil(num1); arredonda para cima
// num1 = Math.floor(num1); arredonda para baixo
// num1 = Math.round(num1); arredonda para o número mais próximo
console.log(num1);

let maxNumber = Math.max(1, 2, 3, 4, 100, -50, -60, 1500, 300);
// aponta o maior número entre os parênteses
let minNumber = Math.min(1, 2, 3, 4, 100, -50, -60, 1500, 300);
// aponto o menor número entre os parênteses

console.log(maxNumber);
console.log(minNumber);

let randonNumber = Math.random(); // gera um número aleatório entre 0 e 1
console.log(randonNumber);


/* Abaixo estou fazendo um código onde gera um número aleatório entre 1 e 100
e arrendonda para o número mais próximo */

const aleatorio = Math.round(Math.random() * (100 - 1) + 1);
console.log(aleatorio);