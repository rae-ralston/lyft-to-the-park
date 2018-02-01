import React, { Component } from 'react';
import CampsiteList from './CampsiteList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>California Camping <span role="img" aria-label="camping tent emoji">⛺️</span></h1>
        <CampsiteList />
      </div>
    )
  }
}

export default App;
