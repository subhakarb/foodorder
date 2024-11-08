import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import Error from "./src/components/Error";
import RestraMenu from "./src/components/RestaurentMenu";
import Contact from "./src/components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./src/utils/userContext";
//import Grocery from "./src/components/Grocery";

const Grocery = lazy(() => import("./src/components/Grocery"));
const AppLayout = () => {
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    const userName = {
      name: "Boyapati Subhakar",
    };
    setUserInfo(userName.name);
  }, []);
  return (
    <UserContext.Provider value={{ LogedInUser: userInfo, setUserInfo }}>
      <div className="app">
        <Header /> <Outlet />
      </div>
    </UserContext.Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={"Loading..."}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurent/:resId",
        element: <RestraMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
