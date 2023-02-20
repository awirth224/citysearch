import React, { Component } from "react";
import './Form.css'
import searchFetch from '../apicalls/allCitiesApiCall';
import getSingleCity from "../apicalls/singleCityApiCall";
import grabGeonameId from "../apicalls/geonameId";

type MyProps = {
    //put props here
}

type MyState = {
    cities: any;
    homeCity: string;
    desiredCity: string;
    homeCityNames: any;
    desiredCityNames: any;
}

class Form extends Component<MyProps, MyState> {

    state: MyState = {
        cities: [],
        homeCity: '',
        desiredCity: '',
        homeCityNames: [],
        desiredCityNames: []
    }


    handleClick = (e:any) => {
        e.preventDefault()
        
        // const homeCityTrue = this.state.homeCityNames.find(city =>  city === this.state.homeCity)
        // const desiredCityTrue = this.state.desiredCityNames.find(city => city === this.state.desiredCity)
       

        // if(homeCityTrue) {
        //     let geonameId:string; 

        //     getSingleCity(homeCityTrue)
        //     .then((data)=> geonameId = data['_embedded']['city:search-results'][0]['_links']['city:item'])
        //     .then(() =>  {
        //          grabGeonameId(geonameId)
        //             .then((data) => console.log('DID THIS WORK', data))
        //     })
        // }
   

        // if(desiredCityTrue) {
        //     getSingleCity(desiredCityTrue)
        //     .then((data) => data['_embedded']['city:search-results'][0]['_links']['city:item'])
        // }   
       
    }

    componentDidMount(): void {
        searchFetch()
        .then(data => {
            const allCities = data["_embedded"]["city:search-results"]
            const searchedCityNames = this.getUserOptions(allCities)
            this.setState({ cities: searchedCityNames })
        })
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
        if(!this.state[key].length) {
            const cityDropDown = this.state.cities.map((item: { href: string, fullName: string }) => <option key={item.href}>{item.fullName}</option>)
            return cityDropDown
        } else {
            const updatedDropDown = this.state[key].map((item: { href: string, fullName: string }) => <option key={item.href}>{item.fullName}</option>)
            return updatedDropDown
        }
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

