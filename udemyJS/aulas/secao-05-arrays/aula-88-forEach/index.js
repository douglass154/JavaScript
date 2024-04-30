
const numeros = [10, 20, 30];

// numeros.forEach((valor, indice, array) => {}) --> Sintaxe

let soma = 0;
numeros.forEach((valores) => {
    soma += valores;
});

console.log(soma);