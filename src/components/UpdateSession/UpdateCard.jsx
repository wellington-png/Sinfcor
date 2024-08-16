import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Img from '../../assets/rear-view-programmer-working-all-night-long.jpg';
import cartaz from '../../assets/SINFCOR.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carouselStyles.css'; // Adicionei esta linha para importar o CSS

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100 carousel-img"
          src={Img}
          alt="First slide"
          height={'600'}
          style={{ objectFit: 'cover' }}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100 carousel-img"
          src={cartaz}
          alt="Second slide"
          style={{ objectFit: 'contain' }}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
