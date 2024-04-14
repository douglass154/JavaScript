
function zeroAEsquerda(num) {
    return num < 10 ? `0${num}` : num;
}

function formataData(data) {
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const dia = zeroAEsquerda(data.getDate());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano}  ${hora}:${min}:${seg}`
}

const data = new Date()
const dataBrasil = formataData(data)
console.log(dataBrasil);

// const data = new Date();
// const seg = String(data.getSeconds()).padStart(2, '0');

// console.log(seg);