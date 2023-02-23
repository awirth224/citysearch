import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import Form from '../Form/Form'
import Card from '../Card/Card';
import { 
  getCityDetails, 
  // getFullName, 
  getSpecifiedInfo,
  urbanFetch,
  getFullName
} from '../apicalls/allCitiesApiCall';
import grabGeonameId from '../apicalls/geonameId'
import { Route , NavLink } from 'react-router-dom'; 


type MyProps = {

}

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

class App extends Component<MyProps, MyState> {
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
        data['_links']['ua:item'].forEach((city: {href: string, name: string}) => {
          getFullName(city.href)
          .then(data => {
            const obj: {[key: string]: string} = {}

            obj.href = city.href
            obj.fullName = data['full_name']
            urbanData.push(obj)
            this.setState({ urbanAreas: urbanData})
          })
        })
      })
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
  }

  getSlug = (homeSlug: string, lime: string) => {
    getCityDetails(homeSlug)
      .then(data => {
        const urbanPath = data['_links']['city:urban_area'].href
        if (!urbanPath) {
          this.setState({ homeUrbanArea: false })
        } else {
          this.getCityScores('home', urbanPath, 'scores')
          this.getCityImages('home', urbanPath, 'images')
        }
      })
    getCityDetails(lime)
      .then(data => {
        const urbanPath = data['_links']['city:urban_area'].href
        
        if (!urbanPath) {
          this.setState({ desiredUrbanArea: false })
        } else {
          this.getCityScores('desired', urbanPath, 'scores')
          this.getCityImages('desired', urbanPath, 'images')
        }
      })
  }

  getCityScores = (type: string, url: string, endpoint: string) => {
    getSpecifiedInfo(url, endpoint)
      .then(data => {
        const newScores = data.categories.reduce((acc: any, curr: any) => {
          acc[curr.name] = curr.score_out_of_10
          return acc
        }, {})
        console.log(newScores)
        if(type === 'home') {
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
        
        if(type === 'home') {
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
       <Route exact path='/' render ={ () => <Form handleCallback={this.handleCallback} homeUrbanArea={this.state.homeUrbanArea} desiredUrbanArea={this.state.desiredUrbanArea} urbanAreas={this.state.urbanAreas} /> } /> 

        <Route exact path='/cities' render={()=>{
          return(
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
