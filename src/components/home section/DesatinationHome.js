import React from 'react'
import Allitem from '../distination/Allitem'

export default function DesatinationHome() {
  return (
   <>
   <div className='popular top'>
    <div className='full_container'>
      <div className='heading'>
        <h1>Most popular Distination </h1>
        <div className='line'></div>
      </div>
      <div className='content'>
       <Allitem />
      </div>
    </div>
   </div>
   </>
  )
}
