import React from 'react'
import "./download.css"
import google from "../../../Assets/google-play-button.png";
import store from "../../../Assets/appstore-button.png";
import app from "../../../Assets/app-image-1.png";
export default function Download() {
  return (
   <>
   <div className='download top'>
    <div className='container flex_space'>
        <div className='row'>
            <h3>Download Our App</h3>
            <h1>Wow! Get This Template App For Your Mobile</h1>
            <ul>
                <li><i className="fas fa-check"></i> Get PAPERLESS Confirmation</li>
                <li><i className="fas fa-check"></i> Get PAPERLESS Confirmation</li>
                <li><i className="fas fa-check"></i> Get PAPERLESS Confirmation</li>
                <li><i className="fas fa-check"></i> Get PAPERLESS Confirmation</li>
                <li><i className="fas fa-check"></i> Get PAPERLESS Confirmation</li>
                <li><i className="fas fa-check"></i> Get PAPERLESS Confirmation</li>
                <li><i className="fas fa-check"></i> Get PAPERLESS Confirmation</li>
                <li><i className="fas fa-check"></i> Get PAPERLESS Confirmation</li>
            </ul>
            <div className='img flex'>
                <img src={store} />
                <img src={google} />
            </div>
        </div>
        <div className='row row2'>
            <img src={app} />
        </div>
    </div>
   </div>
   </>
  )
}
