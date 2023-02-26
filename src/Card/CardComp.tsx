import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';


// type CardProps = {
// 	homeSlug: string;
// 	desiredSlug: string;
// 	urbanAreas: any;
// }

// const CardComp: React.FC<CardProps> = ({ homeSlug, desiredSlug, urbanAreas }) => {

// 	return (
//         <Link to={`/comparison/${homeSlug}-vs-${desiredSlug}`}>
//             <section className="card-display" >
//                 <Card 
//                     citySlug={homeSlug}
//                     urbanAreas={urbanAreas}
//                 />
//                 <Card 
//                     citySlug={desiredSlug}
//                     urbanAreas={urbanAreas}
//                 />
//             </section>
//         </Link>
// 	)
// }

type CardProps = {
	homeSlug: string;
	desiredSlug: string;
	urbanAreas: any;
}

type MyState = {
    homePath: string;
    desiredPath: string;
}

class CardComp extends Component<CardProps, MyState> {
    state: MyState = {
        homePath: '',
        desiredPath: ''
    }

    // componentDidMount(): void {
    //     const baseURL:string = window.location.href.slice(33)
    //     const getFirstSlug: string = baseURL.split("+")[0]
    //     const getSecondSlug: string = baseURL.split("+")[1]
    //     console.log(getFirstSlug)
    //     console.log(getSecondSlug)
    //     this.setState({ homePath: getFirstSlug, desiredPath: getSecondSlug})
    // }

    getBaseURL = () => {
        const baseURL:string = window.location.href.slice(33)
        return baseURL.split("+")

    }

    render() {
        return (
            <section className="card-display" >
                <Card 
                    citySlug={this.getBaseURL()[0]}
                    urbanAreas={this.props.urbanAreas}
                />
                <Card 
                    citySlug={this.getBaseURL()[1]}
                    urbanAreas={this.props.urbanAreas}
                />
            </section>
        )
    }
}

export default CardComp;