const retornaHora = (data) => {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date!');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleString('pt-br', {
        timeStyle: 'medium'
    });
}

try {
    const data = new Date('01-01-1970 12:47:28')
    const hora = retornaHora();
    console.log(hora);
} catch(err) {
    // Tratar erro
    // console.log(err);
} finally {
    console.log('Tenha um Bom Dia!!')
}
