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
import { TipoDeApartamentoTerrazas2 } from "../components/TipoDeApartamentoTerrazas2";
import { SideBar } from "../components/SideBar";
import { ButtonBrochure } from "../Layout/ButtonBrochure";
import checkblue from "../assets/svg/Checkblue.svg";
import img2terrazadelparque2 from "../assets/img/terrazasdelparque2/2.webp";
import img3terrazadelparque2 from "../assets/img/terrazasdelparque2/3.webp";
import img4terrazadelparque2 from "../assets/img/terrazasdelparque2/4.webp";
import img5terrazadelparque2 from "../assets/img/terrazasdelparque2/5.webp";
import img6terrazadelparque2 from "../assets/img/terrazasdelparque2/6.webp";
import img7terrazadelparque2 from "../assets/img/terrazasdelparque2/7.webp";
import img8terrazadelparque2 from "../assets/img/terrazasdelparque2/8.webp";
import img9terrazadelparque2 from "../assets/img/terrazasdelparque2/9.webp";
import img10terrazadelparque2 from "../assets/img/terrazasdelparque2/10.webp";
import img11terrazadelparque2 from "../assets/img/terrazasdelparque2/11.webp";
import img12terrazadelparque2 from "../assets/img/terrazasdelparque2/12.webp";
import img13terrazadelparque2 from "../assets/img/terrazasdelparque2/13.webp";
import img14terrazadelparque2 from "../assets/img/terrazasdelparque2/Apto (1).webp";
import urlTerrazaDelParque2 from "../assets/pdf/brochureTerrazasDelParque2.pdf";
import useScrollToTop from "../hooks/useScrollToTop";

export const Terrazasdelparque2 = () => {
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
        nombre="TERRAZAS DEL PARQUE 2"
        ubicacion="Santo Domingo Norte, Ciudad Modelo"
        precio="Desde US$178,000.00"
      />
      <div className="Detalles-proyectos">
        <div className="colunm-detalles-1">
          <DemoCarousel>
            <div>
              <img
                className="img__carousel"
                src={img13terrazadelparque2}
                alt="Carousel Terrazas del parque 2"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                src={img3terrazadelparque2}
                alt="Carousel Terrazas del parque 2"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                src={img4terrazadelparque2}
                alt="Carousel Terrazas del parque 2"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                src={img5terrazadelparque2}
                alt="Carousel Terrazas del parque 2"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                src={img6terrazadelparque2}
                alt="Carousel Terrazas del parque 2"
                loading="lazy"
              />
            </div>

            <div>
              <img
                className="img__carousel"
                src={img7terrazadelparque2}
                alt="Carousel Terrazas del parque 2"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                src={img8terrazadelparque2}
                alt="Carousel Terrazas del parque 2"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                src={img9terrazadelparque2}
                alt="Carousel Terrazas del parque 2"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                src={img10terrazadelparque2}
                alt="Carousel Terrazas del parque 2"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                src={img11terrazadelparque2}
                alt="Carousel Terrazas del parque 2"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                src={img12terrazadelparque2}
                alt="Carousel Terrazas del parque 2"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                src={img2terrazadelparque2}
                alt="Carousel Terrazas del parque 2"
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="img__carousel"
                src={img14terrazadelparque2}
                alt="Carousel Terrazas del parque 2"
                loading="lazy"
              />
            </div>
          </DemoCarousel>
          <Descripcion
            parrafo1="Ubicado en Urbanización Ciudad Modelo, con seguridad y extensas áreas verdes dentro de la urbanización. Terrazas del Parque II es una torre de 11 niveles de apartamentos de 6 a 4 apts por nivel, desde 147 a 166 metros cuadrados, con terminaciones de primera. Este espacio está pensado para tu comodidad y la de los tuyos."
            parrafo2="El proyecto cuenta con espacio de coworking para trabajar convenientemente desde tu casa sin invadir el espacio familiar, área social con piscina y área de juegos para niños."
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

          <TipoDeApartamentoTerrazas2 />
          <ButtonBrochure url={urlTerrazaDelParque2} />
          <Mapa mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8379.612859559702!2d-69.93857238042469!3d18.551530670528464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf894b09c8d97b%3A0xdd75475516b01d25!2sTerrazas%20del%20Parque!5e0!3m2!1ses-419!2sdo!4v1695849011245!5m2!1ses-419!2sdo" />
          <VideoProyectos videoSrc="https://www.youtube.com/embed/NxoUmFqaA3o?si=odKuEMwaCjCxQP-C" />
        </div>
        <div className="colunm-detalles-2">
          <ContactMini />
        </div>
      </div>
      <Footer />
    </>
  );
};
