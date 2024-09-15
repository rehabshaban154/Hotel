import React from 'react';
import "./HeadTitle.css";
import { Link, useLocation } from 'react-router-dom';

export default function HeadTitle() {
  const location = useLocation();

  return (
    <>
      <div className='image-heading'>
        <div className='container'>
          <h1>{location.pathname.split("/")[1]}</h1>
          
        </div>
      </div>
    </>
  );
}
