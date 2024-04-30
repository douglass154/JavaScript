function retornaFuncao() {
    const nome = 'Douglas';
    return function() {
        return nome; 
        // acessando a variável nome que está em seu escôpo léxico;
    };
};

const recebeFuncao = retornaFuncao();
console.log(recebeFuncao());




function escolhaOperador(operador) {
    return function(num1, num2) {
        // acessando o parâmetro operador em seu escôpo léxico;
        if (operador === '+') return num1 + num2;
        if (operador === '-') return num1 - num2;
        if (operador === '/') return num1 / num2;
        if (operador === '*') return num1 * num2;
    };
};

const calcule = escolhaOperador('*');
console.log(calcule(10, 5));