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
                    <div>{resMainInfo.avgRating}</div>
                    <div className="RestaurantRatingCount">
                        {resMainInfo.totalRatingsString}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default RestaurantHeader