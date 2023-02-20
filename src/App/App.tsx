import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import searchFetch from '../apicalls/allCitiesApiCall';
import Form from '../Form/Form'
import mockHomeCity from '../mockData/homeCity';
import mockDesiredCity from '../mockData/desiredCity';
import Card from '../Card/Card';

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
        <div className='display-area'>
          <Card theCityInfo={mockHomeCity} />
          <Card theCityInfo={mockDesiredCity} />
        </div>
      </main>
    )
  }
}

export default App;