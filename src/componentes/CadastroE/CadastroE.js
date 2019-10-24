import React, { useState, } from "react";
import Input from '../../componentes/Input/Input.js';
import "../../componentes/CadastroE/CadastroE.scss";

const CadastroE = () => {
  const [nome, setNome] = useState(""); 
  const [cpf, setCpf] = useState("");
  const [nomeresp, setNomeresp] = useState("");
  const [tel, setTel] = useState("");

  
  const handleSubmit = e => {
   
   
  };

   return (
    <div className="NovoCadDois" >
     <div className="CadastroDois">
       <div className="Imagem">
       <h1>Faça seu cadastro de Escola</h1>
       
       </div>
      <form onSubmit={handleSubmit}>
        <Input
            value={nome}
            type="text"
            label="Nome"
            placeholder="Digite o nome da escola"
            atualizarState={setNome}
            obrigatorio
         />
         <Input
           value={nomeresp}
           type="Text"
           label="Nome Responsável"
           placeholder="Digite o nome de um responsável para a escola"
           atualizarState={setNomeresp}
         />
           <Input
             value={cpf}
             type="number"
             label="CPF"
             placeholder="Digite o CPF do responsável da Escola"
             atualizarState={setCpf}
             obrigatorio
           />
         
        <Input
           value={tel}
           type="number"
           label="Telefone"
           placeholder="Digite o telefone para termos contato com a escola"
           atualizarState={setTel}
           obrigatorio
         />

         <button className='BUm'>Cadastrar</button>
      </form>
    </div>
    </div>

  );
};



export default CadastroE;