const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av. Brasil',
        numero: 320
    }
};

// atribuição via desestruturação 
const { nome = '', sobrenome = '' } = pessoa;
console.log(nome, sobrenome);

const { endereco: { rua = '', numero = '' } } = pessoa;
console.log(`mora na ${rua}, numero ${numero}`);



// operador rest (...)
// const { nome, ...pegarResto } = pessoa;
// console.log(nome);
// console.log(pegarResto);