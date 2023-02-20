import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import Form from '../Form/Form'
import { getCityDetails } from '../apicalls/allCitiesApiCall';

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
  this.getSlug(param, secParam)
}

getSlug = (lemon: string, lime: string) => {
  getCityDetails(lemon)
    .then(data => this.setState({ homeSlug: data['_links']['city:urban_area'].href }))

  getCityDetails(lime)
    .then(data => this.setState({ desiredSlug: data['_links']['city:urban_area'].href }))
}


  render() {


    return (
      <main className='app'>
        <Header />
        <Form handleCallback={this.handleCallback}/>
      </main>
    )
  }
}

export default App;