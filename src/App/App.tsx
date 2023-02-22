import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import Form from '../Form/Form'
import Card from '../Card/Card';
import { getCityDetails, getSpecifiedInfo } from '../apicalls/allCitiesApiCall';
import grabGeonameId from '../apicalls/geonameId'


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
  desiredImage: string,
  homeCityScores: [],
  desiredCityScores: [],
  homeCityName: string,
  homeCityPopulation: number,
  desiredCityName: string,
  desiredCityPopulation: number
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
    desiredImage: '',
    homeCityScores: [],
    desiredCityScores: [],
    homeCityName: '',
    homeCityPopulation: 0,
    desiredCityName: '',
    desiredCityPopulation: 0
  }

  handleCallback = (param: string, secParam: string) => {

    grabGeonameId(param)
      .then(data => {
        this.setState({ homeURL: param, homeCityName: data.name, homeCityPopulation: data.population })
      })

    grabGeonameId(secParam)
      .then(data => {
        this.setState({ desiredURL: secParam, desiredCityName: data.name, desiredCityPopulation: data.population })
      })

    this.getSlug(param, secParam)
    //this.getImage()
  }


  // refactor
  getCityScores = (type: string, url: string, endpoint: string) => {
    getSpecifiedInfo(url, endpoint)
      .then(data => {
        const newScores = data.categories.reduce((acc: any, curr: any) => {
          acc[curr.name] = curr.score_out_of_10
          return acc
        }, {})
        if(type === 'home') {
          this.setState({ homeCityScores: newScores })
        } else {
          this.setState({ desiredCityScores: newScores })
        }
      })
  }

  getSlug = (homeSlug: string, lime: string) => {
      getCityDetails(homeSlug)
        .then(data => {
          const urbanPath = data['_links']['city:urban_area'].href
          if (!urbanPath) {
            this.setState({ homeUrbanArea: false })
          } else {
            // this.setState({ homeSlug: urbanPath.href })
            this.getCityScores('home', urbanPath, 'scores')
          }
        })
      getCityDetails(lime)
      .then(data => {
        const urbanPath = data['_links']['city:urban_area'].href
        if (!urbanPath) {
          this.setState({ desiredUrbanArea: false })
        } else {
          // this.setState({ desiredSlug: urbanPath.href })
          this.getCityScores('desired', urbanPath, 'scores')
        }
      })
  }














  // getImage = () => {
  // }

  render() {

    let displayHomeCard: any;
    let displayDesiredCard: any;

    // combine properties in state so we only have to pass in 1-2 props

    if (this.state.homeCityScores && this.state.desiredCityScores) {
      displayHomeCard = <Card cityInfo={this.state.homeCityScores} cityName={this.state.homeCityName} cityPopulation={this.state.homeCityPopulation} cityImage={this.state.homeImage} />
      displayDesiredCard = <Card cityInfo={this.state.desiredCityScores} cityName={this.state.desiredCityName} cityPopulation={this.state.desiredCityPopulation} cityImage={this.state.homeImage} />
    }

    return (
      <main className='app'>
        <Header />
        <Form handleCallback={this.handleCallback} homeUrbanArea={this.state.homeUrbanArea} desiredUrbanArea={this.state.desiredUrbanArea} />
        <div className='display-area'>
          {displayHomeCard}
          {displayDesiredCard}
        </div>
      </main>
    )
  }
}

export default App;