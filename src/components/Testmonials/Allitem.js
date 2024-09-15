import React from 'react'
import Tdata from './Tdata'
import Card from './Card'

export default function Allitem() {
  return (
   <>
   <div className='Testimonial mtop' >
  <div className='container grid1'>
{
    Tdata.map((item,index)=>{
    return <Card key={index} {...item} />
    })
}
  </div>
   </div>
   </>
  )
}
