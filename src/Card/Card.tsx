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
	error: string
}

class Card extends Component<MyProps, MyState> {

    state: MyState = {
        cityImage: '',
		cityScores: [],
		cityName: '',
		error: '',
    }

	componentDidMount(): void {
		this.getCityDeets(this.props.citySlug)
	}

	getCityDeets = (citySlug: string) => {
		this.getCityScores(citySlug, 'scores')
		this.getCityImages(citySlug, 'images')
		this.getCityName(citySlug)
	}

	getCityName = (citySlug: string) => {
		getSpecifiedInfo(citySlug)
		.then(data => {
			this.setState({ cityName: data['full_name'] })
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
 				<FrontCard cityName={this.state.cityName} cityImage={this.state.cityImage} />
				<BackCard cityInfo={this.state.cityScores} />
			</section>
		)
	}
}

export default Card