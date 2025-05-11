import { useEffect, useState } from "react"
import { RES_API_URL, RES_DETAILS_URL } from "../constants"
import useOnlineStatus from "./useOnlineStatus";

export const useResMenuItems = (resId) => {
    // for res menu and other details
    const [resMenu, setResMenu] = useState(null);
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async() => {
        try {
            const data = await fetch(RES_DETAILS_URL + resId + "&catalog_qa=undefined&submitAction=ENTER");
            const json = await data.json()
            console.log(json)
            //card1-
            //card2-restaurant-details
            //card3-offers
            //card4-menu-items
            setResMenu(json?.data?.cards[json?.data.cards.length-1]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
        } catch (error) {
            console.log(error)
        }
    }
    // console.log(resMenu)
    return resMenu;
}

export const useResList = () => {
    // for res list
    const [resList, setResList] = useState([]);
    useEffect(() => {
       fetchData();
    }, [])
    const fetchData = async() => {
        try {
            const data = await fetch(RES_API_URL);
            const json = await data.json()
            setResList(json?.data?.cards[1].card.card.gridElements?.infoWithStyle.restaurants);
            console.log(resList)
        } catch (error) {
            console.log(error)
        }
    }
    return resList;
}