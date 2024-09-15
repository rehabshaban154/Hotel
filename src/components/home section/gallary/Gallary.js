import React from 'react';
import Data from './Data';
import './gallary.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Gallary() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2
  };

  return (
    <>
      <div className='collection'>
        <div className='container top'>
          <Slider {...settings}>
            {Data.map((value, index) => {
              return (
                <div className='box' key={index}>
                  <img src={value.cover} alt="gallery item" />
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}
