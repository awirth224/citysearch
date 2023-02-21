import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import Form from '../Form/Form'
import { getCityDetails } from '../apicalls/allCitiesApiCall';
import { createNamedExports } from 'typescript';

type MyProps = {

}

type MyState = {
  homeSlug: string,
  homeURL: string,
  desiredSlug: string,
  desiredURL: string,
  homeUrbanArea: boolean,
  desiredUrbanArea: boolean,
  homeImage: string,
  desiredImage: string
}

class App extends Component<MyProps, MyState> {
  state: MyState = {
    homeSlug: '',
    homeURL: '',
    desiredSlug: '',
    desiredURL: '',
    homeUrbanArea: true,
    desiredUrbanArea: true,
    homeImage: '',
    desiredImage: ''
  }

handleCallback = (param: string, secParam: string) => {
  this.setState({homeURL: param, desiredURL: secParam})  
  this.getSlug(param, secParam)
  this.getImage()
}

getSlug = (lemon: string, lime: string) => {
  getCityDetails(lemon)
    .then(data => {
      if(!data['_links']['city:urban_area']) {
        this.setState({homeUrbanArea: false})
      } else {
      this.setState({ homeSlug: data['_links']['city:urban_area'].href })
      }
    })

  getCityDetails(lime)
    .then(data => {
      if(!data['_links']['city:urban_area']) {
        this.setState({desiredUrbanArea: false})
      } else {
      this.setState({ desiredSlug: data['_links']['city:urban_area'].href })
      }
  })
}

getImage = () => {
  


}



  render() {


    return (
      <main className='app'>
        <Header />
        <Form handleCallback={this.handleCallback} homeUrbanArea={this.state.homeUrbanArea} desiredUrbanArea={this.state.desiredUrbanArea}/>
      </main>
    )
  }
}

export default App;