import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import searchFetch from '../apicalls/allCitiesApiCall';

type MyProps = {

}

type MyState = {
  city: string;
  cities: string[];
  url: string;
}

class App extends Component<MyProps, MyState> {
  state: MyState = {
    city: '',
    cities: [],
    url: ''
  }

  handleClick = (e: any) => {
    e.preventDefault()
    searchFetch(this.state.city).then(data => {
      console.log(data)
      const allCities = data["_embedded"]["city:search-results"]
      this.getOptions(allCities)
      this.setState({cities: allCities})
    })
  }
  
  getOptions = (cities: []) => {
    const allResults: string[] = cities.map(city => city["matching_full_name"])
    console.log('ALL RESULTS:', allResults)
  }

  handleChange = (e: any) => {
    // const {name, value} = e.target
    this.setState({ city: e.target.value })
  }

  render() {
    return (
      <main className='app'>
        <Header />
        <form>
          <input type='search' name='city' value={this.state.city} placeholder='Search' onChange={(event) => this.handleChange(event)}/>
          <button onClick={(e) => this.handleClick(e)}>Search</button>
        </form>
      </main>
    )
  }
}

export default App;
