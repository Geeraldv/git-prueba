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

import urlTerrazaDelParque1 from "../assets/pdf/brochureTerrazaDelParque1.pdf";
import useScrollToTop from "../hooks/useScrollToTop";

import parqueverde1 from "../assets/img/parqueverde/parque-verde01.webp";
import parqueverde2 from "../assets/img/parqueverde/parque-verde02.webp";
import parqueverde3 from "../assets/img/parqueverde/parque-verde03.webp";

export const ParqueVerde = () => {
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
        nombre="PARQUE VERDE"
        ubicacion="ave. Monumental, Distrito Nacional"
        precio=""
      />
      <div className="Detalles-proyectos">
        <div className="colunm-detalles-1">
          <DemoCarousel>
            <div>
              <img
                className="img__carousel"
                loading="lazy"
                src={parqueverde1}
                alt="Carousel Terrazas del parque 1"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                loading="lazy"
                src={parqueverde2}
                alt="Carousel Terrazas del parque 1"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                loading="lazy"
                src={parqueverde3}
                alt="Carousel Terrazas del parque 1"
              />
            </div>
          </DemoCarousel>
          <Descripcion
            parrafo1="Residencial Parque Verde, es proyecto habitacional ubicado en la ave. Monumental, Distrito Nacional, Santo Domingo."
            parrafo2="Es un conjunto de doce (12) bloques de edificios para un total de 126 unidades de apartamentos. 
Tres (3) bloques son tipo A de cinco (5) Niveles, de 2 y 4 apartamentos por planta para un total de 18 apartamentos por Edificio, con un área promedio de 104 m2.
Nueve (9) bloques son Tipo B, de 4 Niveles y 2 apartamentos por planta para un total de 8 apartamentos por Edificio, con un área promedio de 90 m2.
"
          />
          <Caracteristicas>
            <ul className="lista__details1">
              <li>
                <img src={checkblue} alt="Check" loading="lazy" />
                <span>Gimnasio</span>
              </li>
              <li>
                <img src={checkblue} alt="Check" loading="lazy" />
                <span>Salones de eventos</span>
              </li>
              <li>
                <img src={checkblue} alt="Check" loading="lazy" />
                <span>Área de BBQ</span>
              </li>
              <li>
                <img src={checkblue} alt="Check" loading="lazy" />
                <span>Roof Top</span>
              </li>
            </ul>
            <ul className="lista__details1 lista__details2">
              <li>
                <img src={checkblue} alt="Check" loading="lazy" />
                <span>Cocina modular con Isleta</span>
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

          {/* <TipoDeApartamentoTerrazas1 /> */}
          <ButtonBrochure url={urlTerrazaDelParque1} />
          <Mapa mapSrc="https://www.google.com/maps/embed?pb=!3m2!1ses-419!2sdo!4v1757141912897!5m2!1ses-419!2sdo!6m8!1m7!1sO68m76eaoj0740PKJMweQQ!2m2!1d18.501381618956!2d-69.98947218915836!3f118.80154035355716!4f-12.216960713247232!5f0.7820865974627469" />
          <VideoProyectos videoSrc="https://www.youtube.com/embed/HawJb6mu3B3e5pu" />
        </div>
        <div className="colunm-detalles-2">
          <ContactMini />
        </div>
      </div>
      <Footer />
    </>
  );
};
