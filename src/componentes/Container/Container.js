import React from 'react';
import './Container.scss'
import {Link} from 'react-router-dom';
import Botao from '../../componentes/Botao/Botao.js';

const Container = ({texto, subTexto, doador, escola}) => {
  
      return (
        <div >
            <div className="Container">
                <div className="Texto">
                    <h1>{texto}</h1>
                    <h2>{subTexto}</h2>
                </div>
                <Link to="/Cadastro-doador"> <Botao>{doador}</Botao></Link>
                <Link to="/Cadastro-escola"> <Botao>{escola}</Botao></Link>
            </div>
        </div>
       
      )
    }
    export default Container;