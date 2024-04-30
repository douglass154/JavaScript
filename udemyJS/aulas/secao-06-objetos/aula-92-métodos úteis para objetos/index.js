/* 
--> Métodos que ainda não vi:

- Object.assign() -> Copia um objeto para um outro objeto existente, ou um novo objeto vázio;
- Oject.isFrozen() -> Checa se um objeto está congelado, se estiver, retorna true, se não retorna false;
- Object.values() -> Retorna um array com os valores de um objeto;
- Object.entries() -> Retorna um array com pares entre as chaves e os valores de um objeto;
- Object.getOwnPropertyDescriptor() -> 
*/


/* 
--> Métodos que eu já vi:

- Object.freeze() -> Congela um objeto impossibilitando fazer alterações por fora;
- Object.keys() -> Retorna um array com as chaves de um objeto;

- Object.defineProperties() -> Define várias propriedades;
- Object.defineProperty() -> Define uma propriedade;
*/



const produto = {nome: 'Caneca', preco: 1.90, material: 'vidro'};
// const outraCoisa = {...produto, estoque: 100};

console.log(produto)
console.log(Object.values(produto));
console.log();
// console.log(outraCoisa)
// console.log(Object.entries(outraCoisa));

for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}








