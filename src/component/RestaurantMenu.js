import {useEffect,useState} from "react";
import { MENU_API_URL } from "../utils/constants";
 import Shimmer from "./Shimmer";
 import { useParams } from "react-router-dom";
 
 
const RestaurantMenu=()=>{
    const {resId}=useParams();
   
    const [resInfo,setresInfo]=useState(null);
    useEffect(()=>{
        fetchmenu();

    },[]);

const fetchmenu= async ()=>{
    const data=await fetch(MENU_API_URL+resId+"&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
    const json=await data.json();
    setresInfo(json.data);
    console.log(json);
}  

// if(resInfo===0) return <Shimmer/>; 
// const {
    
//     avgRating,
//     city,
//     totalRatingsString,
//     cuisines,
//     name,
//     expectationNotifiers,
//   } = resInfo?.cards[2]?.card?.card?.info;



        return(<div className="menu">
            <ul>
                <h1><li>
                    {resInfo?.cards[2]?.card.card.info.name}
                </li></h1>
                
                <h2><li>{resInfo?.cards[2]?.card.card.info.cuisines.join(" ,")}-{resInfo?.cards[2]?.card.card.info.costForTwoMessage}</li></h2>
                <li><h2>Menu</h2></li>
                <li>Biriyani --RS 250</li>
                <li>Fried rice --RS 350</li>
                <li>South Indian Combo --RS 150</li>
                <li>Pizzaa --RS 150</li>
                <li>Burger with --RS 150</li>
                
             
            
            </ul>
        </div>
    )
    }

export default RestaurantMenu;