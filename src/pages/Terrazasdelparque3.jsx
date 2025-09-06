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
import img13terrazadelparque3 from "../assets/img/terrazasdelparque3/TDP-PLANTACONJUNTO.webp";
import urlTerrazaDelParque2 from "../assets/pdf/brochureTerrazasDelParque2.pdf";
import useScrollToTop from "../hooks/useScrollToTop";
import { TipoDeApartamentoTerrazas3 } from "../components/TipoDeApartamentoTerrazas3";

export const Terrazasdelparque3 = () => {
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
        nombre="TERRAZAS DEL PARQUE 3"
        ubicacion="Santo Domingo Norte, Ciudad Modelo"
        precio="Desde US$178,000.00"
      />
      <div className="Detalles-proyectos">
        <div className="colunm-detalles-1">
          <DemoCarousel>
            <div>
              <img
                className="img__carousel"
                src={img13terrazadelparque3}
                alt="Carousel Terrazas del parque 2"
                loading="lazy"
              />
            </div>
          </DemoCarousel>
          <Descripcion
            parrafo1="Ubicado en Urbanización Ciudad Modelo, con seguridad y extensas áreas verdes dentro de la urbanización. Terrazas del Parque III son tres (3) torres de 10 niveles de cuatro (4) apartamentos por nivel, desde 112 a 174 metros cuadrados, con terminaciones de primera. Espacio pensado para tu comodidad y la de los tuyos."
            parrafo2="El proyecto cuenta con espacio de coworking para trabajar convenientemente desde tu casa sin invadir el espacio familiar, área social con piscina, cancha mixta, área para BBQ  y de juegos para niños."
          />
          <Caracteristicas>
            <ul className="lista__details1">
              <li>
                <img src={checkblue} alt="Check" loading="lazy" />
                <span>Espacio para coworking</span>
              </li>
              <li>
                <img src={checkblue} alt="Check" loading="lazy" />
                <span>Area de juegos para niños</span>
              </li>
              <li>
                <img src={checkblue} alt="Check" loading="lazy" />
                <span>Gimnasio</span>
              </li>
              <li>
                <img src={checkblue} alt="Check" loading="lazy" />
                <span>Piscina</span>
              </li>
              <li>
                <img src={checkblue} alt="Check" loading="lazy" />
                <span>Cocinas modulares hidrófugas</span>
              </li>
            </ul>
            <ul className="lista__details1 lista__details2">
              <li>
                <img src={checkblue} alt="Check" loading="lazy" />
                <span>
                  Equipados con estufa y horno empotrados, extractor de grasa.
                </span>
              </li>
              <li>
                <img src={checkblue} alt="Check" loading="lazy" />
                <span>Puertas enchapadas en roble. </span>
              </li>
              <li>
                <img src={checkblue} alt="Check" loading="lazy" />
                <span>Pisos en porcelanato</span>
              </li>
            </ul>
          </Caracteristicas>

          <TipoDeApartamentoTerrazas3 />
          <ButtonBrochure url={urlTerrazaDelParque2} />
          <Mapa mapSrc="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d2357.5907368309777!2d-69.9356959!3d18.5524044!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDMzJzEyLjUiTiA2OcKwNTYnMDUuOCJX!5e1!3m2!1ses-419!2sdo!4v1756873700447!5m2!1ses-419!2sdo" />
          <VideoProyectos videoSrc="https://www.youtube.com/embed/NxoUmo?" />
        </div>
        <div className="colunm-detalles-2">
          <ContactMini />
        </div>
      </div>
      <Footer />
    </>
  );
};
