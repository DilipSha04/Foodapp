import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Componants/Header";
import Body from "./Componants/Body";
import About from "./Componants/About";
import Contact from "./Componants/Contact";
import Error from "./Componants/Error";
import ResturantMenu from "./Componants/ResturantMenu";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Componants/Cart";

function App() {

  const [userName, setUserName] = useState();
  useEffect(()=>{
      const data = {
        name : "Dilip Sharma"
      }
      setUserName(data.name)
  },[]);

  return (
    <Provider store={ appStore }>
    <userContext.Provider value={{loggedInuser: userName, setUserName}}>
    <>
      <Header />
      <Outlet />
    </>
    </userContext.Provider>
    </Provider>
    
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body/>,
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
        path: "/resturant/:resId",
        element: <ResturantMenu />,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
    ],
    errorElement: <Error/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
