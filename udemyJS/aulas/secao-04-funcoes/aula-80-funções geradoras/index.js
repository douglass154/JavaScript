function* geradora1() {
    // Código qualquer
    yield 'Valor 1';

    // Código qualquer
    yield 'Valor 2';

    // Código qualquer
    yield 'Valor 3';
}

const g1 = geradora1();
for (let valor of g1) {
    console.log(valor);
}