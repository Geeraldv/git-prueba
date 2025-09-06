import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Home } from "./pages/Home";
import { Terrazol1 } from "./pages/Terrazol1";
import { Terrazol2 } from "./pages/Terrazol2";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AcercaDeDetallesPage } from "./pages/AcercaDeDetallesPage";
import { Terrazasdelparque1 } from "./pages/Terrazasdelparque1";
import { Terrazasdelparque2 } from "./pages/Terrazasdelparque2";
import { Terrazasdelparque3 } from "./pages/Terrazasdelparque3";
import { CiudadDelPrado } from "./pages/CiudadDelprado";
import { ParqueVerde } from "./pages/ParqueVerde";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Terrazol1",
    element: <Terrazol1 />,
  },

  {
    path: "/Terrazol2",
    element: <Terrazol2 />,
  },

  {
    path: "/AcercaDeDetalles",
    element: <AcercaDeDetallesPage />,
  },
  {
    path: "/Terrazasdelparque1",
    element: <Terrazasdelparque1 />,
  },
  {
    path: "/Terrazasdelparque2",
    element: <Terrazasdelparque2 />,
  },

  {
    path: "/Terrazasdelparque3",
    element: <Terrazasdelparque3 />,
  },
  {
    path: "/CiudadDelprado",
    element: <CiudadDelPrado />,
  },
  {
    path: "/ParqueVerde",
    element: <ParqueVerde />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter}></RouterProvider>
  </React.StrictMode>
);
