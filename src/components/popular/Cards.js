import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PopularData from './popdata'; 

// Custom Next Arrow
const SampleNextArrow = (props) => {
  const { onClick } = props;  // Fix destructuring
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className="fas fa-arrow-right"></i>  {/* Updated to right arrow for 'next' */}
      </button>
    </div>
  );
};

// Custom Previous Arrow
const SamplePrevArrow = (props) => {
  const { onClick } = props;  // Fix destructuring
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>  {/* Change to 'prev' for left arrow */}
        <i className="fas fa-arrow-left"></i>  {/* Left arrow for 'prev' */}
      </button>
    </div>
  );
};

export default function Cards() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,  // Use custom next arrow
    prevArrow: <SamplePrevArrow />,  // Use custom previous arrow
    draggable: true,  // Enable dragging
    swipeToSlide: true,  // Enables swipe for better user experience
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
    ]
  };

  return (
    <Slider {...settings}>
      {PopularData.map((item, index) => (
        <div className='cards' key={index}>
          <div className='item'>
            <div className='imgae'>
              <img src={item.image} alt='' />
              <i className="fas fa-map-marker-alt" style={{ marginRight: "10px" }}>
                <label>{item.country}</label>
              </i>
            </div>
            <div className='rate'>
              <i className="fas fa-star" style={{ color: "#FFD43B" }}></i>
              <i className="fas fa-star" style={{ color: "#FFD43B" }}></i>
              <i className="fas fa-star" style={{ color: "#FFD43B" }}></i>
              <i className="fas fa-star" style={{ color: "#FFD43B" }}></i>
              <i className="fas fa-star" style={{ color: "#FFD43B" }}></i>
            </div>
            <div className='details'>
              <h2>{item.name}</h2>
              <div className='boarder'></div>
              <h3>{item.Price}<span>Per Night</span></h3>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
