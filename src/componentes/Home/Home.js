import React from 'react';
import './Home.scss';
import Criança from '/home/ubuntu/Documentos/Projeto-PPF/src/imagens/criancasss.webp';


const Home = () => {
    return (
<div >
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