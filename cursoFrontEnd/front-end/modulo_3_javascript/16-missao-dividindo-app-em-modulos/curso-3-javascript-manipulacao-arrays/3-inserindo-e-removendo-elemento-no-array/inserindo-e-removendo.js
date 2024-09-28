function insere_e_deleta_dias_semana() {
    const dias_da_semana = [
        "domingo",
        "segunda-feira",
        "terça-feira",
        "quarta-feira",
        "quinta-feira",
        "sexta-feira"
    ];
    
    console.log("$$$ Dias sem o Sábado $$$\n");
    dias_da_semana.map(dia => console.log(dia));
    
    function insere_sabado_na_semana () {
        dias_da_semana.push("Sábado");
    }
    
    console.log("\n$$$ Inserido com sucesso!\n")
    insere_sabado_na_semana();
    dias_da_semana.map((dia) => console.log(dia));
    
    console.log("\n $$$ Removendo Dias $$$ \n");
    dias_da_semana.splice(0, 1); // removendo domingo
    dias_da_semana.map((dia) => console.log(dia));
    
    console.log("\n $$$ Removendo mais 3 Dias $$$\n")
    dias_da_semana.splice(0, 3) // removendo segunda, terca, quarta
    dias_da_semana.map((dia) => console.log(dia));
}

function manipulando_informacoes_carrinho() {
    const produto = [
        {nome: "New Super Mario Bros", qtd: 1, valor: 250}
    ];
    
    const carrinho = [
        {nome: "The Legend Of Zelda", qtd: 1, valor: 250},
        {nome: "Super Mario Kart 8", qtd: 1, valor: 300}
    ]
    
    function imprime_produtos_carrinho() {
        carrinho.map((produto) => console.log(produto));
    }
    
    console.log("$$$ CARRINHO ATUAL $$$\n");
    imprime_produtos_carrinho();
    
    console.log("\n$$$ Adicionando Novo Jogo $$$\n");
    carrinho.push(produto);
    imprime_produtos_carrinho();
    
    console.log("\n$$$ Removendo 2º jogo $$$\n");
    carrinho.splice(1, 1);
    imprime_produtos_carrinho();
    
    console.log("\n$$$ Removendo Tudo $$$\n");
    let tamanho_carrinho = carrinho.length;
    carrinho.splice(0, tamanho_carrinho);
    imprime_produtos_carrinho();
    console.log("Produtos removidos com sucesso!");
    
    
}