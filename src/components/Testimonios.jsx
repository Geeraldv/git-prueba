import "../styles/Testimonios.css";
import raya from "../assets/img/raya.webp";
import vizcaino from "../assets/img/vizcaino.webp";
import pedroLopez from "../assets/img/pedroLopez.webp";
import garciaCapellan from "../assets/img/garciaCapellan.webp";
import entrega1 from "../assets/img/entregas/entrega1.webp";
import entrega2 from "../assets/img/entregas/entrega2.webp";
import entrega3 from "../assets/img/entregas/entrega3.webp";
import entrega4 from "../assets/img/entregas/entrega4.webp";

export const Testimonios = () => {
  return (
    <div className="testimonios__container">
      <div className="testimonios__header">
        <h1 className="testimonios__title">Testimonios</h1>
        <img src={raya} loading="lazy" alt="Línea decorativa" />
      </div>
      <div className="testimonios__body">
        <div className="testimonios__card">
          <div className="testimonios__card__title">
            <h2>
              “Tu inversión en Terrazas del Parque es segura y rentable. En poco
              tiempo podrás duplicar tu dinero, es un sueño hecho realidad.”
            </h2>
          </div>
          <div className="testimonios__card__body">
            <div className="testimonios__card__body__img">
              <img
                src={vizcaino}
                alt="Fotografía de Familia Vizcaino Coste"
                loading="lazy"
              />
            </div>
            <div className="testimonios__card__body__text">
              <h3>Familia Vizcaino Coste</h3>
              <p>Clientes</p>
            </div>
          </div>
        </div>
        <div className="testimonios__card">
          <div className="testimonios__card__title">
            <h2>
              “Terrazas del Parque es un lugar cómodo, tranquilo y exclusivo. Es
              el lugar perfecto para vivir, trabajar o invertir.”
            </h2>
          </div>
          <div className="testimonios__card__body">
            <div className="testimonios__card__body__img">
              <img
                src={pedroLopez}
                loading="lazy"
                alt="Fotografía de Pedro López"
              />
            </div>
            <div className="testimonios__card__body__text">
              <h3>Pedro López</h3>
              <p>Cliente</p>
            </div>
          </div>
        </div>
        <div className="testimonios__card">
          <div className="testimonios__card__title">
            <h2>
              “Terrazas del Parque es una excelente inversión porque te ofrece
              la comodidad que necesitas en tu hogar.”
            </h2>
          </div>
          <div className="testimonios__card__body">
            <div className="testimonios__card__body__img">
              <img
                src={garciaCapellan}
                loading="lazy"
                alt="Fotografía de Familia García Capellán"
              />
            </div>
            <div className="testimonios__card__body__text">
              <h3>Familia García Capellán</h3>
              <p>Cliente</p>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonios__bento-grid">
        <div className="testimonios__bento-grid__large">
          <img
            src={entrega1 || "/placeholder.svg"}
            loading="lazy"
            alt="Entrega de apartamento - Familia celebrando"
          />
          <div className="testimonios__bento-grid__overlay">
            <h3>Momentos de Entrega</h3>
            <p>Familias felices recibiendo sus nuevos hogares</p>
          </div>
        </div>
        <div className="testimonios__bento-grid__small-container">
          <div className="testimonios__bento-grid__small">
            <img
              src={entrega2 || "/placeholder.svg"}
              loading="lazy"
              alt="Entrega de apartamento - Celebración"
            />
            <div className="testimonios__bento-grid__overlay">
              <h3>Sueños Cumplidos</h3>
            </div>
          </div>
          <div className="testimonios__bento-grid__small">
            <img
              src={entrega3 || "/placeholder.svg"}
              loading="lazy"
              alt="Entrega de apartamento - En la cocina"
            />
            <div className="testimonios__bento-grid__overlay">
              <h3>Nuevos Hogares</h3>
            </div>
          </div>
          <div className="testimonios__bento-grid__small">
            <img
              src={entrega4 || "/placeholder.svg"}
              loading="lazy"
              alt="Entrega de apartamento - Familia completa"
            />
            <div className="testimonios__bento-grid__overlay">
              <h3>Nuevos Comienzos</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
