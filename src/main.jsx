import * as ReactDOM from "react-dom/client";
import React from 'react';
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Database from "./Database.jsx";
import EditPage from "./EditPage.jsx";
import Home from "./Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/register",
        element: <App></App>

      },
      {
        path: "/users",
        element: <Database></Database> ,
        loader: ()=>{return fetch('http://localhost:3000/users')},
      },
      {
        path: "/users/:id",
        element: <EditPage></EditPage>,
        loader: ({params})=>fetch(`http://localhost:3000/users/${params.id}`),
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);