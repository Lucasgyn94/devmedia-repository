function imprime_sem_template_string() {
        
    let nome = "Lucas";
    let tecnologia = "JavaScript";

    let frase = "0 programador " + nome + " domina " + tecnologia + ".";

    console.log(frase);


}


function imprime_com_template_string() {
    let nome = "Lucas";
    let tecnologia = "JavaScript";

    let frase = `O programador ${nome} domina ${tecnologia}`;

    console.log(frase);
}

let linguagem = "JavaScript";
let stack = "mobile";

switch (stack) {
  case "back-end":
    console.log(`Estude Node.js para programação ${ stack } em ${ linguagem }`);
    break;

  case "front-end":
    console.log(`Estude React para programação ${ stack } em ${ linguagem }`);
    break;

  case "mobile":
    console.log(`Estude React Native para programação ${ stack } em ${ linguagem }`);
    break;

  default:
    console.log(`Tecnologia indisponível para ${ stack }`);
    break;
}