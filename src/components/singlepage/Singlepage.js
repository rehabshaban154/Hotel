import React, { useEffect, useState } from 'react';
import HeadTitle from "../Headtitle/HeadTitle";
import  "./singlepage.css";
import { Link, useParams } from 'react-router-dom';
import Allitem from '../distination/Allitem';
import Sdata from '../distination/Sdata';
import Emptyfile from './Emptyfile'

export default function Singlepage() {
    const {id} = useParams();
    const[item,setitem]=useState(null);


 useEffect (()=>{
    let item =Sdata.find((item)=>item.id ===parseInt(id)) 
    if(item){
        setitem(item);
    }
 },[id])


  return (
    <>
      <HeadTitle />

      {item ?(

     
      <div className='single-page top'>
        <div className='container'>
          <Link to="/distination" className='primary-btn back'>Go to Destination</Link>
          <div className='content flex'>
            <div className='main content'>
            <div className='disc flex justify-content-between'>
<img src={item.image} style={{width:"400px",height:"400px",borderRadius:"50%",border:"3px solid gray",padding:"20px"}}/>
<div className='side-content'>
             <div className='box'>
        <h2>How Can We Help You?</h2>
        <p>{item.sidepara}</p>
        <button className='outline-btn'>
            <i className="fas fa-phone" style={{marginRight:"10px"}}></i>
            contact us
            </button>
    </div>
    <div className='box2'>
        <p>{item.sidepara}</p>
    </div>
</div>
            </div>
               
                <p style={{marginTop:"30px",color:"gray"}}>{item.desc}</p>

                <div className='para flex_space' style={{marginTop:"40px"}}>
                <p style={{maxWidth:"500PX",color:"gray"}}>{item.sidepara}</p>
                <p style={{maxWidth:"500PX",color:"gray"}}>{item.sidepara}</p>
                </div>
               <h1 style={{textAlign:"left"}}>What is the {item.title} City?</h1>
          
            <p style={{marginTop:"50px",marginBottom:"30px"}}>{item.desc}</p>
            <div className='image grid1 im'>
          <img src={item.paraimage1}  alt='' style={{width:"400px",borderRadius:"10px",marginBottom:"20px"}}/>
          <img src={item.paraimage2}  alt='' style={{width:"400px",borderRadius:"10px",marginBottom:"20px"}}/>
            </div>
            <p>{item.desc}</p>
          </div>
          </div>








        </div>
      </div>
       ) :(
        <Emptyfile/>
       )}
    </>
  );
}
