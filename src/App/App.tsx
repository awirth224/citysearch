import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import Form from '../Form/Form'
import Card from '../Card/Card';
import { getCityDetails } from '../apicalls/allCitiesApiCall';
import { createNamedExports } from 'typescript';
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
  getCityScores = () => {
    fetch(`${this.state.homeSlug}scores/`)
      .then(response => response.json())
      .then(data => {
        const newScores = data.categories.reduce((acc: any, curr: any) => {
          acc[curr.name] = curr.score_out_of_10
          return acc
        }, {})

        this.setState({ homeCityScores: newScores })
      })
      .then(() => {
        fetch(`${this.state.desiredSlug}scores/`)
          .then(response => response.json())
          .then(data => {
            const newScores = data.categories.reduce((acc: any, curr: any) => {
              acc[curr.name] = curr.score_out_of_10
              return acc
            }, {})

            this.setState({ desiredCityScores: newScores })
          })
      })
  }

  getSlug = (lemon: string, lime: string) => {
    getCityDetails(lemon)
      .then(data => {
        if (!data['_links']['city:urban_area']) {
          this.setState({ homeUrbanArea: false })
        } else {
          this.setState({ homeSlug: data['_links']['city:urban_area'].href })
        }
      })
      .then(() => {
        getCityDetails(lime)
          .then(data => {
            if (!data['_links']['city:urban_area']) {
              this.setState({ desiredUrbanArea: false })
            } else {
              this.setState({ desiredSlug: data['_links']['city:urban_area'].href })
            }
          })
          .then(() => this.getCityScores())
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