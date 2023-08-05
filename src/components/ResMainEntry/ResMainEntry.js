import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { RES_DETAILS_URL } from "../../utils/constants";

const ResMainEntry = () => {
    const location = useLocation()

    // used state coming from parent - basic res details, so that no need to be fetched again
    let resMainInfo = location.state?.resData.info

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
        console.log(json)
        console.log(resMainInfo)
    }
    
    return(
    <>
        <h1>{}</h1>
        <h2>Res Menu</h2>
        <ul>
            <li>
                Item 1
            </li>
            <li>
                Item 2
            </li>
        </ul>
    </>
    )
}

export default ResMainEntry;