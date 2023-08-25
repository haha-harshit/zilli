import { useParams, useLocation } from "react-router-dom";
import Shimmer from "../../components/ShimmerUI/Shimmer"
import RestaurantHeader from "./RestaurantHeader";

// import style
import {ResMainEntryStyle} from "../../utils/css/ResMainEntry.css"
import {useResMenuItems } from "../../utils/customHooks/useFetchApi";

// import custom hooks


const ResMainEntry = () => {
    const location = useLocation()
    // console.log(location)
    // used state coming from parent - basic res details like name, price, rating, so that no need to be fetched again
    let resMainInfo = location.state?.resMainInfo.info
    
    // fetch id from URL
    const { resId } = useParams()

    // using resMenu custom hook for making code modular and maintaing Single Responsibility Principle - hook to fetch menu items as otherwise done by below commented code.
    const resMenu = useResMenuItems(resId)

    // // for menu and other details
    // const [resMenu, setResMenu] = useState(null)
    
    // useEffect(() => {
    //     fetchResDetails();
    // }, [])

    // const fetchResDetails = async ()=> {
    //     const data = await fetch(RES_DETAILS_URL + resId)
    //     const json = await data.json()
    //     // console.log(json)
    //     setResMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    //     // console.log(json.data)
    //     // console.log(itemCard)
    // }
    // console.log(resMenu)
    
    if(resMenu === null) return <Shimmer/>
    
    // console.log(resMainInfo)
    const {cuisines} = resMainInfo

    return(
    <>
    <div className="section menu-section" style={ResMainEntryStyle}>
        <RestaurantHeader resMainInfo={resMainInfo} cuisines={cuisines} />
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