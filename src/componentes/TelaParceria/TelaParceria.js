import React from 'react';
import './Parceria.scss';
import imagi_agorass from '../imagem/1.jpg';
import imagi_2 from '../imagem/2.jpg';
import imagi_3 from '../imagem/3.jpg';


const Parceria = () =>{
    return (
        <div className="tudo">
            <div className="nav"></div>
            <div className="Parceria">
            <div>
                <div><h4>  ONG: Todos unidos </h4> </div>                
                <img src={imagi_agorass} alt=""></img>
                <p></p>

                <div> <h4> ONG: Um por todos</h4> </div>
                <img src={imagi_2} alt=""></img>
                <p></p>
                
                <img src={imagi_3} alt=""></img>
                <p></p>

                </div>
            </div>
        </div>
    )
}