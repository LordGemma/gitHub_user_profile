import React, { Component } from 'react';
import GithubProfile from './containers/GithubProfile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="App-title">Welcome to Github API Navigator</h1>
        </header>
        <GithubProfile />
      </div>
    );
  }
}

export default App;
