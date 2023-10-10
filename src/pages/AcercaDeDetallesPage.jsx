import { NavBar } from "../components/NavBar";
import { AcercaDeDetalles } from "../components/AcercaDeDetalles";
import { SideBar } from "../components/SideBar";
import { useState } from "react";
import { Footer } from "../components/Footer";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import useScrollToTop from "../hooks/useScrollToTop";

export const AcercaDeDetallesPage = () => {
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
      <NavBar toggleSidebar={toggleSidebar} />
      <SideBar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
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
      <AcercaDeDetalles />
      <Footer />
    </>
  );
};
