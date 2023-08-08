// import style
// import {ResMainEntryStyle} from "../../utils/css/ResMainEntry.css"

const RestaurantHeader = (props) => {

    const {resMainInfo, cuisines} = props

    return (
        <>
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
                    <div className="avgRatingWrapper" >{resMainInfo.avgRating}</div>
                    <div className="RestaurantRatingCount">
                        {resMainInfo.totalRatingsString} ratings
                    </div>
                </div>
            </div>
            
            <hr className="RestaurantDottedSeparator"/>

            <div className="RestaurantTimeCost_wrapper">
                <ul>
                    <li className="RestaurantTimeCost_item">
                        {resMainInfo.sla.deliveryTime} MINS
                    </li>
                    <li className="RestaurantTimeCost_item">
                        {resMainInfo.costForTwo}
                    </li>
                </ul>
            </div>

        </div>
        </>
    )
}

export default RestaurantHeader