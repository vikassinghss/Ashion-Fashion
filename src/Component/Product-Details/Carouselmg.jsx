import Carousel from "react-bootstrap/Carousel";

function CarouselImg(props) {
  return (
    <Carousel interval={null}>
      <Carousel.Item>
        <img className="d-block w-100" src={props.img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={props.img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block " src={props.img3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselImg;
