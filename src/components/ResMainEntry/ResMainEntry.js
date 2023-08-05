import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RES_DETAILS_URL } from "../../utils/constants";

const ResMainEntry = () => {

    const [resInfo, setResInfo] = useState(null)

    const { resId } = useParams()

    useEffect(() => {
        fetchResDetails();
    }, [])

    const fetchResDetails = async ()=> {
        const data = await fetch(RES_DETAILS_URL + resId)

        const json = await data.json()
        console.log(json)
    }

    return(
    <>
        <h1> Res Name  </h1>
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