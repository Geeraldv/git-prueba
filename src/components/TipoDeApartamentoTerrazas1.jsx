import React, { useState } from "react";
import TipoApartamentoImgA from "../assets/img/Terrazadelparque1TipoA.webp";
import TipoApartamentoImgB from "../assets/img/Terrazadelparque1TipoB.webp";
import TipoApartamentoImgC from "../assets/img/Terrazadelparque1TipoC.webp";
import TipoApartamentoImgD from "../assets/img/Terrazadelparque1TipoD.webp";
import TipoApartamentoImgPH from "../assets/img/Terrazadelparque1TipoPHD.webp";

import "../styles/TipoApartamento.css"; // Asegúrate de que la ruta del archivo CSS sea correcta

export const TipoDeApartamentoTerrazas1 = () => {
  const [tipo, setTipo] = useState("A");

  const handleTipoChange = (nuevoTipo) => {
    setTipo(nuevoTipo);
  };

  const obtenerImagen = () => {
    switch (tipo) {
      case "A":
        return TipoApartamentoImgA;
      case "B":
        return TipoApartamentoImgB;
      case "C":
        return TipoApartamentoImgC;
      case "D":
        return TipoApartamentoImgD;
      case "PH":
        return TipoApartamentoImgPH;
      default:
        return "";
    }
  };

  const obtenerInformacion = () => {
    switch (tipo) {
      case "A":
        return (
          <div>
            <h4>Tipos de Apartamento</h4>
            <h3>
              Tipo A <span>- 3 Habitaciones</span>
            </h3>
            <p>147.65 MTS2</p>
            <ul>
              <li>3 habitaciones (principal con balconette)</li>
              <li>2.5 baños</li>
              <li>Vestidor en habitación principal</li>
              <li>Closets en habitaciones secundarias</li>
              <li>Recibidor</li>
              <li>Sala - Comedor</li>
              <li>Cocina modular con Isleta</li>
              <li>Balcón (tipo terraza)</li>
              <li>Cuarto útil con baño</li>
              <li>Área para Lavadora – Secadora</li>
              <li>2 Parqueos</li>
            </ul>
          </div>
        );
      case "B":
        return (
          <div>
            <h4>Tipos de Apartamento</h4>
            <h3>
              Tipo B <span>- 3 Habitaciones</span>
            </h3>
            <p>155.15 mts2</p>
            <ul>
              <li>3 habitaciones (principal con balconette)</li>
              <li>2.5 baños</li>
              <li>Estar Familiar con salida al balcón</li>
              <li>Vestidor en habitación principal</li>
              <li>Closets en habitaciones secundarias</li>
              <li>Recibidor</li>
              <li>Sala - Comedor</li>
              <li>Cocina modular con Isleta</li>
              <li>Balcón (tipo terraza)</li>
              <li>Cuarto útil con baño</li>
              <li>Área para Lavadora – Secadora</li>
              <li>2 Parqueos</li>
            </ul>
          </div>
        );
      case "C":
        return (
          <div>
            <h4>Tipos de Apartamento</h4>
            <h3>
              Tipo C <span>- 3 Habitaciones</span>
            </h3>
            <p>152.50 mts2</p>
            <ul>
              <li>3 habitaciones (principal con balconette)</li>
              <li>2.5 baños</li>
              <li>Estar Familiar con salida al balcón</li>
              <li>Vestidor en habitación principal</li>
              <li>Closets en habitaciones secundarias</li>
              <li>Recibidor</li>
              <li>Sala - Comedor</li>
              <li>Cocina modular con Isleta</li>
              <li>Balcón (tipo terraza)</li>
              <li>Cuarto útil con baño</li>
              <li>Área para Lavadora – Secadora</li>
              <li>2 Parqueos</li>
            </ul>
          </div>
        );
      case "D":
        return (
          <div>
            <h4>Tipos de Apartamento</h4>
            <h3>
              Tipo D <span>- 3 Habitaciones</span>
            </h3>
            <p>157.60 mts2</p>
            <ul>
              <li>3 habitaciones (principal con balconette)</li>
              <li>2.5 baños</li>
              <li>
                Estar Familiar con balconette (adaptable para 4ta habitación)
              </li>
              <li>Vestidor en habitación principal</li>
              <li>Closets en habitaciones secundarias</li>
              <li>Recibidor</li>
              <li>Sala - Comedor</li>
              <li>Cocina modular con Isleta</li>
              <li>Balcón (tipo terraza)</li>
              <li>Cuarto útil con baño</li>
              <li>Área para Lavadora – Secadora</li>
              <li>2 Parqueos</li>
            </ul>
          </div>
        );
      case "PH":
        return (
          <div>
            <h4>Tipos de Apartamento</h4>
            <h3>Tipo PH - 2 Niveles (Piso 8 y 9)</h3>
            <p>Area 248 mts2</p>
            <strong>PRIMER NIVEL:</strong>
            <ul>
              <li>3 Habitaciones</li>
              <li>Recibidor</li>
              <li>Baño para visitas</li>
              <li>Sala - Comedor</li>
              <li>Cocina modular con Isleta</li>
              <li>Habitación principal c/baño, vestidor y balconette</li>
              <li>Habitaciones Secundarias con Closet</li>
              <li>Baño común</li>
              <li>Cuarto útil con baño</li>
              <li>Área para Lavadora – Secadora</li>
              <li>Balcón</li>
              <li>Doble altura en tipo C</li>
              <li>3 Parqueos</li>
            </ul>
            <strong>SEGUNDO NIVEL:</strong>
            <ul>
              <li>Estar Familiar</li>
              <li>Baño completo</li>
              <li>Terraza abierta</li>
            </ul>
          </div>
        );
      default:
        return "";
    }
  };

  return (
    <div className="tipo-apartamento-container">
      <div className="tipo-apartamento">
        <div className="tipo-apartamento-img">
          <img
            loading="lazy"
            src={obtenerImagen()}
            alt="Imagen de Residencial Terrazas del parque 1"
          />
        </div>
        <div className="tipo-apartamento-info">{obtenerInformacion()}</div>
      </div>
      <div className="tipo-apartamento-botones">
        <button onClick={() => handleTipoChange("A")}>Tipo A</button>
        <button onClick={() => handleTipoChange("B")}>Tipo B</button>
        <button onClick={() => handleTipoChange("C")}>Tipo C</button>
        <button onClick={() => handleTipoChange("D")}>Tipo D</button>
        <button onClick={() => handleTipoChange("PH")}>Tipo PH</button>
      </div>
    </div>
  );
};
