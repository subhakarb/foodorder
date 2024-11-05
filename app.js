import React, { lazy, Suspense } from "react" 
import ReactDOM from "react-dom/client"  
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Error from "./src/components/Error";
import RestraMenu from "./src/components/RestaurentMenu";
import Contact from "./src/components/Contact"; 
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; 
//import Grocery from "./src/components/Grocery";

const Grocery = lazy(() => import("./src/components/Grocery"));
const AppLayout = () => {
    return (
        <div className="app">
           <Header /> <Outlet />
        </div>
    );
};
const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout />,
        children: [
            {
                path:"/",
                element: <Body />
            },
            {
                path:"/about",
                element: <About />
            },
            {
                path:"/contact",
                element: <Contact />
            },
            {
                path:"/grocery",
                element: <Suspense fallback= { "Loading..."  }><Grocery /></Suspense>
            },
            {
                path:"/restaurent/:resId",
                element: <RestraMenu />
            } 
        ],
        errorElement: <Error />
    },
    
])  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

 