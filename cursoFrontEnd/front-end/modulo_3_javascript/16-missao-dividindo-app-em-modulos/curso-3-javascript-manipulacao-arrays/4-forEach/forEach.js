function percorre_produtos_com_foreach() {
    const produtos = [
        {id: 1, nome: "Açucar", estoque: 100, valor: 2.00},
        {id: 2, nome: "Álcool 70", estoque: 50, valor: 9.95},
        {id: 3, nome: "Luvas Descartáveis", estoque: 1000, valor: 2.50}
    ];
    
    function imprimir_produto(produto, index) {
        console.log(index + " - " + produto.nome);
    }
    
    produtos.forEach(imprimir_produto);
}

const carrinho = [
    {nome: "The Legend of Zelda", qtd: 1, valor: 250},
    {nome: "Super Mario Kart 8", qtd: 1, valor: 300},
    {nome: "New Super Mario Bros", qtd: 1, valor: 250}
];

function imprime_item_carrinho(produto, index) {
    let texto = index + " - ";
    texto += produto.qtd + " UND ";
    texto += produto.nome + " - ";
    texto += "R$" + produto.valor + " - ";
    texto += "R$" + produto.qtd * produto.valor;

    console.log(texto)
}

carrinho.forEach(imprime_item_carrinho);