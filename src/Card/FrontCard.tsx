import React, { FC } from 'react'


interface FrontProps {
    cityName: string;
    cityPopulation: number;
    cityImage: string;
    clickFrontButton: any;
}

const FrontCard: FC<FrontProps> = props => {
    return (
        <div>
            <section className="card-front">
                <img src={props.cityImage} alt={'test'} />
                <h2>{props.cityName}</h2>
                <h2> Population:  {props.cityPopulation.toLocaleString('en-US')}</h2>
                <button onClick={() => props.clickFrontButton()}>City Info</button>
            </section>
        </div>
    )
}

export default FrontCard