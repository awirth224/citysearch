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
    // searchFetch(this.state.city).then(data => {
    //   console.log(data)
    //   const allCities = data["_embedded"]["city:search-results"]
    //   this.getOptions(allCities)
    //   this.setState({cities: allCities})
    // })
  }
  
  getUserOptions = (cities: []) => {
    const allResults: string[] = cities.map(city => city["matching_full_name"])
    console.log('ALL RESULTS:', allResults)
    return allResults
  }

  handleChange = (e: any) => {
    // const {name, value} = e.target
    searchFetch(this.state.city).then(data => {
      console.log(data)
      const allCities = data["_embedded"]["city:search-results"]
      this.getUserOptions(allCities)
      this.setState({cities: allCities})
    })
    this.setState({ city: e.target.value })
  }

  render() {
    // const lemons = this.getUserOptions(this.state.cities).map(lemon => {
    //   return (
    //     <option>{lemon}</option>
    //   )
    // })

    return (
      <main className='app'>
        <Header />
        <form>
          <input type='search' list='cityNames' autoComplete='off' name='city' value={this.state.city} placeholder='Search' onChange={(event) => this.handleChange(event)}/>
          {/* <datalist id='cityNames'>{lemons}</datalist> */}
          <button onClick={(e) => this.handleClick(e)}>Search</button>
        </form>
      </main>
    )
  }
}

export default App;
