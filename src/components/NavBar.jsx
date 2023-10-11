import React from "react";
import gitlogoblack from "../assets/img/gitLogoBlackk.webp";
import whatsapplogoblack from "../assets/img/whatsapplogoblack.webp";
import menublack from "../assets/svg/MenuNegro.svg";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { UilAlignJustify } from "@iconscout/react-unicons";
import { HashLink } from "react-router-hash-link";

export const NavBar = ({ toggleSidebar }) => {
  return (
    <nav className="nav-header">
      <div className="nav-container">
        <Link to="/" className="logonavbar">
          <img src={gitlogoblack} loading="lazy" alt="Git Logo" />
        </Link>

        <div className="header-right-nav">
          <HashLink smooth to="/#Proyectos" className="proyect">
            Proyectos
          </HashLink>
          <a
            className="logo-ws"
            href="https://api.whatsapp.com/send?phone=8292927138"
            target="_blank"
          >
            <img src={whatsapplogoblack} alt="WhatsApp Logo" loading="lazy" />
            WhatsApp
          </a>
          <HashLink smooth to="/#Contactos" className="contact">
            Contáctanos
          </HashLink>
          <a href="#menu">
            <UilAlignJustify
              height="33px"
              width="33px"
              onClick={toggleSidebar}
            />
          </a>
        </div>
      </div>
    </nav>
  );
};
