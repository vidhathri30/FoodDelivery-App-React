import { LOGO_URL } from "../utils/constants";
import {useState,useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector, UseSelector } from "react-redux";

 const Header=()=>{
  const [buttonchange , setbuttonchange]=useState("login");
  const OnlineStatus=useOnlineStatus();
  const data=useContext(UserContext);
  const cartItems=useSelector((store)=>store.cart.items);
    return (
        <div className="flex justify-between bg-pink-100 shadow-lg m-2" >
          <div className="logo-container">
            <img className="w-28 h-30" src= {LOGO_URL}/>
          </div>
          <div className="flex items-center">
            <ul className="flex ">
              <li className="px-4 font-bold text-lg">Online Status:{OnlineStatus?"✅":"🔴"}</li>
                <li className="px-4 font-bold text-lg"><Link to="/">Home</Link></li>
                <li className="px-4 font-bold text-lg"><Link to="/about">About</Link></li>
                <li className="px-4 font-bold text-lg"><Link to="/contact">Contact us</Link></li>
                <li className="px-4 font-bold text-lg"><Link to="/cart">Cart({cartItems.length})</Link></li>
                <li className="px-4 font-bold text-lg"> <Link to="/grocery">Grocery</Link></li>
                <li className="px-4 font-bold text-lg"><button className="btn bg-pink-300 px-4" onClick={()=>{
                  return buttonchange==="login"?setbuttonchange("logout"):setbuttonchange("login");
                }}>{buttonchange}</button></li>
                <li className="px-4 font-bold text-lg">{data.LoggedInUser}</li>
            </ul>
          </div>

        </div>
    )
 }
 export default Header;