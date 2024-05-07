
function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;
    
    return Math.round(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new Error('BAD VALUE!'));

        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
};

esperaAi('Frase 1', aleatorio(1, 3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi(2, aleatorio(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi('Frase 3', aleatorio(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    })
    .catch(error => {
        console.log(error);
    })