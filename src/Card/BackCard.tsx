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
    return (
        <div>
            <section className="card-back" >
                <section className="info-display">
                    <h2> Cost of living: </h2>
                    {/* <div className="info-wrapper">{props.cityInfo['Cost of Living']}</div> */}
                    <Rating
                        size={50}
                        transition
                        allowFraction
                        iconsCount={5}
                        fillIcon={<MdAttachMoney size={30} />}
                        emptyIcon={<MdAttachMoney size={30} />}
                        initialValue={roundHalf(props.cityInfo['Cost of Living'])}
                        fillColor={"#FFC93C"}
                        readonly={true}
                        SVGstorkeWidth={0}
                    />
                </section>
                <section className="info-display">
                    <h2> Environmental Quality: </h2>
                    {/* <div className="info-wrapper">{props.cityInfo['Environmental Quality']} </div> */}
                    <Rating
                        size={50}
                        transition
                        allowFraction
                        iconsCount={5}
                        fillIcon={<MdRecycling size={30} />}
                        emptyIcon={<MdRecycling size={30} />}
                        initialValue={roundHalf(props.cityInfo['Environmental Quality'])}
                        fillColor={"#FFC93C"}
                        readonly={true}
                    />
                </section>
                <section className="info-display">
                    <h2> Safety: </h2>
                    {/* <div className="info-wrapper"> {props.cityInfo.Safety} </div> */}
                    <Rating
                        size={50}
                        transition
                        allowFraction
                        iconsCount={5}
                        fillIcon={<MdLocalPolice size={30} />}
                        emptyIcon={<MdLocalPolice size={30} />}
                        initialValue={roundHalf(props.cityInfo.Safety)}
                        fillColor={"#FFC93C"}
                        readonly={true}
                    />
                </section>
                <section className="info-display">
                    <h2> Economy: </h2>
                    {/* <div className="info-wrapper">{props.cityInfo.Economy}</div> */}
                    <Rating
                        size={50}
                        transition
                        allowFraction
                        iconsCount={5}
                        fillIcon={<MdCardTravel size={30} />}
                        emptyIcon={<MdCardTravel size={30} />}
                        fillColor={"#FFC93C"}
                        initialValue={roundHalf(props.cityInfo.Economy)}
                        readonly={true}
                    />
                </section>
                <section className="info-display">
                   <h2> Commute: </h2>
                   {/* <div className="info-wrapper">{props.cityInfo.Commute} </div> */}
                   <Rating
                       size={50}
                       transition
                       allowFraction
                       iconsCount={5}
                       fillIcon={<MdOutlineCommute size={30} />}
                       emptyIcon={<MdOutlineCommute size={30} />}
                       initialValue={roundHalf(props.cityInfo.Commute)}
                       fillColor={"#FFC93C"}
                       readonly={true}
                   />
               </section>
               <section className="info-display">
                   <h2> Housing: </h2>
                   {/* <div className="info-wrapper">{props.cityInfo.Housing}</div> */}
                   <Rating
                       size={50}
                       transition
                       allowFraction
                       iconsCount={5}
                       fillIcon={<MdHome size={30} />}
                       emptyIcon={<MdHome size={30} />}
                       initialValue={roundHalf(props.cityInfo.Housing)}
                       fillColor={"#FFC93C"}
                       readonly={true}
                   />
               </section>
               <section className="info-display">
                   <h2> Education: </h2>
                   {/* <div className="info-wrapper"> {props.cityInfo.Education} </div> */}
                   <Rating
                       size={50}
                       transition
                       allowFraction
                       iconsCount={5}
                       fillIcon={<MdModeEditOutline size={30} />}
                       emptyIcon={<MdModeEditOutline size={30} />}
                       initialValue={roundHalf(props.cityInfo.Education)}
                       fillColor={"#FFC93C"}
                       readonly={true}
                   />
               </section>
               <section className="info-display">
                   <h2> HealthCare: </h2>
                   {/* <div className="info-wrapper">  {props.cityInfo.Healthcare} </div> */}
                   <Rating
                       size={50}
                       transition
                       allowFraction
                       iconsCount={5}
                       fillIcon={<MdAccessible size={30} />}
                       emptyIcon={<MdAccessible size={30} />}
                       initialValue={roundHalf(props.cityInfo.Healthcare)}
                       fillColor={"#FFC93C"}
                       readonly={true}
                   />
               </section>
               {/* <button onClick={() => props.clickBackButton()}>Back</button> */}
           </section>
       </div>
   )
}



export default BackCard