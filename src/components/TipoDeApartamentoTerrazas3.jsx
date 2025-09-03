// import { useState } from "react";
// import TipoApartamentoImgA from "../assets/img/Terrazadelparque1TipoA.webp";
// import TipoApartamentoImgB from "../assets/img/Terrazadelparque1TipoB.webp";
// import TipoApartamentoImgC from "../assets/img/Terrazadelparque1TipoC.webp";
// import TipoApartamentoImgD from "../assets/img/Terrazadelparque1TipoD.webp";
// import TipoApartamentoImgPH from "../assets/img/Terrazadelparque1TipoPHD.webp";

// import "../styles/TipoApartamento.css";

// export const TipoDeApartamentoTerrazas3 = () => {
//   const [tipo, setTipo] = useState("A");

//   const handleTipoChange = (nuevoTipo) => setTipo(nuevoTipo);

//   const obtenerImagen = () => {
//     switch (tipo) {
//       case "A":
//         return TipoApartamentoImgA;
//       case "B":
//         return TipoApartamentoImgB;
//       case "C":
//         return TipoApartamentoImgC;
//       case "D":
//         return TipoApartamentoImgD;
//       case "PH-A":
//       case "PH-B":
//       case "PH-C":
//       case "PH-D1":
//       case "PH-D2":
//         return TipoApartamentoImgPH;
//       default:
//         return "";
//     }
//   };

