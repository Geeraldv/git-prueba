import React, { useState } from "react";

import { Caracteristicas } from "../Layout/Caracteristicas";
import { ContactMini } from "../components/ContactMini";
import { DemoCarousel } from "../Layout/DemoCarousel";
import { Descripcion } from "../Layout/Descripcion";
import { DetallesUnidad } from "../Layout/DetallesUnidad";
import { Footer } from "../components/Footer";
import { Mapa } from "../Layout/Mapa";
import { NavBar } from "../components/NavBar";
import { VideoProyectos } from "../components/VideoProyectos";
import { TipoDeApartamentoTerrazas1 } from "../components/TipoDeApartamentoTerrazas1";
import { SideBar } from "../components/SideBar";
import checkblue from "../assets/svg/Checkblue.svg";
import tp1 from "../assets/img//Terrazas del parque 1/TP1.png";
import tp2 from "../assets/img//Terrazas del parque 1/TP2.png";
import tp3 from "../assets/img//Terrazas del parque 1/TP3.png";
import tp4 from "../assets/img//Terrazas del parque 1/TP4.png";
import tp5 from "../assets/img//Terrazas del parque 1/TP5.png";
import tp6 from "../assets/img//Terrazas del parque 1/TP6.png";

export const Terrazasdelparque1 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <NavBar toggleSidebar={toggleSidebar} />
      <SideBar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <DetallesUnidad
        nombre="TERRAZAS DEL PARQUE 1"
        ubicacion="Santo Domingo Norte, Ciudad Modelo"
        precio="DESDE US$117,000"
      />
      <div className="Detalles-proyectos">
        <div className="colunm-detalles-1">
          <DemoCarousel>
            <div>
              <img className="img__carousel" src={tp1} alt="Imagen 3" />
            </div>
            <div>
              <img className="img__carousel" src={tp2} alt="Imagen 3" />
            </div>
            <div>
              <img className="img__carousel" src={tp3} alt="Imagen 3" />
            </div>
            <div>
              <img className="img__carousel" src={tp4} alt="Imagen 3" />
            </div>
            <div>
              <img className="img__carousel" src={tp5} alt="Imagen 3" />
            </div>
            <div>
              <img className="img__carousel" src={tp6} alt="Imagen 3" />
            </div>
          </DemoCarousel>
          <Descripcion
            parrafo1="Terrazas del Parque es un proyecto residencial innovador ubicado en la Av. Jacobo Majluta, Santo Domingo, República Dominicana. Este desarrollo redefine el estilo de vida de sus residentes al ofrecer lujo y comodidad a precios competitivos. "
            parrafo2="Cuenta con una amplia gama de amenidades, como gimnasio, piscina, salones de eventos, áreas de BBQ, juegos para niños y un Roof Top. Además, refleja la excelencia en diseño y construcción característica del grupo de empresas Constructora RIZEK."
          />
          <Caracteristicas>
            <ul className="lista__details1">
              <li>
                <img src={checkblue} alt="Check" />
                <span>Gimnasio</span>
              </li>
              <li>
                <img src={checkblue} alt="Check" />
                <span>Salones de eventos</span>
              </li>
              <li>
                <img src={checkblue} alt="Check" />
                <span>Área de BBQ</span>
              </li>
              <li>
                <img src={checkblue} alt="Check" />
                <span>Roof Top</span>
              </li>
            </ul>
            <ul className="lista__details1 lista__details2">
              <li>
                <img src={checkblue} alt="Check" />
                <span>Cocina modular con Isleta</span>
              </li>
              <li>
                <img src={checkblue} alt="Check" />
                <span>Áreas de juegos</span>
              </li>
              <li>
                <img src={checkblue} alt="Check" />
                <span>Áreas comunes</span>
              </li>
            </ul>
          </Caracteristicas>

          <TipoDeApartamentoTerrazas1 />
          <Mapa mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8379.612859559702!2d-69.93857238042469!3d18.551530670528464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf894b09c8d97b%3A0xdd75475516b01d25!2sTerrazas%20del%20Parque!5e0!3m2!1ses-419!2sdo!4v1695849011245!5m2!1ses-419!2sdo" />
          <VideoProyectos videoSrc="https://www.youtube.com/embed/HawJb6mGGHQ?si=CEnofJKSu3B3e5pu" />
        </div>
        <div className="colunm-detalles-2">
          <ContactMini />
        </div>
      </div>
      <Footer />
    </>
  );
};
