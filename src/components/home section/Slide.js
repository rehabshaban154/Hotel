import React, { useState } from 'react';
import Data from './Data';
import './home.css';

export default function Slide({ slides }) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <>
            <div className='slider'>
                <div className='control-btn'>
                    <button className='prev' onClick={prevSlide}>
                        <i className='fas fa-caret-left'></i>
                    </button>
                    <button className='next' onClick={nextSlide}>
                        <i className='fas fa-caret-right'></i>
                    </button>
              

                {slides.map((slide, index) => (
                    <div
                        className={index === current ? 'slide active' : 'slide'}
                        key={index}
                    >
                        {index === current && (
                            <img src={slide.images} alt='Home image' />
                        )}
                    </div>
                ))}
            </div>
            </div>
            <div className='slide-form'>
                <div className='container'>
                    <h2>Enjoy your Holiday</h2>
                    <span style={{fontSize: "22px"}}>Search And Book Hotel</span>
                    <form action=''>
                        <input type='text' placeholder='Search for city' name='' id="" />
                       <div className='flex_space'>
<input type='data' placeholder='Check In' />
<input type='data' placeholder='Check Out' />
                       </div>


                       <div className='flex_space'>
            <input type='number' placeholder='Adult(s)+18' />
            <input type='number' placeholder='Children(1 - 17' />
                       </div>
          <input type='number' placeholder='Rooms' />
          <input type='submit' value="search" className='submit' />



                    </form>
                </div>

            </div>
        </>
    );
}
