import {useEffect,useState} from "react";
import { MENU_API_URL } from "../utils/constants";
const useRestaurantMenu =(resId)=> {
       
        const [resInfo,setresInfo]=useState(null);
        useEffect(()=>{
            fetchmenu();
    
        },[]);
    
    const fetchmenu= async ()=>{
        const data=await fetch(MENU_API_URL+resId+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
        const json=await data.json();
        setresInfo(json.data);
        console.log(json);
        
    };
    return resInfo;
}

export default useRestaurantMenu;