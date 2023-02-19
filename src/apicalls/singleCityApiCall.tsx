import React from "react";

const getSingleCity = ( cityName: string) => {
    const encodedName: string = encodeURIComponent(cityName)
    return fetch(`https://api.teleport.org/api/cities/?search=${encodedName}&limit=1`)
    .then(response => response.json())
};


export default getSingleCity