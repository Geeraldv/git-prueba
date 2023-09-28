import "../styles/Proyectos.css";
import raya from "../assets/img/raya.png";
import { Link } from "react-router-dom";

export const Proyectos = () => {
  return (
    <div id="Proyectos" className="container-padre">
      <div className="container-cartas">
        <div className="container-1-c">
          <Link to="/Terrazol1">
            <div className="pruebita-1">
              <div className="tarjeta">
                <div className="esquina esquina-superior-izquierda">
                  <i className="material-icons">&#xe0c8;</i> Terrazol I,
                  <br />
                  Ciudad Juan Bosch
                </div>
                <div id="blue" className="esquina esquina-superior-derecha">
                  En Planos
                </div>
                <div className="esquina esquina-inferior-derecha">
                  Desde RD 3,260,000.00
                </div>
              </div>
              <div>
                <p>Terrazol 1</p>
              </div>
            </div>
          </Link>
          <Link to="/Terrazasdelparque2">
            {" "}
            {/* Agrega un enlace a la ruta deseada */}
            <div className="pruebita-1">
              <div className="tarjeta tarjeta2">
                <div className="esquina esquina-superior-izquierda">
                  <i className="material-icons">&#xe0c8;</i> Terrazas Del Parque
                  2,
                  <br />
                  Ciudad Modelo
                </div>
                <div id="blue" className="esquina esquina-superior-derecha">
                  En Planos
                </div>
                <div className="esquina esquina-inferior-derecha">
                  Desde US$178,000.00
                </div>
              </div>
              <div>
                <p>Terraza Del Parque 2</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="container-cartaNames">
          <div className="container-1-c">
            <Link to="/Terrazasdelparque1">
              <div className="pruebita-1">
                <div className="tarjeta tarjeta3">
                  <div className="esquina esquina-superior-izquierda">
                    <i className="material-icons">&#xe0c8;</i> Terrazas Del
                    Parque,
                    <br />
                    Ciudad Modelo
                  </div>
                  <div id="gris" className="esquina esquina-superior-derecha">
                    Entregado
                  </div>
                  <div className="esquina esquina-inferior-derecha">
                    Desde US$117,000
                  </div>
                </div>
                <div>
                  <p>Terraza Del Parque</p>
                </div>
              </div>
            </Link>

            <Link to="/">
              {" "}
              {/* Agrega un enlace a la ruta deseada */}
              <div className="pruebita-1">
                <div className="tarjeta tarjeta4">
                  <div className="esquina esquina-superior-izquierda">
                    <i className="material-icons">&#xe0c8;</i>Terrazas Park,
                    <br />
                    Ciudad Juan Bosch
                  </div>
                  <div id="blue" className="esquina esquina-superior-derecha">
                    Entregado
                  </div>
                  <div className="esquina esquina-inferior-derecha"></div>
                </div>
                <div>
                  <p>Terrazas Park</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
