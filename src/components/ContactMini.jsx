import "../styles/ContactMini.css";

export const ContactMini = () => {
  return (
    <div className="container-custom">
      <div className="custom-contact-container">
        <div className="custom-emo">
          <div className="custom-emo2">
            <img src="img.png" />
            <p>Juan Olivero</p>
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
