const chuvaDeMeteoros = [
    { nome: 'Alfa Centaurídeos',     declinacao: -59 },
    { nome: 'Gama Normídeos',         declinacao:         -50 },
    { nome: 'Pi Pupídeos',                    declinacao:       -45 },
    { nome: 'Líridas',                     declinacao:   34  },
    { nome: 'Eta Aquáridas',               declinacao:         -1  },
    { nome: 'Eta Líridas',           declinacao:       44  },
    { nome: 'Bootídeos de Junho',             declinacao: 48  },
    { nome: 'Alfa Capricornídeos',    declinacao:          -10 },
    { nome: 'Delta Aquáridas do Sul', declinacao:        -16 },
    { nome: 'Piscis Austrinídeos',             declinacao:   -30 },
    { nome: 'Perseidas',              declinacao:     58  },
];

const chuvas_hemisferio_norte = chuvaDeMeteoros.filter((chuva) => chuva.declinacao >= 0);
const chuvas_hemisferio_sul = chuvaDeMeteoros.filter((chuva) => chuva.declinacao < 0);

console.log("$$$ Chuvas Do Hemisfério Norte $$$");
console.log(chuvas_hemisferio_norte)

console.log("$$$ Chuvas Do Hemisfério Sul $$$");
console.log(chuvas_hemisferio_sul);