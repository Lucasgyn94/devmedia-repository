function acessa_propriedades() {
    var produto = {
        id: 1,
        nome: "Liquidificador",
        valor: 120.00
    }
    
    console.log(produto.id);
    console.log(produto.nome);
    console.log(produto.valor);
    
}

function acessa_propriedade_nome() {
    var produto = {
        id: 1,
        nome: "Liquidificador",
        valor: 120.00
    }
    
    console.log(produto.nome)
}

function verifica_imc() {
    var aluno_academia = {
        id: 1,
        nome: "Tampinha",
        peso: 89.5,
        altura: 1.79
    }
    
    var nome_aluno = aluno_academia.nome;
    var peso_aluno = aluno_academia.peso;
    var altura_aluno = aluno_academia.altura;
    
    var IMC = (peso_aluno / (altura_aluno * altura_aluno)).toFixed(2);
    
    console.log("IMC do aluno = " + IMC + "\n");
    if (IMC < 18.5) {
        console.log("O aluno " + nome_aluno + " está abaixo do peso.");
    } else if (IMC >= 18.5 && IMC <= 24.99) {
        console.log("O aluno " + nome_aluno + " está com o peso normal.");
    } else {
        console.log("O aluno " + nome_aluno + " está acima do peso.");
    }
}

verifica_imc();
