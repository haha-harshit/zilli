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

const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    const updateStatus = () => {
        setIsOnline(navigator.onLine);
    };

    useEffect(() => {
        window.addEventListener("online", updateStatus);
        window.addEventListener("offline", updateStatus);

        return () => {
            window.addEventListener("online", updateStatus);
            window.addEventListener("offline", updateStatus);
        };
    }, []);

}

// const useOnlineStatus = async() => {
//     try {
//         const url = "https://8.8.8.8/"
//         const online = await fetch(url, {cache: "no-store"});
//         // either true or false
//         if(online.status >= 200 && online.status < 300){
//             return true;
//         }else{
//             return false;
//         }
         
//     } catch (error) {
//         console.log(error);
//         return false;
//     }
// }

export default useOnlineStatus;