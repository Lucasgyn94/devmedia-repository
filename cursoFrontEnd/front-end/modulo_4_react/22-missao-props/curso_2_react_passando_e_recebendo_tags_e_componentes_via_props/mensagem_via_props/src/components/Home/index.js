import React from 'react';
import BoxMensagem from '../BoxMensagem';
import './style.css'

const Home = () => {
    return (
        <div className='conteudo'>
            <h1>Minhas mensagens</h1>

            <div className='mensagens-box'>
                <BoxMensagem>
                    
                    <p>Lembra aquele produto que você estava procurando?</p>
                    <p>Ele abaixou o preço!! Corre que dá tempo pra comprar</p>

                </BoxMensagem>

                <a href="https://www.americanas.com.br/produto/1818873801" target='_blanck'>
                        <button className='button' type='button'>
                            Ver produto
                        </button>
                </a>

                <BoxMensagem>
                    <div className='imagem-box'>
                        <p>Separamos esta foto pra você.</p>
                        <img className='imagem-agua' src="assets/img09.jpg" />
                    </div>

                </BoxMensagem>
            </div>
            
        </div>
    );
}

export default Home;
