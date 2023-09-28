import React from "react";
import gitlogo from "../assets/img/gitlogo.png";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  const iconStyle = { color: "white" }; // Objeto JavaScript para el estilo

  return (
    <footer>
      <div className="info-column">
        <ul className="logo">
          <Link to="/">
            <img src={gitlogo} alt="Git Logo" />
          </Link>
          <li className="inline-item">
            <i className="fab fa-instagram" style={{ color: "white" }}></i>
          </li>
          <li className="inline-item">
            <i className="fab fa-facebook" style={{ color: "white" }}></i>
          </li>
          <li className="inline-item">
            <i className="fab fa-whatsapp" style={{ color: "white" }}></i>
          </li>
        </ul>
      </div>
      <div className="info-column">
        <ul>
          <li className="Title-foot">Nuestra web</li>
          <li>
            <a href="#punto1">Acerca de</a>
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
            <a href="#punto2">Terrazol II</a>
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
          <li>Autopista Duarte Km. 16 Los Alcarrizos, Santo Domingo</li>
        </ul>
      </div>

      <div className="copyright">&copy; 2023 Grupo inmobiliario terrazas</div>
    </footer>
  );
};
