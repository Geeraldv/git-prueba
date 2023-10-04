import React from "react";
import gitlogoblack from "../assets/img/gitLogoBlackk.png";
import whatsapplogoblack from "../assets/img/whatsapplogoblack.png";
import menublack from "../assets/svg/MenuNegro.svg";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = ({ toggleSidebar }) => {
  return (
    <nav className="nav-header">
      <div className="nav-container">
        <Link to="/" className="logonavbar">
          <img src={gitlogoblack} loading="lazy" alt="Git Logo" />
        </Link>

        <div className="header-right-nav">
          <Link to="/" className="proyect">
            Proyectos
          </Link>
          <a
            className="logo-ws"
            href="https://api.whatsapp.com/send?phone=8293823940"
            target="_blank"
          >
            <img src={whatsapplogoblack} alt="WhatsApp Logo" loading="lazy" />
            WhatsApp
          </a>
          <Link to="/" className="contact">
            Contáctanos
          </Link>
          <a href="#menu">
            <img
              src={menublack}
              loading="lazy"
              onClick={toggleSidebar}
              alt="Menu Icon"
            />
          </a>
        </div>
      </div>
    </nav>
  );
};
