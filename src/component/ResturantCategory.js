import { useState } from "react";
import { useDispatch, UseDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantCategory=(items)=>
{
    const dispatch=useDispatch();
const handleitem=()=>{
    dispatch(addItem(items));
    console.log
    9 
}
    
     return(<div>
        <div className="m-auto h-[160px] w-[600px] bg-pink-300  shadow-2xl ">
        <div className="flex justify-between" >
            <span className=" p-1 font-bold text-xl">Recommended(5)</span>

            </div>
            <div className="flex justify-between">
            <div className="py-4 text-xs">
                <span>Biriyani - Rs 250</span>
                <span> Masala Dosa - Rs 150</span>
                <span> Roti curry - Rs 250</span>
                <span> Egg Rice - Rs 200</span>
                <span> Veg Pulav - Rs 250</span>
                <span>Biriyani - Rs 250</span>
                <span> Masala Dosa - Rs 150</span>
                <span> Roti curry - Rs 250</span>
                <span> Egg Rice - Rs 200</span>
                <span> Veg Pulav - Rs 250</span>
                
            </div>
            
            <span><button className="bg-black absolute text-white" onClick={()=>handleitem("Pizza")}>ADD+</button></span>
                <div><img className=" w-[200px] h-[110px] " src="https://c.ndtvimg.com/2023-08/2bvn452g_masala-bhaat-or-masala-rice_625x300_31_August_23.jpg?im=FeatureCrop,algorithm=dnn,width=650,height=400"/>
                </div>
            
            </div>
        </div><br></br>
        <div className="m-auto h-[160px] w-[600px] bg-pink-300  shadow-2xl">
        <div className="flex justify-between">
            <span className="text-md p-1 font-bold text-xl">Special(4)</span>

            
            </div>
            <div className="flex justify-between">
            <div className="py-3 text-xs">
                <span>Burger with fries - Rs 250</span>
                <span> Pizza - Rs 150</span>
                <span>  Veg Noodles - Rs 250</span>
                <span> Fried Rice - Rs 200</span>
                <span>Burger with fries - Rs 250</span>
                <span> Pizza - Rs 150</span>
                <span>  Veg Noodles - Rs 250</span>
                <span> Fried Rice - Rs 200</span>
                
            </div><div>
            <span><button className="bg-black absolute text-white" onClick={()=>handleitem("Biriyani")}>ADD+</button></span>
                <img className="h-[110px] w-[200px]" src="https://img.freepik.com/free-psd/pictou-county-pizza-isolated-transparent-background_191095-32844.jpg?size=626&ext=jpg"/></div></div>
        </div><br></br>
        <div className="m-auto h-[160px] w-[600px] bg-pink-300  mb-3 shadow-2xl ">
        <div className="flex justify-between">
            <span className="text-md p-1 font-bold text-xl">Desserts(4)</span>

            </div>
            <div className="flex justify-between">
            
            <div className="p-2 text-xs">
                <span>Gulab Jamoon - Rs 250</span>
                <span> Rasagolla - Rs 150</span>
                <span> Caramel Custard  - Rs 250</span>
                <span> Icecream(vanilla,mango,pista) - Rs 200</span>
                <span>Gulab Jamoon - Rs 250</span>
                <span> Rasagolla - Rs 150</span>
                <span> Caramel Custard  - Rs 250</span>
                <span> Icecream(vanilla,mango,pista) - Rs 200</span>
                
            </div><div>
            <span><button className="bg-black absolute text-white" onClick={()=>handleitem("Roti curry")}>ADD+</button></span>
                <img className="h-[100px] w-[200px] " src="https://c.ndtvimg.com/2023-08/2bvn452g_masala-bhaat-or-masala-rice_625x300_31_August_23.jpg?im=FeatureCrop,algorithm=dnn,width=650,height=400"/></div></div>
        </div>
        
     </div>
     
     );
}
export default RestaurantCategory