import { useEffect, useState } from "react"
import { RES_API_URL, RES_DETAILS_URL } from "../constants"

export const useResMenuItems = (resId) => {
    // for res menu and other details
    const [resMenu, setResMenu] = useState(null);
    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async() => {
        const data = await fetch(RES_DETAILS_URL + resId);
        const json = await data.json()
        // return json;
        setResMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    }
    return resMenu;
}

export const useResList = () => {
    // for res list
    const [resList, setResList] = useState([]);
    useEffect(() => {
       fetchData();
    }, [])
    const fetchData = async() => {
        const data = await fetch(RES_API_URL);
        const json = await data.json()
        setResList(json?.restaurants);
    }
    return resList;
}