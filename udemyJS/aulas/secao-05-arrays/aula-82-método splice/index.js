const nomes = ['Douglas', 'Augusto', 'Icaro', 'Risuhi', 'Gui', 'Lorenzo'];

const primeiroNome = nomes.splice(2, 1);
const sobrenome = nomes.splice(4, 1);
console.log(sobrenome);

let nomeCompleto = [primeiroNome, sobrenome];
console.log(nomeCompleto);

nomeCompleto = nomeCompleto.join(' ');
console.log(nomeCompleto);