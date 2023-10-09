import React from "react";
import "../styles/SideBar.css";
import {
  FaHome,
  FaUser,
  FaWhatsapp,
  FaProjectDiagram,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  UilEstate,
  UilUser,
  UilWhatsapp,
  UilConstructor,
  UilEnvelopeMinus,
} from "@iconscout/react-unicons";

export const SideBar = ({ isOpen, toggleSidebar, closeSidebar }) => {
  const sidebarClassName = `sidenav ${isOpen ? "open" : ""}`;
  const overlayClassName = `overlay ${isOpen ? "open" : ""}`;

  // Función para cerrar el sidebar y cambiar el estado a false
  const handleSidebarClose = () => {
    closeSidebar();
  };

  return (
    <>
      {isOpen && (
        <div className={overlayClassName} onClick={closeSidebar}></div>
      )}

      <div id="mySidenav" className={sidebarClassName}>
        <a href="#" className="closebtn" onClick={closeSidebar}>
          &times;
        </a>

        <a href="#" onClick={handleSidebarClose}>
          <UilEstate /> Home
        </a>
        {/* Modificar los enlaces para cerrar el sidebar al hacer clic */}
        <Link to="./#Proyectos" onClick={handleSidebarClose}>
          <UilUser /> Nosotros
        </Link>
        <a href="#" onClick={handleSidebarClose}>
          <UilWhatsapp /> Whatsapp
        </a>
        <a href="#Proyectos" onClick={handleSidebarClose}>
          <UilConstructor /> Proyectos
        </a>
        <a href="#Contactos" onClick={handleSidebarClose}>
          <UilEnvelopeMinus /> Contactos
        </a>
      </div>
    </>
  );
};
