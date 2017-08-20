import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Draggable from './Draggable';

class App extends Component {
  state = {
    x: 200, y: 300
  };
  handleMouseMove = (new_pos) => {
    this.setState( new_pos);
  };
  render() {
    const {x,y} = this.state;
    const style = {
      cursor: "pointer"
    };
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Draggable x={x} y={y} onMove={this.handleMouseMove}>
          <div style={style}>Drag this</div>
        </Draggable>
      </div>
    );
  }
}

export default App;
