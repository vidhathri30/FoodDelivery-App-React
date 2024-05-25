
import RestoCard,{withPromotedLabel} from "./RestoCard";
//import resList from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

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
        console.log(json.data)
        //optional rendering
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfFilterdRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }
    //conditional rendering
   
    const OnlineStatus=useOnlineStatus();
    const RestaurantCardPromotes=withPromotedLabel(RestoCard);
    if(OnlineStatus===false) 
    return <h1><center>OOPS!! Looks like you are offline</center></h1>
        return ListOfRestaurants.length===0?<Shimmer/>:(
            <div className="body">
                <div className="upper-body flex">
                    <div className="search m-4 p-4">
                        <input type="text" className="search-box border-solid  border-black text-bold" value={searchText} onChange={(e)=>{
                            setsearchText(e.target.value);
                        }}/>
                      
                       
                        <button className="px-4 py-2 bg-pink-300 m-4 rounded-lg " onClick={()=>{
                            const filtered = ListOfRestaurants.filter((res)=>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                            setListOfFilterdRestaurants(filtered);
                    }
                        }>search</button>
                      </div>
                    <div className="search m-4 p-4 ">
                <button className="top-restaurants py-2 px-4 mt-4 bg-pink-300 rounded-lg text-bold" onClick={()=>{
                    
                    const filtereddata= ListOfRestaurants.filter((res)=>res.info.avgRating >4.1);
                     setListOfFilterdRestaurants(filtereddata);
                }}>Top Listed Restaurants</button></div>
                </div>
                <div className="res-container flex flex-wrap">
                  {
                     ListOfFilterdRestaurants.map((restaurant)=>(
                         
                     <Link 
                     key={restaurant.info.id} 
                     to={"/restaurant/"+restaurant.info.id} >
                        {restaurant.info.avgRating>4.3 ? (<RestaurantCardPromotes resData={restaurant}/>) : 
                        (<RestoCard  resData={restaurant}/>)}
                        </Link>
                        

                        ))
                    
                    }
                  
                    
                </div>
            </div>
        );
            
          
    
 }
 export default Body;