function Calculadora() {
    const display = document.querySelector('.display');


    this.iniciarCalculadora = () => {
        cliqueBotoes();
        pressionaEnter();
    };

    const cliqueBotoes = () => {
        document.addEventListener('click', (event) => {
            const elemento = event.target;

            if (elemento.classList.contains('btn-num')) botaoParaODisplay(elemento.innerText);

            if (elemento.classList.contains('btn-clear')) limparTudo();

            if (elemento.classList.contains('btn-del')) apagarUmPorUm()

            if (elemento.classList.contains('btn-eq')) fazerConta()

            display.focus();
        });
    };

    const botaoParaODisplay = (innerText) => display.value += innerText;

    const limparTudo = () => display.value = '';

    const apagarUmPorUm = () => display.value = display.value.slice(0, -1);

    const fazerConta = () => {
        let resultado = display.value;

        try {
            resultado = eval(resultado);

            if (!resultado) {
                alert('Conta inválida!');
                return;
            }

            display.value = resultado;
        } catch (e) {
            alert('Conta inválida!');
        }
    };

    const pressionaEnter = () => {
        display.addEventListener('keyup', (event) => {
            const tecla = event;
            
            if (tecla.keyCode === 13) {
                fazerConta();
            };
        });
    };
}

const calculadora = new Calculadora();
calculadora.iniciarCalculadora();
