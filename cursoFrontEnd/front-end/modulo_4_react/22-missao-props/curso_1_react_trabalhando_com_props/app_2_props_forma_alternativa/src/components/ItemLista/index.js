import React from "react";

const ItemLista = ({nome_produto, valor_produto}) => {
    return (
        <div>
            O produto {nome_produto} custa R$ {valor_produto}
        </div>
    );
}


export default ItemLista;