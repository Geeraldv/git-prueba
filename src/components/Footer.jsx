import React from "react";
import gitlogo from "../assets/img/gitlogo.png";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <div className="info-column">
        <ul className="logo">
          <li>
            <a href="tu_enlace.html">
              <img src={gitlogo} alt="Logo" />
            </a>
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
            <a href="#punto1">Nosotros</a>
          </li>
          <li>
            <a href="#punto2">Proyectos</a>
          </li>
          <li>
            <a href="#punto3">Estás en buenas manos</a>
          </li>
          <li>
            <a href="#punto4">Testimonios</a>
          </li>
          <li>
            <a href="#punto5">Contactanos</a>
          </li>
        </ul>
      </div>
      <div className="info-column">
        <ul>
          <li className="Title-foot">Proyectos</li>
          <li>
            <a href="#punto1">Terrazol I</a>
          </li>
          <li>
            <a href="#punto2">Terrazas Park</a>
          </li>
          <li>
            <a href="#punto3">Terrazas del parque 1</a>
          </li>
          <li>
            <a href="#punto4">Terrazas del parque 2</a>
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
