import React from 'react'
import './home.css';
import Slide from './Slide';
import Data from './Data';
export default function Hero() {
  return (
   <>
    <Slide slides={Data}/>
   </>
  )
}
