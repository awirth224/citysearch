import React, { Component } from "react";
import './Card.css';
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";
import { 
	urbanFetch,
	getFullName,
	getSpecifiedInfo,
  } from '../apicalls/allCitiesApiCall';

// type CardProps = {
// 	cityInfo: any;
// 	cityName: string;
// 	cityPopulation: number;
// 	cityImage: string;
// }

// const Card: React.FC<CardProps> = ({ cityInfo, cityName, cityPopulation, cityImage }) => {

// 	return (
// 		<section className="card-content" id='flip-card' >
// 			<FrontCard cityName={cityName} cityPopulation={cityPopulation} cityImage={cityImage} />
// 			<BackCard cityInfo={cityInfo} />
// 		</section>
// 	)
// }

type MyProps = {
    urbanAreas: any;
	citySlug: string;
}

type MyState = {
    cityImage: string,
	cityScores: [],
	cityName: string,
}

class Card extends Component<MyProps, MyState> {

    state: MyState = {
        cityImage: '',
		cityScores: [],
		cityName: '',
    }

	componentDidMount(): void {
		console.log(this.props.citySlug)
		this.getCityDeets(this.props.citySlug)
	}

	getCityDeets = (citySlug: string) => {
		const cityDetails = this.props.urbanAreas.find((city: { fullName: string, href: string, slug: string }) => city.slug === citySlug)
		  this.getCityScores(cityDetails!['href'], 'scores')
		  this.getCityImages(cityDetails!['href'], 'images')
	}

	getCityScores = (url: string, endpoint: string) => {
		getSpecifiedInfo(url, endpoint)
		  .then(data => {
			const newScores = data.categories.reduce((acc: any, curr: any) => {
			  acc[curr.name] = curr.score_out_of_10
			  return acc
			}, {})
			
			this.setState({ cityScores: newScores })
		  })
	}

	getCityImages = (url: string, endpoint: string) => {
		getSpecifiedInfo(url, endpoint)
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