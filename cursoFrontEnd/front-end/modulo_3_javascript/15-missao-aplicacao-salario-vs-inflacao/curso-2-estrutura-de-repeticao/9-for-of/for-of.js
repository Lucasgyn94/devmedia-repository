function acessa_email_for_of() {
    
    let emails_alunos = [
        "danilo@email.com",
        "jessica@email.com",
        "luana@email.com",
        "gustavo@email.com"
    ];

    for (let email of emails_alunos) {
        console.log("Email: " + email);
    }
}

function dados_cliente_for_of() {
    let clientes_array = [
        {id: 1, nome: "Mônica", telefone: "99999-6565"},
        {id: 2, nome: "Tânia", telefone: "99999-0778"},
        {id: 3, nome: "Carlos", telefone: "99999-0551"}
    ];
    
    for (let cliente of clientes_array) {
        let nome = cliente.nome;
        let telefone  = cliente.telefone;
    
        console.log("Nome: " + nome + " - Telefone: " + telefone)
    }
    
}

function percentual_desconto_for_of() {
    let produtos_array = [
        { id: 1, nome: "mouse", preco: 50 },
        { id: 2, nome: "teclado", preco: 90 },
        { id: 3, nome: "monitor", preco: 350 },
        { id: 4, nome: "nobreak", preco: 600 },
    ];
    
    let percentual_desconto = 10;
    
    for (let produto of produtos_array) {
        let nome = produto.nome;
        let preco = produto.preco;
    
        let valor_desconto = (preco * percentual_desconto) / 100;
        console.log("Percentual de desconto = " + valor_desconto);
        let novo_preco = preco - valor_desconto;
    
        console.log("Novo valor do produto " + nome + " R$ " + novo_preco.toFixed(2));
    }
}


function media_aluno_for_of() {
    let notas_trimestrais = [9, 7, 6, 7];

    let total_notas = notas_trimestrais.length;
    let soma_notas = 0;

    for (let nota of notas_trimestrais) {
        soma_notas = soma_notas + nota;
    }

    let media = soma_notas / total_notas;

    console.log("Média do aluno: " + media);

    if (media >= 7) {
        console.log("Aluno aprovado!");
    } else if (nota >= 6 && nota < 7 ) {
        console.log("Aluno de recuperação.");
    } else {
        console.log("Aluno reprovado.");
    }

}

