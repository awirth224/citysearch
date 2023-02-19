import React, { Component } from "react";
import searchFetch from '../apicalls/allCitiesApiCall';

type MyProps = {
    //put props here
}

type MyState = {
    homeCity: string;
    desiredCity: string;
    cityNames: string[];
    //desiredCityNames: string[];
}

class Form extends Component<MyProps, MyState> {

    state: MyState = {
        homeCity: '',
        desiredCity: '',
        cityNames: []
    }


    handleClick = (e: any) => {
        e.preventDefault()
    }

    getUserOptions = (cities: []) => {
        const allResults: string[] = cities.map(city => city["matching_full_name"])
        return allResults
    }


    // eventChange($event: KeyboardEvent): void {
    //     (<HTMLInputElement>$event.target).value;
    // }

    // onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    //     this.setState({ text: e.currentTarget.value });
    //   };

    // const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setValues({ ...values, [event.target.name]: 
    // event.target.value });
    // };

    // const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     setInputValue(event.target.value);
    //   };


    // handleChange = (e: any) => {
    handleChange = (e: any) => {

        const name: string = e.target.name
        const value: string = e.target.value

        if (name === 'homeCity') {
            this.setState({ homeCity: value })
        } else if (name === 'desiredCity') {
            this.setState({ desiredCity: value })
        }

        // searchFetch(this.state.city).then(data => {
        //     const allCities = data["_embedded"]["city:search-results"]
        //     const searchedCityNames = this.getUserOptions(allCities)
        //     this.setState({ cityNames: searchedCityNames })
        // })
    }

    render() {
        const dropDownItems = this.state.cityNames.map((item, index) => <option key={index}>{item}</option>)

        return (
            <form>
                <input type='search' list='cityNames' autoComplete='off' name='homeCity' value={this.state.homeCity} placeholder='Enter your current city' onChange={(event) => this.handleChange(event)} />
                <datalist id='cityNames'>{dropDownItems}</datalist>

                <input type='search' list='cityNames' autoComplete='off' name='desiredCity' value={this.state.desiredCity} placeholder='Enter your desired city' onChange={(event) => this.handleChange(event)} />
                <datalist id='cityNames'>{dropDownItems}</datalist>

                <button onClick={(e) => this.handleClick(e)}>Search</button>
            </form>
        )
    }
}

export default Form