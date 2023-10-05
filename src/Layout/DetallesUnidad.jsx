import calculadoralogo from "../assets/svg/calculadora.svg";
import { UilCalculatorAlt } from "@iconscout/react-unicons";
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
              <UilCalculatorAlt color="#335b74" height="35px" width="35px" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
