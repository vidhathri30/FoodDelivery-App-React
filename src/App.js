import React ,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header.js";
import Body from "./component/Body.js";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./component/About.js";
import Contact from "./component/Contact.js";
import Error from "./component/Error.js";
import RestaurantMenu from "./component/RestaurantMenu.js";
//import Grocery from "./component/Grocery.js";
const Grocery = lazy(()=> import("./component/Grocery.js"));
const AppLayout = () => {
   
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
        )
    }
        const approuter=createBrowserRouter([
            {
               path:"/",
               element:<AppLayout/> ,
               children:[
                {
                    path:"/",
                    element:<Body/>
                },
                {
                    path:"/about",
                    element:<About/>
                },
                {
                    path:"/contact",
                    element:<Contact/>
                },
                {
                    path:"/restaurant/:resId",
                    element:<RestaurantMenu/>
                },
                {
                    path:"/grocery",
                    element:(<Suspense fallback={<h1>Loading</h1>}>
                        <Grocery/>
                        </Suspense>
                        )
                },
               ],
               errorElement:<Error/>
            },
            
        ]);
    

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={approuter}/>);