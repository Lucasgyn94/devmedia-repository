function separa_paises() {
    let paises_string = "Brasil Espanha Canadá Irlanda Suíça";

    let paises_array = paises_string.split(" ");

    console.log(paises_array)
}

function separa_cores() {
    let cores_string = "vermelho,azul,branco,cinza,roxo";

    let cores_array = cores_string.split(",");

    console.log(cores_array);

}


let nome_completo = "Lucas Ferreira da Silva";

let array = nome_completo.split(" ");

let nome = array[0]

console.log(`Olá ${nome}. Seja bem vindo(a).`);

