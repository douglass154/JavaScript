// Funções construtotas -> retornam objetos
// Funções fabrica -> retornam objetos
// Construtoras -> Pessoa (new);

function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados: 
    // Apenas disponível dentro da função construtora;
    const atributoInterno = 123456;
    const metodoInterno = () => {};


    
    // Atributos ou métodos públicos:
    // Disponíveis para utilizar no escopo global;
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log(`${this.nome}: Sou um método!`);
    };
}

const p1 = new Pessoa('Douglas', 'Silva');
const p2 = new Pessoa('Augusto', 'Cesar');
p2.metodo();
