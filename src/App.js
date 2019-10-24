import React from 'react';
import './App.scss';
import Home from './componentes/Home/Home.js';
import {BrowserRouter, Route} from 'react-router-dom';
import Cadastro from './componentes/TelaCadastro/TelaCadastro.js';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/Cadastro" component={Cadastro} />
      </BrowserRouter>
    </div>
  );
}

export default App;
