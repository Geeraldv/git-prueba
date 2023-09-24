import "../styles/Caracteristicas.css";
import checkblue from "../assets/svg/Checkblue.svg";

export const Caracteristicas = () => {
  return (
    <div className="container__descri1">
      <div className="container__descri2">
        <div className="title_descri2">
          <h3>Características</h3>
        </div>
      </div>
      <div className="container__descri3">
        <div className="details">
          <ul className="lista__details1">
            <li>
              <img src={checkblue} alt="Check" />
              <span>3 habitaciones</span>
            </li>
            <li>
              <img src={checkblue} alt="Check" />
              <span>2 baños</span>
            </li>
            <li>
              <img src={checkblue} alt="Check" />
              <span>Elemento 3</span>
            </li>
            <li>
              <img src={checkblue} alt="Check" />
              <span>Balcón</span>
            </li>
            <li>
              <img src={checkblue} alt="Check" />
              <span>Walking closet</span>
            </li>
          </ul>
          <ul className="lista__details1 lista__details2">
            <li>
              <img src={checkblue} alt="Check" />
              <span>Control de acceso</span>
            </li>
            <li>
              <img src={checkblue} alt="Check" />
              <span>Áreas de juegos</span>
            </li>
            <li>
              <img src={checkblue} alt="Check" />
              <span>Áreas comunes</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
