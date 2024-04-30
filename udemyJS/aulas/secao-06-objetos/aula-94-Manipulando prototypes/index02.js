function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.descontar = function(percentual) {
    this.desconto = this.preco - (this.preco * (percentual / 100));
    return this.desconto.toFixed(2);
};

Produto.prototype.acrescentar = function(percentual) {
    this.acrescimo = this.preco + (this.preco * (percentual / 100));
    return this.acrescimo.toFixed(2);
};

const cafe = new Produto('Café', 6.45);
console.log(
    `Produto: ${cafe.nome} || Preço original: ${cafe.preco} || Preço com desconto: ${cafe.descontar(10)} || Preço com acréscimo: ${cafe.acrescentar(10)}`
);