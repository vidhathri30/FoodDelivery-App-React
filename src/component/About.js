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
        const data = await fetch("https://api.github.com/users/vidhathri30");
        const json=await data.json();
        console.log(json);
}
    render(){
        //console.log("parent render");
    return (
        
        <div className="about">
           <h1> <div>hello welcome to our food delivery app</div></h1>
           {/* <div><UserFunction name="vidhathri" location="Bengaluru"/></div> */}
           <div><UserClass name="FIRST" location="Bengaluru"/></div>
           
        </div>
    )
    }
}
export default About;