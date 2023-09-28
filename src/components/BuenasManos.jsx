import "../styles/BuenasManos.css";
import ImgBuenasManos from "../assets/img/buenasmanos2.jpg";
import raya from "../assets/img/raya.png";

export const BuenasManos = () => {
  return (
    <div className="BuenasManos-container">
      <div className="img-buenas-manos">
        <img src={ImgBuenasManos} alt="Buenas Manos" />
      </div>

      <div className="BuenasManos-content">
        <img className="rayita-buenas-manos" src={raya} alt="Rayita" />
        <h1>Estás en buenas manos.</h1>

        <p className="txt-buenas-manos">
          Confía en nuestra constructora, donde la calidad y el compromiso son
          nuestras principales fortalezas. Estamos dedicados a brindarte un
          servicio excepcional, asegurándonos de que cada detalle de tu proyecto
          sea atendido con precisión y cuidado.
        </p>
      </div>
    </div>
  );
};
