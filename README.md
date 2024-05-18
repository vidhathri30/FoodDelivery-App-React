# parcel
dev build
local server
hot module replacement hmr
file watching algorithm built in c++
cahing faster
image optimization 
minification
bundling
compress
# create element
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
# functional component
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

# props
const RestoCard=(props)=>{
  return ( <div className="res-card">
    
             <img alt="dish image" class="dish-image" src=" https://www.madhuseverydayindian.com/wp-content/uploads/2022/11/easy-vegetable-biryani.jpg"/>
             <h3>{props.resname}</h3>
             <h4>{props.cuisine}</h4>
             <h4>4.4</h4>
             <h4>38 minutes</h4>


            </div>
    )
 }
 const Body=()=>{
    return (
        <div className="body">
            <div className="search">Search
            <div className="res-container">
                 <RestoCard resname="kfc" cuisine="north indian"/>
                 <RestoCard resname="meghana foods" cuisine="south indian"/>
                 

                </div>
            </div>
        </div>
        
    )
 }
const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}