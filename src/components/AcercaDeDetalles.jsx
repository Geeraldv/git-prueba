import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/AcercaDeDetalles.css";
import gitlogoacerca from "../assets/img/gitlogoacerca.png";
import gitLogoBlackk from "../assets/img/gitLogoBlackk.png";
import terrazasdelparquelogo from "../assets/img/TerrazasDelParqueLogo.png";
import { Carousel } from "react-responsive-carousel";

import img1 from "../assets/img/Terrazas del parque 1/TP1.png";
import img2 from "../assets/img/Terrazas del parque 1/TP2.png";
import img3 from "../assets/img/Terrazas del parque 1/TP3.png";
import img4 from "../assets/img/Terrazas del parque 1/TP4.png";
import img5 from "../assets/img/Terrazas del parque 1/TP5.png";

export const AcercaDeDetalles = () => {
  return (
    <div className="conocenos_general_container">
      <div className="conocenos__container">
        <h1>Conocenos</h1>
      </div>
      <div className="sobrenosotros">
        <h1 className="sobrenosotros__title">Sobre Nosotros</h1>
        <p className="sobrenosotros__text">
          Somos un grupo de promoción y desarrollo de proyectos inmobiliarios y
          comerciales, con una trayectoria de mas de 30 años en el sector de la
          construcción y financiero, garantizando a nuestros clientes seguridad
          en sus inversiones y calidad en nuestros productos.
        </p>
        <p className="sobrenosotros__text">
          Como grupo es nuestro objetivo brindarle a nuestros clientes y a las
          comunidades donde desarrollamos un producto de calidad, prestando
          especial atención a los detalles particulares de cada desarrollo.
        </p>
        <p className="sobrenosotros__text">
          <b> DESARROLLO INMOBILIARIO </b>
          Nuestros desarrollos inmobiliarios son diseñados con rigurosidad,
          pensando en los usuarios, la funcionalidad de los espacios y las
          distintas necesidades de los clientes. Guardamos especial celo en la
          selección de los materiales, garantizando un producto terminado con
          una calidad superior a la del entorno.
        </p>
        <p className="sobrenosotros__text">
          <b> DESARROLLO COMERCIAL</b>
          Pensamos en la comunidad y los usuarios, llevando un producto practico
          y útil para las comunidades, aportando espacios de recreación, verdes
          y de usos múltiples.
        </p>
        <h1 className="sobrenosotros__title">Nuestras Marcas.</h1>
        <p className="sobrenosotros__text">
          Grupo Inmobiliario Terrazas cuenta con diferentes marcas operando bajo
          una estrategia de promoción integral, creando, promoviendo y
          administrando los mejores activos del mercado inmobiliario de la
          Republica Dominicana.
        </p>
      </div>
      <div className="nuestrasmarcas__container">
        <div className="nuestrasmarcas_item">
          <img className="nuestrasmarcas_img" src={gitLogoBlackk} alt="" />
        </div>
        <div className="nuestrasmarcas_item">
          <img
            className="nuestrasmarcas_img"
            src={terrazasdelparquelogo}
            alt=""
          />
        </div>
        <div className="nuestrasmarcas_item">
          <img className="nuestrasmarcas_img" src={gitlogoacerca} alt="" />
        </div>
        <div className="nuestrasmarcas_item">
          <img
            className="nuestrasmarcas_img"
            src={terrazasdelparquelogo}
            alt=""
          />
        </div>
      </div>
      <div className="proyectosentregados__container">
        <h1 className="proyectosentregados__title">Proyectos Entregados</h1>
        <p className="proyectosentregados__text">
          Hasta la fecha hemos desarrollado un exclusivo portafolio de
          proyectos, con diseños innovadores y excelentes ubicaciones
          geográficas. Complejos inmobiliarios turísticos que se han convertido
          en la mejor opción de inversión de nuestros actuales clientes.
        </p>
      </div>

      <Carousel showThumbs={false} className="acerca-de-carousel">
        <div>
          <img className="img__carousel" src={img1} alt="Imagen 3" />
        </div>
        <div>
          <img className="img__carousel" src={img2} alt="Imagen 3" />
        </div>
        <div>
          <img className="img__carousel" src={img3} alt="Imagen 3" />
        </div>
        <div>
          <img className="img__carousel" src={img4} alt="Imagen 3" />
        </div>
        <div>
          <img className="img__carousel" src={img5} alt="Imagen 3" />
        </div>
      </Carousel>
    </div>
  );
};
