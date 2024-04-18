
const soma = (x, y) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new Error('Um dos valores não é um número');
    }

    return x + y;
}

try {
    console.log(soma(5, 3));
    console.log(soma('1', 5));
} catch(error) {
    // console.log(error);
    console.log("Lançar algo mais agrádavel ao usuário, no front-end");
}


// try {
//     console.log(naoExisto);
// } catch(err) {
//     console.log('Não existo não existe!');
//     console.log(err);
// }