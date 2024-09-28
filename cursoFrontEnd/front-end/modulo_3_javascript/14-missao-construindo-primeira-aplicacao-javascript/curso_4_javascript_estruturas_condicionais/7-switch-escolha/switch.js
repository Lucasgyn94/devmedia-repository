function verifica_produto() {
    var produto = "Smartphone";

    switch(produto) {
        case "Smartphone":
            console.log("Produto: Smartphone")
            break;
        case "TV":
            console.log("Produto: TV");
            break;
        default:
            console.log("Produto inválido.") 
            break;
    }
}

function multiplas_cases() {
    var produto = "Smartphone";

    switch(produto) {
        case "Smartphone":
        case "Telefonia":
        case "Celular":
            console.log("Produto: Smartphone");
            break;
        case "TV":
            console.log("Produto: TV");
            break;
        default:
            console.log("Produto inválido."); 
            break;

    }
}

function verifica_estacao_ano() {
    var mes = "Setembro";

    switch(mes) {
        case "Janeiro":
        case "Fevereiro":
        case "Março":
            console.log("Verão");
            break;
        
        case "Abril":
        case "Maio":
        case "Junho":
            console.log("Outono");
            break;
        
        case "Julho":
        case "Agosto":
        case "Setembro":
            console.log("Inverno");
            break;
        
        case "Outubro":
        case "Novembro":
        case "Dezembro":
            console.log("Primavera");
            break;
        
        default:
            console.log("Mês inválido!")
            break;
    }
}