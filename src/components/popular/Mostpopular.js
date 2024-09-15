import React from 'react'
import Cards from './Cards'
import "./mostpop.css"

export default function Mostpopular() {
  return (
    <>
    <div className='popular top'>
        <div className='full_container'>
    <div className='heading'>
        <h1>Most Popular Hotels</h1>
        <div className='line'></div>
    </div>
    <div className='content'>
        <Cards/>
    </div>
        </div>
    </div>
    </>
  )
}
