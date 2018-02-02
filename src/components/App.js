import React, { Component } from 'react';
import CampsitesContainer from '../containers/CampsitesContainer'
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>California Camping <span role="img" aria-label="camping tent emoji">⛺️</span></h1>
        <CampsitesContainer />
      </div>
    )
  }
}

export default App;
