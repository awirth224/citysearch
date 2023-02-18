import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'

type MyProps = {

}

type MyState = {
  city: string;
  cities: string[];
  url: string;
}

class App extends Component<MyProps, MyState> {
  state: MyState = {
    city: '',
    cities: [],
    url: ''
  }

  render() {
    return (
      <main className='app'>
        <Header />
      </main>
    )
  }
}

export default App;
