
const inputTask = document.querySelector('.input-new-task');
const buttonAddTask = document.querySelector('.btn-add-task');
const taskList = document.querySelector('.task-list');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

inputTask.addEventListener('keypress', (event) => {
    if (event.keyCode === 13) {
        if (!inputTask.value) return;

        criaTarefa(inputTask.value);
    }
})

function limparImputTask() {
    inputTask.value = '';
    inputTask.focus();
}

function criarBotaoDeApagar(li) {
    const botaoDeApagar = document.createElement('button');
    botaoDeApagar.innerText = 'Apagar tarefa';
    
    // botaoDeApagar.classList.add('apagar-tarefa');
    botaoDeApagar.setAttribute('class', 'apagar-tarefa');
    botaoDeApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoDeApagar);
}

function apagarTodasAsTarefas() {
    taskList.innerHTML = ''
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    
    taskList.appendChild(li);
    limparImputTask();
    criarBotaoDeApagar(li);
    salvarTarefas();
}

buttonAddTask.addEventListener('click', () => {
    if (!inputTask.value) return;

    criaTarefa(inputTask.value);
});

document.addEventListener('click', (event) => {
    const elemento = event.target;

    if (elemento.classList.contains('apagar-tarefa')) {
        elemento.parentElement.remove();
        salvarTarefas();
    }
})

document.addEventListener('click', (event) => {
    const elemento = event.target;

    if (elemento.classList.contains('apagar-tudo')) {
        apagarTodasAsTarefas();
        salvarTarefas()
    }
})

function salvarTarefas() {
    const tarefasEmLi = taskList.querySelectorAll('li');
    
    const listaDeTarefas = [];
    
    for (let tarefa of tarefasEmLi) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar tarefa', '');
        
        listaDeTarefas.push(tarefaTexto);
    }
    
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionarTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionarTarefasSalvas();