import { Link } from "react-router-dom";
import "../styles/ProyectosNuevos.css";

export const ProyectosNuevos = () => {
  return (
    <div className="container-padre">
      <div className="seccion-categoria">
        <h2 className="titulo-categoria">En Entrega</h2>
        <div className="grid-proyectos">
          <Link to="/Terrazol1">
            <div className="tarjeta terrazol-1">
              <div className="esquina esquina-superior-izquierda">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "5px",
                  }}
                >
                  <i className="material-icons">location_on</i>
                  <span>Terrazol I</span>
                </div>
                <span>Ciudad Juan Bosch</span>
              </div>
              <div className="esquina esquina-superior-derecha estado-entrega">
                En Entrega
              </div>
              <div className="esquina esquina-inferior-derecha">
                Desde RD $3,260,000.00
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="seccion-categoria">
        <h2 className="titulo-categoria">En Ejecución</h2>
        <div className="grid-proyectos">
          <Link to="/Terrazol2">
            <div className="tarjeta terrazol-2">
              <div className="esquina esquina-superior-izquierda">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "5px",
                  }}
                >
                  <i className="material-icons">location_on</i>
                  <span>Terrazol II</span>
                </div>
              </div>
              <div className="esquina esquina-superior-derecha estado-ejecucion">
                En Ejecución
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="seccion-categoria">
        <h2 className="titulo-categoria">En Planos</h2>
        <div className="grid-proyectos">
          <Link to="/Terrazasdelparque2">
            <div className="tarjeta terrazas-parque-2">
              <div className="esquina esquina-superior-izquierda">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "5px",
                  }}
                >
                  <i className="material-icons">location_on</i>
                  <span>Terrazas Del Parque II</span>
                </div>
                <span>Ciudad Modelo</span>
              </div>
              <div className="esquina esquina-superior-derecha estado-planos">
                En Planos
              </div>
              <div className="esquina esquina-inferior-derecha">
                Desde US$178,000.00
              </div>
            </div>
          </Link>

          <Link to="/Terrazasdelparque3">
            <div className="tarjeta terrazas-parque-3">
              <div className="esquina esquina-superior-izquierda">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "5px",
                  }}
                >
                  <i className="material-icons">location_on</i>
                  <span>Terrazas Del Parque III</span>
                </div>
              </div>
              <div className="esquina esquina-superior-derecha estado-planos">
                En Planos
              </div>
            </div>
          </Link>

          <Link to="/CiudadDelprado">
            <div className="tarjeta ciudad-prado">
              <div className="esquina esquina-superior-izquierda">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "5px",
                  }}
                >
                  <i className="material-icons">location_on</i>
                  <span>Ciudad Del Prado</span>
                </div>
              </div>
              <div className="esquina esquina-superior-derecha estado-planos">
                En Planos
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="seccion-categoria">
        <h2 className="titulo-categoria">Entregados</h2>
        <div className="grid-proyectos">
          <Link to="/Terrazasdelparque1">
            <div className="tarjeta terrazas-parque-1">
              <div className="esquina esquina-superior-izquierda">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "5px",
                  }}
                >
                  <i className="material-icons">location_on</i>
                  <span>Terrazas Del Parque I</span>
                </div>
                <span>Ciudad Modelo</span>
              </div>
              <div className="esquina esquina-superior-derecha estado-entregado">
                Entregado
              </div>
              <div className="esquina esquina-inferior-derecha">
                Desde US$117,000
              </div>
            </div>
          </Link>
          <Link to="/ParqueVerde">
            <div className="tarjeta parque-verde">
              <div className="esquina esquina-superior-izquierda">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "5px",
                  }}
                >
                  <i className="material-icons">location_on</i>
                  <span>Parque Verde</span>
                </div>
              </div>
              <div className="esquina esquina-superior-derecha estado-entregado">
                Entregado
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
