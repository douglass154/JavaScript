function parimpar(n) {
    if(n % 2 == 0) {
        return 'par!'
    } else {
        return 'impar!'
    }
}

let resultado = parimpar(12)
console.log(`O número é ${resultado}`)