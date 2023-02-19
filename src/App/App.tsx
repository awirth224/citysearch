import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import searchFetch from '../apicalls/allCitiesApiCall';
import Form from '../Form/Form'

type MyProps = {

}

type MyState = {
  city: string;
  cities: string[];
  cityNames: string[];
  url: string;
}

class App extends Component<MyProps, MyState> {
  state: MyState = {
    city: '',
    cities: [],
    cityNames: [],
    url: ''
  }




  render() {


    return (
      <main className='app'>
        <Header />
        <Form />
      </main>
    )
  }
}

export default App;