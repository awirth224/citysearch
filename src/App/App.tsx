import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import { searchFetch } from '../apicalls/allCitiesApiCall';
import Form from '../Form/Form'
import { 
  searchFetch,
  getCityDetails,
} from '../apicalls/allCitiesApiCall';

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

handleCallback = (param: string, secParam: string) => {
  this.setState({homeURL: param, desiredURL: secParam})

}

getCitySlug = () => {
  getCityDetails(this.state.homeURL)
  .then(data => this.setState({ homeSlug: data['_links']['city:urban_area'].href }))
  getCityDetails(this.state.desiredURL)
  .then(data => this.setState({ desiredSlug: data['_links']['city:urban_area'].href }))
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