import { useState } from "react";
const UserFunction=(props)=>{
    const {name}=props;
    const [count,setCount]=useState(0);
    
    return (
        
        <div className="user">
            <h1>count:{count}</h1>
        <h2>Name:{name}</h2>
        <h3>Location:{props.location}</h3>
        
        </div>
    )
    
}
export default UserFunction;