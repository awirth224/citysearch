import React from "react";
import './Card.css';
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";

type CardProps = {
	cityInfo: any;
	cityName: string;
	cityPopulation: number;
	cityImage: string;
}

const Card: React.FC<CardProps> = ({ cityInfo, cityName, cityPopulation, cityImage }) => {

	return (
		<section className="card-content" id='flip-card' >
			<FrontCard cityName={cityName} cityPopulation={cityPopulation} cityImage={cityImage} />
			<BackCard cityInfo={cityInfo} />
		</section>
	)
}

export default Card