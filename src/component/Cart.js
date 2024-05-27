import { useDispatch, useSelector, UseSelector } from "react-redux";
import { UseDispatch } from "react-redux";
const Cart=()=>
{
    
    
    const item=useSelector((store)=>store.cart.items);
    return(
        <div>
            <h1 className="text-center font-bold p-4 m-4 text-2xl">Cart</h1>
            <div>{
                item.map((res)=><h1 className="text-center font-bold text-lg">{item}</h1>)
            }</div>
           
        </div>
    )
}
export default Cart;