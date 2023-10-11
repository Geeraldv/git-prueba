import "../styles/ContactMini.css";
import profileimg from "../assets/img/Profileimg.png";

export const ContactMini = () => {
  return (
    <div className="container-custom">
      <div className="custom-contact-container">
        <div className="custom-emo">
          <div className="custom-emo2">
            <img src={profileimg} alt="Imagen del profile GIT" />
            <p>Contáctanos</p>
          </div>
        </div>

        <input type="text" id="NombreCampo" placeholder="Nombre" />

        <input type="text" id="TelefonoCampo" placeholder="Teléfono" />

        <input type="text" id="EmailCampo" placeholder="Email" />

        <textarea
          id="MensajeCampo"
          placeholder="Hola, estoy interesado/a en..."
        ></textarea>

        <div className="custom-btn-container">
          <a className="custom-btn-form" href="">
            Contactar
          </a>
        </div>
      </div>
    </div>
  );
};
