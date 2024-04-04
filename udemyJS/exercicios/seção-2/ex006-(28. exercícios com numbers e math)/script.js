const numeroImput = Number(prompt('Digite um número abaixo').replace(',' , '.'));

const textoTitulo = document.querySelector('#numero-titulo');
const texto = document.querySelector('#texto');

textoTitulo.innerHTML = numeroImput;
texto.innerHTML = `<p>Raiz quadrada: <strong>${(numeroImput ** 0.5).toFixed(2)}</strong></p>`;
texto.innerHTML += `<p>${numeroImput} é inteiro: <strong>${Number.isInteger(numeroImput)}</strong></p>`;
texto.innerHTML += `<p>${numeroImput} é NaN: <strong>${Number.isNaN(numeroImput)}</strong></p>`;
texto.innerHTML += `<p>Arredondado para baixo: <strong>${Math.floor(numeroImput)}</strong></p>`;
texto.innerHTML += `<p>Arredondado para cima: <strong>${Math.ceil(numeroImput)}</strong></p>`;
texto.innerHTML += `<p>Com duas casas decimais: <strong>${numeroImput.toFixed(2)}</strong></p>`