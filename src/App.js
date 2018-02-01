import React, { Component } from 'react';
import Form from './Form'
import './App.css';
// import 'dotenv'
// import GOOGLE_API_KEY from process.env.GOOGLE_API_KEY

class App extends Component {
  render() {
    return (
      <div>
        <h1>California Camping <span role="img" aria-label="camping tent emoji">⛺️</span></h1>
        <Form />
      </div>
    )
  }
}

export default App;
