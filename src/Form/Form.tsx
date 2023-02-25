import React, { Component } from "react";
import './Form.css'
import { Link } from 'react-router-dom'

type MyProps = {
    handleCallback: Function;
    homeUrbanArea: boolean;
    desiredUrbanArea: boolean;
    urbanAreas: any;
}

type MyState = {
    homeCity: string;
    desiredCity: string;
    disabled: boolean;
    homeCityFound: boolean;
    desiredCityFound: boolean;
}

class Form extends Component<MyProps, MyState> {

    state: MyState = {
        homeCity: '',
        desiredCity: '',
        disabled: true,
        homeCityFound: false,
        desiredCityFound: false
    }

    // handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    //     const { name, value } = e.currentTarget;

    //     // let homeCityFound: any;
    //     // let desiredCityFound: any;

    //     // if (name === 'homeCity') {
    //     //     homeCityFound = this.props.urbanAreas.find((item: { href: string, fullName: string }) => item.fullName === value)
    //     // }

    //     // if (name === 'desiredCity') {
    //     //     desiredCityFound = this.props.urbanAreas.find((item: { href: string, fullName: string }) => item.fullName === value)
    //     // }

    //     // if (homeCityFound && desiredCityFound) {
    //     //     this.setState({ disabled: false })
    //     // }

    //     this.setState(prevState => ({
    //         ...prevState,
    //         [name]: value,
    //     }))

    //     const homeCityFound = this.props.urbanAreas.find((item: { href: string, fullName: string }) => item.fullName === this.state.homeCity)
    //     const desiredCityFound = this.props.urbanAreas.find((item: { href: string, fullName: string }) => item.fullName === this.state.desiredCity)

    //     console.log('homeCityFound', homeCityFound)
    //     console.log('desiredCityFound', desiredCityFound)

    //     if (homeCityFound === undefined && desiredCityFound === undefined) {
    //         this.setState({ disabled: true })
    //     } else if (homeCityFound === undefined && desiredCityFound) {
    //         this.setState({ disabled: true })
    //     } else if (homeCityFound && desiredCityFound === undefined) {
    //         this.setState({ disabled: true })
    //     } else {
    //         this.setState({ disabled: false })
    //     }

    //     //this.checkInputs()
    // }

    handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
        const { name, value } = e.currentTarget;

        this.setState(prevState => ({
            ...prevState,
            [name]: value,
        }))

        let home: any;
        let desired: any;


        if (name === 'homeCity') {
            if (this.props.urbanAreas.find((item: { href: string, fullName: string }) => item.fullName === value)) {
                this.setState({ homeCityFound: true })
                //home = true
            }
        }

        if (name === 'desiredCity') {
            if (this.props.urbanAreas.find((item: { href: string, fullName: string }) => item.fullName === value)) {
                this.setState({ desiredCityFound: true })
                //desired = true
            }
        }

        console.log('home state', this.state.homeCityFound)
        console.log('desired state', this.state.desiredCityFound)

        if (this.state.homeCityFound && this.state.desiredCityFound) {
            this.setState({ disabled: false })
        } else {
            this.setState({ disabled: true })
        }

        // if (home && desired) {
        //     this.setState({ disabled: false })
        // } else {
        //     this.setState({ disabled: true })
        // }

        // console.log('homeCityFound', this.state.homeCityFound)
        // console.log('desiredCityFound', this.state.desiredCityFound)


    }

    createDatalist = () => {
        const dropDown = this.props.urbanAreas.map((item: { href: string, fullName: string }) => <option key={item.href}>{item.fullName}</option>)
        return dropDown
    }

    handleClick = () => {
        this.props.handleCallback(this.state.homeCity, this.state.desiredCity)
    }

    render() {
        return (
            <div className="form">
                <form>
                    <div className='input-container'>
                        <label>Starting City</label>
                        <input type='search' list='listOne' autoComplete='off' name='homeCity' value={this.state.homeCity} placeholder='Enter your current city' onChange={(event) => this.handleChange(event)} required />
                        <datalist id='listOne'>{this.createDatalist()}</datalist>
                    </div>
                    {!this.props.homeUrbanArea && <h2>Please enter a valid city</h2>}
                    <div className='input-container'>
                        <label>Desired City</label>
                        <input type='search' list='listTwo' autoComplete='off' name='desiredCity' value={this.state.desiredCity} placeholder='Enter your desired city' onChange={(event) => this.handleChange(event)} required />
                        <datalist id='listTwo'>{this.createDatalist()}</datalist>
                    </div>
                    {!this.props.desiredUrbanArea && <h2>Please enter a valid city</h2>}
                    <Link to='/cities' tabIndex={-1}>
                        <button disabled={this.state.disabled} onClick={() => this.handleClick()} className='search'>Search</button>
                    </Link>
                </form>
            </div>
        )
    }
}

export default Form