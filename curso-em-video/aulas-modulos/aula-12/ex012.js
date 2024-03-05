var hours = new Date()
var hora = hours.getHours()

var minutes = new Date()
var minuto = minutes.getMinutes()

if (hora < 12) {
    console.log(`Bom dia!! São ${hora}:${minuto} da manhã.`)
} else if (hora >= 12 && hora < 18) {
    console.log(`Boa tarde!! São ${hora}:${minuto} da tarde.`)
} else if (hora <= 24) {
    console.log(`Boa noite!! São ${hora}:${minuto} da noite`)
} else {
    console.log('Esse horário não existe :(')
}