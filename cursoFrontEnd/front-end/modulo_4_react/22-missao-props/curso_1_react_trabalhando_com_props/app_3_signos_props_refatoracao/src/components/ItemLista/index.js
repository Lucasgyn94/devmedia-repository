import React from 'react';
import "./style.css";


const ItemLista = (props) => {
    return (
        <div className='box-signo'>
            <div className='nome-signo'>
                {props.signo}
            </div>

            <img className='imagem-signo' src={props.imagem} alt={props.signo}/>
            
            <div className='periodo-nascimento'>
                {props.dataInicio} - {props.dataFim}
            </div>
        </div>
    );
}

export default ItemLista;

/*FORMA ALTERNATIVA

export default function ItemLista({signo, imagem, dataInicio, dataFim}) {
  return (
    <div className = "boxSigno">
      <div className = "nomeSigno">
        { signo }
      </div>

      <img className = "imagemSigno" src = { imagem } alt = { signo } />

      <div className="periodoNascimento">
        { dataInicio } - { dataFim }
      </div>
    </div>
  )
}

*/







