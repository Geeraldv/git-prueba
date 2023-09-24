import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AcercaDe } from "./components/AcercaDe";
import { BuenasManos } from "./components/BuenasManos";
import { Contacto } from "./components/Contacto";
import { Testimonios } from "./components/Testimonios";
import { Header } from "./components/Header";
import { Proyectos } from "./components/Proyectos";
import { Descripcion } from "./components/Descripcion";
import { Caracteristicas } from "./components/Caracteristicas";
import NavBar from "./components/NavBar";
import { DetallesUnidad } from "./components/DetallesUnidad";
import { DemoCarousel } from "./components/DemoCarousel";
import { ContactMini } from "./components/ContactMini";
import { Home } from "./pages/Home";
import { Terrazol1 } from "./pages/Terrazol1";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Terrazol1",
    element: <Terrazol1 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Header />
    <AcercaDe />
    <BuenasManos />
    <Testimonios />
    <Proyectos />
    <Contacto />
     <NavBar />
    <DetallesUnidad />
    <ContactMini />
    <DemoCarousel />
    <Descripcion />
    <Caracteristicas />
  */}

    <RouterProvider router={BrowserRouter} />
  </React.StrictMode>
);
