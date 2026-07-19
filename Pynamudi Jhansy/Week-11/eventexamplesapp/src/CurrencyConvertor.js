import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor() {
    super();
    this.state = {
      rupees: '',
      euro: ''
    };
  }

  handleChange = (e) => {
    this.setState({ rupees: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const euroValue = this.state.rupees / 90;

    this.setState({ euro: euroValue.toFixed(2) });
  };

  render() {
    return (
      <div>
        <h2>Currency Convertor</h2>

        <form onSubmit={this.handleSubmit}>
          <label>Enter Indian Rupees:</label>
          &nbsp;
          <input
            type="number"
            value={this.state.rupees}
            onChange={this.handleChange}
          />
          &nbsp;
          <button type="submit">Convert</button>
        </form>

        {this.state.euro && (
          <p>
            Euro Value: <strong>€ {this.state.euro}</strong>
          </p>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;