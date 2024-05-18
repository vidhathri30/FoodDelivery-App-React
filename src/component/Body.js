
import RestoCard from "./RestoCard";
import resList from "../utils/mockdata";
import { useState } from "react";

const Body=()=>{
    const [ListOfRestaurants,setListOfRestaurants]=useState(resList);
    return (
        <div className="body">
            
            <button className="top-restaurants" onClick={()=>{
                
                const filtereddata= ListOfRestaurants.filter((res)=>res.info.avgRating >4.5);
                 setListOfRestaurants(filtereddata);
            }}>Top Listed Restaurants</button>
            <div className="res-container">
              {
                 ListOfRestaurants.map((restaurant)=>(<RestoCard key={restaurant.info.id} resData={restaurant} />))
              }
                
            </div>
        </div>
        
    );
 }
 export default Body;