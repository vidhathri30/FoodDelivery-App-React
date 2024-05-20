import { LOGO_URL } from "../utils/constants";
import {useState} from "react";

 const Header=()=>{
  const [buttonchange , setbuttonchange]=useState("login");
    return (
        <div className="header">
          <div className="logo-container">
            <img className="logo" src= {LOGO_URL}/>
          </div>
          <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact us</li>
                <li>Cart</li>
                <li><button className="btn" onClick={()=>{
                  return buttonchange==="login"?setbuttonchange("logout"):setbuttonchange("login");
                }}>{buttonchange}</button></li>
            </ul>
          </div>

        </div>
    )
 }
 export default Header;