import React from "react";
import './Card.css'

type CardProps = {
    theCityInfo: any;
    
}

const Card: React.FC<CardProps> = ({ theCityInfo, }) => {
    const name: string = theCityInfo.name;
    const image: string = theCityInfo.image;
    const population: string = theCityInfo.population.toLocaleString('en-US');
    const housing : number = theCityInfo.housing;
    const costOfLiving:number = theCityInfo.costOfLiving;
    const commute: number = theCityInfo.commute;
    const healthCare:number = theCityInfo.healthCare;
    const education:number = theCityInfo.education;
    const economy:number = theCityInfo.economy; 
		const environmentalQuality:number = theCityInfo.environmentalQuality;
		const safety: number = theCityInfo.safety; 
   

    return (
        <section className= "card-content">
            <section className="card-front hidden">
							<img src={image} alt={name} />
							<h2>City:  {name}</h2>
							<h2> Population:  {population}</h2>
            </section>
						<section className="card-back" >
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
						</section>  
      </section>
    )
}

export default Card

