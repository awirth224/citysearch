import React, { FC } from 'react'
import './BackCard.css';
import { Rating } from 'react-simple-star-rating'
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


interface BackProps {
   cityInfo: any;
}


const roundHalf = (num: number) => {
   return (Math.round(Number(((num/2)*100).toFixed(0))/50)*50)/100
 }

interface BackProps {
    cityInfo: any;
}

const BackCard: FC<BackProps> = props => {
    const iconStyle = {
        fontSize: '4vh'
    }
    const fillColorArray = [
        '#FF0D0D',
        '#FF0D0D',
        '#FF4E11',
        '#FF4E11',
        '#FF8E15',
        '#FAB733',
        '#ACB334',
        '#ACB334',
        '#69B34C',
        '#69B34C',
    ];
    return (
        
            <section className="card-back" >
                <section className="info-display">
                    <h2> Cost of living: </h2>
                    <Rating
                        transition
                        allowFraction
                        iconsCount={5}
                        fillIcon={<MdAttachMoney />}
                        emptyIcon={<MdAttachMoney  />}
                        initialValue={roundHalf(props.cityInfo['Cost of Living'])}
                        fillColor={"#FFC93C"}
                        readonly={true}
                        fillClassName={'dollar-sign'}
                        SVGstorkeWidth={0}
                        style={iconStyle}
                        fillColorArray={fillColorArray}
                    />
                </section>
                <section className="info-display" >
                    <h2> Environmental Quality: </h2>
                    <Rating
                        size={50}
                        transition
                        allowFraction
                        iconsCount={5}
                        fillIcon={<MdRecycling />}
                        emptyIcon={<MdRecycling />}
                        initialValue={roundHalf(props.cityInfo['Environmental Quality'])}
                        fillColor={"#FFC93C"}
                        readonly={true}
                        style={iconStyle}
                        fillColorArray={fillColorArray}
                    />
                </section>
                <section className="info-display">
                    <h2> Safety: </h2>
                    <Rating
                        size={50}
                        transition
                        allowFraction
                        iconsCount={5}
                        fillIcon={<MdLocalPolice  />}
                        emptyIcon={<MdLocalPolice  />}
                        initialValue={roundHalf(props.cityInfo.Safety)}
                        fillColor={"#FFC93C"}
                        readonly={true}
                        style={iconStyle}
                        fillColorArray={fillColorArray}
                    />
                </section>
                <section className="info-display">
                    <h2> Economy: </h2>
                    <Rating
                        size={50}
                        transition
                        allowFraction
                        iconsCount={5}
                        fillIcon={<MdCardTravel/>}
                        emptyIcon={<MdCardTravel  />}
                        fillColor={"#FFC93C"}
                        initialValue={roundHalf(props.cityInfo.Economy)}
                        readonly={true}
                        style={iconStyle}
                        fillColorArray={fillColorArray}
                    />
                </section>
                <section className="info-display">
                   <h2> Commute: </h2>
                   <Rating
                       size={50}
                       transition
                       allowFraction
                       iconsCount={5}
                       fillIcon={<MdOutlineCommute  />}
                       emptyIcon={<MdOutlineCommute  />}
                       initialValue={roundHalf(props.cityInfo.Commute)}
                       fillColor={"#FFC93C"}
                       readonly={true}
                       style={iconStyle}
                   />
               </section>
               <section className="info-display">
                   <h2> Housing: </h2>
                   <Rating
                       size={50}
                       transition
                       allowFraction
                       iconsCount={5}
                       fillIcon={<MdHome />}
                       emptyIcon={<MdHome  />}
                       initialValue={roundHalf(props.cityInfo.Housing)}
                       fillColor={"#FFC93C"}
                       readonly={true}
                       style={iconStyle}
                       fillColorArray={fillColorArray}
                   />
               </section>
               <section className="info-display">
                   <h2> Education: </h2>
                   <Rating
                       size={50}
                       transition
                       allowFraction
                       iconsCount={5}
                       fillIcon={<MdModeEditOutline />}
                       emptyIcon={<MdModeEditOutline />}
                       initialValue={roundHalf(props.cityInfo.Education)}
                       fillColor={"#FFC93C"}
                       readonly={true}
                       style={iconStyle} 
                       fillColorArray={fillColorArray}
                       />
                       
               </section>
               <section className="info-display">
                   <h2> HealthCare: </h2>
                   <Rating
                       size={50}
                       transition
                       allowFraction
                       iconsCount={5}
                       fillIcon={<MdAccessible  />}
                       emptyIcon={<MdAccessible  />}
                       initialValue={roundHalf(props.cityInfo.Healthcare)}
                       fillColor={"#FFC93C"}
                       readonly={true}
                       style={iconStyle}
                       fillColorArray={fillColorArray}
                   />
               </section>
           </section>
      
   )
}



export default BackCard