import React, { Component } from "react";
import './Form.css'
import { 
    searchFetch,
    getCityDetails,
} from '../apicalls/allCitiesApiCall';
import getSingleCity from "../apicalls/singleCityApiCall";
import grabGeonameId from "../apicalls/geonameId";
import {Link} from 'react-router-dom'

type MyProps = {
    handleCallback: Function;  
    homeUrbanArea: boolean;  
    desiredUrbanArea: boolean;
    urbanAreas: any;
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

    handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
        const { name, value } = e.currentTarget;
        this.setState(prevState => ({
          ...prevState,
          [name]: value,
        }))
    }

    getUserOptions = (cities: []) => {
        const allResults: {}[] = cities.map(city => ({
            href: city["_links"]["city:item"]["href"],
            fullName: city["matching_full_name"]
        }))
        return allResults
    }

    createDatalist = () => {
        const dropDown = this.props.urbanAreas.map((item: { href: string, fullName: string }) => <option key={item.href}>{item.fullName}</option>)
        return dropDown
    }

    handleClick = () => {
        
        const homeCityObject = this.state.homeCityNames.find((city: { fullName: string, href: string }) =>  city.fullName === this.state.homeCity)
        const homeCityURL = homeCityObject.href

        const desiredCityObject = this.state.desiredCityNames.find((city: { fullName: string, href: string }) =>  city.fullName === this.state.desiredCity)
        const desiredCityURL = desiredCityObject.href

        this.props.handleCallback(homeCityURL, desiredCityURL)
        // this.props.homeSlug === "" && <h2>Please choose valid city</h2>
        
    }

    render() {
        return (
          <div className="form">
            <form>
                <div className='input-container'>
                    <label>Starting City</label>
                    <input type='search' list='listOne' autoComplete='off' name='homeCity' placeholder='Enter your current city' onChange={(event) => this.handleChange(event)} required/>
                    {/* <datalist id='listOne'>{this.switchDataList('homeCityNames')}</datalist> */}
                    <datalist id='listOne'>{this.createDatalist()}</datalist>
                </div>
                {!this.props.homeUrbanArea && <h2>Please enter a valid city</h2>}
                <div className='input-container'>
                    <label>Desired City</label>
                    <input type='search' list='listTwo' autoComplete='off' name='desiredCity' placeholder='Enter your desired city' onChange={(event) => this.handleChange(event)} required/>
                    {/* <datalist id='listTwo'>{this.switchDataList('desiredCityNames')}</datalist> */}
                    <datalist id='listTwo'>{this.createDatalist()}</datalist>
                </div>
                {!this.props.desiredUrbanArea && <h2>Please enter a valid city</h2>}
                <Link to='/cities' tabIndex={-1}>
                    <button onClick={() => this.handleClick()} className='search'>Search</button>
                </Link>
            </form>
          </div>
        )
    }
}

export default Form

