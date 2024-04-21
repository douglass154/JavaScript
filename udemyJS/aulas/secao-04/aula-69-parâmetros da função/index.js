// function minhaFuncao(a, b, c) {
//     let soma = 0;

//     for (let argumento of arguments) {
//         soma += argumento;
//     }

//     console.log(soma, a, b, c);
// }
// minhaFuncao(1, 2, 3, 4, 5);



// function desestruturacaoObjeto({nome, sobrenome, idade}) {
//     console.log(nome, sobrenome, idade);
// }

// const obj = {
//     nome: 'Douglas',
//     sobrenome: 'Silva',
//     idade: 19
// };
// desestruturacaoObjeto(obj);



// function desestruturacaoArray([indice01, indice02, indice03]) {
//     console.log(indice01, indice02, indice03);
// }

// const array = ['Douglas', 'Silva', 19];
// desestruturacaoArray(array);



const calcular = (operador, acumulador, ...numeros) => {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }

    console.log(acumulador);
};

calcular('+', 0, 1, 2, 3, 4, 5, 6, 7);