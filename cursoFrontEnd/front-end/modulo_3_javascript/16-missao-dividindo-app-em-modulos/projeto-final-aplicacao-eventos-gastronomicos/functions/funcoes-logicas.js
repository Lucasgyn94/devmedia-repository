/**
 * @description Verifica se a chuva recebida por parâmetro está visível baseado
 * na data recebida. Retorna true ou false
 */

export const verifica_chuvas_visiveis_por_data = (chuva, data) => {
    const ano_atual = data.getFullYear();

    const data_inicio = new Date(chuva.inicio + "/" + ano_atual);
    const data_fim = new Date(chuva.fim + "/" + ano_atual);

    if (data_inicio.getMonth() + 1 > data_fim.getMonth() + 1) {
        const ano_final = data_fim.getFullYear();
        data_fim.setFullYear(ano_final + 1);
    }

    return (data >= data_inicio && data <= data_fim);
}

/*
* @description Verifica se a chuva recebida por parâmetro estará visível nos próximos 2 meses baseado na data recebida
*/

export const verifica_chuvas_visiveis_por_prox_2_meses = (chuva, data) => {
    const data_atual = data;
    const ano_atual = data_atual.getFullYear();
    const data_inicio = new Date(chuva.inicio + "/" + ano_atual);
    const data_fim = new Date(data_atual);
    
    if (data_atual.getMonth() + 1 > data_inicio.getMonth() + 1) {
        const ano_final = data_inicio.getFullYear();
        data_inicio.setFullYear(ano_final + 1);
       }

       data_fim.setMonth(data_fim.getMonth() + 2);

       return (data_atual < data_inicio && data_inicio < data_fim);
}

/*

* @description Verifica se a chuva recebida por parâmetro estará visível nos
 * próximos 2 meses baseado na data recebida
*/

export const inverte_mes_ano = (data) => {
    const data_invertida = data.split('/');
    return data_invertida[1] + '/' + data_invertida[0];
}

/*

 @description Retorna um texto com a intensidade da chuva
*/

export const retorna_intensidade = (intensidade) => {
    let nova_intensidade = ' (Fraca)';

    if (intensidade.indexOf('Forte') >= 0) {
        nova_intensidade = '3 (Forte)';
    } else if (intensidade.indexOf('Média') >= 0) {
        nova_intensidade = '2 (Média)';
    } else if (intensidade.indexOf('Irregular') >= 0) {
        nova_intensidade = '(Irregular)';
    }

    return nova_intensidade;
}

/*
 * @description Retorna o hemisfério baseado no valor da declinação
*/

export const retorna_hemisferio = (declinacao) => declinacao >= 0 ? "Norte" : "Sul";

