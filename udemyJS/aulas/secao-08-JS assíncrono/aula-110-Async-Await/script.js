function rand(min = 0, max = 3) {
    min *= 1000;
    max *= 1000;

    return Math.round(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('Valor inválido');
            return;
        }

        setTimeout(() => {
            resolve(`${msg.toUpperCase()} - Passei na promise!`);
        }, tempo);
    });
}

/*
utilização normal do Promise

esperaAi('Fase 1', rand())
    .then(valor => {
        console.log(valor);
        return esperaAi('Fase 2', rand());
    })
    .then(valor => {
        console.log(valor);
        return esperaAi(3, rand());
    })
    .then(valor => {
        console.log(valor);
    })
    .catch(error => {
        console.log(`${new TypeError}: ${error}`);
    })
*/

// Async e Await abaixo:

async function executa() {
    try {
        const fase1 = esperaAi('Fase 1', 1000);
        console.log(fase1);
        
        setTimeout(() => {
            console.log('Essa Promise estava pendente: ', fase1);
        }, 1100);

        const fase2 = await esperaAi('Fase 2', rand());
        console.log(fase2);

        const fase3 = await esperaAi('Fase 3', rand());
        console.log(fase3);

        console.log('Terminamos na', fase3);
    } catch (error) {
        console.log(`${new TypeError()}: ${error}`);
    }
}

executa();

// pendind -> Pendente;
// fullfilled -> resolvida;
// rejected -> rejeitada;