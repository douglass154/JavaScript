
function verificar() {
    var pegarData = new Date()
    var AnoAtual = pegarData.getFullYear()
    var anoDeNascimento = document.querySelector('#ano_nascimento')
    var resultado = document.querySelector('#resultado')

    if(anoDeNascimento.value.lenght == 0 || anoDeNascimento.value > AnoAtual || anoDeNascimento.value < 1900) {
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = AnoAtual - Number(anoDeNascimento.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(sexo[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade <= 14) {
                // Criança
                img.setAttribute('src', 'imagens/menino-crianca.png')
            } else if (idade <= 26) {
                // Jovem
                img.setAttribute('src', 'imagens/homem-jovem.png')
            } else if (idade <= 55) {
                // Adulto
                img.setAttribute('src' ,'imagens/homem-adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/homem-idoso.png')
            }
        } else if(sexo[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade <= 15) {
                // Criança
                img.setAttribute('src', 'imagens/menina-crianca.png')
            } else if (idade <= 26) {
                // Jovem
                img.setAttribute('src', 'imagens/mulher-jovem.png')
            } else if (idade <= 55) {
                // Adulto
                img.setAttribute('src', 'imagens/mulher-adulta.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/mulher-idosa.png')
                img.style.display = 'block'
                img.style.marginInline = '110px'
            }
        }
        resultado.innerHTML = `${genero} com idade de ${idade} anos.`
        resultado.appendChild(img)
    }
}