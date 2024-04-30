
// const numeros = [5, 50, 80, 1, 2, 3, 4, 5, 8, 7, 11, 15, 22, 27];

// const numerosMaioresQue10 = numeros.filter(valor => valor > 10);
// console.log(numerosMaioresQue10);


const pessoa = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47},
];

nomesMaisQ5Letras = pessoa.filter(object => object.nome.length >= 5);
console.log(nomesMaisQ5Letras);

pessoas50AnosOuMais = pessoa.filter(object => object.idade > 50)
console.log(pessoas50AnosOuMais);

nomesTerminaComA = pessoa.filter((object) => {
    return object.nome.toLowerCase().endsWith('a');
});
console.log(nomesTerminaComA);