import React, { Component } from 'react';
import './App.css';

const NUM_GRIDS = 16;

const cropRange = v => (v < 0) ? 0 : ((v >= NUM_GRIDS) ? NUM_GRIDS - 1 : v);

class App extends Component {
  constructor() {
    super();

    this.state = {
      hero: {
        x: 7,
        y: 7,
      },
      ninjas: [
        {
          name: "0",
          x: 10,
          y: 10,
        },
        {
          name: "1",
          x: 12,
          y: 12,
        },
        {
          name: "2",
          x: 13,
          y: 13,
        },
      ],

    };

    this.randomAllNinjas = this.randomAllNinjas.bind(this);
    this.handleUp = this.handleUp.bind(this);
    this.handleDown = this.handleDown.bind(this);
    this.handleLeft = this.handleLeft.bind(this);
    this.handleRight = this.handleRight.bind(this);

    window.setInterval(() => {
      this.randomAllNinjas();
    }, 0.5 * 1000);
  }

  randomAllNinjas() {
    const ninjas = this.state.ninjas.map(nin => {
      const isX = Math.random() > 0.5;
      const isPositive = Math.random() > 0.5;
      return {
        x: cropRange(nin.x + (isX ? 1 : 0) * (isPositive ? 1 : -1)),
        y: cropRange(nin.y + (isX ? 0 : 1) * (isPositive ? 1 : -1)),
      }
    });
    this.setState({ ninjas });
  }

  moveHero(x, y) {
    const hero = {
      x: cropRange(this.state.hero.x + x),
      y: cropRange(this.state.hero.y + y),
    }
    this.setState({ hero });    
  }

  handleUp() {
    this.moveHero(0, -1);
  }

  handleDown() {
    this.moveHero(0, 1);
  }

  handleLeft() {
    this.moveHero(-1, 0);
  }

  handleRight() {
    this.moveHero(1, 0);
  }

  render() {
    return (
      <div className="App">
        <div className="App__screen">
          {
            this.state.ninjas.map(nin => (
              <div className="App__ninja" key={nin.name} style={{
                top: `${nin.y * 100 / NUM_GRIDS}%`,
                left: `${nin.x * 100 / NUM_GRIDS}%`,
              }} />))
          }
          <div className="App__hero" style={{
            top: `${this.state.hero.y * 100 / NUM_GRIDS}%`,
            left: `${this.state.hero.x * 100 / NUM_GRIDS}%`,
          }} />
        </div>
        <button onTouchStart={this.handleUp}>うえ</button>
        <button onTouchStart={this.handleDown}>した</button>
        <button onTouchStart={this.handleLeft}>ひだり</button>
        <button onTouchStart={this.handleRight}>みぎ</button>
      </div>
    );
  }
}

export default App;
