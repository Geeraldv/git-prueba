import gitlogo from "../assets/img/gitlogo.png";
import whatsapplogo from "../assets/img/whatsapplogo.png";
import menu from "../assets/img/menu.png";
import imgcard1 from "../assets/img/img-card1.png";
import imgcard2 from "../assets/img/img-card2.png";
import imgcard3 from "../assets/img/img-card3.png";
import "../styles/Header.css";

export const Header = () => {
  return (
    <div className="container__header1">
      <div className="container-header2">
        <nav className="nav__header">
          <div className="header">
            <a href="#">
              <img src={gitlogo} />
            </a>
            <div className="header-right">
              <a href="#home">Proyectos</a>
              <a className="logo-ws" href="#ws">
                <img src={whatsapplogo} /> WhatsApp
              </a>
              <a className="contact" href="#mas">
                Contactanos
              </a>

              <a href="#menu">
                <img src={menu} />
              </a>
            </div>
          </div>
        </nav>

        <div className="title__header">
          <h1 className="animate-text">Excelentes inmuebles comerciales</h1>
        </div>

        <div className="container__cartas">
          <div className="carta1">
            <a href="#">
              <img src={imgcard1} />
            </a>
            <h3 className="animate-text">Residencial Terrazol 1</h3>
          </div>

          <div className="carta1">
            <a href="#">
              <img src={imgcard2} />
            </a>

            <h3 className="animate-text">Terrazas del Parque</h3>
          </div>

          <div className="carta1">
            <a href="">
              <img src={imgcard3} />
            </a>
            <h3 className="animate-text">Terrazas del Parque</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
