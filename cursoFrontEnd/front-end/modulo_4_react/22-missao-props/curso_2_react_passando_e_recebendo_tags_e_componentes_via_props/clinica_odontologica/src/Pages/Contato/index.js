import React from "react";
import EstruturaPagina from "../../Components/EstruturaPagina";
import ContatoMapa from "../../Components/Mapa";
import './style.css';

const Contato = () => {
    return (
        <EstruturaPagina>
            <div className="contato-container">
                <div className="contato-mapa">
                    <h2 className="titulo-sessao">Horários de <b>atendimento</b></h2>

                    <p>Agende uma consulta pelo telefone: (62) 3532-2333</p>

                    <ul className="lista-medicos">
                        <li>
                            <img className="img-aparelho" src="assets/medico01.png" alt="Dr. Hélio" title="Dr. Hélio"/>
                            <p>Dr. Hélio</p>
                            <p>Segundas, quartas e sextas das 09:00 às 16:00</p>
                        </li>

                        <li>
                            <img className="img-aparelho" src="assets/medico02.png" alt="Dr. Carlos" title="Dr. Carlos"/>
                            <p>Dr. Carlos</p>
                            <p>Terças e quintas das 13:00 às 18:00</p>
                        </li>

                        <li>
                            <img className="img-aparelho" src="assets/medico03.png" alt="Dra. Suzana" title="Dra. Suzana"/>
                            <p>Dra. Suzana</p>
                            <p>Terças, quintas e sábados das 08:00 às 12:00</p>
                        </li>
                    </ul>
                </div>

                <div className="contato-mapa">
                    <h2 className="titulo-sessao">Onde estamos <b>localizados ? </b></h2>

                    <p>Av. Contorno, 1500 - Jardim Balneário, Goiânia - GO. CEP: 74590-711</p>
                    <ContatoMapa />
                </div>
                
            </div>

        </EstruturaPagina>
    );
}

export default Contato;

/**
 const Contato = () => {
  return (
    <EstruturaPagina>
      <div className="contato-container">

        <div className="contato-mapa">
          <Mapa />
        </div>
      </div>
    </EstruturaPagina>
  );
}
 * 
 * 
 */