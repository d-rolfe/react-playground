import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      library: "React"
    }
  }
  render() {
    return (
      <div className="App">
        <Header name="Darren" />
        <h1>I really love {this.state.library}</h1>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer />
      </div>
    );
  }
}

export default App;
