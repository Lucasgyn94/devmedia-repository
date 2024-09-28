function verifica_se_pode_votar() {
    var idade = 17

    if (idade >= 16) {
        console.log("Pode votar!")
    } else {
        console.log("Não pode votar.")
    }
}

function verifica_ddd() {
    var ddd = 62

    switch(ddd) {
        case 62:
            console.log("Goiânia")
            break;
        case 11:
            console.log("São Paulo")
            break;

        case 21:
            console.log("Rio de Janeiro")
            break;
    }
}

function verifica_se_aprovado() {
    media = 7.6;

    if (media >= 7) {
        console.log('Aluno aprovado!');
    } else {
        console.log('Aluno reprovado!');
    }
}

