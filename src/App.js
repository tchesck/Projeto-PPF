import React from 'react';
import './App.scss';
import Home from './componentes/Home/Home.js'
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/" component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
