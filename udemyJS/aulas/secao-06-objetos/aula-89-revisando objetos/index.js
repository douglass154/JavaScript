function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,

        apresentacao() {
            return `Olá ${this.nome} ${this.sobrenome}`
        },
    };
};

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.apresentacao = () => {
        return `Olá ${this.nome} ${this.sobrenome}`
    }

    // Congela o objeto para não poder ser manipulado fora da função construtora;
    Object.freeze(this);
}

const p2 = new Pessoa('Augusto', 'Cesar');
console.log(p2.apresentacao());

const p1 = criaPessoa('Douglas', 'Silva')
console.log(p1.apresentacao);