import colecaoChuvasDeMeteoros from './data/chuva-de-meteoros.js';
import imprime_lista_chuvas from './functionsInterface/funcoes-interface.js';
import { verifica_chuvas_visiveis_por_data, verifica_chuvas_visiveis_por_prox_2_meses } from './functions/funcoes-logicas.js';

const data_atual = new Date();

const chuvas_visiveis_hoje = colecaoChuvasDeMeteoros.filter(
    (chuva) => verifica_chuvas_visiveis_por_prox_2_meses(chuva, data_atual)
);

console.log('$$$ Chuva De Meteoros $$$');

if (chuvas_visiveis_hoje.length > 0) {
    let msg = "\nEncontramos ";
    msg += chuvas_visiveis_hoje.length == 1
        ? '1 chuva de meteoros pode ser vista hoje'
        : chuvas_visiveis_hoje.length + ' chuvas de meteoros que podem ser vistas hoje.'

    console.log(msg);

    imprime_lista_chuvas(chuvas_visiveis_hoje);
    
} else {
    console.log('\n Nenhuma chuva de meteoros passando no momento!');
}

console.log('\n\n Não perca as próximas chuvas de meteoros: ');
imprime_lista_chuvas(chuvas_visiveis_hoje);