
// As funções são first-class objects (objetos de primeira classe);

// 1ª Declaração de função (Function hoisting)
function falaOi() {
    console.log('Oi');
}
falaOi();



// 2ª Declaração de função: function expression;
const souUmDado = function() {
    console.log('Sou um dado...');
};

function receberFuncao(funcao) {
    funcao();
}
receberFuncao(souUmDado);

// A função como dado (functions expression), podem ser chamadas tanto da maneira convencional, quannto da forma do código acima.



// 3ª Declaração de função: Arrow functions (function expression);
const funcaoArrow = () => {
    console.log('Sou uma arrow function...');
};
funcaoArrow();



// 4ª Declaração de função: Dentro de objetos (function expression);
const obj = {
    falar() {
        console.log('Sou uma função em um objeto...');
    }
};
obj.falar();