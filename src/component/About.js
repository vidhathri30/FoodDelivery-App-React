import UserFunction from "./UserFunction";
import UserClass from "./UserClass";
import React from "react";
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
           {/* <div><UserFunction name="vidhathri" location="Bengaluru"/></div> */}
           <div><UserClass name="FIRST" location="Bengaluru"/></div>
           
        </div>
    )
    }
}
export default About;