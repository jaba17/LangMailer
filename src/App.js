import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LanguageMI from './Components/LanguageMI';

import EmailBar from './Components/EmailBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome LanguageEmail! </h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <EmailBar/>
        <LanguageMI language_name="German"/>

      </div>
    );
  }
}

export default App;
