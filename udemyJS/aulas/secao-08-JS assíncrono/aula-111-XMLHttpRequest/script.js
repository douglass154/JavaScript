const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();
    
        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        });
    })
};

document.addEventListener('click', event => {
    const element = event.target;
    const tag = element.tagName.toLowerCase();

    if (tag === 'a') {
        event.preventDefault();
        carregaPagina(element);
    }
});

async function carregaPagina(element) {
    const href = element.getAttribute('href');

    const objConfig = {
        method: 'GET',
        url: href,
    
        sucess(response) {
            carregaResultado(response);
        },
    
        error(errorText) {
            console.log(errorText);
        },
    }

    try {
        const response = await request(objConfig);
        carregaResultado(response);
    } catch(error) {
        console.log(error);
    }
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');

    resultado.innerHTML = response;
}