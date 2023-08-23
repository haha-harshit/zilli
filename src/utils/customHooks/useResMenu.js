import { useEffect, useState } from "react"
import { RES_DETAILS_URL } from "../constants"

const useResMenu = (resId) => {
    // for menu and other details
    const [resMenu, setResMenu] = useState(null)

    useEffect(() => {
        fetchData()
    })

    // fetch menu items
    const fetchData = async() => {
        const data = await fetch(RES_DETAILS_URL + resId);
        const json = await data.json()
        setResMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    }

    return resMenu;

}

export default useResMenu;