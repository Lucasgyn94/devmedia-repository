function verifica_se_aprovado() {
    var nota = 5;

    var status = nota > 7 ? "Aprovado" : "Reprovado";

    console.log(status);
}

function verifica_mes_promocao() {
    var mes = 9;
    var mensagem = (mes === 11 || mes === 12 ? "Promoção" : "Preço normal"); 


    console.log(mensagem);
}

function verifica_status_loja() {
    var dia_semana = 3;

    var status_loja = (dia_semana === 0 || dia_semana === 6 ? "Funcionamos apenas de segunda a sexta." : "Loja aberta.");

    console.log(status_loja);

}