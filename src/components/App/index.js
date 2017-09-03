import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';
import Dashboard from '../Dashboard';

class App extends Component {
  
  render() {
    return (
      <div className="app-wrapper">
        <Dashboard>
        </Dashboard>
      </div>
    );
  }
}

export default App;
