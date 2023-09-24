import calculadoralogo from "../assets/img/calculadora.png";
import "../styles/DetallesUnidad.css";

export const DetallesUnidad = () => {
  return (
    <div className="detalles-unidad-container">
      <div className="detalles-unidad-content">
        <div className="detalles-unidad-title">
          <h2>Terrazol 1</h2>
          <p>Ciudad Juan Bosch</p>
        </div>
        <div className="detalles-unidad-price">
          <h2> Desde RD$ 1,500,000</h2>
          <a href="">
            <img src={calculadoralogo} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
