import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import ErrorElement from "./src/components/ErrorElement";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";
import userContext from "./src/utils/context";
import Cart from "./src/components/Cart";
import { Provider } from "react-redux";
import store from "./src/store";

const Applayout=()=>{
       const user={
        name :"Dummy Name",
        email:"dummyemail@gmail.com"
     }
    return(
        <Provider store={store}>
        <Header/>
        <Outlet/>
        <userContext.Provider value={{user:user}}>
        <Footer/>
        </userContext.Provider>
        </Provider>
    )
}

const appRoute=createBrowserRouter([
    {
        path:"",
        element: <Applayout/>,
        errorElement:<ErrorElement/>,
        children:[
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ]
    }
])




const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRoute}/>);