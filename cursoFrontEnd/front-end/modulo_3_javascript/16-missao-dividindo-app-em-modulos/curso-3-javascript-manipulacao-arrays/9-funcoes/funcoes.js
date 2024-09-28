function retorna_produtos_carrinho() {
    const carrinho = [
        {nome: "The Legend Of Zelda", qtd: 1, valor: 250},
        {nome: "Super Mario Kart", qtd: 1, valor: 300},
        {nome: "New Super Mario Bros", qtd:1, valor: 250}
    ]
    
    carrinho.forEach(function(produto, index) {
        let texto = index + " - ";
        texto += produto.qtd + " Un -";
        texto += produto.nome + " - ";
        texto += "R$ " + produto.qtd * produto.valor;
    
        console.log(texto);
    });
    
}

function retorna_meses_abreviados() {
    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    
    const abrevia_mes = (mes) => mes.substring(0, 3);
    
    const meses_abreviados = meses.map(abrevia_mes);
    
    console.log(meses_abreviados);

}

function filtra_carros_fiat() {
    const carros = [
        { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
        { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
        { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
        { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 }
    ];
    
    const filtra_fiat = carros.filter((carro) => carro.marca === "Fiat");
    
    console.log(filtra_fiat);
    
    
}

function calcula_valor_total_carrinho () {
    const itens_carrinho = [
        {id: 1, nome: "Açucar", qtd: 2, valor: 2.00},
        {id: 2, nome: "Álcool 70", qtd: 3, valor: 9.95},
        {id: 3, nome: "Lucas Descartáveis", qtd: 50, valor: 2.50},
        {id: 4, nome: "Papel Toalha", qtd: 1, valor: 2.00}
    ]
    
    function calcula_valor_total(total, item_carrinho) {
        const valor_total = item_carrinho.qtd * item_carrinho.valor;
        return total + valor_total;
    }
    
    const valor_total_carrinho = itens_carrinho.reduce(calcula_valor_total, 0);
    console.log(valor_total_carrinho);
}