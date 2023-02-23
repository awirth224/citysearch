import React from "react";

const searchFetch = (cityName?: string) => {
    const encodedName: string = encodeURIComponent(cityName || "")
    return fetch(`https://api.teleport.org/api/cities/?search=${encodedName}&limit=25`)
    .then(response => response.json())
};

const getCityDetails = (url: string) => {
    return fetch(url)
    .then(response => response.json())
}

const getSpecifiedInfo = (url:string , endpoint: string) => {
    return fetch(`${url}${endpoint}`)
    .then(response => response.json())
}

const urbanFetch = () => {
    return fetch('https://api.teleport.org/api/urban_areas/')
    .then(res => res.json())
}

const getFullName = (url: string) => {
    return fetch(url)
    .then(res => res.json())
}

export { searchFetch, getCityDetails , getSpecifiedInfo, urbanFetch, getFullName };