import "../styles/Testimonios.css";
import raya from "../assets/img/raya.png";
import profile from "../assets/img/profile.png";

export const Testimonios = () => {
  return (
    <div className="testimonios__container">
      <div className="testimonios__header">
        <h1 className="testimonios__title">Testimonios</h1>
        <img src={raya} loading="lazy" alt="" />
      </div>
      <div className="testimonios__body">
        <div className="testimonios__card">
          <div className="testimonios__card__title">
            <h2>
              “Impulsa la credibilidad de tus productos y servicios con
              testimonios de clientes. Las recomendaciones de quienes ya los han
              probado son invaluables y generan confianza.”
            </h2>
          </div>
          <div className="testimonios__card__body">
            <div className="testimonios__card__body__img">
              <img src={profile} loading="lazy" alt="" />
            </div>
            <div className="testimonios__card__body__text">
              <h3>Lara Madrigal</h3>
              <p>Client</p>
            </div>
          </div>
        </div>
        <div className="testimonios__card">
          <div className="testimonios__card__title">
            <h2>
              “Impulsa la credibilidad de tus productos y servicios con
              testimonios de clientes. Las recomendaciones de quienes ya los han
              probado son invaluables y generan confianza.”
            </h2>
          </div>
          <div className="testimonios__card__body">
            <div className="testimonios__card__body__img">
              <img src={profile} loading="lazy" alt="" />
            </div>
            <div className="testimonios__card__body__text">
              <h3>Lara Madrigal</h3>
              <p>Client</p>
            </div>
          </div>
        </div>
        <div className="testimonios__card">
          <div className="testimonios__card__title">
            <h2>
              “Impulsa la credibilidad de tus productos y servicios con
              testimonios de clientes. Las recomendaciones de quienes ya los han
              probado son invaluables y generan confianza.”
            </h2>
          </div>
          <div className="testimonios__card__body">
            <div className="testimonios__card__body__img">
              <img src={profile} loading="lazy" alt="" />
            </div>
            <div className="testimonios__card__body__text">
              <h3>Lara Madrigal</h3>
              <p>Client</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
