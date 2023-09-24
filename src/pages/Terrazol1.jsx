import { Caracteristicas } from "../components/Caracteristicas";
import { ContactMini } from "../components/ContactMini";
import { DemoCarousel } from "../components/DemoCarousel";
import { Descripcion } from "../components/Descripcion";
import { DetallesUnidad } from "../components/DetallesUnidad";

import NavBar from "../components/NavBar";

import "./Terrazol1.css";
export const Terrazol1 = () => {
  return (
    <>
      <NavBar />
      <DetallesUnidad />
      <div className="Detalles-proyectos">
        <div className="colunm-detalles-1">
          <DemoCarousel />
          <Descripcion />
          <Caracteristicas />
        </div>
        <div className="colunm-detalles-2">
          <ContactMini />
        </div>
      </div>
    </>
  );
};
