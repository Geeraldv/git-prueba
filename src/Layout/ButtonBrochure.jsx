import "../styles/ButtonBrochure.css";

export const ButtonBrochure = (props) => {
  return (
    <div className="btn-brochure-container">
      <a href={props.url} className="btn-brochure">
        Descargar Brochure
      </a>
    </div>
  );
};
