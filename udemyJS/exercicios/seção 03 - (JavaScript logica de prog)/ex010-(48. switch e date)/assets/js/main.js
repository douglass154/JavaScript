
// const data = new Date;

// const diaSemana = data.getDay();
// const diaDoMes = zeroAEsquerda(data.getDate());
// const mes = data.getMonth();
// const ano = data.getFullYear();

// const hora = zeroAEsquerda(data.getHours());
// const minutos = zeroAEsquerda(data.getMinutes());

// const diaSemanaTexto = tranformarDiaSemana(diaSemana);
// const mesTexto = transformarMes(mes);

// function tranformarDiaSemana(diaSemana) {
//     let diaSemanaTexto = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

//     return diaSemanaTexto[diaSemana];
// }

// function transformarMes(mes) {
//     let mesTexto = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    
//     return mesTexto[mes];
// }

// function zeroAEsquerda(num) {
//     return num < 10 ? `0${num}` : num;
// }

// const h1 = document.querySelector('.container h1');
// h1.innerHTML = `${diaSemanaTexto}, ${diaDoMes} de ${mesTexto} de ${ano} <br> ${hora}:${minutos}`;


const h1 = document.querySelector('.container h1');
const data = new Date();

h1.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'short'});