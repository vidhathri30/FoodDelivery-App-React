import React from "react";
import ReactDOM from "react-dom/client";
// const heading=React.createElement("div",{id:"parent"},[
//     React.createElement("div",{id:"child1"},[
//         React.createElement("h1",{},"hellooh1"),
//         React.createElement("h2",{},"hellooh2")
//     ]),
//     React.createElement("div",{id:"child1"},[
//         React.createElement("h1",{},"hellooh1"),React.createElement("h2",{},"hellooh2")
//     ]),

// ]);
//JSX is a html like  parcel has bable which transpiles the jsx into create element and renderd to dom as html element
const jsxheading=(<div><h1 id="head">hello from jsx</h1></div>);
const HeadingComponent=()=>(
    <div id="head1">
        <Title/>
        <h1>hello from component without using curly braces</h1>
    </div>
);
const Title=()=>{
    return <h2>Component composition</h2>
};
const Ele=()=><h2>compon composition</h2>
const Element=()=>(<h1>
    {jsxheading}  
    <Ele/>
    {100 + 200}
    </h1>
);


const root=ReactDOM.createRoot(document.getElementById("root"));



root.render(jsxheading);
root.render(<Element/>);

