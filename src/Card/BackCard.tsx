import React, { FC } from 'react'
import { Chart } from "chart.js/auto";


interface BackProps {
    cityInfo: any;
    clickBackButton: any;
    //change to type function
}

type Config = {
    type: string;
}
 

const BackCard: FC<BackProps> = props => {
    return (
        <div>
            <section className="card-back" >
                <div className="chart-container">
           
                </div>   
                <button onClick={() => props.clickBackButton()}>Back</button>
            </section>
        </div>
    )
}

/*          <section className="info-display">
                    <h2> Cost of living: </h2>
                    <div className="info-wrapper">{props.cityInfo['Cost of Living']}</div>
                </section>
                <section className="info-display">
                    <h2> Environmental Quality: </h2>
                    <div className="info-wrapper">{props.cityInfo['Environmental Quality']} </div>
                </section>
                <section className="info-display">
                    <h2> Safety: </h2>
                    <div className="info-wrapper"> {props.cityInfo.Safety} </div>
                </section>
                <section className="info-display">
                    <h2> Economy: </h2>
                    <div className="info-wrapper">{props.cityInfo.Economy}</div>
                </section>
                <section className="info-display">
                    <h2> Commute: </h2>
                    <div className="info-wrapper">{props.cityInfo.Commute} </div>
                </section>
                <section className="info-display">
                    <h2> Housing: </h2>
                    <div className="info-wrapper">{props.cityInfo.Housing}</div>
                </section>
                <section className="info-display">
                    <h2> Education: </h2>
                    <div className="info-wrapper"> {props.cityInfo.Education} </div>
                </section>
                <section className="info-display">
                    <h2> HealthCare: </h2>
                    <div className="info-wrapper">	{props.cityInfo.Healthcare} </div>
                    */

export default BackCard