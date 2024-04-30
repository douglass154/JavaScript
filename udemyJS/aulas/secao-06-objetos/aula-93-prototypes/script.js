// função Construtora -> molde (classe);
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = () => `${this.nome} ${this.sobrenome}`;

// Instâncias
const pessoa1 = new Pessoa('Luiz', 'O.');
const pessoa2 = new Pessoa('Maria', 'A.');
const data = new Date();

console.dir(pessoa1);
console.dir(data)