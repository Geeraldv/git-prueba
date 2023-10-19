import doubleCheck from "../assets/img/output-onlinegiftools.gif";
import "../styles/Enviado.css";

export const Enviado = () => {
  return (
    <div className="container-chek">
      <div className="container1-c">
        <img src={doubleCheck} />
        <p className="p-enviado">Su mensaje ha sido enviado con éxito </p>
      </div>
    </div>
  );
};
