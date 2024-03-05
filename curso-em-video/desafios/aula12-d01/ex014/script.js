function load() {
    var mensagem = document.getElementById('mensagem')
    var foto = document.getElementById('foto')

    var TakeHours = new Date()
    var hours = TakeHours.getHours()
    var TakeMinutes = new Date()
    var minutes = TakeMinutes.getMinutes()

    if (hours < 5) {
        mensagem.innerHTML = `Agora são <strong>${hours}:${minutes}</strong> da madrugada.`
        document.getElementsByTagName('body')[0].style.backgroundColor = '#0ea7b5'
        foto.innerHTML = "<img src='imagens/night.png'>"
        document.getElementById('title').style.color = '#fff'
        document.getElementById('direitos').style.color = '#fff'
    }
    else if (hours < 12) {
        mensagem.innerHTML = `Agora são <strong>${hours}:${minutes}</strong> da manhã.`
        document.getElementsByTagName('body')[0].style.backgroundColor = '#6bd2db'
        foto.innerHTML = "<img src='imagens/morning.png'>"
    } else if (hours == 12 || hours < 18) {
        mensagem.innerHTML = `Agora são <strong>${hours}:${minutes}</strong> da tarde.`
        document.getElementsByTagName('body')[0].style.backgroundColor = '#e8702a'
        foto.innerHTML = "<img src='imagens/afternoon.png'>"
    } else {
        mensagem.innerHTML = `Agora são <strong>${hours}:${minutes}</strong> da noite.`
        document.getElementsByTagName('body')[0].style.backgroundColor = '#0c457d'
        foto.innerHTML = "<img src='imagens/night.png'>"
        document.getElementById('title').style.color = '#fff'
        document.getElementById('direitos').style.color = '#fff'
    }
}