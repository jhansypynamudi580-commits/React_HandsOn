import React, { Component } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello = () => {
    alert("Hello! This is a static message.");
  };

  handleIncrease = () => {
    this.increment();
    this.sayHello();
  };

  sayWelcome = (message) => {
    alert(message);
  };

  onPress = (e) => {
    alert("I was clicked");
    console.log(e);
  };

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>React Event Handling Examples</h1>

        <h2>Counter Example</h2>
        <p>Count: {this.state.count}</p>

        <button onClick={this.handleIncrease}>Increment</button>
        &nbsp;
        <button onClick={this.decrement}>Decrement</button>

        <hr />

        <h2>Say Welcome</h2>
        <button onClick={() => this.sayWelcome("Welcome")}>
          Say Welcome
        </button>

        <hr />

        <h2>Synthetic Event</h2>
        <button onClick={this.onPress}>OnPress</button>

        <hr />

        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;