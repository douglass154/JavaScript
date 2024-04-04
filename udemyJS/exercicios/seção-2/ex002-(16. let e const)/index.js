let pessoa = {
    nome: 'Lorenzo',
    sobrenome: 'Mattos',
    idade: 17,
    peso: 63.70,
    altura: 1.63
}

let anoAtualImput = new Date();
let anoAtual = anoAtualImput.getFullYear();

const anoDeNascimento = anoAtual - pessoa.idade;
const imc = pessoa.peso / (pessoa.altura * pessoa.altura);

console.log(`
    ${pessoa.nome} ${pessoa.sobrenome} tem ${pessoa.idade} anos, nasceu em ${anoDeNascimento}, pesa ${pessoa.peso.toFixed(2)} kg
    e tem ${pessoa.altura}m de altura, seu imc é de ${imc.toFixed(2)}
`);