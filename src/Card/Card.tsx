import React, { Component } from "react";
import { createNamedExports } from "typescript";
import './Card.css';
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";

type CardProps = {
	cityInfo: any;
	cityName: string;
	cityPopulation: number;
	cityImage: string;
}

type CardState = {
	frontClicked: boolean;
	backClicked: boolean;
}

class Card extends Component<CardProps, CardState> {

	state: CardState = {
		frontClicked: false,
		backClicked: true
	}

	clickFrontButton = () => {
		this.setState({ frontClicked: true, backClicked: false })
	}

	clickBackButton = () => {
		this.setState({ backClicked: true, frontClicked: false })
	}

	render() {
		let cardDisplay: any;

		if (this.state.backClicked) {
			cardDisplay = <FrontCard cityName={this.props.cityName} cityPopulation={this.props.cityPopulation} cityImage={this.props.cityImage} clickFrontButton={this.clickFrontButton} />
		} else if (this.state.frontClicked) {
			cardDisplay = <BackCard cityInfo={this.props.cityInfo} clickBackButton={this.clickBackButton} />
		}

		return (
			<section className="card-content" id='flip-card' >
				{cardDisplay}
			</section>
		)
	}
}

export default Card