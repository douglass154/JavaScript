var elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'section', texto: 'Frase 3' },
    { tag: 'footer', texto: 'Frase 4' }
];

const container = document.querySelector('.container');
const divPai = document.createElement('div');

container.appendChild(divPai);

for(let i = 0; i < elementos.length; i++) {
    let { tag, texto } = elementos[i];

    let tagsCriadas = document.createElement(tag);
    divPai.appendChild(tagsCriadas);

    let textosCriados = document.createTextNode(texto);
    tagsCriadas.appendChild(textosCriados);
}



// const p = document.createElement('p');
// const divFilho = document.createElement('div');
// const footer = document.createElement('footer');
// const section = document.createElement('section');

// divPai.appendChild(p);
// divPai.appendChild(divFilho);
// divPai.appendChild(footer);
// divPai.appendChild(section);

// const elementos = [
//     { tag: 'p', texto: 'Frase 1' },
//     { tag: 'div', texto: 'Frase 2' },
//     { tag: 'footer', texto: 'Frase 3' },
//     { tag: 'section', texto: 'Frase 4' }
// ];

// const textoP = document.createTextNode(elementos.texto);