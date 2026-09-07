import React from 'react'
import FRONTEND from './components/frntend.jsx'
import Todo from './components/todo.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  
const route= createBrowserRouter([
  {
    path: "/",
      element: <Todo />,
      // children: [
      //   {
      //     path: "",
      //     element: <HomePage />,
      //   }]
  }
]);
return(
  <>
  <RouterProvider router={route} />
  </>
);
};
export default App;

// function App() {
//   return (
//     // <FRONTEND />
//     <Todo/>
//   )
// }

// export default App;
