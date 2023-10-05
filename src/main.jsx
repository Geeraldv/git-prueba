import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Home } from "./pages/Home";
import { Terrazol1 } from "./pages/Terrazol1";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AcercaDeDetallesPage } from "./pages/AcercaDeDetallesPage";
import { Terrazasdelparque1 } from "./pages/Terrazasdelparque1";
import { Terrazasdelparque2 } from "./pages/Terrazasdelparque2";

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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter}></RouterProvider>
  </React.StrictMode>
);
