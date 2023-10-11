import gitlogocalidad from "../assets/img/gitlogocalidad.webp";
import whatsapplogo from "../assets/img/whatsapplogo.webp";
import imgcard1 from "../assets/img/IMG TERRAZOL 1/Terrazol1renderimg3.webp";
import imgterrazasdelparque2 from "../assets/img/terrazasdelparque2/7.webp";
import imgTerrazasPark from "../assets/img/imgTerrazasPark.webp";
import { UilAlignJustify } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "../styles/Header.css";

export const Header = ({ toggleSidebar }) => {
  return (
    <div id="Header" className="container__header1">
      <div className="container-header2">
        <nav className="nav__header">
          <div className="header">
            <Link to="/" className="git-logo">
              <img
                src={gitlogocalidad}
                alt="GIT logo empresa inmobiliaria"
                className="git-logo-header"
              />
            </Link>

            <div className="header-right">
              <HashLink smooth to="/#Proyectos">
                Proyectos
              </HashLink>
              <a
                className="logo-ws"
                href="https://api.whatsapp.com/send?phone=8292927138"
                target="_blank"
              >
                <img src={whatsapplogo} alt="Logo de WhatsApp" /> WhatsApp
              </a>
              <HashLink smooth to="/#Contactos" className="contact">
                Contáctanos
              </HashLink>

              <a>
                <UilAlignJustify
                  height="33px"
                  width="33"
                  onClick={toggleSidebar}
                />
              </a>
            </div>
          </div>
        </nav>

        <div className="title__header">
          <h1 className="animate-text">Excelentes inmuebles comerciales</h1>
        </div>

        <div className="container__cartas">
          <div className="carta1">
            <Link to="./Terrazol1">
              <img
                src={imgcard1}
                alt="Imagen del proyecto Residencial Terrazol 1"
              />
            </Link>
            <h3 className="animate-text">Residencial Terrazol 1</h3>
            <p>Proyecto RESIDENCIAL</p>
          </div>

          <div className="carta1">
            <Link to="/">
              <img
                src={imgTerrazasPark}
                alt="Imagen del proyecto Terrazas Park"
              />
            </Link>

            <h3 className="animate-text">Terrazas Park</h3>
            <p>Proyecto COMERCIAL</p>
          </div>

          <div className="carta1">
            <Link to="./Terrazasdelparque2">
              <img
                src={imgterrazasdelparque2}
                alt="Imagen del proyecto Terrazas del Parque 2"
              />
            </Link>
            <h3 className="animate-text">Terrazas del Parque 2</h3>
            <p>Proyecto RESIDENCIAL</p>
          </div>
        </div>
      </div>
    </div>
  );
};
