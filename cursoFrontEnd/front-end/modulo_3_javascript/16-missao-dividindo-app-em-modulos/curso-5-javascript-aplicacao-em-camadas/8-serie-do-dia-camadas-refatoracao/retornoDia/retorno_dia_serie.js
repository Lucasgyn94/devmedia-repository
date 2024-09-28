const verifica_dia_semana = () => {
    let data = new Date();
    let dia_semana = data.getDay();
    return dia_semana;
}

export default verifica_dia_semana;