import React, { Component } from "react";
import './Form.css'
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

type MyProps = {
    handleCallback: Function;
    urbanAreas: any;
}

type MyState = {
    homeCity: string;
    desiredCity: string;
}

class Form extends Component<MyProps, MyState> {

    state: MyState = {
        homeCity: '',
        desiredCity: '',
    }

   

    handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
        const { name, value } = e.currentTarget;

        this.setState(prevState => ({
            ...prevState,
            [name]: value,
        }))

        if (name === 'homeCity') {
            const matchingHome = this.props.urbanAreas.find((item: { href: string, fullName: string }) => item.fullName === value)
            this.setState({ homeCity: matchingHome === undefined ? '' : matchingHome.fullName})
        } else {
            const matchingAway = this.props.urbanAreas.find((item: { href: string, fullName: string }) => item.fullName === value) 
            this.setState({ desiredCity: matchingAway === undefined ? '' : matchingAway.fullName})
        }
    }


    createDatalist = () => {
        const dropDown = this.props.urbanAreas.map((item: { href: string, fullName: string }) => <option key={item.href}>{item.fullName}</option>)
        return dropDown
    }

    handleClick = () => {
        this.props.handleCallback(this.state.homeCity, this.state.desiredCity)
    }

    handleErrorClick = () => {
        if(!this.state.homeCity && !this.state.desiredCity) {
            swal('Both city inputs are invalid', 'Please try again!', 'error')
        } else if(!this.state.desiredCity) {
            swal('Desired city input is invalid', 'Please try again!', 'error')
        } else {
            swal('Starting city input is invalid', 'Please try again!', 'error')
        }
    }
    
    render() {
        const searchButton = this.state.homeCity && this.state.desiredCity
        ? <Link to='/cities' tabIndex={-1}><button  onClick={this.handleClick} className='search'>Search</button></Link>
        : <Link to='/' tabIndex={-1}><button onClick={this.handleErrorClick} className='search'>Search </button></Link>

        return (
            <div className="form">
                <form>
                    <div className='input-container'>
                        <label>Starting City</label>
                        <input type='search' list='listOne' autoComplete='off' name='homeCity' placeholder='Enter your current city' onChange={(event) => this.handleChange(event)} />
                        <datalist id='listOne'>{this.createDatalist()}</datalist>
                    </div>
                    <div className='input-container'>
                        <label>Desired City</label>
                        <input type='search' list='listTwo' autoComplete='off' name='desiredCity' placeholder='Enter your desired city' onChange={(event) => this.handleChange(event)} />
                        <datalist id='listTwo'>{this.createDatalist()}</datalist>
                    </div>
                      {searchButton}
                </form>
            </div>
        )
    }
}

export default Form