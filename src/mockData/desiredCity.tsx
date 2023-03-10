type desiredCity = {
    name: string;
    population: number | string;
    housing: number;
    image: string;
    costOfLiving: number;
    environmentalQuality: number
    safety:number
    commute:number
    healthCare: number;
    education: number;
    economy: number;
}

const mockDesiredCity: desiredCity = {
    name: 'Denver',
    population: 682545,
    housing: 3.83,
    image: 'https://d13k13wj6adfdf.cloudfront.net/urban_areas/denver_web-9726d88300.jpg',
    costOfLiving: 5.102,
    environmentalQuality:7.11,
    safety: 5.37,
    commute: 4.53,
    healthCare: 8.62,
    education: 3.62,
    economy: 6.51
}

export default mockDesiredCity 