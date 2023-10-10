import "../styles/AcercaDe.css";
import ImgAcercaDe from "../assets/img/AcercaDe.png";
import raya from "../assets/img/raya.png";
import { Link } from "react-router-dom";

export const AcercaDe = () => {
  return (
    <div id="Nosotros" className="Acerca-container">
      <div className="img-acerca">
        <img src={ImgAcercaDe} loading="lazy" />
      </div>

      <div className="Acerca-content">
        <img className="rayita-acerca" src={raya} loading="lazy" />
        <h1>Nosotros</h1>

        <p className="txt-acerca">
          Somos un grupo de promoción y desarrollo de proyectos inmobiliarios y
          comerciales, con una trayectoria de mas de 30 años en el sector de la
          construcción y financiero, garantizando a nuestros clientes seguridad
          en sus inversiones y calidad en nuestros productos.
        </p>
        <Link to="/AcercaDeDetalles" className="btn-acerca">
          Ver más
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="10"
            viewBox="0 0 20 10"
            fill="none"
          >
            <path
              d="M19.7558 4.22568L15.7742 0.244013C15.5358 0.00575645 15.1775 -0.0655052 14.8661 0.0634481C14.5548 0.192401 14.3517 0.496183 14.3517 0.83318V3.35651C14.3517 3.47157 14.2584 3.56485 14.1433 3.56485H1.25C0.559644 3.56485 0 4.12449 0 4.81485C0 5.5052 0.559644 6.06485 1.25 6.06485H14.1433C14.2584 6.06485 14.3517 6.15812 14.3517 6.27318V8.79651C14.3517 9.13351 14.5548 9.43729 14.8661 9.56625C15.1775 9.6952 15.5358 9.62394 15.7742 9.38568L19.7558 5.40401C20.0812 5.0786 20.0812 4.5511 19.7558 4.22568Z"
              fill="#fff"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};
