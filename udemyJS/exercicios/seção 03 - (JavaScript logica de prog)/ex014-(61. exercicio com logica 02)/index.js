const ePaisagem = (largura, altura) => {
    if(largura > altura) {
        return `Largura: ${largura}px,\nAltura: ${altura}px,\nModo paisagem: ${true}`;
    }

    return `Largura: ${largura}px,\nAltura: ${altura}px,\nModo Paisagem: ${false}`;
}

const dimensao = [0, 0];

for (let i in dimensao) {

    const random = (min, max) => {
        const r = Math.random() * (max - min) + min;
        return Math.round(r);
    }

    const min = 608;
    const max = 1920;
    let rand = random(min, max);

    dimensao.unshift(rand);
    dimensao.pop();
}

console.log(ePaisagem(dimensao[0], dimensao[1]));