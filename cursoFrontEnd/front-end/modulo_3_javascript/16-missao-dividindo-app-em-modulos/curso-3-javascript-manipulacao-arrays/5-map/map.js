
function retorn_lista_carros() {
  const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 }
  ];
  
  const retorna_carros = (carro) => {
    return carro.marca + " - " + carro.modelo + " - " + carro.anoFabricacao;
  }
  
  const novos_carros = carros.map(retorna_carros);
  
  console.log(novos_carros);
  
}



const meses = [
  "Janeiro", "Fevereiro", "Março", "Abril",
  "Maio", "Junho", "Julho", "Agosto",
  "Setembro", "Outubro", "Novembro", "Dezembro"
];

function retorna_mes_abreviado (mes) {
  return mes.substring(0, 3);
}

const mes_abreviado = meses.map(retorna_mes_abreviado);
console.log(mes_abreviado);