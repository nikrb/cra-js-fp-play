import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './play';
import Car from './components/Car';

class App extends Component {
  state = {
    car: { name: "mini", engine: "big engine"}
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Car data={this.state.car} />
        </div>
      </div>
    );
  }
}

export default App;
