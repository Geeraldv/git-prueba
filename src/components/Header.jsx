import { useState } from "react";
import gitlogo from "../assets/img/gitlogo.png";
import whatsapplogo from "../assets/img/whatsapplogo.png";
import menu from "../assets/img/menu.png";
import imgcard1 from "../assets/img/IMG TERRAZOL 1/Terrazol1renderimg3.jpg";
import imgcard2 from "../assets/img/img-card2.png";
import imgcard3 from "../assets/img/img-card3.png";
import imgterrazasdelparque2 from "../assets/img/terrazasdelparque2/7.png";
import imgTerrazasPark from "../assets/img/imgTerrazasPark.jpeg";
import { Link } from "react-router-dom";

import "../styles/Header.css";

export const Header = ({ toggleSidebar }) => {
  return (
    <div className="container__header1">
      <div className="container-header2">
        <nav className="nav__header">
          <div className="header">
            <Link to="/">
              <img src={gitlogo} />
            </Link>

            <div className="header-right">
              <a href="#Proyectos">Proyectos</a>
              <a
                className="logo-ws"
                href="https://api.whatsapp.com/send?phone=8293823940"
                target="_blank"
              >
                <img src={whatsapplogo} /> WhatsApp
              </a>
              <a className="contact" href="#Contactos">
                Contáctanos
              </a>

              <a href="#menu">
                <img src={menu} onClick={toggleSidebar} />
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
              <img src={imgcard1} />
            </Link>
            <h3 className="animate-text">Residencial Terrazol 1</h3>
            <p>Proyecto RESIDENCIAL</p>
          </div>

          <div className="carta1">
            <Link to="/">
              <img src={imgTerrazasPark} />
            </Link>

            <h3 className="animate-text">Terrazas Park</h3>
            <p>Proyecto COMERCIAL</p>
          </div>

          <div className="carta1">
            <Link to="./Terrazasdelparque2">
              <img src={imgterrazasdelparque2} />
            </Link>
            <h3 className="animate-text">Terrazas del Parque 2</h3>
            <p>Proyecto RESIDENCIAL</p>
          </div>
        </div>
      </div>
    </div>
  );
};
