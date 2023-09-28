import React from "react";
import "../styles/SideBar.css";

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
          Home
        </a>
        {/* Modificar los enlaces para cerrar el sidebar al hacer clic */}
        <a href="#AcercaDe" onClick={handleSidebarClose}>
          Acerca De
        </a>
        <a href="#" onClick={handleSidebarClose}>
          Whatsapp
        </a>
        <a href="#Proyectos" onClick={handleSidebarClose}>
          Proyectos
        </a>
        <a href="#Contactos" onClick={handleSidebarClose}>
          Contactos
        </a>
      </div>
    </>
  );
};
