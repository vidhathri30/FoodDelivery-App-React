import { useRouteError } from "react-router-dom";
import { ERROR_IMG } from "../utils/constants";
const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return (<div className="error text-center">
        <div className="flex justify-center my-5 p-5">
            <img className=" justify-center size-[250px] rounded-[250px]" src={ERROR_IMG}></img></div>
        <h1 className="text-xl font-bold">OOPS!!!!</h1>
        <h1 className="text-xl font-bold">Something went wrong</h1>
        <h3 className="text-xl font-bold">{err.status} :{err.statusText}</h3>
    </div>
    );
}
export default Error;