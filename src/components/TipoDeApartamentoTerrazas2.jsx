import React, { useState } from "react";
import TipoApartamentoImgA from "../assets/img/Terreazadelparque2TipoA.png";
import TipoApartamentoImgB from "../assets/img/Terreazadelparque2TipoB.png";
import TipoApartamentoImgC from "../assets/img/Terreazadelparque2TipoC.png";

import "../styles/TipoApartamento.css"; // Asegúrate de que la ruta del archivo CSS sea correcta

export const TipoDeApartamentoTerrazas2 = () => {
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
    return (
      <div>
        <h4>Tipos de Apartamento</h4>
        <h3>
          {tipo === "A" ? "Tipo A" : tipo === "B" ? "Tipo B" : "Tipo C"}{" "}
          <span>
            - Desde
            {tipo === "A"
              ? " 156-158 mts"
              : tipo === "B"
              ? " 145-148 mts"
              : " 161-166 mts"}
          </span>
        </h3>
        <ul>
          <li>3 Habitaciones</li>
          <li>Habitación principal con baño de doble lavamanos y vestidor</li>
          <li>Baño común para habitaciones secundarias</li>
          <li>½ baño social (visitas)</li>
          <li>Cocina abierta con desayunador</li>
          <li>Habitación de servicio con baño</li>
          <li>Área de lavado (espacio para secadora y lavadora separados)</li>
          <li>2 Parqueos</li>
        </ul>
      </div>
    );
  };

  return (
    <div className="tipo-apartamento-container">
      <div className="tipo-apartamento">
        <div className="tipo-apartamento-img">
          <img src={obtenerImagen()} alt="" />
        </div>
        <div className="tipo-apartamento-info">{obtenerInformacion()}</div>
      </div>
      <div className="tipo-apartamento-botones">
        <button onClick={() => handleTipoChange("A")}>Tipo A</button>
        <button onClick={() => handleTipoChange("B")}>Tipo B</button>
        <button onClick={() => handleTipoChange("C")}>Tipo C (PH)</button>
      </div>
    </div>
  );
};
