import React, { Component } from "react";
import './Card.css';
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";
import { getSpecifiedInfo } from '../apicalls/allCitiesApiCall';

type MyProps = {
	urbanAreas: any;
	citySlug: string;
}

type MyState = {
	cityImage: string,
	cityScores: [],
	cityName: string,
	errorMessage: string
}

class Card extends Component<MyProps, MyState> {

	state: MyState = {
		cityImage: '',
		cityScores: [],
		cityName: '',
		errorMessage: '',
	}

	componentDidMount(): void {
		this.compileCityDetails(this.props.citySlug)
	}

	compileCityDetails = (citySlug: string) => {
		getSpecifiedInfo(citySlug)
			.then(data => {
				this.setState({ cityName: data['full_name'] })
			})
			.then(() => this.getCityScores(citySlug, 'scores'))
			.then(() => this.getCityImages(citySlug, 'images'))
			.catch(error => {
				this.setState({ errorMessage: error })
			})
	}

	getCityScores = (citySlug: string, endpoint: string) => {
		getSpecifiedInfo(citySlug, endpoint)
			.then(data => {
				const newScores = data.categories.reduce((acc: any, curr: any) => {
					acc[curr.name] = curr.score_out_of_10
					return acc
				}, {})

				this.setState({ cityScores: newScores })
			})
	}

	getCityImages = (citySlug: string, endpoint: string) => {
		getSpecifiedInfo(citySlug, endpoint)
			.then(data => {
				const image = data.photos[0].image.web

				this.setState({ cityImage: image })
			})
	}

	render() {
		return (
			<section className="card-content" id='flip-card' >
				{!this.state.errorMessage && <FrontCard cityName={this.state.cityName} cityImage={this.state.cityImage} />}
				{!this.state.errorMessage && <BackCard cityInfo={this.state.cityScores} />}
				{this.state.errorMessage && <img className="error-image" src='https://i.imgflip.com/3811ub.jpg' alt='error message' />}
			</section>
		)
	}
}

export default Card