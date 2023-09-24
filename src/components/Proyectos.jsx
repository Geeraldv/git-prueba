import "../styles/Proyectos.css";
import raya from "../assets/img/raya.png";
import proyectimg1 from "../assets/img/proyect-img-1.png";

export const Proyectos = () => {
  return (
    <div className="proyect-container">
      <div className="title__body">
        <img src={raya} alt="" />
        <h1 className="title__proyects">Proyectos</h1>
      </div>
      <div className="proyects__content">
        <div className="card__proyect">
          <a href="#">
            <img src={proyectimg1} />
          </a>
        </div>
        <div className="card__proyect"></div>
      </div>
    </div>
  );
};
