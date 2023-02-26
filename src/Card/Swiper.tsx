import React from "react";
import './Swiper.css'
import { Rating } from 'react-simple-star-rating'
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    MdHome,
    MdAccessible,
    MdRecycling,
    MdLocalPolice,
    MdAttachMoney,
    MdOutlineCommute,
    MdModeEditOutline,
    MdCardTravel,
 } from "react-icons/md";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper"

type CardProps = {
	homeImage: string;
    desiredImage: string;
    homeName: string;
    desiredName: string;
    homeInfo: any;
    desiredInfo: any;
    homeDetails: any;
    desiredDetails: any;
}

const roundHalf = (num: number) => {
   return (Math.round(Number(((num/2)*100).toFixed(0))/50)*50)/100
 }

 const getDetailedNum = (type: [], topic: string, subCategory: string): any => {
        let foundValue: number = 0
        
        type.find((obj: {label: string, id: string, data: []}) => {
            if(obj.label === topic) {
                obj.data.find((obj: {float_value: number, id: string, label: string, type: string}) => {
                    if(obj.label === subCategory) {
                        foundValue = obj['float_value']
                    }
                })
            }
        })

        return foundValue
 }
 
 const CityComp: React.FC<CardProps> = ({ homeImage, desiredImage, homeName, desiredName, homeInfo, desiredInfo, homeDetails, desiredDetails }) => {
     
    
    return (
        <div className="comp-container">
            <div className="name-container">
                <h2>{homeName}</h2>
                <h2>{desiredName}</h2>
            </div>
            <div className="img-container">
                <img src={homeImage} />
                <img src={desiredImage} />
            </div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="swiper slides">
                        <h2>Cost of Living</h2>
                        <div className="category-details">
                            <div className="city-details">
                                <Rating
                                    size={50}
                                    transition
                                    allowFraction
                                    iconsCount={5}
                                    fillIcon={<MdAttachMoney size={40} />}
                                    emptyIcon={<MdAttachMoney size={40} />}
                                    initialValue={roundHalf(homeInfo['Cost of Living'])}
                                    fillColor={"#FFC93C"}
                                    readonly={true}
                                    fillClassName={'dollar-sign'}
                                    SVGstorkeWidth={0}
                                />
                                <p>Lack of labor restrictions: {getDetailedNum(homeDetails, 'Business Freedom', 'Lack of labor restrictions')}</p>
                            </div>
                            <div className="city-details">
                                <Rating
                                    size={50}
                                    transition
                                    allowFraction
                                    iconsCount={5}
                                    fillIcon={<MdAttachMoney size={40} />}
                                    emptyIcon={<MdAttachMoney size={40} />}
                                    initialValue={roundHalf(desiredInfo['Cost of Living'])}
                                    fillColor={"#FFC93C"}
                                    readonly={true}
                                    fillClassName={'dollar-sign'}
                                    SVGstorkeWidth={0}
                                />
                                 <p>Lack of labor restrictions: {getDetailedNum(desiredDetails, 'Business Freedom', 'Lack of labor restrictions')}</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper slides">
                        <h2> Environmental Quality: </h2>
                        <div className="category-details">
                            <div className="city-details">
                                <Rating
                                    size={50}
                                    transition
                                    allowFraction
                                    iconsCount={5}
                                    fillIcon={<MdRecycling size={40} />}
                                    emptyIcon={<MdRecycling size={40} />}
                                    initialValue={roundHalf(homeInfo['Environmental Quality'])}
                                    fillColor={"#FFC93C"}
                                    readonly={true}
                                    fillClassName={'dollar-sign'}
                                    SVGstorkeWidth={0}
                                />
                                <p>Lunch: $16.00</p>
                                <p>Monthly fitness club membership: $42.00</p>
                                <p>Monthly public transport: $38.00</p>
                                <p>Movie ticket: $11.00</p>
                                <p>Price of a meal at a restaurant: $71.34</p>
                            </div>
                            <div className="city-details">
                                <Rating
                                    size={50}
                                    transition
                                    allowFraction
                                    iconsCount={5}
                                    fillIcon={<MdRecycling size={40} />}
                                    emptyIcon={<MdRecycling size={40} />}
                                    initialValue={roundHalf(desiredInfo['Environmental Quality'])}
                                    fillColor={"#FFC93C"}
                                    readonly={true}
                                    fillClassName={'dollar-sign'}
                                    SVGstorkeWidth={0}
                                />
                                <p>Lunch: $16.00</p>
                                <p>Monthly fitness club membership: $42.00</p>
                                <p>Monthly public transport: $38.00</p>
                                <p>Movie ticket: $11.00</p>
                                <p>Price of a meal at a restaurant: $71.34</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper slides">
                        <h2> Safety: </h2>
                        <div className="category-details">
                            <div className="city-details">
                                <Rating
                                    size={50}
                                    transition
                                    allowFraction
                                    iconsCount={5}
                                    fillIcon={<MdLocalPolice size={40} />}
                                    emptyIcon={<MdLocalPolice size={40} />}
                                    initialValue={roundHalf(homeInfo.Safety)}
                                    fillColor={"#FFC93C"}
                                    readonly={true}
                                    fillClassName={'dollar-sign'}
                                    SVGstorkeWidth={0}
                                />
                                <p>Lunch: $16.00</p>
                                <p>Monthly fitness club membership: $42.00</p>
                                <p>Monthly public transport: $38.00</p>
                                <p>Movie ticket: $11.00</p>
                                <p>Price of a meal at a restaurant: $71.34</p>
                            </div>
                            <div className="city-details">
                                <Rating
                                    size={50}
                                    transition
                                    allowFraction
                                    iconsCount={5}
                                    fillIcon={<MdLocalPolice size={40} />}
                                    emptyIcon={<MdLocalPolice size={40} />}
                                    initialValue={roundHalf(desiredInfo.Safety)}
                                    fillColor={"#FFC93C"}
                                    readonly={true}
                                    fillClassName={'dollar-sign'}
                                    SVGstorkeWidth={0}
                                />
                                <p>Lunch: $16.00</p>
                                <p>Monthly fitness club membership: $42.00</p>
                                <p>Monthly public transport: $38.00</p>
                                <p>Movie ticket: $11.00</p>
                                <p>Price of a meal at a restaurant: $71.34</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper slides">
                        <h2> Economy: </h2>
                        <div className="category-details">
                            <div className="city-details">
                                <Rating
                                    size={50}
                                    transition
                                    allowFraction
                                    iconsCount={5}
                                    fillIcon={<MdCardTravel size={40} />}
                                    emptyIcon={<MdCardTravel size={40} />}
                                    initialValue={roundHalf(homeInfo.Economy)}
                                    fillColor={"#FFC93C"}
                                    readonly={true}
                                    fillClassName={'dollar-sign'}
                                    SVGstorkeWidth={0}
                                />
                                <p>Lunch: $16.00</p>
                                <p>Monthly fitness club membership: $42.00</p>
                                <p>Monthly public transport: $38.00</p>
                                <p>Movie ticket: $11.00</p>
                                <p>Price of a meal at a restaurant: $71.34</p>
                            </div>
                            <div className="city-details">
                                <Rating
                                    size={50}
                                    transition
                                    allowFraction
                                    iconsCount={5}
                                    fillIcon={<MdCardTravel size={40} />}
                                    emptyIcon={<MdCardTravel size={40} />}
                                    initialValue={roundHalf(desiredInfo.Economy)}
                                    fillColor={"#FFC93C"}
                                    readonly={true}
                                    fillClassName={'dollar-sign'}
                                    SVGstorkeWidth={0}
                                />
                                <p>Lunch: $16.00</p>
                                <p>Monthly fitness club membership: $42.00</p>
                                <p>Monthly public transport: $38.00</p>
                                <p>Movie ticket: $11.00</p>
                                <p>Price of a meal at a restaurant: $71.34</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper slides">
                     <h2> Commute: </h2>
                        <div className="category-details">
                            <div className="city-details">
                                <Rating
                                    size={50}
                                    transition
                                    allowFraction
                                    iconsCount={5}
                                    fillIcon={<MdOutlineCommute size={40} />}
                                    emptyIcon={<MdOutlineCommute size={40} />}
                                    initialValue={roundHalf(homeInfo.Commute)}
                                    fillColor={"#FFC93C"}
                                    readonly={true}
                                    fillClassName={'dollar-sign'}
                                    SVGstorkeWidth={0}
                                />
                                <p>Lunch: $16.00</p>
                                <p>Monthly fitness club membership: $42.00</p>
                                <p>Monthly public transport: $38.00</p>
                                <p>Movie ticket: $11.00</p>
                                <p>Price of a meal at a restaurant: $71.34</p>
                            </div>
                            <div className="city-details">
                                <Rating
                                    size={50}
                                    transition
                                    allowFraction
                                    iconsCount={5}
                                    fillIcon={<MdOutlineCommute size={40} />}
                                    emptyIcon={<MdOutlineCommute size={40} />}
                                    initialValue={roundHalf(desiredInfo.Commute)}
                                    fillColor={"#FFC93C"}
                                    readonly={true}
                                    fillClassName={'dollar-sign'}
                                    SVGstorkeWidth={0}
                                />
                                <p>Lunch: $16.00</p>
                                <p>Monthly fitness club membership: $42.00</p>
                                <p>Monthly public transport: $38.00</p>
                                <p>Movie ticket: $11.00</p>
                                <p>Price of a meal at a restaurant: $71.34</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper slides">
                        <h2> Housing: </h2>
                        <div className="category-details">
                            <div className="city-details">
                                <Rating
                                    size={50}
                                    transition
                                    allowFraction
                                    iconsCount={5}
                                    fillIcon={<MdHome size={40} />}
                                    emptyIcon={<MdHome size={40} />}
                                    initialValue={roundHalf(homeInfo.Housing)}
                                    fillColor={"#FFC93C"}
                                    readonly={true}
                                    fillClassName={'dollar-sign'}
                                    SVGstorkeWidth={0}
                                />
                                <p>Lunch: $16.00</p>
                                <p>Monthly fitness club membership: $42.00</p>
                                <p>Monthly public transport: $38.00</p>
                                <p>Movie ticket: $11.00</p>
                                <p>Price of a meal at a restaurant: $71.34</p>
                            </div>
                            <div className="city-details">
                                <Rating
                                    size={50}
                                    transition
                                    allowFraction
                                    iconsCount={5}
                                    fillIcon={<MdHome size={40} />}
                                    emptyIcon={<MdHome size={40} />}
                                    initialValue={roundHalf(desiredInfo.Housing)}
                                    fillColor={"#FFC93C"}
                                    readonly={true}
                                    fillClassName={'dollar-sign'}
                                    SVGstorkeWidth={0}
                                />
                                <p>Lunch: $16.00</p>
                                <p>Monthly fitness club membership: $42.00</p>
                                <p>Monthly public transport: $38.00</p>
                                <p>Movie ticket: $11.00</p>
                                <p>Price of a meal at a restaurant: $71.34</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper slides">
                        <h2> Education: </h2>
                        <div className="category-details">
                            <div className="city-details">
                                <Rating
                                    size={50}
                                    transition
                                    allowFraction
                                    iconsCount={5}
                                    fillIcon={<MdModeEditOutline size={40} />}
                                    emptyIcon={<MdModeEditOutline size={40} />}
                                    initialValue={roundHalf(homeInfo.Education)}
                                    fillColor={"#FFC93C"}
                                    readonly={true}
                                    fillClassName={'dollar-sign'}
                                    SVGstorkeWidth={0}
                                />
                                <p>Lunch: $16.00</p>
                                <p>Monthly fitness club membership: $42.00</p>
                                <p>Monthly public transport: $38.00</p>
                                <p>Movie ticket: $11.00</p>
                                <p>Price of a meal at a restaurant: $71.34</p>
                            </div>
                            <div className="city-details">
                                <Rating
                                    size={50}
                                    transition
                                    allowFraction
                                    iconsCount={5}
                                    fillIcon={<MdModeEditOutline size={40} />}
                                    emptyIcon={<MdModeEditOutline size={40} />}
                                    initialValue={roundHalf(desiredInfo.Education)}
                                    fillColor={"#FFC93C"}
                                    readonly={true}
                                    fillClassName={'dollar-sign'}
                                    SVGstorkeWidth={0}
                                />
                                <p>Lunch: $16.00</p>
                                <p>Monthly fitness club membership: $42.00</p>
                                <p>Monthly public transport: $38.00</p>
                                <p>Movie ticket: $11.00</p>
                                <p>Price of a meal at a restaurant: $71.34</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper slides">
                        <h2> HealthCare: </h2>
                        <div className="category-details">
                            <div className="city-details">
                                <Rating
                                    size={50}
                                    transition
                                    allowFraction
                                    iconsCount={5}
                                    fillIcon={<MdAccessible size={40} />}
                                    emptyIcon={<MdAccessible size={40} />}
                                    initialValue={3.5}
                                    fillColor={"#FFC93C"}
                                    readonly={true}
                                    fillClassName={'dollar-sign'}
                                    SVGstorkeWidth={0}
                                />
                                <p>Lunch: $16.00</p>
                                <p>Monthly fitness club membership: $42.00</p>
                                <p>Monthly public transport: $38.00</p>
                                <p>Movie ticket: $11.00</p>
                                <p>Price of a meal at a restaurant: $71.34</p>
                            </div>
                            <div className="city-details">
                                <Rating
                                    size={50}
                                    transition
                                    allowFraction
                                    iconsCount={5}
                                    fillIcon={<MdAccessible size={40} />}
                                    emptyIcon={<MdAccessible size={40} />}
                                    initialValue={1.5}
                                    fillColor={"#FFC93C"}
                                    readonly={true}
                                    fillClassName={'dollar-sign'}
                                    SVGstorkeWidth={0}
                                />
                                <p>Lunch: $16.00</p>
                                <p>Monthly fitness club membership: $42.00</p>
                                <p>Monthly public transport: $38.00</p>
                                <p>Movie ticket: $11.00</p>
                                <p>Price of a meal at a restaurant: $71.34</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}


export default CityComp;