import useRestaurantMenu from "../utils/useRestaurantMenu";
 import Shimmer from "./Shimmer";
 import { useParams } from "react-router-dom";
 import RestaurantCategory from "./ResturantCategory";
 

 const RestaurantMenu=()=>{
    const {resId}=useParams();
    const resInfo=useRestaurantMenu(resId);
if(resInfo===0) return <Shimmer/>; 
// const {
    
//     avgRating,
//     city,
//     totalRatingsString,
//     cuisines,
//     name,
//     expectationNotifiers,
//   } = resInfo?.cards[2]?.card?.card?.info;


        
        return(<div className="shadow-xl bg-pink-100 px-4 m-4 ">
            <div className="m-auto">
             <ul className="text-center">
                <h1 className="font-bold text-2xl"><li>
                    {resInfo?.cards[2]?.card.card.info.name}
                </li></h1>
                
                <h2 className="text-2xl font-semibold"><li>{resInfo?.cards[2]?.card.card.info.cuisines.join(" ,")}-{resInfo?.cards[2]?.card.card.info.costForTwoMessage}</li></h2><br></br>
                </ul></div>
               
                
             
            
            <div>
            <RestaurantCategory/>
            </div>
        </div>
       
    )
 }  

export default RestaurantMenu;