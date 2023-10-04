import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import acercade from "../assets/img/AcercaDe.png";
import terrazol1img from "../assets/img/terrazol1img.png";
import "../styles/CarouselAcerca.css";

export const CarouselAcerca = () => {
  return (
    <Carousel className="acerca-de-carousel" showThumbs={false}>
      <div>
        <img
          className="img__carousel"
          loading="lazy"
          src={terrazol1img}
          alt="Imagen 1"
        />
      </div>
      <div>
        <img
          className="img__carousel"
          loading="lazy"
          src={acercade}
          alt="Imagen 2"
        />
      </div>
      <div>
        <img
          className="img__carousel"
          loading="lazy"
          src={terrazol1img}
          alt="Imagen 3"
        />
      </div>
    </Carousel>
  );
};
