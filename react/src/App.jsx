import React from "react";
import Todo from "./components/todo.jsx";
import FRONTEND from "./components/frntend.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const App = () => {

  const route = createBrowserRouter([
    {
      path: "/todo",
      element: <Todo />
    },
    {
      path:"/",
      element:<FRONTEND/>
    }
  ]);

  return (
    <RouterProvider router={route} />
  );
};

export default App;