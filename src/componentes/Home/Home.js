import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';
import Criança from '../../imagens/crianca.webp';

const Home = () => {
    return (
<div >
    <div className="Home">
        <Link to="/"><>Home</></Link>
        <Link to="/Parceria"><>Parcerias</></Link>
        <Link to="/Cadastro"><button>Cadastre-se</button></Link>
    </div>
    <div className="container">

    <div className="Imagem_1">
        <img src={Criança} alt="Criança"></img>
    </div>         

        <div className="textoContainer">
         <div className="texto">
            <h1>Quem somos</h1>
            <p>
            O Instituto Livres é uma organização da sociedade civil sem fins lucrativos, que atua desde 2006 de forma efetiva para a transformação da vida de pessoas e comunidades em situação de vulnerabilidade e alto risco.
            Em 2005, sensibilizado com a realidade do tráfico e exploração sexual infantil, Juliano Son se dispôs a gravar um CD com o propósito de promover e apoiar financeiramente projetos e ações que resgatam crianças desse sistema de violência e injustiça. Foi assim que nasceu o projeto musical de Juliano Son, hoje líder e vocalista da banda Livres
            </p>
         </div>
    </div>
    </div>
</div>
 )
}

export default Home;