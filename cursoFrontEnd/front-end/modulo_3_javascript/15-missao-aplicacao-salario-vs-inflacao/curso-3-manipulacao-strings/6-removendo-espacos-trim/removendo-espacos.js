function remove_espaco_nome() {

    let nome = "    Lucas   ";
    let nome_sem_espaco = nome.trim();
    
    console.log(nome_sem_espaco);
}

function remove_espaco_telefone() {
    let telefone_1 = "(99) 99999-9999";
    let telefone_2 = "    (99) 99999-9999    ";

    if (telefone_1 === telefone_2) {
        console.log("Os telefones são iguais");

    } else {
        console.log("Os telefones são diferentes");

    }
}

function remove_espaco_cep() {
    let cep_acesso = "  74590-740";
    let cep_cadastro = "74590-740";

    if (cep_acesso.trim() === cep_cadastro.trim()) {
        console.log("Os ceps são iguais!");
    } else {
        console.log("Os ceps não são iguais!")
    }
}
remove_espaco_cep()