import { useEffect, useState } from "react";

const useOnlineStatus=()=> {
const [OnlineStatus,setonlineStatus]=useState(true);
useEffect(()=>{
    window.addEventListener("offline" , ()=>{
        setonlineStatus(false);
    })
},[]);


    return OnlineStatus;
}
export default useOnlineStatus;