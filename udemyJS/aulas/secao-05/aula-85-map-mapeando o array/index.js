const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map((valor) => valor * 2);
console.log(numerosEmDobro);
console.log();

const pessoa = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const nomePessoal = pessoa.map((obj) => obj.nome);
console.log(nomePessoal);
console.log();

const idades = pessoa.map((obj) => ({ idade: obj.idade }));
console.log(idades);
console.log();

const chavesID = pessoa.map((obj, indice) => {
    const newObj = { ...obj }
    newObj.id = Number((indice + 1) * (Math.random() * (1000 - 1) + 1)).toFixed();
    return newObj;
});

console.log(pessoa)
console.log(chavesID);
