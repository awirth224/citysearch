import React from 'react';
import './FrontCard.css';

interface FrontProps {
    cityName: string;
    cityPopulation?: number;
    cityImage: string;
}

const FrontCard: React.FC<FrontProps> = ({ cityName, cityPopulation, cityImage }) => {
    return (
        <div>
            <section className="card-front">
                <img src={cityImage} alt={'test'} />
                <h2>City:  {cityName}</h2>
                {/* <h2> Population:  {cityPopulation.toLocaleString('en-US')}</h2> */}
            </section>
        </div>
    )
}

export default FrontCard