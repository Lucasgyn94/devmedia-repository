function retorna_jogos_reduzidos() {
    const jogos = [
        {id: 1, nome: "Donkey Kong", anoLancamento: 1979},
        {id: 2, nome: "Galaxian", anoLancamento: 1981},
        {id: 3, nome: "Ms. Pac-Man", anoLancamento: 1981},
        {id: 4, nome: "Asteroids", anoLancamento: 1979}
    ];
    
    const retorna_nomes_jogos = (nomes, jogo) => {
        return nomes + jogo.nome + " - ";
    }
    
    const nomes_jogos = jogos.reduce(retorna_nomes_jogos, "");
    
    console.log(nomes_jogos.slice(0, -2));
    
    
}

const itens_carrinho = [
    {id: 1, nome: "Açucar", qtd: 2, valor: 2.00},
    {id: 2, nome: "Álcool 70", qtd: 3, valor: 9.95},
    {id: 3, nome: "Lucas Descartáveis", qtd: 50, valor: 2.50},
    {id: 4, nome: "Papel Toalha", qtd: 1, valor: 2.00}
]

const retorna_soma_itens_carrinho = (total, item_carrinho) => {
    const valor_total = item_carrinho.qtd * item_carrinho.valor;

    return total + valor_total;
}

const soma_carrinho = itens_carrinho.reduce(retorna_soma_itens_carrinho, 0);

console.log(soma_carrinho);