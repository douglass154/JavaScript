/*

Promise.all()
Promise.race()
Promise.resolve()
Promise.reject()

*/

function aleatorio(min, max) {
    min *= 1000;
    max *= 1000;

    return Math.round(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject(false);
            return;
        }

        setTimeout(() => {
            resolve(`${msg.toUpperCase()} - Passei na promise!`);
        }, tempo);
    });
}

const promises = [
    esperaAi('Promise 1', aleatorio(1, 3)),
    esperaAi('Promise 2', aleatorio(1, 3)),
    esperaAi('Promise 3', aleatorio(1, 3)),
    // esperaAi(1000, 1000),
];

// Promise.race(promises)
//     .then(valor => {
//         console.log(valor);
//     })
//     .catch(error => {
//         console.log(error);
//     });

function baixaPagina() {
    const emCache = true;

    if (emCache) {
        return Promise.reject('Página em cache!');
    } else {
        return esperaAi('Baixei a página', 3000);
    };
};

baixaPagina()
    .then(valor => {
        console.log(valor);
    })
    .catch(error => {
        console.log('Error: '+ error);
    })