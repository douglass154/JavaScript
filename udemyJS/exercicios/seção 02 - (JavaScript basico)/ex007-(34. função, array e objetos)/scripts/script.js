function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector('#nome');
        const sobrenome = form.querySelector('#sobrenome');
        let peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');

        if (Number(nome.value)) {
            alert('Não foi possível guardar este Nome');
        } else if (Number(sobrenome.value)) {
            alert('Não foi possível guardar este Sobrenome');
        } else {
            pessoas.push({
                nome: nome.value,
                sobrenome: sobrenome.value,
                peso: peso.value,
                altura: altura.value
            })

            console.log(pessoas);

            resultado.innerHTML += `<p><strong>Nome:</strong> ${nome.value}</br>
            <strong>Sobrenome:</strong> ${sobrenome.value}</br>
            <strong>Peso:</strong> ${peso.value.replace('.' , ',')}</br>
            <strong>Altura:</strong> ${altura.value.replace('.' , ',')}</p>`;
        }
    }

    // Forma moderna de adicionar eventos
    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();