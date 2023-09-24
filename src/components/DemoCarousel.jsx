import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../styles/Carousel.css";
import tipoA from "../assets/img/Apto (1).jpg";
import tipoB from "../assets/img/Apto_Tipo A_1.jpg";
import tipoC from "../assets/img/Apto_Tipo A_3.jpg";
import tipoD from "../assets/img/Apto_Tipo B (1).jpg";
import tipoE from "../assets/img/Apto_Tipo B_1 (1).jpg";
import tipoF from "../assets/img/Apto_Tipo B_3.jpg";
import tipoG from "../assets/img/Hab_Tipo A_2.jpg";
import tipoH from "../assets/img/Hab_Tipo B_2.jpg";

export const DemoCarousel = () => {
  return (
    <Carousel>
      <div>
        <img className="img__carousel" src={tipoA} alt="Imagen 1" />
      </div>
      <div>
        <img className="img__carousel" src={tipoB} alt="Imagen 2" />
      </div>
      <div>
        <img className="img__carousel" src={tipoC} alt="Imagen 3" />
      </div>
      <div>
        <img className="img__carousel" src={tipoD} alt="Imagen 1" />
      </div>
      <div>
        <img className="img__carousel" src={tipoE} alt="Imagen 2" />
      </div>
      <div>
        <img className="img__carousel" src={tipoF} alt="Imagen 3" />
      </div>
      <div>
        <img className="img__carousel" src={tipoG} alt="Imagen 3" />
      </div>
      <div>
        <img className="img__carousel" src={tipoH} alt="Imagen 3" />
      </div>
    </Carousel>
  );
};
