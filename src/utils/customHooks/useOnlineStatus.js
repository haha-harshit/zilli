import { useEffect, useState } from "react"

// const useOnlineStatus = () => {
//     const [onlineStatus, setOnlineStatus] = useState(true);
//     console.log(onlineStatus);

//     useEffect(() => {
//         window.addEventListener("online", ()=>{
//             // console.log("online")
//             setOnlineStatus(true);
//         })
//         window.addEventListener("offline", ()=> {
//             // console.log('offline')
//             setOnlineStatus(false);
//         })
//     }, [])

//     return onlineStatus
// }

const useOnlineStatus = async() => {
    try {
        const url = "https://www.zomato.com/"
        console.log(url)
        const online = await fetch(url, {cache: "no-store"});
        // either true or false
        if(online.status >= 200 && online.status < 300){
            return true;
        }
         
    } catch (error) {
        console.log("not fetch")
        console.log(error)
        return false;
    }
}

export default useOnlineStatus;