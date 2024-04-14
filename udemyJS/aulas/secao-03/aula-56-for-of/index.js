const nomes = ['Otávio', 'Luiz', 'Douglas', 'Augusto'];

for(let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

console.log('\n#######\n')

// Retorna os índices ou o valor
for(let indice in nomes) {
    console.log(indice, nomes[indice]);
}

console.log('\n#######\n')

// Retorna o valor
for(let valor of nomes) {
    console.log(valor);
}

console.log('\n#######\n')

nomes.forEach( (valor, indice, array) => {
    console.log(valor, indice, array);
})