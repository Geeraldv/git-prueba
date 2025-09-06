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
import ciudaddelpradoimg1 from "../assets/img/ciudaddelprado/CDP-PLANTACONJUNTO.webp";
import urlTerrazol1 from "../assets/pdf/BrochureTerrazol1.pdf";
import useScrollToTop from "../hooks/useScrollToTop";

import "./Terrazol1.css";
import { TipoDeApartamentoCiudadDelPrado } from "../components/TipoDeApartamentoCiudadDelPrado";
export const CiudadDelPrado = () => {
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
        nombre="CIUDAD DEL PRADO"
        ubicacion="Carretera Mella, San Isidro"
        precio=""
      />
      <div className="Detalles-proyectos">
        <div className="colunm-detalles-1">
          <DemoCarousel>
            <div>
              <img
                className="img__carousel"
                src={ciudaddelpradoimg1}
                alt="Carousel Terrazol 1"
                loading="lazy"
              />
            </div>
          </DemoCarousel>
          <Descripcion
            parrafo1="Ciudad del Prado es un proyecto habitacional de bajo costo, ubicado en la Carretera Mella, San Isidro (frente el Cementerio Cristo Salvador), santo Domingo Este. Para un Primera Etapa de construcción de veintidós (22) bloques de edificios de apartamentos, de cuatro (4) apartamentos por planta, con un total de 352 apartamentos. Contara acceso principal y secundario controlado, para residentes y visitantes, amplias vías vehiculares, paseos peatonales, dos (2) parques centrales conectados a través de un circuito peatonal, áreas institucionales destinadas a brindar servicios a la comunidad. Tendrá todos los servicios de agua potable, sistema de manejo de Aguas residuales, Eléctrico y disposición de residuos sólidos."
            parrafo2="El proyecto cuenta con dos (2) tipologías de edificios, designados como Edificios Tipo A y B. Apartamentos de tres (3) habitaciones, sala, comedor, cocina, área de lavado, balcón y un parqueo, disponibilidad para uno o dos baño dependiendo de la tipología."
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
                <span>Áreas de juegos</span>
              </li>
            </ul>
          </Caracteristicas>

          <TipoDeApartamentoCiudadDelPrado />
          <ButtonBrochure url={urlTerrazol1} />
          <Mapa mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.3041650205123!2d-69.7859462!3d18.5308709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf87002d90e4ed%3A0x3233d8648eabb777!2sciudad%20del%20prado!5e1!3m2!1ses-419!2sdo!4v1756875219044!5m2!1ses-419!2sdo" />
          <VideoProyectos videoSrc="https://www.youtube.com/embed/3HTual5sq" />
        </div>
        <div className="colunm-detalles-2">
          <ContactMini />
        </div>
      </div>
      <Footer />
    </>
  );
};
