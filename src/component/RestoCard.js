import { CDN_URL } from "../utils/constants";
const RestoCard=(props)=>{
    const{resData}= props;
    const {cloudinaryImageId,name,cuisines,avgRating}=resData?.info;
    const {deliveryTime}=resData?.info.sla;
    return ( <div className="res-card m-4 p-4 w-[250px] bg-pink-100 rounded-xl hover:bg-pink-300 cursor-pointer shadow-xl">
     
      
               <img alt="dish image " className="dish-image rounded-xl" src={CDN_URL+cloudinaryImageId}/>
              
               <h3 className="font-bold py-4 text-lg ">{name}</h3>
               <h4>{cuisines.join(", ")}</h4>
               <h4>{avgRating} stars</h4>
               <h4>{deliveryTime} minutes</h4>
  
  
              </div>
      )
   }
   export const withPromotedLabel=()=>{
    return(props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white h-5 rounded-lg">Promoted</label>
                <RestoCard {...props}/>
            </div>
        )
    }

   }
   export default RestoCard;