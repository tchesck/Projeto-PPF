import React from 'react';
import './App.scss';
import Home from './componentes/Home/Home.js';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from '../src/componentes/Navbar/Navbar.js'
import Cadastro from './componentes/TelaCadastro/TelaCadastro.js';
import FormDoador from '../src/componentes/CadastroD/CadastroD.js';
import FormEscola from '../src/componentes/CadastroE/CadastroE.js';
import PerfilE from './componentes/PerfilEscola/PerfilEscola';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/Cadastro" component={Cadastro} />
      <Route path="/Cadastro-doador" component={FormDoador} />
      <Route path="/Cadastro-escola" component={FormEscola} />
      <Route path="/Perfil-escola" component={PerfilE} />
      </BrowserRouter>
    </div>
  );
}

export default App;
