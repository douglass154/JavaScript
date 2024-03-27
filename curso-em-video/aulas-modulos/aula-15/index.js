var num = [6, 4, 9, 2, 3]
num[5] = 7
num.push(5) // acrescenta valor a um array
num.sort() // coloca os elementos do vetor em ordem crescente
/* num.indexOf() // Retorna o número da chave onde o valor definido 
entre os parênteses se encontra. */

console.log(`Todos os valores do vetor são: ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`A chave de acesso para esse valor é ${num.indexOf(12)}`)

