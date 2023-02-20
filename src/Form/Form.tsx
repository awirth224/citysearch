import React, { Component } from "react";
import './Form.css'
import { 
    searchFetch,
    getCityDetails,
} from '../apicalls/allCitiesApiCall';
import getSingleCity from "../apicalls/singleCityApiCall";
import grabGeonameId from "../apicalls/geonameId";

type MyProps = {
    //put props here
}

type MyState = {
    homeCity: string;
    homeCityNames: any;
    desiredCity: string;
    desiredCityNames: any;
}

class Form extends Component<MyProps, MyState> {

    state: MyState = {
        homeCity: '',
        homeCityNames: [],
        desiredCity: '',
        desiredCityNames: [],
    }

    handleChange = (e: any) => {
        const name: string = e.target.name
        const value: string = e.target.value

        if (name === 'homeCity') {
            searchFetch(value).then(data => {
                const allCities = data["_embedded"]["city:search-results"]
                const searchedCityNames = this.getUserOptions(allCities)
                this.setState({homeCity: value, homeCityNames: searchedCityNames })
            })
        } else if (name === 'desiredCity') {
            searchFetch(value).then(data => {
                const allCities = data["_embedded"]["city:search-results"]
                const searchedCityNames = this.getUserOptions(allCities)
                this.setState({desiredCity: value, desiredCityNames: searchedCityNames })
            })
        }
    }

    getUserOptions = (cities: []) => {
        const allResults: {}[] = cities.map(city => ({
            href: city["_links"]["city:item"]["href"],
            fullName: city["matching_full_name"]
        }))
        return allResults
    }

    switchDataList = (key: keyof MyState) => {
            const dropDown = this.state[key].map((item: { href: string, fullName: string }) => <option key={item.href}>{item.fullName}</option>)
            return dropDown
    }

    handleClick = (e:any) => {
        e.preventDefault()
        
        const homeCityURL = this.state.homeCityNames.find((city: { fullName: string, href: string }) =>  city.fullName === this.state.homeCity)
        getCityDetails(homeCityURL.href)
            .then(data => this.setState({ homeURL: data['_links']['city:urban_area'].href }))

        const desiredCityURL = this.state.desiredCityNames.find((city: { fullName: string, href: string }) =>  city.fullName === this.state.desiredCity)
        getCityDetails(desiredCityURL.href)
            .then(data => this.setState({ desiredURL: data['_links']['city:urban_area'].href }))
    }

    render() {
        return (
          <div className="form">
            <form>
                <div className='input-container'>
                    <label>Starting City</label>
                    <input type='search' list='listOne' autoComplete='off' name='homeCity' placeholder='Enter your current city' onChange={(event) => this.handleChange(event)} required/>
                    <datalist id='listOne'>{this.switchDataList('homeCityNames')}</datalist>
                </div>
                <div className='input-container'>
                    <label>Desired City</label>
                    <input type='search' list='listTwo' autoComplete='off' name='desiredCity' placeholder='Enter your desired city' onChange={(event) => this.handleChange(event)} required/>
                    <datalist id='listTwo'>{this.switchDataList('desiredCityNames')}</datalist>
                </div>

                <button onClick={(e) => this.handleClick(e)} className='search'>Search</button>
            </form>
          </div>
        )
    }
}

export default Form

