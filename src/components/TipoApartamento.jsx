import React, { useState } from "react";
import TipoApartamentoImgA from "../assets/img/TipoATerrazol.png";
import TipoApartamentoImgB from "../assets/img/TipoBTerrazol.png";
import TipoApartamentoImgC from "../assets/img/TipoCTerrazol.png";

import "../styles/TipoApartamento.css"; // Asegúrate de que la ruta del archivo CSS sea correcta

export const TipoApartamento = () => {
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
            <p>De 85 a 93 mts</p>
            <ul>
              <li>3 Habitaciones</li>
              <li>2 Baños</li>
              <li>Balcon</li>
              <li>1 Parqueo</li>
              <li>Baño común</li>
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
            <p>De 77 a 82 mts</p>
            <ul>
              <li>3 Habitaciones</li>
              <li>2 Baños</li>
              <li>Balcon</li>
              <li>Walking closet y baño en habitación principal</li>
              <li>1 Parqueo</li>
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
            <p>De 65 a 72 mts</p>
            <ul>
              <li>3 Habitaciones</li>
              <li>1 Baño</li>
              <li>Balcon</li>
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
            alt="Imagen de tipo de apartamento"
          />
        </div>
        <div className="tipo-apartamento-info">{obtenerInformacion()}</div>
      </div>
      <div className="tipo-apartamento-botones">
        <button onClick={() => handleTipoChange("A")}>Tipo A</button>
        <button onClick={() => handleTipoChange("B")}>Tipo B</button>
        <button onClick={() => handleTipoChange("C")}>Tipo C</button>
      </div>
    </div>
  );
};
