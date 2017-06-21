import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = { passwords: []};
    this.getPasswords = this.getPasswords.bind(this);
  }

  componentDidMount() {
    this.getPasswords();
  }

  getPasswords() {
    // Get the passwords and store them in state
    fetch('/api/passwords')
      .then(res => res.json())
      .then(passwords => this.setState({ passwords }));
  }
  render() {
    const { passwords } = this.state;
    return (
      <div className="App">
        {/* Render the passwords if we have them */}
        {passwords.length ? (
          <div>
            <h1>5 Passwords.</h1>
            <ul className="passwords">
              {passwords.map((password, index) =>
                <li key={index}>
                  {password}
                </li>
              )}
            </ul>
            <button
              className="more"
              onClick={this.getPasswords}>
              Get More
            </button>
          </div>
        ) : (
          <div>
            <h1>No Passwords :(</h1>
            <button
              className="more"
              onClick={this.getPasswords}>
              Try Again
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;
