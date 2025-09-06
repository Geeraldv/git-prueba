import { useState } from "react";
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

import terrazol1img1 from "../assets/img/terrazol-1-img/A006_05212050_S001.webp";
import terrazol1img2 from "../assets/img/terrazol-1-img/A006_05212051_S004.webp";
import terrazol1img3 from "../assets/img/terrazol-1-img/A006_05212051_S008.webp";
import terrazol1img4 from "../assets/img/terrazol-1-img/A006_05212053_S012.webp";
import terrazol1img5 from "../assets/img/terrazol-1-img/A006_05212054_S015.webp";
import terrazol1img6 from "../assets/img/terrazol-1-img/Cocina-2.webp";
import terrazol1img7 from "../assets/img/terrazol-1-img/Cocina-3.webp";
import terrazol1img8 from "../assets/img/terrazol-1-img/Hp2.webp";
import terrazol1img9 from "../assets/img/terrazol-1-img/Sala-Comedor.webp";
import terrazol1img10 from "../assets/img/terrazol-1-img/Sala.webp";

import "./Terrazol1.css";
export const Terrazol1 = () => {
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
        nombre="TERRAZOL I"
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
                src={terrazol1img1}
                alt="Imagen 3"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                src={terrazol1img2}
                alt="Carousel Terrazol 1"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                src={terrazol1img3}
                alt="Carousel Terrazol 1"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                src={terrazol1img4}
                alt="Carousel Terrazol 1"
                loading="lazy"
              />
            </div>

            <div>
              <img
                className="img__carousel"
                src={terrazol1img5}
                alt="Carousel Terrazol 1"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                src={terrazol1img6}
                alt="Carousel Terrazol 1"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                src={terrazol1img7}
                alt="Carousel Terrazol 1"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                src={terrazol1img8}
                alt="Carousel Terrazol 1"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                src={terrazol1img9}
                alt="Carousel Terrazol 1"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                src={terrazol1img10}
                alt="Carousel Terrazol 1"
                loading="lazy"
              />
            </div>
          </DemoCarousel>
          <Descripcion
            parrafo1="El Residencial Terrazol 1 es un proyecto habitacional de bajo costo con control de acceso dentro de Ciudad Juan Bosch, santo Domingo Este, de trece (13) bloques de edificios de apartamentos, de cuatro (4) apartamentos por planta, con un total de 208 apartamentos. Contando con todas las facilidades y amenidades de Ciudad Juan Bosch, centros educativos, centro de atención primaria, iglesias, supermercados, parques, entre otras cosas. "
            parrafo2="El proyecto cuenta con tres (3) tipologías de edificios, designados como Edificios Tipo A, B y C.  Apartamentos de tres habitaciones, sala, comedor, cocina, área de lavado, balcón y un parqueo, uno y dos baños dependiendo de la tipologia."
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
                <span>Áreas de juegos</span>
              </li>
              <li>
                <img src={checkblue} alt="Check" loading="lazy" />
                <span>Áreas comunes</span>
              </li>
            </ul>
          </Caracteristicas>

          <TipoApartamento />
          <ButtonBrochure url={urlTerrazol1} />
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
