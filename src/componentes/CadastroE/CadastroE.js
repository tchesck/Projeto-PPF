import React, { useState, } from "react";
import Input from '../../componentes/Input/Input.js';
import "../../componentes/CadastroE/CadastroE.scss";
import { Link } from 'react-router-dom';

const CadastroE = () => {
  const [nome, setNome] = useState(""); 
  const [cpf, setCpf] = useState("");
  const [nomeresp, setNomeresp] = useState("");
  const [tel, setTel] = useState("");
  const [cep, setCep] = useState("")
  const salvarEscola = (event) =>{
    event.preventDefault();

    fetch('http://127.0.0.1:9000/Escola/',{
      method: 'POST',
      body:JSON.stringify({
        nome_escola: nome,
        nome_responsavel: nomeresp,
        cpf_responsavel: cpf,
        cep: cep,
        telefone: tel
      }),
      headers:{
        'Content-Type': 'application/json'
        }
    }).then( value => {
      return value.json()
    }).then(value => {
      if(value.id) {
        alert('Escola criado com sucesso!');
        window.open("http://localhost:3000/Perfil-Escola")
      } else{
        alert('Erro ao cadastrar!')
      }
      setNome("");
      setNomeresp("");
      setCpf("");
      setTel("")
      setCep("")
    })
  };


   return (
    <div className="NovoCadDois" >
     <div className="CadastroDois">
       <div className="Imagem">
       <h1>Faça seu cadastro de Escola</h1>
       
       </div>
      <form onSubmit={salvarEscola}>
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
           obrigatorio
         />
           <Input
             value={cpf}
             type="text"
             label="CPF Responsável"
             placeholder="Digite o CPF do responsável da Escola"
             atualizarState={setCpf}
             obrigatorio
           />
         
        <Input
           value={tel}
           type="text"
           label="Telefone"
           placeholder="Digite o telefone para termos contato com a escola"
           atualizarState={setTel}
           obrigatorio
         />
        
        <Input
           value={cep}
           type="text"
           label="CEP"
           placeholder="Digite o CEP de sua escola"
           atualizarState={setCep}
           obrigatorio
         />
         <Link to="/Perfil-escola"><button className='BUm'>Cadastre-se</button></Link>
      </form>
    </div>
    </div>

  );
};



export default CadastroE;