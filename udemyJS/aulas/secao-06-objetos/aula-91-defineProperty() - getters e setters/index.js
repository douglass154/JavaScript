
// defineProperty -> Getters e Setters

function Produto(nome, preco, estoque) {
    let estoquePrivado = estoque;

    // Objetct.defineProperty:
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave se true
        configurable: true, // Se pode ser reconfigurado ou não
        get: function() {
            return estoquePrivado;
        },
        set: function(valor) {
            if (typeof valor !== 'number') {
                throw new TypeError('Esperando valores numerais em "estoque"!!');
            }

            estoquePrivado = valor
        }
    });
};

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = '500'
console.log(p1.estoque);