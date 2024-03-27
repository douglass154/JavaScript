let num = document.querySelector('#num');
let lista = document.querySelector('#lista')
let res = document.querySelector('#res')

let valores = []

function isNumber(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumber(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado!`
        lista.appendChild(item).style.textAlign = 'Center'
        lista.appendChild(item).style.fontSize = '0.95rem'

        res.innerHTML = ''
    } else {
        alert("Valor inválido ou já encontrado na lista!!")
    }

    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0) {
        alert('Adicione valores antes de finalizar.')
    } else {
        let total = valores.length
        let maiorNumero = valores[0]
        let menorNumero = valores[0]

        let soma = 0
        let media = 0

        for(let pos in valores) {
            soma += valores[pos]

            if(valores[pos] > maiorNumero) {
                maiorNumero = valores[pos]
            }
            if(valores[pos] < menorNumero) {
                menorNumero = valores[pos]
            }
        }

        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>Menor número inserido: ${menorNumero}</p>`
        res.innerHTML += `<p>Maior número inserido: ${maiorNumero}</p>`
        res.innerHTML += `<p>Soma dos números inseridos: ${soma}</p>`
        res.innerHTML += `<p>Média dos números inseridos: ${media}</p>`
    }
}