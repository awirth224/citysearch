import React from 'react'

interface BackProps {
    cityInfo: any;
}

const BackCard: React.FC<BackProps> = ({ cityInfo }) => {
    return (
        <div>
            <section className="card-back" >
                <section className="info-display">
                    <h2> Cost of living: </h2>
                    <div className="info-wrapper">{cityInfo['Cost of Living']}</div>
                </section>
                <section className="info-display">
                    <h2> Environmental Quality: </h2>
                    <div className="info-wrapper">{cityInfo['Environmental Quality']} </div>
                </section>
                <section className="info-display">
                    <h2> Safety: </h2>
                    <div className="info-wrapper"> {cityInfo.Safety} </div>
                </section>
                <section className="info-display">
                    <h2> Economy: </h2>
                    <div className="info-wrapper">{cityInfo.Economy}</div>
                </section>
                <section className="info-display">
                    <h2> Commute: </h2>
                    <div className="info-wrapper">{cityInfo.Commute} </div>
                </section>
                <section className="info-display">
                    <h2> Housing: </h2>
                    <div className="info-wrapper">{cityInfo.Housing}</div>
                </section>
                <section className="info-display">
                    <h2> Education: </h2>
                    <div className="info-wrapper"> {cityInfo.Education} </div>
                </section>
                <section className="info-display">
                    <h2> HealthCare: </h2>
                    <div className="info-wrapper">	{cityInfo.Healthcare} </div>
                </section>
            </section>
        </div>
    )
}

export default BackCard