interface ProdutoInterface {
    nome: string;
    preço: number;
    descricao: string;
    emEstoque: boolean;
}

class Produto implements ProdutoInterface {
    nome: string;
    preco: number;
    descricao: string;
    emEstoque: boolean;

constructor(nome: string, preco: number, emEstoque: boolean, descricao: string) {
    this.nome = nome;
    this.preco = preco;
    this.descricao = descricao;
    this.emEstoque = emEstoque;
}

criarProduto(): string {
    return `Produto: ${this.nome}, preço: R$ ${this.preco}`;
  }
}

const produto2 = new Produto("Cadeira", 150.00, true);
const produto4 = new Produto("Cama", 400.00, true);

console.log(produto2.criarProduto(), "\n" produto4.criarProduto());
