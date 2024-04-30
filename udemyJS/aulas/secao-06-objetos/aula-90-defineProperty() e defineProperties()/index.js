// var obj = {};
// Object.defineProperties(obj, {
//     property1: {
//         value: true,
//         writable: true,
//     },
//     property2: {
//         value: 'Hello',
//         writable: false,
//     },
//     // etc. etc.
// });


// defineProperty  e  defineProperties:

function Produto(nome, preco, estoque) {
    // Objetct.defineProperty:
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave se true 
        value: estoque, // valor

        writable: false, 
        // Vai poder ser alterado ou não?
        // Se sim, true. Se não, false.

        configurable: false 
        // Vai poder ser reconfigurado ou não?
        // Se sim, true. Se não, false.
    });


    // Objetcy.defineProperties:
    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: true
        },

        preco: {
            enumerable: true,
            value: preco,
            writable: false,
            configurable: true
        },
    });
};

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));

for (valor in p1) {
    console.log(p1[valor]); 
}