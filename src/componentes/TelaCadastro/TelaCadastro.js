import React from 'react';
import './TelaCadastro.scss';
import Container from '../../componentes/Container/Container.js';


const TelaCadastro = () => {
  
      return (
        <div className="TelaCadastro">
          
          <Container 
          texto="Ainda não possui cadastro?"
          subTexto="Clique abaixo e junte-se a nós"
          doador="Cadastre-se Doador"
          escola="Cadastre-se Escola"
          />
        </div>
       
      )
    }
    export default TelaCadastro;