import React, { Component } from 'react';
import CampsiteList from '../containers/CampsiteList'
import '../styles/App.css';

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
