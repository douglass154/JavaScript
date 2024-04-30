function escolhaMultiplicador(multiplicador) {
    return function(numero) {
        return numero * multiplicador;
    };
};

const duplica = escolhaMultiplicador(2);
const triplica = escolhaMultiplicador(3);
const quadriplica = escolhaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));