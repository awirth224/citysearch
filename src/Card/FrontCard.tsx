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
                <h2>{cityName}</h2>
            </section>
        </div>
    )
}

export default FrontCard