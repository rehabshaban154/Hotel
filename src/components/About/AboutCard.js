import React from 'react'
import "./about.css";
import about from "../../Assets/about-img-1.jpg";
export  function AboutCard() {
  return (
   <>
   <div className='aboutCard mtop flex-space'>
   <div className='row row1'>
  <h1>Our <span>Highlights</span></h1>
  <p>
    Our product is designed to exceed expectations with its robust features and intuitive interface. Experience top-notch performance, reliability, and a range of functionalities that cater to all your needs.
  </p>
  <p>
    With a focus on user satisfaction, we provide exceptional support and continuous updates to ensure our product evolves with your requirements. Discover how our innovative solutions can transform your experience.
  </p>
  <button className='secondary-btn'>
    Learn More <i className="fas fa-arrow-right"></i>
  </button>
</div>



<div className='row image'>
    <img src={about}  alt='about'/>
    
</div>



   </div>
   </>
  )
}

export default AboutCard;