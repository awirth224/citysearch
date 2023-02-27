import React, { Component } from "react";
import './Card.css';
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";
import { getSpecifiedInfo } from '../apicalls/allCitiesApiCall';

type CardProps = {
	citySlug: string;
}

type CardState = {
  cityImage: string,
	cityScores: [],
	cityName: string,
	error: string
}

class Card extends Component <CardProps, CardState> {

    state: CardState = {
			cityImage: '',
			cityScores: [],
			cityName: '',
			error: '',
    }

	componentDidMount(): void {
		this.makeCityDetails(this.props.citySlug)
	}

	makeCityDetails = (citySlug: string) => {
		this.storeCityScores(citySlug, 'scores')
		this.storeCityImages(citySlug, 'images')
		this.storeCityName(citySlug)
	}

	storeCityName = (citySlug: string) => {
		getSpecifiedInfo(citySlug)
		.then(data => {
			this.setState({ cityName: data['full_name'] })
		})
	}

	storeCityScores = (citySlug: string, endpoint: string) => {
		getSpecifiedInfo(citySlug, endpoint)
		  .then(data => {
			const newScores = data.categories.reduce((acc: any, curr: any) => {
			  acc[curr.name] = curr.score_out_of_10
			  return acc
			}, {})
			
			this.setState({ cityScores: newScores })
		  })
	}

	storeCityImages = (citySlug: string, endpoint: string) => {
		getSpecifiedInfo(citySlug, endpoint)
		  .then(data => {
			const image = data.photos[0].image.web
			
			this.setState({ cityImage: image })
		  })
	}

	render() {
		return (
			<section className="card-content" >
 				<FrontCard cityName={this.state.cityName} cityImage={this.state.cityImage} />
				<BackCard cityInfo={this.state.cityScores} />
			</section>
		)
	}
}

export default Card