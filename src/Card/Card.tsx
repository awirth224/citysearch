import React, { Component } from "react";
import './Card.css'

type CardProps = {
	theCityInfo: any;

}

type CardState = {
	clicked: boolean;
}

class Card extends Component<CardProps, CardState> {

	state: CardState = {
		clicked: false
	}

	// false indicates the front is showing 
	// true indicates the back is showing

	render() {

		const name: string = this.props.theCityInfo.name;
		const image: string = this.props.theCityInfo.image;
		const population: string = this.props.theCityInfo.population.toLocaleString('en-US');
		const housing: number = this.props.theCityInfo.housing;
		const costOfLiving: number = this.props.theCityInfo.costOfLiving;
		const commute: number = this.props.theCityInfo.commute;
		const healthCare: number = this.props.theCityInfo.healthCare;
		const education: number = this.props.theCityInfo.education;
		const economy: number = this.props.theCityInfo.economy;
		const environmentalQuality: number = this.props.theCityInfo.environmentalQuality;
		const safety: number = this.props.theCityInfo.safety;

		return (
			<section className="card-content" id='flip-card' >
				<section className="card-front">
					<img src={image} alt={name} />
					<h2>City:  {name}</h2>
					<h2> Population:  {population}</h2>
					<button>front</button>
				</section>
				<section className="card-back hidden" >
					<h2> All Ratings Out Of 10 </h2>
					<section className="info-display">
						<h2> Cost of living: </h2>
						<div className="info-wrapper">{costOfLiving}</div>
					</section>
					<section className="info-display">
						<h2> Environmental Quality: </h2>
						<div className="info-wrapper">{environmentalQuality} </div>
					</section>
					<section className="info-display">
						<h2> Safety: </h2>
						<div className="info-wrapper"> {safety} </div>
					</section>
					<section className="info-display">
						<h2> Economy: </h2>
						<div className="info-wrapper">{economy}</div>
					</section>
					<section className="info-display">
						<h2> Commute: </h2>
						<div className="info-wrapper">{commute} </div>
					</section>
					<section className="info-display">
						<h2> Housing: </h2>
						<div className="info-wrapper">{housing}</div>
					</section>
					<section className="info-display">
						<h2> Education: </h2>
						<div className="info-wrapper"> {education} </div>
					</section>
					<section className="info-display">
						<h2> HealthCare: </h2>
						<div className="info-wrapper">	{healthCare} </div>
					</section>
					<button>back</button>
				</section>

			</section>


		)
	}

	// return (
	// 	<section className="card-content">
	// 		<section className="card-front ">
	// 			<img src={image} alt={name} />
	// 			<h2>City:  {name}</h2>
	// 			<h2> Population:  {population}</h2>
	// 			<button>front</button>
	// 		</section>
	// 		<section className="card-back" >
	// 			<h2> All Ratings Out Of 10 </h2>
	// 			<section className="info-display">
	// 				<h2> Cost of living: </h2>
	// 				<div className="info-wrapper">{costOfLiving}</div>
	// 			</section>
	// 			<section className="info-display">
	// 				<h2> Environmental Quality: </h2>
	// 				<div className="info-wrapper">{environmentalQuality} </div>
	// 			</section>
	// 			<section className="info-display">
	// 				<h2> Safety: </h2>
	// 				<div className="info-wrapper"> {safety} </div>
	// 			</section>
	// 			<section className="info-display">
	// 				<h2> Economy: </h2>
	// 				<div className="info-wrapper">{economy}</div>
	// 			</section>
	// 			<section className="info-display">
	// 				<h2> Commute: </h2>
	// 				<div className="info-wrapper">{commute} </div>
	// 			</section>
	// 			<section className="info-display">
	// 				<h2> Housing: </h2>
	// 				<div className="info-wrapper">{housing}</div>
	// 			</section>
	// 			<section className="info-display">
	// 				<h2> Education: </h2>
	// 				<div className="info-wrapper"> {education} </div>
	// 			</section>
	// 			<section className="info-display">
	// 				<h2> HealthCare: </h2>
	// 				<div className="info-wrapper">	{healthCare} </div>
	// 			</section>
	// 			<button>back</button>
	// 		</section>

	// 	</section>
	// )
}

export default Card