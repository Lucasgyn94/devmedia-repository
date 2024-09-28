function verifica_posicao_sonho() {
    let frase = "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.";
    let verifica_posicao_sonho = frase.indexOf("sonho");

    console.log(verifica_posicao_sonho);
    
}


function verifica_posicao_esperanca() {
    let frase = "Acredite em si próprio e chegará um dia em que os outros não terão outra escolha senão acreditar com você.";
    let verifica_posicao_esperanca = frase.indexOf("esperança");

    console.log(verifica_posicao_esperanca);
}

let expressao_proibida = "passaporte falso";

let comentario = "   venda de PASSAPORTE FALSO   ";

comentario = comentario.trim();
comentario = comentario.toLowerCase();

if (comentario.indexOf(expressao_proibida)) {
    console.log("No seu comentário há palavras proibidas. Atualize seu comentário e envie novamente");
} else {
    console.log("Seu comentário foi aprovado");
}

console.log(comentario); // venda de passaporte falso
