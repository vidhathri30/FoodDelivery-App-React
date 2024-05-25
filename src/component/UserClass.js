import React from "react";
import {GIT_URL} from "../utils/constants";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log("consrtuctor");
        this.state={
           userinfo:{
            name:"vid",
            Location:"udupi",
           }
            
        };
        
    }
   async componentDidMount(){
    console.log("componentdid mount");
        const data = await fetch(GIT_URL);
        const json=await data.json();
        console.log(json);
        this.setState({
            userinfo:json,
        });

    }
    componentDidUpdate(){
        console.log("Component did update");
    }
    componentWillUnmount(){
        console.log("Component will unmount");
    }
    
    render(){
        
     
        console.log("render");
        const{name,location,avatar_url}=this.state.userinfo;
        return(
           
            <div className="user    items-center">
                <div className="flex justify-center p-4 m-4">
             <img  className="  size-[250px] rounded-[250px] justify-center items-center" src={avatar_url}></img>  
             </div> 
             <div className="text-center font-bold text-xl">
            <h2 text-center>Name:{name}</h2>
            <h3>location:{location}</h3>
            </div>
            </div>
        )
    }
}
export default UserClass;