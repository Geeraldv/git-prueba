import React from "react";
import gitlogoblack from "../assets/img/gitlogoblack.png";
import whatsapplogoblack from "../assets/img/whatsapplogoblack.png";
import menublack from "../assets/img/menublack.png";
import "../styles/NavBar.css";

export const NavBar = () => {
  return (
    <nav className="nav-header">
      <div className="nav-container">
        <a href="#">
          <img src={gitlogoblack} alt="Git Logo" />
        </a>
        <div className="header-right-nav">
          <a href="#home">Projects</a>
          <a className="logo-ws" href="#ws">
            <img src={whatsapplogoblack} alt="WhatsApp Logo" /> WhatsApp
          </a>
          <a className="contact" href="#more">
            Contact Us
          </a>
          <a href="#menu">
            <img src={menublack} alt="Menu Icon" />
          </a>
        </div>
      </div>
    </nav>
  );
};
