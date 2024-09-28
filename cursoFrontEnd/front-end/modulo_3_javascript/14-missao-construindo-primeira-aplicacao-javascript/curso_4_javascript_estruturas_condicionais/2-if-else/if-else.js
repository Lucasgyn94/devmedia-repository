
function verifica_compra() {
    var limite = 500;
    var valor = 600;

    if (limite >= valor) {
        console.log('Compra aprovada!');
    } else {
        console.log('Compra negada!');
    }

}

function verifica_resposta() {
        
    var resposta = 2;

    if (resposta != 3) {
        console.log('Resposta incorreta!')
    } else {
        console.log('Resposta correta');
    }
}

function verifica_idade() {
    var idade = 29;

    if (idade > 17 && idade < 25) {
        console.log('Entre 18 e 24 anos.')
    } else {
        console.log('Fora da faixa etária');
    }
}

function verifica_resposta_igual() {
    var resposta = 5;

    if (resposta === 5) {
        console.log('Resposta correta!');
    } else {
        console.log('Resposta incorreta!');
    }
}

function verifica_mes() {
    mes == 9;

    if (mes === 11 || mes === 12) {
        console.log("Promoção")
    } else {
        console.log("Preço normal.")
    }
}

function verifica_horario_funcionamento() {
    var dia_semana = 5;

    if (dia_semana === 0 || dia_semana === 6) {
        console.log("Funcionamos apenas de segunda à sexta.")
    } else {
        console.log("Loja aberta!");
    }
}

verifica_horario_funcionamento()