import React, { useState } from "react";
import { Caracteristicas } from "../Layout/Caracteristicas";
import { ContactMini } from "../components/ContactMini";
import { DemoCarousel } from "../Layout/DemoCarousel";
import { Descripcion } from "../Layout/Descripcion";
import { DetallesUnidad } from "../Layout/DetallesUnidad";
import { Footer } from "../components/Footer";
import { Mapa } from "../Layout/Mapa";
import { NavBar } from "../components/NavBar";
import { TipoApartamento } from "../components/TipoApartamento";
import { VideoProyectos } from "../components/VideoProyectos";
import { SideBar } from "../components/SideBar";
import checkblue from "../assets/svg/Checkblue.svg";
import tipoA from "../assets/img/Apto (1).jpg";
import tipoB from "../assets/img/Apto_Tipo A_1.jpg";
import tipoC from "../assets/img/Apto_Tipo A_3.jpg";
import tipoD from "../assets/img/Apto_Tipo B (1).jpg";
import tipoE from "../assets/img/Apto_Tipo B_1 (1).jpg";
import tipoF from "../assets/img/Apto_Tipo B_3.jpg";
import terrazolrenderimg from "../assets/img/IMG TERRAZOL 1/Terrazol1renderimg1.jpg";
import terrazolrenderimg2 from "../assets/img/IMG TERRAZOL 1/Terrazol1renderimg2.jpg";
import terrazolrenderimg3 from "../assets/img/IMG TERRAZOL 1/Terrazol1renderimg3.jpg";
import terrazolrenderimg4 from "../assets/img/IMG TERRAZOL 1/Terrazol1renderimg4.jpg";
import terrazolrenderimg5 from "../assets/img/IMG TERRAZOL 1/Terrazol1renderimg5.jpg";

import "./Terrazol1.css";
export const Terrazol1 = () => {
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
        nombre="TERRAZOL I"
        ubicacion="Ciudad Juan Bosch"
        precio="Desde RD 3,200,000.00"
      />
      <div className="Detalles-proyectos">
        <div className="colunm-detalles-1">
          <DemoCarousel>
            <div>
              <img
                className="img__carousel"
                src={terrazolrenderimg}
                alt="Imagen 3"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                src={terrazolrenderimg2}
                alt="Imagen 3"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                src={terrazolrenderimg3}
                alt="Imagen 3"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                src={terrazolrenderimg4}
                alt="Imagen 3"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                src={terrazolrenderimg5}
                alt="Imagen 3"
              />
            </div>

            <div>
              <img className="img__carousel" src={tipoA} alt="Imagen 1" />
            </div>
            <div>
              <img className="img__carousel" src={tipoB} alt="Imagen 2" />
            </div>
            <div>
              <img className="img__carousel" src={tipoC} alt="Imagen 3" />
            </div>
            <div>
              <img className="img__carousel" src={tipoD} alt="Imagen 1" />
            </div>
            <div>
              <img className="img__carousel" src={tipoE} alt="Imagen 2" />
            </div>
            <div>
              <img className="img__carousel" src={tipoF} alt="Imagen 3" />
            </div>
          </DemoCarousel>
          <Descripcion
            parrafo1="El Residencial Terrazol 1 es un proyecto habitacional de bajo costo con control de acceso dentro de Ciudad Juan Bosch, santo Domingo Este, de trece (13) bloques de edificios de apartamentos, de cuatro (4) apartamentos por planta, con un total de 208 apartamentos. Contando con todas las facilidades y amenidades de Ciudad Juan Bosch, centros educativos, centro de atención primaria, iglesias, supermercados, parques, entre otras cosas. "
            parrafo2="El proyecto cuenta con tres (3) tipologías de edificios, designados como Edificios Tipo A, B y C.  Apartamentos de tres habitaciones, sala, comedor, cocina, área de lavado, balcón y un parqueo, uno y dos baños dependiendo de la tipologia."
          />
          <Caracteristicas>
            <ul className="lista__details1">
              <li>
                <img src={checkblue} alt="Check" />
                <span>3 habitaciones</span>
              </li>
              <li>
                <img src={checkblue} alt="Check" />
                <span>2 baños</span>
              </li>
              <li>
                <img src={checkblue} alt="Check" />
                <span>1 Parqueo</span>
              </li>
              <li>
                <img src={checkblue} alt="Check" />
                <span>Balcón</span>
              </li>
              <li>
                <img src={checkblue} alt="Check" />
                <span>Walking closet</span>
              </li>
            </ul>
            <ul className="lista__details1 lista__details2">
              <li>
                <img src={checkblue} alt="Check" />
                <span>Control de acceso</span>
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

          <TipoApartamento />
          <Mapa mapSrc="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3783.6027679977974!2d-69.7448709156059!3d18.501643924874106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDMwJzA1LjkiTiA2OcKwNDQnMjQuMCJX!5e0!3m2!1ses-419!2sdo!4v1695761014656!5m2!1ses-419!2sdo" />
          <VideoProyectos videoSrc="https://www.youtube.com/embed/Cr4WoG3J-sg?si=hXGxZZRFfSvhdddE" />
        </div>
        <div className="colunm-detalles-2">
          <ContactMini />
        </div>
      </div>
      <Footer />
    </>
  );
};
