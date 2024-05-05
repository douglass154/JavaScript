// class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }

//     get nomeCompleto() {
//         return `${this.nome} ${this.sobrenome}`;
//     }

//     set nomeCompleto(valor) {
//         valor = valor.split(' ');
//         this.nome = valor.shift();
//         this.sobrenome = valor.join(' ');
//     }
// }

// const p1 = new Pessoa('Douglas', 'Silva');
// p1.nomeCompleto = 'Douglas Silva de Jesus Santos'
// console.log(p1.nomeCompleto);

class Retangulo {
    #altura;
    #largura;

    constructor(altura, largura) {
        this.#altura = altura;
        this.#largura = largura;
    }

    get area() {
        return this.#altura * this.#largura;
    }
}

const ret = new Retangulo(3, 5);
console.log('area:', ret.area);
