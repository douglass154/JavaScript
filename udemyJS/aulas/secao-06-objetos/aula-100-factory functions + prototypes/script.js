function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = {
        falar() {
            return `${this.nome} está falando!`;
        },

        comer() {
            return `${this.nome} está comendo!`;
        },

        beber() {
            return `${this.nome} está bebendo!`;
        },
    };

    return Object.create(pessoaPrototype, {
        nome: { value: nome },
        sobrenome: { value: sobrenome },
    });
}

const p1 = criaPessoa('Douglas', 'Silva');
console.log(p1);