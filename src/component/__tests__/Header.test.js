import { render ,screen,fireEvent} from "@testing-library/react";
import { ReactReduxContext } from "react-redux";
import Header from "../Header";
import {Provider} from "react-redux";
import appStore from "../../utils/appStore"
import {BrowserRouter} from "react-router-dom";
import "@testing-library/jest-dom"


it("Should check the login button",()=>{
    render(
<BrowserRouter>
    <Provider store={appStore}>
<Header/>;
    </Provider>
    </BrowserRouter>
    )
    const loginbutton=screen.getByRole("button",{name:"login"});
    expect(loginbutton).toBeInTheDocument();
    const cartitems=screen.getByText("Cart(1)");
    expect(cartitems).toBeInTheDocument();
})
it("Should check the login button",()=>{
    render(
<BrowserRouter>
    <Provider store={appStore}>
<Header/>;
    </Provider>
    </BrowserRouter>
    )
    const cartitems=screen.getByText(/Cart/);
    expect(cartitems).toBeInTheDocument();
})
it("Should change login to logout on click",()=>{
    render(
<BrowserRouter>
    <Provider store={appStore}>
<Header/>;
    </Provider>
    </BrowserRouter>
    )
    const loginbutton=screen.getByRole("button",{name:"login"});
    fireEvent.click(loginbutton);
    const logoutbutton=screen.getByRole("button",{name:"logout"});
    expect(logoutbutton).toBeInTheDocument();
   
})