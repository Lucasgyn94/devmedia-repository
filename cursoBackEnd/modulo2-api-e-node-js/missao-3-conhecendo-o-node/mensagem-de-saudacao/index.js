let data = new Date();

let hora = data.getHours();
let minuto = data.getMinutes();

if (hora <= 11) {
    console.log("Bom dia!");
} else if (hora <= 17) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}

console.log(`Agora são ${hora} horas e ${minuto} minutos!   `)