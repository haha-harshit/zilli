// import { nanoid } from 'nanoid'
import { useParams, useLocation } from "react-router-dom";
import { useState, useSyncExternalStore } from "react";
import { v4 as uuidv4 } from 'uuid';
import Shimmer from "../../components/ShimmerUI/Shimmer"
import RestaurantHeader from "./RestaurantHeader";
import ResAccordion from "../ResMenu/ResAccordion";

// import style
import {ResMainEntryStyle} from "../../utils/css/ResMainEntry.css"
import {useResMenuItems } from "../../utils/customHooks/useFetchApi";

const ResMainEntry = () => {
    // const uniqueId = uuidv4()
    const accordions = [];
    // const [accordion, setAccordion] = useState([])
    const [openAccordion, setOpenAccordion] = useState(Array(accordions.length).fill(true))
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
    
    
    
    // setAccordion(toBeAccordions)
    // console.log(accordions, "accordions")

    const toggleAccordion = (index) => { 
        const updatedOpenAccordions = [...openAccordion];
        updatedOpenAccordions[index] = !updatedOpenAccordions[index];
        setOpenAccordion(updatedOpenAccordions)
        // accordions.map((accord) => { 
        //     if (accord.key === accordionkey) {
        //         return { ...accord, isOpen: !accord.isOpen }; 
        //     } else {
        //         return { ...accord}; 
        //     }
        // });  
        // setAccordion(updatedAccordions); 
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
            {/* {setAccordion(toBeAccordions)} */}
            {/* {setClic(false)} */}
            {/* {console.log(accordions, "dd")} */}
            {/* { accordions?.map((singleCardItem) =>   */}
                <>
                {/* <ul>
                    {singleCardItem?.card?.card?.title}
                    {singleCardItem?.card?.card?.itemCards?.map((sub_item) => (
                        <h4 key={sub_item?.info?.id}>
                        <li key={sub_item?.info?.id}>
                            {sub_item.card.info.name} - ₹{sub_item.card.info.defaultPrice/100 || sub_item.card.info.price/100}
                        </li>
                        </h4>
                    ))}
                </ul> */}
                
                <div>
                    <div className=""> 
                        {accordions.map((accordion, index) => ( 
                            <ResAccordion
                                // key={Math.floor((Math.random()))}
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
                                // setAccIsOpen={setAccIsOpen}
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