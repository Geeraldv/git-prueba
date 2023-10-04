import React, { useState } from "react";
import "../styles/Contacto.css";

export const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [asunto, setAsunto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos
    if (!nombre || !telefono || !asunto || !descripcion) {
      setError("¡Se requieren datos en todos los campos!");
      return;
    }

    // Aquí puedes enviar los datos del formulario al servidor
    // Luego de enviar los datos, puedes reiniciar los estados de los campos
    setNombre("");
    setTelefono("");
    setAsunto("");
    setDescripcion("");
    setError("");
  };

  return (
    <div className="contacto-container" id="Contactos">
      <div className="contacto-form">
        <h1 className="contacto-h1">CONTACTANOS</h1>
        <div className="contacto-part1">
          <input
            type="text"
            id="contacto-nombre"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className={error && !nombre ? "error" : ""}
          />
          <input
            type="text"
            id="contacto-telefono"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className={error && !telefono ? "error" : ""}
          />
        </div>
        <div>
          <input
            type="text"
            id="contacto-asunto"
            placeholder="Email"
            value={asunto}
            onChange={(e) => setAsunto(e.target.value)}
            className={error && !asunto ? "error" : ""}
          />
        </div>
        <div>
          <textarea
            id="contacto-info"
            cols="30"
            rows="10"
            placeholder="Cuéntanos en qué podemos ayudarte"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className={error && !descripcion ? "error" : ""}
          ></textarea>
        </div>
        {error && <p className="contacto-error">{error}</p>}
        <div className="contacto-btn">
          <button className="contacto-btn-form" onClick={handleSubmit}>
            Enviar mensaje
          </button>
        </div>
      </div>
    </div>
  );
};
