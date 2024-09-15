import React from 'react'
import "./work.css"
export default function Card(props) {
  return (
    <div className='box'>
        <div className='img'>
            <img src={props.cover} />
        </div>
        <div className='details'>
          <h2>{props.title}</h2>
          <h2>{props.desc}</h2>
          <h2>{props.title}</h2>
        </div>
    </div>
  )
}
