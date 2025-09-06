import { useState } from "react";
import TipoApartamentoImgA from "../assets/img/ciudaddelprado/TIPOACDP-APTO70M2_000.webp";
import TipoApartamentoImgB from "../assets/img/ciudaddelprado/TIPOBCDP-APTO60M2_000.webp";

import "../styles/TipoApartamento.css"; // Asegúrate de que la ruta del archivo CSS sea correcta

export const TipoDeApartamentoCiudadDelPrado = () => {
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
            <p>Desde 69 a 73 mts</p>
            <ul>
              <li>3 Habitaciones</li>
              <li>Walking closet y baño en habitación principal</li>
              <li>Baño común</li>
              <li>Cocina abierta con desayunador</li>
              <li>Área de lavado</li>
              <li>Área útil</li>
              <li>Balcón</li>
              <li>1 Parqueo</li>
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
            <p>Desde 52 a 62 mts</p>
            <ul>
              <li>3 Habitaciones</li>
              <li>
                Walking closet y adaptación de baño en habitación principal
              </li>
              <li>Baño común</li>
              <li>Cocina abierta con desayunador</li>
              <li>Área de lavado</li>
              <li>Balcón</li>
              <li>1 Parqueo</li>
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
            alt={`Imagen del Tipo ${tipo} - Residencial Terrazas del Parque 1`}
          />
        </div>
        <div className="tipo-apartamento-info">{obtenerInformacion()}</div>
      </div>

      <div className="tipo-apartamento-botones">
        <button
          className={tipo === "A" ? "activo" : ""}
          onClick={() => handleTipoChange("A")}
        >
          Tipo A
        </button>
        <button
          className={tipo === "B" ? "activo" : ""}
          onClick={() => handleTipoChange("B")}
        >
          Tipo B
        </button>
      </div>
    </div>
  );
};
