import { CDN_URL } from "../utils/constants";
const RestoCard=(props)=>{
    const{resData}= props;
    const {cloudinaryImageId,name,cuisines,avgRating}=resData?.info;
    const {deliveryTime}=resData?.info.sla;
    return ( <div className="res-card">
     
      
               <img alt="dish image" className="dish-image" src={CDN_URL+cloudinaryImageId}/>
              
               <h3>{name}</h3>
               <h4>{cuisines.join(", ")}</h4>
               <h4>{avgRating} stars</h4>
               <h4>{deliveryTime} minutes</h4>
  
  
              </div>
      )
   }
   export default RestoCard;