//   const obtenerInformacion = () => {
//     switch (tipo) {
//       case "A":
//         return (
//           <div>
//             <h4>Tipos de Apartamento</h4>
//             <h3>
//               Tipo A <span>- 3 Habitaciones</span>
//             </h3>
//             <p>Desde 124 mts</p>
//             <ul>
//               <li>3 Habitaciones</li>
//               <li>
//                 Habitación principal con baño de doble lavamanos y Vestidor
//               </li>
//               <li>Habitación secundaria con Baño</li>
//               <li>Baño común para una habitación secundaria</li>
//               <li>Cocina abierta con desayunador</li>
//               <li>Habitación de servicio con baño</li>
//               <li>
//                 Área de lavado (espacio para secadora y lavadora separados)
//               </li>
//               <li>Área útil</li>
//               <li>2 Parqueos</li>
//             </ul>
//           </div>
//         );
//       case "B":
//         return (
//           <div>
//             <h4>Tipos de Apartamento</h4>
//             <h3>
//               Tipo B <span>- 3 Habitaciones</span>
//             </h3>
//             <p>Desde 112 mts</p>
//             <ul>
//               <li>3 Habitaciones</li>
//               <li>Habitación principal con baño y Vestidor</li>
//               <li>Baño común para habitaciones secundarias</li>
//               <li>Cocina abierta con desayunador</li>
//               <li>
//                 Área de lavado (espacio para secadora y lavadora separados y/o
//                 adaptación para Habitación de servicio)
//               </li>
//               <li>Family Room</li>
//               <li>2 Parqueos</li>
//             </ul>
//           </div>
//         );
//       case "C":
//         return (
//           <div>
//             <h4>Tipos de Apartamento</h4>
//             <h3>
//               Tipo C <span>- 3 Habitaciones</span>
//             </h3>
//             <p>Desde 112 mts</p>
//             <ul>
//               <li>3 Habitaciones</li>
//               <li>Habitación principal con baño de doble y Vestidor</li>
//               <li>Baño común para habitaciones secundarias</li>
//               <li>Cocina abierta con desayunador</li>
//               <li>
//                 Área de lavado (espacio para secadora y lavadora separados y/o
//                 adaptación para Habitación de servicio)
//               </li>
//               <li>Family Room</li>
//               <li>2 Parqueos</li>
//             </ul>
//           </div>
//         );
//       case "D":
//         return (
//           <div>
//             <h4>Tipos de Apartamento</h4>
//             <h3>
//               Tipo D <span>- 3 Habitaciones</span>
//             </h3>
//             <p>Desde 115 mts</p>
//             <ul>
//               <li>3 Habitaciones</li>
//               <li>Habitación principal con baño y Vestidor</li>
//               <li>Baño común para habitaciones secundarias</li>
//               <li>Cocina abierta con desayunador</li>
//               <li>
//                 Área de lavado con baño (espacio para secadora y lavadora
//                 separados y/o adaptación para Habitación de servicio)
//               </li>
//               <li>Family Room</li>
//               <li>2 Parqueos</li>
//             </ul>
//           </div>
//         );
//       case "PH-A":
//         return (
//           <div>
//             <h4>Tipos de Apartamento</h4>
//             <h3>
//               Tipo PH A <span>- 2 Niveles</span>
//             </h3>
//             <p>Desde 174 mts</p>
//             <ul>
//               <li>3 Habitaciones</li>
//               <li>
//                 Habitación principal con baño de doble lavamanos y Vestidor
//               </li>
//               <li>Habitación secundaria con Baño</li>
//               <li>Baño común para una habitación secundaria</li>
//               <li>Cocina abierta con desayunador</li>
//               <li>Habitación de servicio con baño</li>
//               <li>
//                 Área de lavado (espacio para secadora y lavadora separados)
//               </li>
//               <li>Área útil</li>
//               <li>Área Estar / TV con vestidor y baño común – 2do nivel</li>
//               <li>2 Parqueos</li>
//             </ul>
//           </div>
//         );
//       case "PH-B":
//         return (
//           <div>
//             <h4>Tipos de Apartamento</h4>
//             <h3>
//               Tipo PH B <span>- 2 Niveles</span>
//             </h3>
//             <p>Desde 150 mts</p>
//             <ul>
//               <li>3 Habitaciones</li>
//               <li>Habitación principal con baño y Vestidor</li>
//               <li>Baño común para habitaciones secundarias</li>
//               <li>Cocina abierta con desayunador</li>
//               <li>
//                 Área de lavado (espacio para secadora y lavadora separados y/o
//                 adaptación para Habitación de servicio)
//               </li>
//               <li>Family Room</li>
//               <li>Área Estar / TV con closet y baño común – 2do nivel</li>
//               <li>2 Parqueos</li>
//             </ul>
//           </div>
//         );
//       case "PH-C":
//         return (
//           <div>
//             <h4>Tipos de Apartamento</h4>
//             <h3>
//               Tipo PH C <span>- 2 Niveles</span>
//             </h3>
//             <p>Desde 150 mts</p>
//             <ul>
//               <li>3 Habitaciones</li>
//               <li>Habitación principal con baño de doble y Vestidor</li>
//               <li>Baño común para habitaciones secundarias</li>
//               <li>Cocina abierta con desayunador</li>
//               <li>
//                 Área de lavado (espacio para secadora y lavadora separados y/o
//                 adaptación para Habitación de servicio)
//               </li>
//               <li>Family Room</li>
//               <li>
//                 Habitación (adaptación área estar / TV) con closet y baño – 2do
//                 nivel
//               </li>
//               <li>2 Parqueos</li>
//             </ul>
//           </div>
//         );
//       case "PH-D1":
//         return (
//           <div>
//             <h4>Tipos de Apartamento</h4>
//             <h3>
//               Tipo PH D1 <span>- 2 Niveles</span>
//             </h3>
//             <p>Desde 156 mts</p>
//             <ul>
//               <li>3 Habitaciones</li>
//               <li>Habitación principal con baño y Vestidor</li>
//               <li>Baño común para habitaciones secundarias</li>
//               <li>Cocina abierta con desayunador</li>
//               <li>
//                 Área de lavado con baño (espacio para secadora y lavadora
//                 separados y/o adaptación para Habitación de servicio)
//               </li>
//               <li>Family Room</li>
//               <li>
//                 Habitación (adaptación área estar / TV) con closet y baño – 2do
//                 nivel
//               </li>
//               <li>2 Parqueos</li>
//             </ul>
//           </div>
//         );
//       case "PH-D2":
//         return (
//           <div>
//             <h4>Tipos de Apartamento</h4>
//             <h3>
//               Tipo PH D2 <span>- 2 Niveles</span>
//             </h3>
//             <p>Desde 159 mts</p>
//             <ul>
//               <li>3 Habitaciones</li>
//               <li>Habitación principal con baño y Vestidor</li>
//               <li>Baño común para habitaciones secundarias</li>
//               <li>Cocina abierta con desayunador</li>
//               <li>
//                 Área de lavado con baño (espacio para secadora y lavadora
//                 separados y/o adaptación para Habitación de servicio)
//               </li>
//               <li>Family Room</li>
//               <li>
//                 Habitación, Área estar / TV, con closet y baño – 2do nivel
//               </li>
//               <li>2 Parqueos</li>
//             </ul>
//           </div>
//         );
//       default:
//         return "";
//     }
//   };

