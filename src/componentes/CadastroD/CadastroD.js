import React, { useState, } from "react";
import Input from '../../componentes/Input/Input.js';
import '../CadastroD/CadastroD.scss';


const CadastroD = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [idade, setIdade] = useState("");
  const [cpf, setCpf] = useState("");
  
  const handleSubmit = e => {
  }
   return (
     <div className="NovoCadUm" >
     <div className="CadastroUm">
       <div className="Imagem">
       <h1>Faça seu cadastro de Doador</h1>
       </div>
      <form onSubmit={handleSubmit}>
        <Input
            value={nome}
            type="text"
            label="Nome"
            placeholder="Nome completo"
            atualizarState={setNome}
            obrigatorio
         />

        <Input
           value={idade}
           type="text"
           label="Idade"
           placeholder="Digite sua idade"
           atualizarState={setIdade}
         />
        
        <Input
             value={cpf}
             class="form-control cpf-mask"
             type="text"
             label="CPF"
             placeholder="Digite o CPF do responsável da Escola"
             atualizarState={setCpf}
             obrigatorio
           />
         <Input
           value={email}
           type="email"
           label="Email"
           placeholder="Digite seu email"
           atualizarState={setEmail}
         />
         <Input
           value={senha}
           type="password"
           label="Senha"
           placeholder="Digite sua senha"
           atualizarState={setSenha}
           obrigatorio
         />


         <button>Cadastrar</button>
      </form>
    </div>
    </div>
  );
};



export default CadastroD;