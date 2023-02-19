import React, { Component } from "react";
import searchFetch from '../apicalls/allCitiesApiCall';
import getSingleCity from "../apicalls/singleCityApiCall";
import grabGeonameId from "../apicalls/geonameId";

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
        
        const homeCityTrue = this.state.homeCityNames.find(city =>  city === this.state.homeCity)
        const desiredCityTrue = this.state.desiredCityNames.find(city => city === this.state.desiredCity)
       

        if(homeCityTrue) {
            let geonameId:string; 

            getSingleCity(homeCityTrue)
            .then((data)=> geonameId = data['_embedded']['city:search-results'][0]['_links']['city:item'])
            .then(() =>  {
                 grabGeonameId(geonameId)
                    .then((data) => console.log('DID THIS WORK', data))
            })
        }
   

        if(desiredCityTrue) {
            getSingleCity(desiredCityTrue)
            .then((data) => data['_embedded']['city:search-results'][0]['_links']['city:item'])
        }   
       
    }

    getUserOptions = (cities: []) => {
        const allResults: string[] = cities.map(city => city["matching_full_name"])
        return allResults
    }

    handleChange = (e: any) => {

        const name: string = e.target.name
        const value: string = e.target.value

        if (name === 'homeCity') {
            // this.setState({ homeCity: value })
            searchFetch(this.state.homeCity).then(data => {
                const allCities = data["_embedded"]["city:search-results"]
                const searchedCityNames = this.getUserOptions(allCities)
                // this.setState({ homeCityNames: searchedCityNames })
                this.setState({homeCity: value, homeCityNames: searchedCityNames })
            })
        } else if (name === 'desiredCity') {
           
            searchFetch(this.state.desiredCity).then(data => {
                const allCities = data["_embedded"]["city:search-results"]
                const searchedCityNames = this.getUserOptions(allCities)
                this.setState({ desiredCity:value, desiredCityNames: searchedCityNames })
                
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

