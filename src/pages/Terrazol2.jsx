import { useState } from "react";
import { Caracteristicas } from "../Layout/Caracteristicas";
import { ContactMini } from "../components/ContactMini";
import { DemoCarousel } from "../Layout/DemoCarousel";
import { Descripcion } from "../Layout/Descripcion";
import { DetallesUnidad } from "../Layout/DetallesUnidad";
import { Footer } from "../components/Footer";
import { Mapa } from "../Layout/Mapa";
import { NavBar } from "../components/NavBar";
import { VideoProyectos } from "../components/VideoProyectos";
import { SideBar } from "../components/SideBar";
import { ButtonBrochure } from "../Layout/ButtonBrochure";
import checkblue from "../assets/svg/Checkblue.svg";
import tipoA from "../assets/img/RENDERS TERRAZOL 1/Apto (1).webp";
import tipoB from "../assets/img/RENDERS TERRAZOL 1/Apto_Tipo A_1.webp";
import tipoC from "../assets/img/RENDERS TERRAZOL 1/Apto_Tipo A_3.webp";
import tipoD from "../assets/img/RENDERS TERRAZOL 1/Apto_Tipo B (1).webp";
import tipoE from "../assets/img/RENDERS TERRAZOL 1/Apto_Tipo B_1 (1).webp";
import tipoF from "../assets/img/RENDERS TERRAZOL 1/Apto_Tipo B_3.webp";
import terrazolrenderimg from "../assets/img/IMG TERRAZOL 1/Terrazol1renderimg1.webp";
import terrazolrenderimg2 from "../assets/img/IMG TERRAZOL 1/Terrazol1renderimg2.webp";
import terrazolrenderimg3 from "../assets/img/IMG TERRAZOL 1/Terrazol1renderimg3.webp";
import terrazolrenderimg4 from "../assets/img/IMG TERRAZOL 1/Terrazol1renderimg4.webp";
import terrazolrenderimg5 from "../assets/img/IMG TERRAZOL 1/Terrazol1renderimg5.webp";
import urlTerrazol1 from "../assets/pdf/BrochureTerrazol1.pdf";
import useScrollToTop from "../hooks/useScrollToTop";

import "./Terrazol1.css";
import { TipoApartamentoTerrazol2 } from "../components/TipoApartamentoTerrazol2";
export const Terrazol2 = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  useScrollToTop();
  return (
    <>
      <NavBar toggleSidebar={toggleSidebar} />
      <SideBar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <DetallesUnidad
        nombre="TERRAZOL II"
        ubicacion="Ciudad Juan Bosch"
        precio="Desde RD 3,260,000.00"
      />
      <div className="Detalles-proyectos">
        <div className="colunm-detalles-1">
          <DemoCarousel>
            <div>
              <img
                className="img__carousel"
                src={terrazolrenderimg}
                alt="Carousel Terrazol 1"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                src={terrazolrenderimg2}
                alt="Imagen 3"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                src={terrazolrenderimg3}
                alt="Carousel Terrazol 1"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                src={terrazolrenderimg4}
                alt="Carousel Terrazol 1"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                src={terrazolrenderimg5}
                alt="Carousel Terrazol 1"
                loading="lazy"
              />
            </div>

            <div>
              <img
                className="img__carousel"
                src={tipoA}
                alt="Carousel Terrazol 1"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                src={tipoB}
                alt="Carousel Terrazol 1"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                src={tipoC}
                alt="Carousel Terrazol 1"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                src={tipoD}
                alt="Carousel Terrazol 1"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                src={tipoE}
                alt="Carousel Terrazol 1"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                src={tipoF}
                alt="Carousel Terrazol 1"
                loading="lazy"
              />
            </div>
          </DemoCarousel>
          <Descripcion
            parrafo1="El Residencial Terrazol  II es un proyecto habitacional de bajo costo, con control de acceso dentro de Ciudad Juan Bosch, santo Domingo Este, de treinta nueve (39) bloques de edificios de apartamentos, de cuatro (4) apartamentos por planta, con un total de 624 apartamentos. Contando con todas las facilidades y amenidades de Ciudad Juan Bosch, centros educativos, centro de atención primaria, iglesias, supermercados, parques, entre otras cosas."
            parrafo2="El proyecto cuenta con dos (2) tipologías de edificios, designados como Edificios Tipo A y B. Apartamentos de tres (3) habitaciones, sala, comedor, cocina, área de lavado, balcón y un parqueo, uno y dos baños dependiendo de la tipología."
          />
          <Caracteristicas>
            <ul className="lista__details1">
              <li>
                <img src={checkblue} alt="Check" loading="lazy" />
                <span>3 habitaciones</span>
              </li>
              <li>
                <img src={checkblue} alt="Check" loading="lazy" />
                <span>2 baños</span>
              </li>
              <li>
                <img src={checkblue} alt="Check" loading="lazy" />
                <span>1 Parqueo</span>
              </li>
              <li>
                <img src={checkblue} alt="Check" loading="lazy" />
                <span>Balcón</span>
              </li>
              <li>
                <img src={checkblue} alt="Check" loading="lazy" />
                <span>Walking closet</span>
              </li>
            </ul>
            <ul className="lista__details1 lista__details2">
              <li>
                <img src={checkblue} alt="Check" loading="lazy" />
                <span>Control de acceso</span>
              </li>
              <li>
                <img src={checkblue} alt="Check" loading="lazy" />
                <span>Áreas comunes</span>
              </li>
              <li>
                <img src={checkblue} alt="Check" loading="lazy" />
                <span>Cancha Basquetbol</span>
              </li>
            </ul>
          </Caracteristicas>

          <TipoApartamentoTerrazol2 />
          <ButtonBrochure url={urlTerrazol1} />
          <Mapa mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.9682376206442!2d-69.73982769999999!3d18.4977321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf810e8c055537%3A0x314f7479e44eeb4e!2sResidencial%20Terrazol%202!5e1!3m2!1ses-419!2sdo!4v1756871915767!5m2!1ses-419!2sdo" />
          <VideoProyectos videoSrc="https://www.youtube.com/embed/3HTual5sq7Q?si=_nyAS4vVPw5l0KCU" />
        </div>
        <div className="colunm-detalles-2">
          <ContactMini />
        </div>
      </div>
      <Footer />
    </>
  );
};
