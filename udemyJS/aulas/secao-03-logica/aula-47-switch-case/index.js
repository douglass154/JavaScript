
function getDayWeekText(diaSemana) {
    let diaSemanaTexto;

    switch(diaSemana) {
        case 1:
            diaSemanaTexto = 'Domingo!';
            break;
        case 2:
            diaSemanaTexto = 'Segunda-feira!';
            break;
        case 3:
            diaSemanaTexto = 'Terça-feira!';
            break;
        case 4:
            diaSemanaTexto = 'Quarta-feira!';
            break;
        case 5:
            diaSemanaTexto = 'Quinta-feira!';
            break;
        case 6:
            diaSemanaTexto = 'Sexta-feira!';
            break;
        case 7:
            diaSemanaTexto = 'Sábado!';
            break;
    }

    return `${diaSemana}º dia da semana, ${diaSemanaTexto}`
}

const data = new Date();
const diaSemana = data.getDay() + 1;

const diaSemanaTexto = getDayWeekText(diaSemana);
console.log(diaSemanaTexto);