
import RestoCard from "./RestoCard";
//import resList from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body=()=>{
    const [ListOfRestaurants,setListOfRestaurants]=useState([]);
    const [ListOfFilterdRestaurants,setListOfFilterdRestaurants]=useState([]);
    const [searchText,setsearchText]=useState(" "); 
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData= async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9587533&lng=77.5619827&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //optional rendering
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfFilterdRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }
    //conditional rendering
   
    
        return ListOfRestaurants.length===0?<Shimmer/>:(
            <div className="body">
                <div className="upper-body">
                    <div className="search">
                        <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                            setsearchText(e.target.value);
                        }}/>
                        
                        <button onClick={()=>{
                            const filtered = ListOfRestaurants.filter((res)=>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                            setListOfFilterdRestaurants(filtered);
                    }
                        }>search</button>
                    </div>
                    <div>
                <button className="top-restaurants" onClick={()=>{
                    
                    const filtereddata= ListOfRestaurants.filter((res)=>res.info.avgRating >4.1);
                     setListOfFilterdRestaurants(filtereddata);
                }}>Top Listed Restaurants</button></div>
                </div>
                <div className="res-container">
                  {
                     ListOfFilterdRestaurants.map((restaurant)=>(<RestoCard key={restaurant.info.id} resData={restaurant} />))
                    
                    }
                  
                    
                </div>
            </div>
        );
            
          
    
 }
 export default Body;