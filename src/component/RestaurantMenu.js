import useRestaurantMenu from "../utils/useRestaurantMenu";
 import Shimmer from "./Shimmer";
 import { useParams } from "react-router-dom";
 

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



        return(<div className="flex justify-center shadow-xl bg-pink-100 px-4 m-4 h-[550px]"><div className="menu text-center w-[800px] h-[400px] p-5 m-8 justify-center bg-pink-200  hover:bg-pink-300 shadow-xl cursor-pointer">
            <ul >
                <h1 className="font-bold text-2xl"><li>
                    {resInfo?.cards[2]?.card.card.info.name}
                </li></h1>
                
                <h2 className="text-2xl font-semibold"><li>{resInfo?.cards[2]?.card.card.info.cuisines.join(" ,")}-{resInfo?.cards[2]?.card.card.info.costForTwoMessage}</li></h2><br></br>
                <li ><h2 className="font-semibold text-2xl">Menu</h2></li>
                <li className="font-semibold text-xl">Biriyani --RS 250</li>
                <li className="font-semibold text-xl">Fried rice --RS 350</li>
                <li className="font-semibold text-xl">South Indian Combo --RS 150</li>
                <li className="font-semibold text-xl">Pizzaa --RS 150</li>
                <li className="font-semibold text-xl">Burger with --RS 150</li>
                
             
            
            </ul>
        </div>
        </div>
    )
 }  

export default RestaurantMenu;