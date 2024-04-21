function criaCulculadora() {
    return {
        // Atributos
        display: document.querySelector('.display'),

        
        // metódos
        iniciaCalculadora() {
            // calculadora.cliqueBotoes()
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        cliqueBotoes() {
            // this -> aqui é a calculadora
            document.addEventListener('click', (event) => {
                const elemento = event.target;

                if (elemento.classList.contains('btn-num')) {
                    // calculador.btnParaDisplay()
                    this.btnParaDisplay(elemento.innerText);
                };

                if (elemento.classList.contains('btn-clear')) {
                    this.limparDisplay();
                };

                if (elemento.classList.contains('btn-del')) {
                    this.limparUmNumeroDoDisplay()
                };

                if (elemento.classList.contains('btn-eq')) {
                    this.realizaAEquacao();
                };

                this.display.focus();
            });
        },

        btnParaDisplay(innerText) {
            // calculadora.display.value
            this.display.value += innerText;
        },

        limparUmNumeroDoDisplay() {
            this.display.value = this.display.value.slice(0, -1);
        },

        limparDisplay() {
            this.display.value = '';
        },

        realizaAEquacao() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if (!conta) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = conta;
            } catch(e) {
                alert('Conta inválida!');
                return;
            }
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', (event) => {
                const tecla = event;

                if (tecla.keyCode === 13) {
                    this.realizaAEquacao();
                };
            });
        },
    };
};

const calculadora = criaCulculadora();
calculadora.iniciaCalculadora();