import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header'
import searchFetch from '../apicalls/allCitiesApiCall';

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

  handleClick = (e: any) => {
    e.preventDefault()
  }

  getUserOptions = (cities: []) => {
    const allResults: string[] = cities.map(city => city["matching_full_name"])
    return allResults
  }

  handleChange = (e: any) => {
    console.log('event', e.target.value)
    this.setState({ city: e.target.value })
    searchFetch(this.state.city).then(data => {
      const allCities = data["_embedded"]["city:search-results"]
      const searchedCityNames = this.getUserOptions(allCities)
      this.setState({ cityNames: searchedCityNames })
    })
  }

  render() {
    const dropDownItems = this.state.cityNames.map((item, index) => <option key={index}>{item}</option>)

    return (
      <main className='app'>
        <Header />
        <form>
          <input type='search' list='cityNames' autoComplete='off' name='city' value={this.state.city} placeholder='Search' onChange={(event) => this.handleChange(event)} />
          <datalist id='cityNames'>{dropDownItems}</datalist>
          <button onClick={(e) => this.handleClick(e)}>Search</button>
        </form>
      </main>
    )
  }
}

export default App;