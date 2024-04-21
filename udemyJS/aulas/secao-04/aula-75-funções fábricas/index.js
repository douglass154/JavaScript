
// Factory functions (funções fábricas);
function criaPessoa(nome, sobrenome, peso, altura) {
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },

        fala(assunto = 'funções contrutoras') {
            return `${this.nome} está falando sobre ${assunto}`
        },

        peso,
        altura,

        // Getter
        get imc() {
            const imcTotal =  this.peso / (this.altura ** 2);
            return imcTotal.toFixed(2);
        }
    };
};

const p1 = criaPessoa('Douglas', 'Silva', 75.90, 1.95);

p1.nomeCompleto = 'Augusto Cesar Nogueira'
console.log(`${p1.nomeCompleto} tem ${p1.peso.toFixed(2)}kg e ${p1.altura} de altura, seu IMC é ${p1.imc}`);

console.log(p1.nome);
console.log(p1.sobrenome);