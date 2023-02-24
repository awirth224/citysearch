import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import Form from '../Form/Form'
import Card from '../Card/Card';
import {
  urbanFetch,
  getFullName,
  getSpecifiedInfo,
} from '../apicalls/allCitiesApiCall';
import { Route, NavLink } from 'react-router-dom';

type MyState = {
  homeURL: string,
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
  urbanAreas: [],
}

class App extends Component<{}, MyState> {
  state: MyState = {
    homeURL: '',
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
    desiredCityPopulation: 0,
    urbanAreas: []
  }

  componentDidMount(): void {
    const urbanData: any = [];
    urbanFetch()
      .then(data => {
        data['_links']['ua:item'].forEach((city: { href: string, name: string }) => {
          getFullName(city.href)
            .then(data => {
              const obj: { [key: string]: string } = {}

              obj.href = city.href
              obj.fullName = data['full_name']
              urbanData.push(obj)
              this.setState({ urbanAreas: urbanData })
            })
        })
      })
  }

  handleCallback = (param: string, secParam: string) => {
    this.setState({ homeCityName: param, desiredCityName: secParam })
    this.getUrbanPath('home', param)
    this.getUrbanPath('desired', secParam)
  }

  getUrbanPath = (type: string, lemon: string) => {
    const cityDetails = this.state.urbanAreas.find((city: { fullName: string, href: string }) => city.fullName === lemon)
    if (type === 'home') {
      this.getCityScores('home', cityDetails!['href'], 'scores')
      this.getCityImages('home', cityDetails!['href'], 'images')
    } else {
      this.getCityScores('desired', cityDetails!['href'], 'scores')
      this.getCityImages('desired', cityDetails!['href'], 'images')
    }
  }

  getCityScores = (type: string, url: string, endpoint: string) => {
    getSpecifiedInfo(url, endpoint)
      .then(data => {
        const newScores = data.categories.reduce((acc: any, curr: any) => {
          acc[curr.name] = curr.score_out_of_10
          return acc
        }, {})
        if (type === 'home') {
          this.setState({ homeCityScores: newScores })
        } else {
          this.setState({ desiredCityScores: newScores })
        }
      })
  }

  getCityImages = (type: string, url: string, endpoint: string) => {
    getSpecifiedInfo(url, endpoint)
      .then(data => {
        const image = data.photos[0].image.web

        if (type === 'home') {
          this.setState({ homeImage: image })
        } else {
          this.setState({ desiredImage: image })
        }
      })
  }
  clearState = () => {
    this.setState({
      homeURL: '',
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
    })
  }

  render() {
    return (
      <main className='app'>
        <Header />
        <Route exact path='/' render={() => <Form handleCallback={this.handleCallback} homeUrbanArea={this.state.homeUrbanArea} desiredUrbanArea={this.state.desiredUrbanArea} urbanAreas={this.state.urbanAreas} />} />

        <Route exact path='/cities' render={() => {
          return (
            <div className='display-area'>
              <NavLink to='/'><button className='home-btn' onClick={() => this.clearState()}> Home </button> </NavLink>
              <Card
                cityInfo={this.state.homeCityScores}
                cityName={this.state.homeCityName}
                cityPopulation={this.state.homeCityPopulation}
                cityImage={this.state.homeImage}
              />
              <Card
                cityInfo={this.state.desiredCityScores}
                cityName={this.state.desiredCityName}
                cityPopulation={this.state.desiredCityPopulation}
                cityImage={this.state.desiredImage}
              />
            </div>



          )
        }}
        />

      </main>
    )
  }
}

export default App;
