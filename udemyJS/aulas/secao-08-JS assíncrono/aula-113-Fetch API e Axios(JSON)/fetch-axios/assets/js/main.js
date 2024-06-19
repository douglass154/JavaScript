/* 
Fetch API

fetch('pessoas.json')
    .then(resposta => resposta.json())
    .then(json => carregaElementosNaPagina(json));
*/

// Axios
axios('pessoas.json')
  .then(resposta => carregaElementosNaPagina(resposta.data));


function carregaElementosNaPagina(json) {
    const table = document.createElement('table');

    json.forEach(pessoa => {
        const tr = document.createElement('tr');

        let td = document.createElement('td');
        td.innerHTML = pessoa.nome;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.idade;
        tr.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoa.salario;
        tr.appendChild(td);

        table.appendChild(tr);
    });

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}
