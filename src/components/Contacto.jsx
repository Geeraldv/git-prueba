import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios"; // Asegúrate de haber instalado axios
import "../styles/Contacto.css";

import { Enviado } from "./Enviado";

export const Contacto = () => {
  const [enviado, setEnviado] = useState(false);

  const formik = useFormik({
    initialValues: {
      nombre: "",
      telefono: "",
      asunto: "",
      descripcion: "",
    },
    onSubmit: (values, { resetForm }) => {
      // Validar si los campos están vacíos antes de enviar
      if (
        !values.nombre ||
        !values.telefono ||
        !values.asunto ||
        !values.descripcion
      ) {
        // Actualizar las clases CSS para resaltar los campos vacíos
        formik.setTouched({
          nombre: !values.nombre,
          telefono: !values.telefono,
          asunto: !values.asunto,
          descripcion: !values.descripcion,
        });
      } else {
        // Si los campos no están vacíos, proceder con la solicitud POST
        const data = {
          nombre: values.nombre,
          telefono: values.telefono,
          email: values.asunto,
          descripcion: values.descripcion,
        };

        // Realizar la solicitud POST a la URL proporcionada
        axios
          .post(
            "https://prod-67.westus.logic.azure.com:443/workflows/e8028134a9c647b790a784acc08a4cff/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=HA5swvKhdrKOhFuIJkNec9Smu4SFniL8FprxmpVNcL0",
            data
          )
          .then((response) => {
            // Manejar la respuesta después de enviar la solicitud
            if (response.status === 202) {
              // La solicitud se completó con éxito, puedes mostrar un mensaje de éxito
              setEnviado(true);
              resetForm();
            }
          })
          .catch((error) => {
            // Manejar errores de la solicitud, puedes mostrar un mensaje de error si es necesario
            console.error("Error al enviar el formulario:", error);
          });
      }
    },
  });

  return (
    <div className="contacto-container" id="Contactos">
      <div className="contacto-form">
        {enviado ? (
          <Enviado />
        ) : (
          <>
            <h1 className="contacto-h1">CONTACTANOS</h1>
            <form onSubmit={formik.handleSubmit}>
              <div className="contacto-part1">
                <input
                  type="text"
                  id="contacto-nombre"
                  placeholder="Nombre"
                  name="nombre"
                  value={formik.values.nombre}
                  onChange={formik.handleChange}
                  className={`${
                    formik.touched.nombre && !formik.values.nombre
                      ? "contacto-error"
                      : ""
                  }`}
                />
                <input
                  type="text"
                  id="contacto-telefono"
                  placeholder="Teléfono"
                  name="telefono"
                  value={formik.values.telefono}
                  onChange={formik.handleChange}
                  className={`${
                    formik.touched.telefono && !formik.values.telefono
                      ? "contacto-error"
                      : ""
                  }`}
                />
              </div>
              <div>
                <input
                  type="email"
                  id="contacto-asunto"
                  placeholder="Email"
                  name="asunto"
                  value={formik.values.asunto}
                  onChange={formik.handleChange}
                  className={`${
                    formik.touched.asunto && !formik.values.asunto
                      ? "contacto-error"
                      : ""
                  }`}
                />
              </div>
              <div>
                <textarea
                  id="contacto-info"
                  cols="30"
                  rows="10"
                  placeholder="Cuéntanos en qué podemos ayudarte"
                  name="descripcion"
                  value={formik.values.descripcion}
                  onChange={formik.handleChange}
                  className={`${
                    formik.touched.descripcion && !formik.values.descripcion
                      ? "contacto-error"
                      : ""
                  }`}
                />
              </div>
              <div className="contacto-btn">
                <button type="submit" className="contacto-btn-form">
                  Enviar mensaje
                </button>
              </div>
            </form>
          </>
        )}
        {/* Renderiza el componente BuenasManos si se ha enviado el mensaje */}
      </div>
    </div>
  );
};
