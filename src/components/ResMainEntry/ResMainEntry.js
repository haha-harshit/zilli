// import { nanoid } from 'nanoid'
import { useParams, useLocation } from "react-router-dom";
import { useState, useSyncExternalStore } from "react";
import Shimmer from "../../components/ShimmerUI/Shimmer"
import RestaurantHeader from "./RestaurantHeader";
import ResAccordion from "../ResMenu/ResAccordion";

// import style
import {ResMainEntryStyle} from "../../utils/css/ResMainEntry.css"
import {useResMenuItems } from "../../utils/customHooks/useFetchApi";

const ResMainEntry = () => {
    const accordions = [];
    const [openAccordion, setOpenAccordion] = useState(Array(accordions.length).fill(false))
    // console.log(accordions)
    const location = useLocation()
    // console.log(location)
    // used state coming from parent - basic res details like name, price, rating, so that no need to be fetched again
    let resMainInfo = location.state?.resMainInfo.info
    
    // fetch id from URL
    const { resId } = useParams()

    // using resMenu custom hook for making code modular and maintaing Single Responsibility Principle - hook to fetch menu items as otherwise done by below commented code.
    const resMenu = useResMenuItems(resId)
    
    if(resMenu === null) return <Shimmer/>
    
    const toggleAccordion = (index) => { 
        const updatedOpenAccordions = [...openAccordion];
        updatedOpenAccordions[index] = !updatedOpenAccordions[index];
        setOpenAccordion(updatedOpenAccordions)
    }; 
    
    // console.log(resMainInfo)
    const {cuisines} = resMainInfo
    {resMenu.map((singleCardItem) => singleCardItem?.card?.card?.title ? accordions.push(singleCardItem) : "")}

    return(
    <>
    <div className="menu-section w-[85vw] m-auto sm:w-[50vw] sm:m-0" style={ResMainEntryStyle}>
        <RestaurantHeader resMainInfo={resMainInfo} cuisines={cuisines} />
        <br/>
        <div className="ml-[-2rem] mr-[-2rem] h-[0.2rem] bg-gray-100 sm:hidden"></div>

        <div>
            {console.log(accordions, "newa")}
                <>                
                <div>
                    <div className="accodion_wrapper ml-[-1rem] mr-[-1rem]"> 
                        {accordions.map((accordion, index) => ( 
                            <ResAccordion
                                key={index}
                                title={accordion.card?.card?.title} 
                                data={accordion.card?.card?.itemCards?.map((sub_item) => (
                                    <h4 key={sub_item?.info?.id}>
                                    <li key={sub_item?.info?.id}>
                                        {sub_item.card.info.name} - ₹{sub_item.card.info.defaultPrice/100 || sub_item.card.info.price/100}
                                    </li>
                                    </h4>
                                ))} 
                                accIsOpen={openAccordion[index]}
                                toggleAccordion={() => toggleAccordion(index)} 
                            /> 
                        ))} 
                    </div> 
                </div> 
                </>
            {/* )} */}
        </div>
            
    </div>
    </>
    )
}

export default ResMainEntry;