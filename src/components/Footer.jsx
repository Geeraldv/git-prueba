import React from "react";
import gitlogo from "../assets/img/gitlogo.png";
import gitlogocalidad from "../assets/img/gitlogocalidad.png";
import "../styles/Footer.css";

import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="info-column">
        <ul className="logo">
          <li>
            <HashLink smooth to="/#Header">
              <img src={gitlogocalidad} loading="lazy" alt="Logo" />
            </HashLink>
          </li>
          <li className="inline-item">
            <a href="url_instagram">
              <i
                className="fab fa-instagram"
                style={{ color: "white", fontSize: "24px" }}
              ></i>
            </a>
          </li>
          <li className="inline-item">
            <a href="url_facebook">
              <i
                className="fab fa-facebook"
                style={{ color: "white", fontSize: "24px" }}
              ></i>
            </a>
          </li>
          <li className="inline-item">
            <a href="url_whatsapp">
              <i
                className="fab fa-whatsapp"
                style={{ color: "white", fontSize: "24px" }}
              ></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="info-column">
        <ul>
          <li className="Title-foot">Nuestra web</li>
          <li>
            <HashLink smooth to="/#Nosotros">
              Nosotros
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#Proyectos">
              Proyectos
            </HashLink>
          </li>
          <li>
            <HashLink smooth to="/#Contactos">
              Contáctanos
            </HashLink>
          </li>
        </ul>
      </div>
      <div className="info-column">
        <ul>
          <li className="Title-foot">Proyectos</li>
          <li>
            <Link to="/Terrazol1">Terrazol I</Link>
          </li>
          <li>
            <a href="#punto2">Terrazas Park</a>
          </li>
          <li>
            <Link to="/Terrazasdelparque1">Terrazas Del Parque I</Link>
          </li>
          <li>
            <Link to="/Terrazasdelparque2">Terrazas Del Parque II</Link>
          </li>
        </ul>
      </div>
      <div className="info-column">
        <ul>
          <li className="Title-foot">Dirección</li>
          <li>
            <a href="#punto1">
              Autopista Duarte Km. 16
              <br />
              Los Alcarrizos, Santo Domingo
            </a>
          </li>
        </ul>
      </div>
      <div className="copyright">&copy; 2023 Grupo Inmobiliario Terrazas</div>
    </footer>
  );
};
