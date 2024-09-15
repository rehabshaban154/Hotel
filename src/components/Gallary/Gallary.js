import React from 'react'
import HeadTitle from '../Headtitle/HeadTitle'
import Card from './Card'
import Gallarydata from './Gallarydata'
import "./Gallary.css";
export default function Gallary() {
  return (
   <>
   <HeadTitle />
   <div className='gallery top'>
<div className='container grid'>
{
    Gallarydata.map((value ,index)=>{
        return <Card  images={value.img} title={value.title} key={index}/>
    })
}
</div>
   </div>
   </>
  )
}
