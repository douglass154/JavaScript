function random(numMin, numMax) {
    const r = Math.random() * (numMax - numMin) + numMin;
    return Math.round(r);
}

const numMin = 1;
const numMax = 100;
let rand = random(numMin, numMax);

// Primeiro faz a verificação da condição e depois executa;
while(rand !== 10) {
    let rand = random(numMin, numMax);
    console.log(rand);
}

console.log('######');

// Executa primeiro, depois faz a verificação da condição;
do {
    rand = random(numMin, numMax);
    console.log(rand);
} while (rand !== 10);