import React from 'react'
import AboutCard from './AboutCard';
import feat from '../../Assets/feature-img-1.jpg'
import HeadTitle from '../Headtitle/HeadTitle';
export  function About() {
  return (
   <>
   <HeadTitle />
   <div className='about top'>
   <div className='container'>
    <AboutCard />
   </div>
   </div>
   <div className='features top'>
<div className='container aboutCard flex-space'>

<div className='row image'>
    <img src={feat}  alt='about'/>
    <div className='control-btn'>
        <button className='prev'>
        <i class="fas fa-play-circle"></i>
        </button>
    </div>
</div>




<div className='row row1'>
  <h1>Our <span>Features</span></h1>
  <p>
    Discover the innovative features of our product that make it stand out. From its sleek design to its cutting-edge technology, we offer solutions that enhance your productivity and streamline your workflow.
  </p>
  <p>
    Experience seamless integration with your existing tools and enjoy the benefits of a user-friendly interface. Our product is designed with you in mind, ensuring maximum efficiency and ease of use.
  </p>
  <button className='secondary-btn'>
    Explore More <i className="fas fa-arrow-right"></i>
  </button>
</div>





</div>
   </div>
   </>
  )
}

export default About;