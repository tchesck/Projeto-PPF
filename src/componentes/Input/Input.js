import React from 'react';
import './Input.scss'

const Input = ({ label, ref, max, type, placeholder, value, atualizarState, obrigatorio }) => {
    const atualizar = (event) => {
        if(atualizarState) {
            atualizarState(event.target.value)
        }
        
    }
    return (
        <div className="Input">
            <label>{label}{obrigatorio ? "*" : ""}</label>
            <input max={max} required={obrigatorio ? true : false} type={type} ref={ref} placeholder={placeholder} value={value} onChange={atualizar} />
        </div>
    )
}

export default Input;
