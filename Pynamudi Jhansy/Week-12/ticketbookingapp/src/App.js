import React, { Component } from 'react';

function GuestPage() {
  return (
    <div>
      <h2>Welcome Guest</h2>
      <p>You can browse the flight details below:</p>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AI101</td>
            <td>Chennai</td>
            <td>Delhi</td>
            <td>10:00 AM</td>
          </tr>
          <tr>
            <td>AI202</td>
            <td>Mumbai</td>
            <td>Bangalore</td>
            <td>02:00 PM</td>
          </tr>
        </tbody>
      </table>

      <p><b>Please login to book tickets.</b></p>
    </div>
  );
}

function UserPage() {
  return (
    <div>
      <h2>Welcome User</h2>
      <p>You are logged in and can book flight tickets.</p>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Flight</th>
            <th>From</th>
            <th>To</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>AI101</td>
            <td>Chennai</td>
            <td>Delhi</td>
            <td>10:00 AM</td>
            <td><button>Book Ticket</button></td>
          </tr>
          <tr>
            <td>AI202</td>
            <td>Mumbai</td>
            <td>Bangalore</td>
            <td>02:00 PM</td>
            <td><button>Book Ticket</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }

  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    let page;

    if (this.state.isLoggedIn) {
      page = <UserPage />;
    } else {
      page = <GuestPage />;
    }

    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>Flight Ticket Booking App</h1>

        {this.state.isLoggedIn ? (
          <button onClick={this.handleLogout}>Logout</button>
        ) : (
          <button onClick={this.handleLogin}>Login</button>
        )}

        <hr />

        {page}
      </div>
    );
  }
}

export default App;