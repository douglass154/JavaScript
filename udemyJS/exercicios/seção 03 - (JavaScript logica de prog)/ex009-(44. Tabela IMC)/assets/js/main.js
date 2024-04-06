function calcular() {
    const form = document.querySelector('#form');
    const resultado = document.querySelector('.resultado');
    
    function recebeEventoForm(evento) {
        evento.preventDefault();

        let pesoInput = document.querySelector('#peso');
        const alturaInput = document.querySelector('#altura');

        let peso = pesoInput.value;
        const altura = alturaInput.value;
        const calculoIMC = peso / (altura * altura);

        if (calculoIMC < 18.5) {
            resultado.innerHTML = `Seu IMC é ${calculoIMC.toFixed(2).replace(',' , '.')} (Abaixo do Peso)`;
        } else if (calculoIMC < 25) {
            resultado.innerHTML = `Seu IMC é ${calculoIMC.toFixed(2).replace(',' , '.')} (Peso normal)`;
        } else if (calculoIMC < 30) {
            resultado.innerHTML = `Seu IMC é ${calculoIMC.toFixed(2).replace(',' , '.')} (Sobre peso)`;
        } else if (calculoIMC < 35) {
            resultado.innerHTML = `Seu IMC é ${calculoIMC.toFixed(2).replace(',' , '.')} (Obesidade grau 1)`;
        } else if(calculoIMC < 40) {
            resultado.innerHTML = `Seu IMC é ${calculoIMC.toFixed(2).replace(',' , '.')} (Obesidade grau 2)`;
        } else {
            resultado.innerHTML = `Seu IMC é ${calculoIMC.toFixed(2).replace(',' , '.')} (Obesidade grau 3)`
        }
    }

    form.addEventListener('submit', recebeEventoForm);
}

calcular();