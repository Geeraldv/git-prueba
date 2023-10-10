import React from "react";
import "../styles/SideBar.css";
import {
  UilEstate,
  UilUser,
  UilWhatsapp,
  UilConstructor,
  UilEnvelopeMinus,
} from "@iconscout/react-unicons";

import { HashLink as Link } from "react-router-hash-link";

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
        <a href="/#" className="closebtn" onClick={closeSidebar}>
          &times;
        </a>

        <Link to="/#" onClick={handleSidebarClose}>
          <UilEstate /> Home
        </Link>

        <Link smooth to="/#Nosotros" onClick={handleSidebarClose}>
          <UilUser /> Nosotros
        </Link>

        <Link
          to="https://api.whatsapp.com/send?phone=8293823940"
          onClick={handleSidebarClose}
        >
          <UilWhatsapp /> WhatsApp
        </Link>

        <Link smooth to="/#Proyectos" onClick={handleSidebarClose}>
          <UilConstructor /> Proyectos
        </Link>

        <Link smooth to="/#Contactos" onClick={handleSidebarClose}>
          <UilEnvelopeMinus /> Contactos
        </Link>
      </div>
    </>
  );
};
