import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import profileimg from "../assets/img/Profileimg.webp";
import { Enviado } from "./Enviado";
import "../styles/ContactMini.css";

export const ContactMini = () => {
  const [enviado, setEnviado] = useState(false);

  const formik = useFormik({
    initialValues: {
      nombre: "",
      telefono: "",
      asunto: "",
      descripcion: "",
    },
    onSubmit: (values, { resetForm }) => {
      if (
        !values.nombre ||
        !values.telefono ||
        !values.asunto ||
        !values.descripcion
      ) {
        formik.setTouched({
          nombre: !values.nombre,
          telefono: !values.telefono,
          asunto: !values.asunto,
          descripcion: !values.descripcion,
        });
      } else {
        const data = {
          nombre: values.nombre,
          telefono: values.telefono,
          asunto: values.asunto,
          descripcion: values.descripcion,
        };
        axios
          .post(
            "https://prod-67.westus.logic.azure.com:443/workflows/e8028134a9c647b790a784acc08a4cff/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=HA5swvKhdrKOhFuIJkNec9Smu4SFniL8FprxmpVNcL0",
            data
          )
          .then((response) => {
            if (response.status === 202) {
              setEnviado(true);
              resetForm();
            }
          })
          .catch((error) => {
            console.error("Error al enviar el formulario:", error);
          });
      }
    },
  });

  return (
    <div className="container-custom">
      <div className="custom-contact-container">
        {enviado ? (
          <Enviado />
        ) : (
          <>
            <div className="custom-emo">
              <div className="custom-emo2">
                <img src={profileimg} alt="Imagen del profile GIT" />
                <p>Contáctanos</p>
              </div>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <input
                type="text"
                id="NombreCampo"
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
                id="TelefonoCampo"
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
              <input
                type="text"
                id="EmailCampo"
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
              <textarea
                id="MensajeCampo"
                placeholder="Hola, estoy interesado/a en..."
                name="descripcion"
                value={formik.values.descripcion}
                onChange={formik.handleChange}
                className={`${
                  formik.touched.descripcion && !formik.values.descripcion
                    ? "contacto-error"
                    : ""
                }`}
              />
              <div className="custom-btn-container">
                <button type="submit" className="custom-btn-form">
                  Contactar
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};
