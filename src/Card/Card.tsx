import React from "react";

type CardProps = {
    theCityInfo: any;
}

const Card: React.FC<CardProps> = ({ theCityInfo }) => {
    const name: string = theCityInfo.name
    const image: string = theCityInfo.image

    return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt={name} />
        </div>
    )
}

export default Card