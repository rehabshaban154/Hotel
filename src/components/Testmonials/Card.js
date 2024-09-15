import React from 'react'

export default function Card(props) {
  return (
    <>
<div className='box'>
<i className="fas fa-quote-left"></i>
<div className='para'>
    <p>{props.desc}</p>
</div>
<hr/>
<div className='details flex'>
    <div className='img' >
        <img src={props.Profile} />
    </div>
    <div className='name' >
        <h3>{props.name}</h3>
        <span>{props.desc}</span>
    </div>
</div>
</div>
    </>
  )
}
