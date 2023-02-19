import React, { Component } from "react";
import searchFetch from '../apicalls/allCitiesApiCall';

type MyProps = {
    //put props here
}

type MyState = {
    homeCity: string;
    desiredCity: string;
    homeCityNames: string[];
    desiredCityNames: string[];
}

class Form extends Component<MyProps, MyState> {

    state: MyState = {
        homeCity: '',
        desiredCity: '',
        homeCityNames: [],
        desiredCityNames: []
    }


    handleClick = (e: any) => {
        e.preventDefault()
    }

    getUserOptions = (cities: []) => {
        const allResults: string[] = cities.map(city => city["matching_full_name"])
        return allResults
    }

    handleChange = (e: any) => {

        const name: string = e.target.name
        const value: string = e.target.value

        if (name === 'homeCity') {
            this.setState({ homeCity: value })
            searchFetch(this.state.homeCity).then(data => {
                const allCities = data["_embedded"]["city:search-results"]
                const searchedCityNames = this.getUserOptions(allCities)
                this.setState({ homeCityNames: searchedCityNames })
            })
        } else if (name === 'desiredCity') {
            this.setState({ desiredCity: value })
            searchFetch(this.state.desiredCity).then(data => {
                const allCities = data["_embedded"]["city:search-results"]
                const searchedCityNames = this.getUserOptions(allCities)
                this.setState({ desiredCityNames: searchedCityNames })
            })
        }


    }

    render() {
        const homeDropDown = this.state.homeCityNames.map((item, index) => <option key={index}>{item}</option>)
        const desiredDropDown = this.state.desiredCityNames.map((item, index) => <option key={index}>{item}</option>)

        return (
            <form>
                <input type='search' list='homeCityNames' autoComplete='off' name='homeCity' value={this.state.homeCity} placeholder='Enter your current city' onChange={(event) => this.handleChange(event)} />
                <datalist id='homeCityNames'>{homeDropDown}</datalist>

                <input type='search' list='desiredCityNames' autoComplete='off' name='desiredCity' value={this.state.desiredCity} placeholder='Enter your desired city' onChange={(event) => this.handleChange(event)} />
                <datalist id='desiredCityNames'>{desiredDropDown}</datalist>

                <button onClick={(e) => this.handleClick(e)}>Search</button>
            </form>
        )
    }
}

export default Form