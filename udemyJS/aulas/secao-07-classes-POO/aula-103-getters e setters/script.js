const _velocidade = Symbol('velocidade');

class Carro {
    // #velocidade; // atributo prívado

    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0; // atributo prívado com Symbol
        // this.#velocidade = 0
    }

    set velocidade(valor) {
        if (typeof valor !== 'number') return;
        if (valor > 100 || valor < 0) return;

        this[_velocidade] = valor;
        // this.#velocidade = valor
    }

    get velocidade() {
        return this[_velocidade];
        // return this.#velocidade;
    } 

    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
        // if (this.#velocidade >= 100) return;
        // this.#velocidade++;
    }

    freiar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
        // if (this.#velocidade <= 0) return;
        // this.#velocidade--;
    }
}

const c1 = new Carro('fusca');
c1.velocidade = 69;
console.log(c1.velocidade);
