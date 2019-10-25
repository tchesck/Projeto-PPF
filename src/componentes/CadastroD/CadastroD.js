import React, { useState, } from "react";
import Input from '../../componentes/Input/Input.js';
import '../CadastroD/CadastroD.scss';


const CadastroD = () => {

  const [nome, setNome] = React.useState("");
  const [idade, setIdade] = React.useState("");
  const [cpf, setCpf] = React.useState("");
  const [cep, setCep] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  const salvarDoador = (event) =>{
    event.preventDefault();

    fetch('http://127.0.0.1:9000/Doador/',{
      method: 'POST',
      body:JSON.stringify({
        nome: nome,
        idade: idade,
        cpf: cpf,
        cep: cep,
        email: email,
        senha: senha,
      }),
      headers:{
        'Content-Type': 'application/json'
        }
    }).then( value => {
      return value.json()
    }).then(value => {
      if(value.id) {
        alert('Doador criado com sucesso!');
        
      } else{
        alert('Erro ao cadastrar!')
      }
      setNome("");
      setIdade("");
      setCpf("");
      setCep("");
      setEmail("");
      setSenha("");
    })
  };


  
   return (
     <div className="NovoCadUm" >
     <div className="CadastroUm">
       <div className="Imagem">
       <h1>Faça seu cadastro de Doador</h1>
       </div>
      <form onSubmit={salvarDoador}>
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
         /><Input
          value={cep}
          type="text"
          label="Cep"
          placeholder="Digite seu cep"
          atualizarState={setCep}
        />
         <Input
           value={senha}
           type="password"
           label="Senha"
           placeholder="Digite sua senha"
           atualizarState={setSenha}
           obrigatorio
         />

         <input type="submit" className="BDOis" value="Cadastrar" />

      </form>
    </div>
    </div>
  );
   }



export default CadastroD;