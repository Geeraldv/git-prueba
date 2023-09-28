import "../styles/Descripcion.css";

export const Descripcion = ({ parrafo1, parrafo2 }) => {
  return (
    <div className="container__info_1">
      <div className="container__info_2">
        <div className="title_info">
          <h3>Descripción</h3>
        </div>
      </div>
      <div className="container__info_3">
        <div className="info">
          <p>{parrafo1}</p>
          <br />
          <br />
          <p>{parrafo2}</p>
        </div>
      </div>
    </div>
  );
};
