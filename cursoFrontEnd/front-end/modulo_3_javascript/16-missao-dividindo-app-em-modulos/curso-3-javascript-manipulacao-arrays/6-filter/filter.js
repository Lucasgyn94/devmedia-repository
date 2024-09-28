function retorna_lista_produtos_filtrada() {
    const produtos = [
        {id: 1, nome: "Açucar", ativo: true, valor: 2.00},
        {id: 2, nome: "Álcool 70", ativo: false, valor: 9.95},
        {id: 3, nome: "Luvas Descartáveis", ativo: false, valor: 2.50},
        {id: 4, nome: "Papel Toalha", ativo: true, valor: 2.50}
    ];
    
    function retorna_status_produto (produto) {
        return produto.ativo === false;
    }
    
    const retorna_produtos = produtos.filter(retorna_status_produto);
    
    console.log(retorna_produtos);
    
}

function retorna_filtro_carros_fiat() {
    const carros = [
        { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
        { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
        { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
        { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 }
      ];
    
      const retorna_marca_fiat = (carro) => {
        return carro.marca === "Fiat";
      }
    
      const retorna_carros_fiat = carros.filter(retorna_marca_fiat);
    
      console.log(retorna_carros_fiat);
}