import React from 'react';
import './App.scss';
import Home from './componentes/Home/Home.js';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from '../src/componentes/Navbar/Navbar.js'
import Cadastro from './componentes/TelaCadastro/TelaCadastro.js';
import FormDoador from '../src/componentes/CadastroD/CadastroD.js';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/Cadastro" component={Cadastro} />
      <Route path="/Cadastro-doador" component={FormDoador} />
      </BrowserRouter>
    </div>
  );
}

export default App;
