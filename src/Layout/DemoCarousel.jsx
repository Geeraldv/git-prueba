import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../styles/Carousel.css";

export const DemoCarousel = ({ children }) => {
  return <Carousel>{children}</Carousel>;
};
