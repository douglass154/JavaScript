for(let i = 0; i <= 20; i++) {
    let resultado;

    i % 2 === 0 ? resultado = 'Par' : resultado = 'Impar';
    console.log(`Número ${i} é: ${resultado}`);
};


const frutas = ['Maçã', 'Romã', 'Pêra', 'Uva', 'Melância', 'Banana', 'Melão'];

for(let i = 0; i < frutas.length; i++) {
    console.log(`${i}º índice,`, frutas[i]);
}