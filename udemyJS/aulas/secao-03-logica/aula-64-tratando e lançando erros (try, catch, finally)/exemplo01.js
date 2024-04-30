try {
    // É executada quando não há erros;

    console.log('Abri um arquivo.');
    console.log('Manipulei o arquivo e gerou um erro.');
    console.log(a);
    // ia sair daqui e iria para o catch, sem executar o terceiro console.log

    console.log('Fechei o arquivo.');
} catch(err) {
    // É executada quando há erros;

    console.log('Tratando o erro.');
} finally {
    // Sempre é executado mas pode-se omiti-lo
    
    console.log('FINALLY: Eu sempre sou executado.');
}