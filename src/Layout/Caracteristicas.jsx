import "../styles/Caracteristicas.css";

export const Caracteristicas = ({ children }) => {
  return (
    <div className="container__descri1">
      <div className="container__descri2">
        <div className="title_descri2">
          <h3>Características</h3>
        </div>
      </div>
      <div className="container__descri3">
        <div className="details">{children}</div>
      </div>
    </div>
  );
};
