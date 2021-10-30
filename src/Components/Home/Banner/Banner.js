import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="w-100"
            src='/img/banner/1.jpg'
            alt='First slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            src='/img/banner/2.jpg'
            alt='Second slide'
          />

         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-100"
            src='/img/banner/3.jpg'
            alt='Third slide'
          />

          
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
