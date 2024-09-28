import {inverte_mes_ano, retorna_hemisferio, retorna_intensidade} from '../functions/funcoes-logicas.js'

/*
@description Imprime uma tabela com a lista de chuvas
*/

const imprime_lista_chuvas = (lista) => {
    console.log('\n');
    console.log('NOME DA CHUVA               - INTENSIDADE - HEMISFÉRIO - PERÍODO');

    lista.forEach(imprime_chuva);
}

/**
 * @description Imprime uma linha da tabela de lista de chuvas
 */

const imprime_chuva = (chuva) => {
    const nome = chuva.nome.padEnd(27, ' ');
    let intensidade = retorna_intensidade(chuva.intensidade);
    let hemisferio = retorna_hemisferio(chuva.declinacao);

    intensidade = intensidade.padEnd(11, ' ');
    hemisferio = hemisferio.padEnd(10, ' ');

    const data_inicio = inverte_mes_ano(chuva.inicio);
    const data_fim = inverte_mes_ano(chuva.fim);

    console.log(`${nome} - ${intensidade} - ${hemisferio} - ${data_inicio} à ${data_fim}`)
}

export default imprime_lista_chuvas;