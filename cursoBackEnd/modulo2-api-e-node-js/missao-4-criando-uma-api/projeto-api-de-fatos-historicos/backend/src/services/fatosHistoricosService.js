const fatosHistoricos = require('../dados/fatosHistoricos.js');

class FatosHistoricosService {
    static validaAno(ano) {
        if (isNaN(ano)) {
            return false;
        } else {
            return ano >= 1920 && ano <= 2020;
        }
    }

    static buscarFatoPorAno(ano) {
        const fatoSelecionado = fatosHistoricos.find(fato => fato.Ano === ano);
        return fatoSelecionado ? fatoSelecionado.Fato : null;
    }
}

module.exports = FatosHistoricosService;