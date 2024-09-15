import React, { useState } from 'react'
import Dcard from './Dcard'
import Sdata from './Sdata';
import "./dis.css";
import "../../App.css";
export  function Allitem() {
    const [dist, setdist]=useState(Sdata);
  return (
   <>
   <div className='gallery desi mtop'>
<div className='container grid'>
    <div className='content'>
        {
            dist.map((item)=>{
               return <Dcard key={item.id} item={item} />
            })
        }
    </div>
</div>
   </div>
   </>
  )
}
export default Allitem;
