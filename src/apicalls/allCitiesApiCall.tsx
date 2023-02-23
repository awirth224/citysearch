import React from "react";

const urbanFetch = () => {
    return fetch('https://api.teleport.org/api/urban_areas/')
    .then(res => res.json())
}

const getFullName = (url: string) => {
    return fetch(url)
    .then(res => res.json())
}

const getSpecifiedInfo = (url:string , endpoint: string) => {
    return fetch(`${url}${endpoint}`)
    .then(response => response.json())
}

export { urbanFetch, getFullName, getSpecifiedInfo };