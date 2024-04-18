const mostrarHora = () => {
    let data = new Date();

    return data.toLocaleString('pt-br', {timeStyle: 'medium'});
}

const timer = setInterval(() => console.log(mostrarHora()), 1000);

setTimeout(() => clearInterval(timer), 10000);
setTimeout(() => console.log('Olá mundo!'), 5000);