import React, { useState } from 'react';

export default function Card(props) {
  const [popup, setPopup] = useState(false);  // Initialize popup state to false

  const toggleModal = () => {
    setPopup(!popup);  // Toggle the popup state
  };

  return (
    <>
      <div className='items'>
        <div className='img'>
          <img src={props.images} alt={props.title} />
          <i className="fas fa-images" onClick={toggleModal}></i>  {/* Toggle modal on click */}
        </div>
        <div className='title'>
          <h3>{props.title}</h3>
        </div>
      </div>
      {popup && (
        <div className='popup'>
          <div className='hide' onClick={toggleModal}></div>  {/* Close popup on background click */}
          <div className='popup-content'>
            <button onClick={toggleModal}>X</button>
            <img src={props.images} alt={props.title} />
          </div>
        </div>
      )}
    </>
  );
}
