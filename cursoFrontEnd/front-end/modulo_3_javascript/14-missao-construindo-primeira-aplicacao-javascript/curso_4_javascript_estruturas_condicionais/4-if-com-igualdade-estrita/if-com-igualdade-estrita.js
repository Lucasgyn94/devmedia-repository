function verifica_x_e_y() {
    let x = 10;
    let y = "10";

    if (x == y) {
        console.log('X e Y são iguais.');
    } else {
        console.log('X e Y não são iguais.');
    }
}

function verifica_igualdade_estrita() {
    let x = 10;
    let y = "10";

    if (x === y) {
        console.log('X e Y são iguais.');
    } else {
        console.log('X e Y não são iguais.');
    }
}

function verifica_igualdade_estrita_vazio() {
    var x = "";
    var y = 0;

    if(x === y) {
        console.log("X e Y são iguais");
    }
    else {
        console.log("X e Y são diferentes");
    }
}

function verifica_resposta_usuario() {
    let resposta = "";

    if (resposta === 0) {
        console.log("Resposta correta.");
    } else {
        console.log("Resposta incorreta!");
    }
}