import React, { Component } from 'react';
import logo from './logo.svg';
import Mensaje from './componentes/mensaje/Mensaje';
import BotonAdd from './componentes/botonAdd/BotonAdd';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          Hola Mundo
        </p>
        <p>Mensaje: </p>
        <Mensaje name="Jeff" />
        <BotonAdd />
      </div>
    );
  }
}

export default App;
