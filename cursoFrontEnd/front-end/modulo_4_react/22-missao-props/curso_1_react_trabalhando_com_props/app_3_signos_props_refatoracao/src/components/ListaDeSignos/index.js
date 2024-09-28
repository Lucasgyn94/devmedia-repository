import React from 'react';
import "./style.css";
import Titulo from '../Titulo';
import ItemLista from '../ItemLista';


const ListaDeSignos = () => {
  return (
    <div>
      <Titulo/>
      
      <div className='lista'>
        <ItemLista
          signo="Aquário"
          dataInicio="21/01"
          dataFim="19/02"
          imagem="assets/aquario.png"/>

        <ItemLista 
          signo="Peixes"
          dataInicio="20/02"
          dataFim="20/03"
          imagem="assets/peixes.png"/>

        <ItemLista
          signo="Áries" 
          dataInicio="21/03"
          dataFim="20/04"
          imagem="assets/aries.png" />

        <ItemLista
          signo="Touro" 
          dataInicio="21/04"
          dataFim="21/05" 
          imagem="assets/touro.png" />

        <ItemLista
          signo="Gêmeos"
          dataInicio="22/05"
          dataFim="21/06"
          imagem="assets/gemeos.png" />

        <ItemLista
          signo="Câncer" 
          dataInicio="21/06"
          dataFim="23/07" 
          imagem="assets/cancer.png" />

        <ItemLista
          signo="Leão" 
          dataInicio="24/07"
          dataFim="23/08" 
          imagem="assets/leao.png" />

        <ItemLista
          signo="Virgem" 
          dataInicio="24/08"
          dataFim="23/09" 
          imagem="assets/virgem.png" />

        <ItemLista
          signo="Libra" 
          dataInicio="24/09"
          dataFim="23/10" 
          imagem="assets/libra.png" />

        <ItemLista
          signo="Escorpião" 
          dataInicio="24/10"
          dataFim="22/11" 
          imagem="assets/escorpiao.png" />

        <ItemLista
          signo="Sagitário" 
          dataInicio="23/11"
          dataFim="21/12" 
          imagem="assets/sagitario.png" />

        <ItemLista
          signo="Capricórnio" 
          dataInicio="22/12"
          dataFim="20/01" 
          imagem="assets/capricornio.png" />


      </div>

    </div>
  )
}

export default ListaDeSignos;

