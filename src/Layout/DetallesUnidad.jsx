import calculadoralogo from "../assets/img/calculadora.png";
import "../styles/DetallesUnidad.css";

export const DetallesUnidad = ({ nombre, ubicacion, precio }) => {
  return (
    <div className="detalles-unidad-container">
      <div className="detalles-unidad-content">
        <div className="detalles-unidad-title">
          <h2>{nombre}</h2>
          <p>{ubicacion}</p>
        </div>
        <div className="detalles-unidad-price">
          <h2>{precio}</h2>

          <div className="imgCalculadora">
            <a
              href="https://credito.com.do/calculadora-hipoteca/"
              target="_blank"
            >
              <img src={calculadoralogo} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
