
function for_in_aluno() {
    let aluno = {
        nome: "Lucas",
        email: "lucas@gmail.com",
        idade: 29
    }
    
    for (let dados in aluno) {
        console.log(aluno[dados]);
    }
    
}


function percorre_propriedades_carro() {
    let carro = { nome: "Argo", marca: "Fiat", preco: 50000, ano: 2020 };
    let percentual_desconto = 5;

    for (let propriedade in carro) {
        if (propriedade == "preco") {
            let preco = propriedade;
            let desconto = (carro[preco] * percentual_desconto) / 100;
            let novo_preco = carro[preco] - desconto;
            console.log("Novo preço: R$" + novo_preco.toFixed(2));
        } else {
            console.log(propriedade + ": " + carro[propriedade]);
        }
    }
}

function percorre_for_e_for_in() {
    let produtos = [
        { id: 1, nome: "pizza", preco: 50 },
        { id: 2, nome: "macarronada", preco: 25 },
        { id: 3, nome: "lasanha", preco: 45 },
        { id: 4, nome: "nhoque", preco: 30 }
    ];
    
    
    let desconto = 5;
    
    for (let contador = 0; contador < produtos.length; contador++) {
        let produto = produtos[contador];
    
        for (let propriedade in produto) {
            if (propriedade == "preco") {
                let preco = propriedade;
                let novo_preco = produto[preco] - desconto;
                console.log("Preço atualizado: " + novo_preco.toFixed(2));
            }
            else {
                console.log(propriedade + ": " + produto[propriedade]);
            }
        }
        console.log("\n");
    
    }
    
    // id: 1
    // nome: pizza
    // preço atualizado: R$45,00
    
    
    // id: 2
    // nome: macarronada
    // preço atualizado: R$20,00
    
    
    // id: 3
    // nome: lasanha
    // preço atualizado: R$40,00
    
    
    // id: 4
    // nome: nhoque
    // preço atualizado: R$25,00
}