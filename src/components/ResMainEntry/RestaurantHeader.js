// import style
// import {ResMainEntryStyle} from "../../utils/css/ResMainEntry.css"

const RestaurantHeader = (props) => {

    const {resMainInfo, cuisines} = props

    return (
        <>
        <div className="restaurant-main-header mt-[1.5rem] w-fit ml-auto mr-auto sm:m-0 sm:w-auto">
            <div className="restaurant-sub-header flex justify-between flex-col w-max ml-auto mr-auto sm:flex-row sm:w-auto">
                <div className="RestaurantNameAddress_wrapper">

                    <div className="RestaurantName font-bold text-[#282c3f] mb-[0.5rem] text-3xl">
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