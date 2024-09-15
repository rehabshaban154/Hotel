import React from 'react'
import Card from './Card'
import Workdata from './Workdata'
import "./work.css"
export default function Works() {
  return (
   <>
   <div className='popular works'>
    <div className='container' >
        <div className='heading'>
            <h1>
                How It Works
            </h1>
            <div className='line'></div>
        </div>
        <div className='content'>
            {Workdata.map((value,index)=>{
                return  <Card key={index} cover={value.cover} title={value.title} desc={value.desc}/>
            })}
           
        </div>
    </div>
   </div>
   </>
  )
}
