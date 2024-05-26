import UserFunction from "./UserFunction";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";
class About extends React.Component{
    constructor(props){
        super(props);
        //console.log("Parent constructor");


    }
    async componentDidMount(){
        //console.log("parent component ");
      
}
    render(){
        //console.log("parent render");
    return (
        
        <div className="about items-center">
           <h1> <div className ="text-center font-bold text-3xl">Hello welcome to our food delivery app</div></h1>
           <UserContext.Consumer>
            {(data)=><h2 className="text-center font-bold text-3xl">{data.LoggedInUser}!!!</h2>}
           </UserContext.Consumer>
           {/* <div><UserFunction name="vidhathri" location="Bengaluru"/></div> */}
           <div><UserClass name="FIRST" location="Bengaluru"/></div>
           
        </div>
    )
    }
}
export default About;