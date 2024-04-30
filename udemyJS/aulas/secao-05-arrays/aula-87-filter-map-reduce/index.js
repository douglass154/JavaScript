
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosModificados = numeros
    .filter(valores => valores % 2 === 0)
    .map(valores => valores * 2)
    .reduce((acumulador, valores) => acumulador += valores , 0);

console.log(numerosModificados);

// Pares -> [ 50, 80, 2, 8, 22 ];

// Valores dobrados -> [ 100, 160, 4, 16, 44 ];

//Valores dobrados somados -> 324




// const pessoa = [
//     { nome: 'Luiz', idade: 34 },
//     { nome: 'Maria', idade: 23 },
//     { nome: 'Eduardo', idade: 55 },
//     { nome: 'Letícia', idade: 19 },
//     { nome: 'Rosana', idade: 64 },
//     { nome: 'Wallace', idade: 80 },
// ];