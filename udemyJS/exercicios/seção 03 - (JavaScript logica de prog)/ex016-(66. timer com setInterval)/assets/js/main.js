function relogio() {
    let segundos = 0;
    let tempoPorSegundo;
    
    const pegarSegundos = (segundos) => {
        const data = new Date(segundos * 1000);
    
        return data.toLocaleString('pt-br', {
            timeStyle: 'medium',
            timeZone: 'GMT'
        });
    };
    
    const iniciarRelogio = () => {
        tempoPorSegundo = setInterval(() => {
            segundos++;
            timer.innerHTML = pegarSegundos(segundos);
        }, 1000);
    };
    
    const timer = document.querySelector('.timer');
    const botaoIniciar = document.querySelector('.iniciar');
    const botaoPausar = document.querySelector('.pausar');
    const botaoZerar = document.querySelector('.zerar');
    
    botaoIniciar.classList
    
    document.addEventListener('click', (evento) => {
        const elemento = evento.target;
    
        if(elemento.classList.contains('iniciar')) {
            timer.classList.remove('pausado');
            clearInterval(tempoPorSegundo);
            iniciarRelogio();
        }
    
        if(elemento.classList.contains('pausar')) {
            timer.classList.add('pausado');
            clearInterval(tempoPorSegundo);
        }
    
        if(elemento.classList.contains('zerar')) {
            segundos = 0;
            timer.innerHTML = '00:00:00'
            timer.classList.remove('pausado');
            clearInterval(tempoPorSegundo);
        }
    });
}

relogio();