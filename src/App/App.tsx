import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'

class App extends Component {
  state = {
    // optional second annotation for better type inference
    count: 0,
  };

  render() {
    return (
      <main className='app'>
        <Header />
      </main>
    )
  }
}

export default App;
