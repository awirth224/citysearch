import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import { searchFetch } from '../apicalls/allCitiesApiCall';
import Form from '../Form/Form'

type MyProps = {

}

type MyState = {
  homeSlug: string,
  homeURL: string,
  desiredSlug: string,
  desiredURL: string
}

class App extends Component<MyProps, MyState> {
  state: MyState = {
    homeSlug: '',
    homeURL: '',
    desiredSlug: '',
    desiredURL: ''
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