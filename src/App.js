import React, { Component } from 'react';
import './App.css';

const NUM_GRIDS = 16;

class App extends Component {
  constructor() {
    super();

    this.state = {
      x: 7,
      y: 7,
    }

    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
  }

  handleUp() {
    if (this.state.y === 0) return;

    const y = this.state.y - 1;
    this.setState({ y });
  }


  handleDown() {
    if (this.state.y === NUM_GRIDS - 1) return;

    const y = this.state.y + 1;
    this.setState({ y });
  }

  render() {
    return (
      <div className="App">
        <div className="App__screen">
          <div className="App__ninja" style={{
            top: `${this.state.y * 100 / NUM_GRIDS}%`,
            left: `${this.state.x * 100 / NUM_GRIDS}%`,
          }}/>
        </div>
        <button onClick={this.handleUp}>Up</button>
        <button onClick={this.handleDown}>Down</button>
      </div>
    );
  }
}

export default App;
