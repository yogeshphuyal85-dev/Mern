import React from "react";
import Todo from "./components/todo.jsx";
import FRONTEND from "./components/frntend.jsx";
import Api_practise from "./components/api_practise.jsx";
import User_api from "./components/user_api.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const App = () => {

  const route = createBrowserRouter([
    {
      path: "/todo",
      element: <Todo />
    },
    {
      path:"/frontend",
      element:<FRONTEND/>
    },
    {
      path:"/",
      element:<Api_practise/>
    },
    {
      path:"/user",
      element:<User_api/>
    }
  ]);

  return (
    <RouterProvider router={route} />
  );
};

export default App;