//   return (
//     <div className="tipo-apartamento-container">
//       <div className="tipo-apartamento">
//         <div className="tipo-apartamento-img">
//           <img
//             loading="lazy"
//             src={obtenerImagen()}
//             alt="Imagen de Residencial Terrazas del Parque 1"
//           />
//         </div>
//         <div className="tipo-apartamento-info">{obtenerInformacion()}</div>
//       </div>

//       <div className="tipo-apartamento-botones">
//         <button onClick={() => handleTipoChange("A")}>Tipo A</button>
//         <button onClick={() => handleTipoChange("B")}>Tipo B</button>
//         <button onClick={() => handleTipoChange("C")}>Tipo C</button>
//         <button onClick={() => handleTipoChange("D")}>Tipo D</button>
//         <button onClick={() => handleTipoChange("PH-A")}>PH A</button>
//         <button onClick={() => handleTipoChange("PH-B")}>PH B</button>
//         <button onClick={() => handleTipoChange("PH-C")}>PH C</button>
//         <button onClick={() => handleTipoChange("PH-D1")}>PH D1</button>
//         <button onClick={() => handleTipoChange("PH-D2")}>PH D2</button>
//       </div>
//     </div>
//   );
// };

import { useState } from "react";
import TipoApartamentoImgA from "../assets/img/Terrazadelparque1TipoA.webp";
import TipoApartamentoImgB from "../assets/img/Terrazadelparque1TipoB.webp";
import TipoApartamentoImgC from "../assets/img/Terrazadelparque1TipoC.webp";
import TipoApartamentoImgD from "../assets/img/Terrazadelparque1TipoD.webp";
import TipoApartamentoImgPH from "../assets/img/Terrazadelparque1TipoPHD.webp";

import "../styles/TipoApartamento.css";

