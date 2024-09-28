import React from 'react';
import './style.css';

const BoxMensagem = (props) => {
    return (
        <div className='box-mensagem-props'>
             {props.children}
        </div>
    );
}

export default BoxMensagem;