// import style
// import {ResMainEntryStyle} from "../../utils/css/ResMainEntry.css"
import resVegImg from "../../utils/images/vegetarian.png"

const RestaurantHeader = (props) => {

    const {resMainInfo, cuisines} = props
    return (
        <>
        <div className="restaurant-main-header mt-[1.5rem] w-fit ml-auto mr-auto sm:m-0 sm:w-auto">
            <div className="restaurant-sub-header flex justify-between flex-col w-max ml-auto mr-auto sm:flex-row sm:w-auto">
                <div className="RestaurantNameAddress_wrapper flex flex-col items-center justify-around sm:flex-none sm:h-auto sm:items-start">

                    <div className="RestaurantName font-bold text-[#282c3f] mb-[0.5rem] text-3xl w-[80vw] text-center sm:text-2xl sm:w-auto">
                        {resMainInfo.name}
                    </div>
                    <div className="RestaurantCuisines">
                        <span>{resMainInfo.veg ? <img src={resVegImg} style={{height:"1.2rem", width:"1.2rem"}}/> : ""}</span>
                        {" " + cuisines.join(", ")}
                    </div>

                    <div className="ratingCount_wrapper_mob flex items-center mb-[0.5rem]">
                    <div className="sm:hidden flex items-center justify-around px-[0.3rem] py-1 bg-green-700 text-my-white font-semibold rounded-md text-xs">{resMainInfo.avgRating}
                    
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3 h-3 ml-[0.1rem]">
                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                    </svg>
                    </div>
                    <div className="RestaurantRatingCount font-bold text-[0.8rem] ml-[0.25rem] text-gray-800 sm:hidden">
                        <div className="py-[0.2rem]">{resMainInfo.totalRatingsString} ratings</div>
                    </div>
                    </div>

                    <div className="RestaurantAddressDistance_mob_wrapper p-[0.5rem] rounded-[2rem] bg-gray-100 sm:p-0 sm:rounded-none sm:bg-inherit">
                    {resMainInfo.sla.lastMileTravel} km • {resMainInfo.areaName}
                    </div>
                    
                </div>
                <div className="RestaurantRating_wrapper hidden sm:inline-block">
                    <div className="avgRatingWrapper" >{resMainInfo.avgRating}</div>
                    <div className="RestaurantRatingCount">
                        {resMainInfo.totalRatingsString} ratings
                    </div>
                </div>
            </div>
            
            <hr className="RestaurantDottedSeparator hidden sm:inline-block"/>

            <div className="RestaurantTimeCost_wrapper hidden sm:inline-block">
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