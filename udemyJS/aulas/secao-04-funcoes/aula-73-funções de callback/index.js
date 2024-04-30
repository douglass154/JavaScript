
function tempoAleatorio(min = 1000, max = 3000) {
    const randomNumber = Math.random() * (max - min) + min;
    return Math.round(randomNumber);
};

function f1(callback) {
    setTimeout(() => {
        console.log('f1');
        if (callback) callback();

    }, tempoAleatorio());
};

function f2(callback) {
    setTimeout(() => {
        console.log('f2');
        if (callback) callback();

    }, tempoAleatorio());
};

function f3(callback) {
    setTimeout(() => {
        console.log('f3');
        if (callback) callback();

    }, tempoAleatorio());
};

f1(f1CallBack);

function f1CallBack() {
    f2(f2CallBack);
}

function f2CallBack() {
    f3(f3CallBack);
}

function f3CallBack() {
    setTimeout(() => {
        console.log('Olá, Mundo!');

    }, tempoAleatorio());
};