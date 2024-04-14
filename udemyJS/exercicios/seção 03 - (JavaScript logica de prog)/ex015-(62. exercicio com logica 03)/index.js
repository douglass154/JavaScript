const gerarNumRandom = (min, max) => {
    const valueMinMax = Math.random() * (max - min) + min;
    return Math.round(valueMinMax);
}

const numFizzBuzz = gerarNumRandom(1, 100);

const FizzBuzz = (num) => {
    if(!Number.isInteger(num)) {
        return `Não é um número: ${num}`;
    } else {

        if (num % 3 === 0 && num % 5 === 0) return `Número ${num}: FizzBuzz`; 
        
        else if (num % 3 === 0) return `Número ${num}: Fizz`;
        
        else if (num % 5 === 0) return `Número ${num}: Buzz`;
        
        return num;
    }
}

console.log(FizzBuzz(numFizzBuzz));