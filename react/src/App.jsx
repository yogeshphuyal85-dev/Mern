import React from "react";
import Todo from "./components/todo.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {

  const route = createBrowserRouter([
    {
      path: "/",
      element: <Todo />
    }
  ]);

  return (
    <RouterProvider router={route} />
  );
};

export default App;