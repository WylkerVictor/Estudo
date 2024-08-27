var Produto = /** @class */ (function () {
    function Produto(nome, preco, emEstoque, descricao) {
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.emEstoque = emEstoque;
    }
    Produto.prototype.criarProduto = function () {
        return "Produto: ".concat(this.nome, ", pre\u00E7o: R$ ").concat(this.preco);
    };
    return Produto;
}());
var produto2 = new Produto("Cadeira", 150.00, true);
var produto4 = new Produto("Cama", 400.00, true);
console.log(produto2.criarProduto(), "\n", produto4.criarProduto());
