import { NavBar } from "../components/NavBar";
import { AcercaDeDetalles } from "../components/AcercaDeDetalles";
import { SideBar } from "../components/SideBar";
import { useState } from "react";
import { Footer } from "../components/Footer";
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
      <AcercaDeDetalles />
      <Footer />
    </>
  );
};
