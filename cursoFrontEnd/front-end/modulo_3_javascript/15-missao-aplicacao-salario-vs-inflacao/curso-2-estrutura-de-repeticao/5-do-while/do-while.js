function imprime_numeros_do_while() {
    
    let contador = 0;

    do {
        console.log(contador);
        contador++;
    } while (contador <= 10);

}


function imprime_mes_do_while() {
    let contador = 0;

    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    do {
        console.log(meses[contador]);
        contador++;
    } while (contador < meses.length);
}

function verifica_habilitado_break() {
    let funcionarios = [
        {id: 1, nome: "César", habilitado: false},
        {id: 2, nome: "Jéssica", habilitado: false},
        {id: 3, nome: "Lucas", habilitado: true},
        {id: 4, nome: "Marlon", habilitado: false},
        {id: 5, nome: "Ana", habilitado: false},
    ];
    
    let contador = 0;
    let encontrouHabilitado = false;
    
    do {
        let funcionario = funcionarios[contador];
    
        if (funcionario.habilitado === true) {
            console.log("Funcionário habilitado encontrado: " + funcionario.nome);
            encontrouHabilitado = true;
            break;
        }
    
        contador++;
    } while (contador <= funcionarios.length);
}

function verifica_alunos_continue() {
    
    let alunos = [
        {id: 1, nome: "Lucas", media: 10},
        {id: 2, nome: "Laura", media: 7},
        {id: 3, nome: "José", media: 5},
        {id: 4, nome: "Guilherme", media: 4},
        {id: 5, nome: "Rafael", media: 10},
    ];

    let contador = 0;

    do {
        let aluno = alunos[contador];
        contador++;

        if (aluno.media < 6) {
            continue; // pula pra proxima iteração dp bloco if
        }
        console.log("Id: " + aluno.id);
        console.log("Nome: " + aluno.nome);
        console.log("Média: " + aluno.media);
        console.log("\n");
    } while (contador < alunos.length);
}

function verifica_dias_atraso() {
    let valor_mensalidade = 100;
    let taxa_multa = 0.02; // 2%
    let total_dias = 10;
    let contador = 1;

    do {

        let dias_atraso = contador;

        let valor_multa = valor_mensalidade * taxa_multa * dias_atraso;

        let novo_valor_mensalidade = valor_mensalidade + valor_multa;

        console.log("Dia(s) de atraso: " + dias_atraso + " - mensalidade atualizada: R$" + novo_valor_mensalidade + ",00");

        contador++;

    } while( contador < total_dias );

    // Dia(s) de atraso: 1 - mensalidade atualizada: R$102,00
    // Dia(s) de atraso: 2 - mensalidade atualizada: R$104,00
    // Dia(s) de atraso: 3 - mensalidade atualizada: R$106,00
    // Dia(s) de atraso: 4 - mensalidade atualizada: R$108,00
    // Dia(s) de atraso: 5 - mensalidade atualizada: R$110,00
    // Dia(s) de atraso: 6 - mensalidade atualizada: R$112,00
    // Dia(s) de atraso: 7 - mensalidade atualizada: R$114,00
    // Dia(s) de atraso: 8 - mensalidade atualizada: R$116,00
    // Dia(s) de atraso: 9 - mensalidade atualizada: R$118,00
}

verifica_dias_atraso()