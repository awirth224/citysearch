import React from "react";

const searchFetch = (cityName: string) => {
    const encodedName: string = encodeURIComponent(cityName)
    return fetch(`https://api.teleport.org/api/cities/?search=${encodedName}&limit=25`)
    .then(response => response.json())
};

export default searchFetch;
