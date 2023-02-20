type homeCity = {
    name: string;
    population: number;
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

const mockHomeCity: homeCity = {
    name: 'Ann Arbor',
    population: 117070,
    housing: 6.22,
    image: 'https://d13k13wj6adfdf.cloudfront.net/urban_areas/detroit_web-fa9062b00a.jpg',
    costOfLiving: 6.032,
    environmentalQuality:4.04,
    safety: 4.46,
    commute: 0.93,
    healthCare: 8.27,
    education: 5.81,
    economy: 6.51
}

export default mockHomeCity