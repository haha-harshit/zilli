import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { RES_DETAILS_URL } from "../../utils/constants";
import Shimmer from "../../components/ShimmerUI/Shimmer"

const ResMainEntry = () => {
    const location = useLocation()
    // console.log(location)
    // used state coming from parent - basic res details, so that no need to be fetched again
    let resMainInfo = location.state?.resMainInfo.info

    // for menu and other details
    const [resMenu, setResMenu] = useState(null)

    // fetch id from URL
    const { resId } = useParams()

    useEffect(() => {
        fetchResDetails();
    }, [])

    const fetchResDetails = async ()=> {
        const data = await fetch(RES_DETAILS_URL + resId)
        const json = await data.json()
        // console.log(json)
        setResMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        // console.log(json.data)
        // console.log(itemCard)
    }
    console.log(resMenu)
    
    if(resMenu === null) return <Shimmer/>
    
    console.log(resMainInfo)
    const {cuisines} = resMainInfo

    return(
    <>
    <div className="section">
        <div className="restaurant-main-header">
            <div className="restaurant-sub-header">
                <div className="RestaurantNameAddress_wrapper">

                    <div className="RestaurantName">
                        {resMainInfo.name}
                    </div>
                    <div className="RestaurantCuisines">
                        {cuisines.join(", ")}
                    </div>
                    <div className="RestaurantAddessDistance_wrapper">
                        {resMainInfo.areaName}, {resMainInfo.sla.lastMileTravel} km
                    </div>
                    
                </div>
                <div className="RestaurantRating_wrapper">
                    <div>{resMainInfo.avgRating}</div>
                    <div className="RestaurantRatingCount">
                        {resMainInfo.totalRatingsString}
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <h2>Menu</h2>
        <br/>
        { resMenu?.map((singleCardItem) => 

            (singleCardItem?.card?.card?.title ? 

                <ul>
                
                    <li>
                        {singleCardItem?.card?.card?.title}
                        <ul>
                            {singleCardItem?.card?.card?.itemCards?.map((sub_item) => (
                                <h4>
                                <li>
                                    --{sub_item.card.info.name} - ₹{sub_item.card.info.defaultPrice/100 || sub_item.card.info.price/100}
                                </li>
                                </h4>
                            ))}
                        </ul>
                    </li>

                </ul>
            : "")
        )}
            
    </div>
    </>
    )
}

export default ResMainEntry;