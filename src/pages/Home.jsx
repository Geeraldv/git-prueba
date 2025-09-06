import { useState } from "react";
import { Header } from "../components/Header";
import { AcercaDe } from "../components/AcercaDe";

import { Testimonios } from "../components/Testimonios";
import { Contacto } from "../components/Contacto";
import { SideBar } from "../components/SideBar";
import { Proyectos } from "../components/Proyectos";
import { Footer } from "../components/Footer";
import useScrollToTop from "../hooks/useScrollToTop";

import { FloatingWhatsApp } from "react-floating-whatsapp";
import "./Home.css";
import { ProyectosNuevos } from "../components/ProyectosNuevos";

export const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useScrollToTop();
  return (
    <>
      <FloatingWhatsApp
        accountName="Grupo Inmobiliario Terrazas"
        phoneNumber="+8292927138"
        avatar="https://i.ibb.co/m0d45yN/profile.jpg"
        darkMode={false}
        statusMessage="Normalmente responde en 1 hora"
        chatMessage="Hola, ¿Estas interesado en algun proyecto?"
        placeholder="Escribe un mensaje..."
        allowClickAway={true}
        allowEsc={true}
        notification={true}
        notificationDelay={1}
      />
      <Header toggleSidebar={toggleSidebar} />
      <SideBar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <AcercaDe />
      {/* <Proyectos /> */}
      <ProyectosNuevos />
      <Testimonios />
      <Contacto />
      <Footer />
    </>
  );
};
