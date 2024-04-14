const raiz = function (n) {
    if(Number.isInteger(n ** 0.5)) {
        return n ** 0.5;
    } else {
        return (n ** 0.5).toFixed(2);
    }
};

console.log('\nFunção normal:')
console.log(raiz(9));
console.log(raiz(15));
console.log(raiz(81));
console.log(raiz(1842));



const raizArrowFunction = (n) => {
    if(Number.isInteger(n ** 0.5)) {
        return n ** 0.5;
    } else {
        return (n ** 0.5).toFixed(2);
    }
}
console.log('\n---------------------------\n');

console.log('Função arrow function:')
console.log(raizArrowFunction(123));
console.log(raizArrowFunction(21));
console.log(raizArrowFunction(49));
console.log(raizArrowFunction(615));