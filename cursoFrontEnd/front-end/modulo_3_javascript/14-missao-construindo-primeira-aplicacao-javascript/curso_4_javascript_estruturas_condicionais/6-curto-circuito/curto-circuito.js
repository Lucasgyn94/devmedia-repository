function verifica_se_aprovado_curto_circuito() {
    var aprovado = true;
    aprovado && console.log("Parabéns, aprovado!");

    /**
    var aprovado = true;

    if (aprovado) {
        console.log("Parabéns");
    }
    */

}

const nome = "Lucas";

const nome_valido = nome.length > 0;

nome_valido && console.log(nome);