import React from "react";

const urbanFetch = () => {
    return fetch('https://api.teleport.org/api/urban_areas/')
        .then(res => {
            if (!res.ok) {
                throw new Error('Something went wrong')
            }
            return res.json()
        })
}

const getFullName = (url: string) => {
    return fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error('Something went wrong')
            }
            return res.json()
        })
}

const getSpecifiedInfo = (slug: string, endpoint?: string) => {
    const endPoint: string = endpoint || ''
    return fetch(`https://api.teleport.org/api/urban_areas/slug:${slug}/${endPoint}`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Something went wrong')
            }
            return res.json()
        })
}

export { urbanFetch, getFullName, getSpecifiedInfo };