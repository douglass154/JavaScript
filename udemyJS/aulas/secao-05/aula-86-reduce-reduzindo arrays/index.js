
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const somaNumeros = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0) acumulador.push(valor);
    
    return acumulador;
}, []);
// console.log(somaNumeros);







const pessoa = [
    { nome: 'Luiz', idade: 34 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 80 },
];

const pessoaMaisVelha = pessoa.reduce((acumulador, valor) => {
    console.log(acumulador, valor);
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(pessoaMaisVelha);