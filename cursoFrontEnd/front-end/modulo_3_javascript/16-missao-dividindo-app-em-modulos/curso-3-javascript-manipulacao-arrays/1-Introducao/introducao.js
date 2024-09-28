const dias_da_semana = [
    "segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado"
]

dias_da_semana.map((dia) => console.log(dia));
console.log("=============================\n")
dias_da_semana.push("Domingo");
console.log("Após adição: ");
dias_da_semana.map((dia) => console.log(dia));