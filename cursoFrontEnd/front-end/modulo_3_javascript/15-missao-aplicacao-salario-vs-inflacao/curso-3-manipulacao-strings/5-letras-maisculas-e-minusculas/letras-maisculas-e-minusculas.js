function to_up_to_lower_case() {
    var programador_1 = "Lucas";
    var programador_2 = "Flávia";

    console.log(programador_1.toLowerCase());
    console.log(programador_2.toUpperCase());
}

function programador_iguais() {
    let programador_1 = "Lucas";
    let programador_2 = "Lucas";

    if (programador_1 === programador_2) {
        console.log("Iguais.");
    } else {
        console.log("Diferentes.");
    }
}

let email_acesso = "needslucas944@gmail.com";
let email_cadastro = "NEEDSLUCAS944@gmail.com";

if (email_acesso.toLowerCase() === email_cadastro.toLowerCase()) {
    console.log("Foi enviado um link de redefinição para seu email.")
} else {
    console.log("Email não existe em nossa base de dados.");
}