export const TipoDeApartamentoTerrazas3 = () => {
  // Nivel 1: tipo base; Nivel 2: subtipo de PH
  const [tipoBase, setTipoBase] = useState("A"); // A | B | C | D | PH
  const [phVariante, setPhVariante] = useState("A"); // A | B | C | D1 | D2

  // Clave final (mantiene tu lógica actual)
  const tipo = tipoBase === "PH" ? `PH-${phVariante}` : tipoBase;

  const handleTipoBase = (nuevo) => setTipoBase(nuevo);
  const handlePhVariante = (e) => setPhVariante(e.target.value);

  const obtenerImagen = () => {
    switch (tipo) {
      case "A":
        return TipoApartamentoImgA;
      case "B":
        return TipoApartamentoImgB;
      case "C":
        return TipoApartamentoImgC;
      case "D":
        return TipoApartamentoImgD;
      case "PH-A":
      case "PH-B":
      case "PH-C":
      case "PH-D1":
      case "PH-D2":
        return TipoApartamentoImgPH;
      default:
        return "";
    }
  };

  const obtenerInformacion = () => {
    switch (tipo) {
      case "A":
        return (
          <div>
            <h4>Tipos de Apartamento</h4>
            <h3>
              Tipo A <span>- 3 Habitaciones</span>
            </h3>
            <p>Desde 124 mts</p>
            <ul>
              <li>3 Habitaciones</li>
              <li>
                Habitación principal con baño de doble lavamanos y Vestidor
              </li>
              <li>Habitación secundaria con Baño</li>
              <li>Baño común para una habitación secundaria</li>
              <li>Cocina abierta con desayunador</li>
              <li>Habitación de servicio con baño</li>
              <li>
                Área de lavado (espacio para secadora y lavadora separados)
              </li>
              <li>Área útil</li>
              <li>2 Parqueos</li>
            </ul>
          </div>
        );
      case "B":
        return (
          <div>
            <h4>Tipos de Apartamento</h4>
            <h3>
              Tipo B <span>- 3 Habitaciones</span>
            </h3>
            <p>Desde 112 mts</p>
            <ul>
              <li>3 Habitaciones</li>
              <li>Habitación principal con baño y Vestidor</li>
              <li>Baño común para habitaciones secundarias</li>
              <li>Cocina abierta con desayunador</li>
              <li>
                Área de lavado (espacio para secadora y lavadora separados y/o
                adaptación para Habitación de servicio)
              </li>
              <li>Family Room</li>
              <li>2 Parqueos</li>
            </ul>
          </div>
        );
      case "C":
        return (
          <div>
            <h4>Tipos de Apartamento</h4>
            <h3>
              Tipo C <span>- 3 Habitaciones</span>
            </h3>
            <p>Desde 112 mts</p>
            <ul>
              <li>3 Habitaciones</li>
              <li>Habitación principal con baño de doble y Vestidor</li>
              <li>Baño común para habitaciones secundarias</li>
              <li>Cocina abierta con desayunador</li>
              <li>
                Área de lavado (espacio para secadora y lavadora separados y/o
                adaptación para Habitación de servicio)
              </li>
              <li>Family Room</li>
              <li>2 Parqueos</li>
            </ul>
          </div>
        );
      case "D":
        return (
          <div>
            <h4>Tipos de Apartamento</h4>
            <h3>
              Tipo D <span>- 3 Habitaciones</span>
            </h3>
            <p>Desde 115 mts</p>
            <ul>
              <li>3 Habitaciones</li>
              <li>Habitación principal con baño y Vestidor</li>
              <li>Baño común para habitaciones secundarias</li>
              <li>Cocina abierta con desayunador</li>
              <li>
                Área de lavado con baño (espacio para secadora y lavadora
                separados y/o adaptación para Habitación de servicio)
              </li>
              <li>Family Room</li>
              <li>2 Parqueos</li>
            </ul>
          </div>
        );
      case "PH-A":
        return (
          <div>
            <h4>Tipos de Apartamento</h4>
            <h3>
              Tipo PH A <span>- 2 Niveles</span>
            </h3>
            <p>Desde 174 mts</p>
            <ul>
              <li>3 Habitaciones</li>
              <li>
                Habitación principal con baño de doble lavamanos y Vestidor
              </li>
              <li>Habitación secundaria con Baño</li>
              <li>Baño común para una habitación secundaria</li>
              <li>Cocina abierta con desayunador</li>
              <li>Habitación de servicio con baño</li>
              <li>
                Área de lavado (espacio para secadora y lavadora separados)
              </li>
              <li>Área útil</li>
              <li>Área Estar / TV con vestidor y baño común – 2do nivel</li>
              <li>2 Parqueos</li>
            </ul>
          </div>
        );
      case "PH-B":
        return (
          <div>
            <h4>Tipos de Apartamento</h4>
            <h3>
              Tipo PH B <span>- 2 Niveles</span>
            </h3>
            <p>Desde 150 mts</p>
            <ul>
              <li>3 Habitaciones</li>
              <li>Habitación principal con baño y Vestidor</li>
              <li>Baño común para habitaciones secundarias</li>
              <li>Cocina abierta con desayunador</li>
              <li>
                Área de lavado (espacio para secadora y lavadora separados y/o
                adaptación para Habitación de servicio)
              </li>
              <li>Family Room</li>
              <li>Área Estar / TV con closet y baño común – 2do nivel</li>
              <li>2 Parqueos</li>
            </ul>
          </div>
        );
      case "PH-C":
        return (
          <div>
            <h4>Tipos de Apartamento</h4>
            <h3>
              Tipo PH C <span>- 2 Niveles</span>
            </h3>
            <p>Desde 150 mts</p>
            <ul>
              <li>3 Habitaciones</li>
              <li>Habitación principal con baño de doble y Vestidor</li>
              <li>Baño común para habitaciones secundarias</li>
              <li>Cocina abierta con desayunador</li>
              <li>
                Área de lavado (espacio para secadora y lavadora separados y/o
                adaptación para Habitación de servicio)
              </li>
              <li>Family Room</li>
              <li>
                Habitación (adaptación área estar / TV) con closet y baño – 2do
                nivel
              </li>
              <li>2 Parqueos</li>
            </ul>
          </div>
        );
      case "PH-D1":
        return (
          <div>
            <h4>Tipos de Apartamento</h4>
            <h3>
              Tipo PH D1 <span>- 2 Niveles</span>
            </h3>
            <p>Desde 156 mts</p>
            <ul>
              <li>3 Habitaciones</li>
              <li>Habitación principal con baño y Vestidor</li>
              <li>Baño común para habitaciones secundarias</li>
              <li>Cocina abierta con desayunador</li>
              <li>
                Área de lavado con baño (espacio para secadora y lavadora
                separados y/o adaptación para Habitación de servicio)
              </li>
              <li>Family Room</li>
              <li>
                Habitación (adaptación área estar / TV) con closet y baño – 2do
                nivel
              </li>
              <li>2 Parqueos</li>
            </ul>
          </div>
        );
      case "PH-D2":
        return (
          <div>
            <h4>Tipos de Apartamento</h4>
            <h3>
              Tipo PH D2 <span>- 2 Niveles</span>
            </h3>
            <p>Desde 159 mts</p>
            <ul>
              <li>3 Habitaciones</li>
              <li>Habitación principal con baño y Vestidor</li>
              <li>Baño común para habitaciones secundarias</li>
              <li>Cocina abierta con desayunador</li>
              <li>
                Área de lavado con baño (espacio para secadora y lavadora
                separados y/o adaptación para Habitación de servicio)
              </li>
              <li>Family Room</li>
              <li>
                Habitación, Área estar / TV, con closet y baño – 2do nivel
              </li>
              <li>2 Parqueos</li>
            </ul>
          </div>
        );
      default:
        return "";
    }
  };

  return (
    <div className="tipo-apartamento-container">
      <div className="tipo-apartamento">
        <div className="tipo-apartamento-img">
          <img
            loading="lazy"
            src={obtenerImagen()}
            alt="Imagen de Residencial Terrazas del Parque 1"
          />
        </div>
        <div className="tipo-apartamento-info">{obtenerInformacion()}</div>
      </div>

      <div className="tipo-apartamento-botones">
        {/* Nivel 1 */}
        <button
          onClick={() => handleTipoBase("A")}
          className={tipoBase === "A" ? "active" : ""}
        >
          Tipo A
        </button>
        <button
          onClick={() => handleTipoBase("B")}
          className={tipoBase === "B" ? "active" : ""}
        >
          Tipo B
        </button>
        <button
          onClick={() => handleTipoBase("C")}
          className={tipoBase === "C" ? "active" : ""}
        >
          Tipo C
        </button>
        <button
          onClick={() => handleTipoBase("D")}
          className={tipoBase === "D" ? "active" : ""}
        >
          Tipo D
        </button>
        <button
          onClick={() => handleTipoBase("PH")}
          className={tipoBase === "PH" ? "active" : ""}
        >
          PH
        </button>

        {/* Nivel 2: solo aparece si es PH */}
        {tipoBase === "PH" && (
          <label className="ph-variant">
            <span>Variante:</span>
            <select value={phVariante} onChange={handlePhVariante}>
              <option value="A">PH A</option>
              <option value="B">PH B</option>
              <option value="C">PH C</option>
              <option value="D1">PH D1</option>
              <option value="D2">PH D2</option>
            </select>
          </label>
        )}
      </div>
    </div>
  );
};
