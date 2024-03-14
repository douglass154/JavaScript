function contar() {
    var inicio = document.querySelector('#inicio')
    var fim = document.querySelector('#fim')
    var pular = document.querySelector('#pular')
    var preparando = document.querySelector('#preparando')

    var valorInicial = Number(inicio.value)
    var valorFinal = Number(fim.value)
    var pularValor = Number(pular.value)

    if (pularValor <= 0) {
        alert('Valor inválido em "Passo", será considerado o número 1')
        pularValor = 1
    }

    if (valorInicial == 0 || valorFinal == 0) {
        alert('Impossível contar')
    } else {
        preparando.innerHTML = 'Contagem:'

        if (valorInicial < valorFinal) {
            for (let contador = valorFinal; contador <= valorFinal; contador += pularValor) {
                preparando.innerHTML += ` ${contador} &#x1F449`
            }
        } else {
            for (let contador = valorFinal; contador >= valorFinal; contador -= pularValor) {
                preparando.innerHTML += ` ${contador} &#x1F449`
            }
        } 

        preparando.innerHTML += '\u{1F3C1}'
    }
}