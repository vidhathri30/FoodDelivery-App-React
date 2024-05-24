import React from "react";
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
        const data = await fetch("https://api.github.com/users/vidhathri30");
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
           
            <div className="user">
             <img src={avatar_url}></img>   
            <h2>Name:{name}</h2>
            <h3>location:{location}</h3>
            </div>
        )
    }
}
export default UserClass;