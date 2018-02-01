import React, { Component } from 'react';
import CampsiteList from './CampsiteList'
import './App.css';
// import 'dotenv'
// import GOOGLE_API_KEY from process.env.GOOGLE_API_KEY

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
