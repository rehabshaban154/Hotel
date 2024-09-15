import React, { useState } from 'react';
import HeadTitle from '../Headtitle/HeadTitle';
import './login.css';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setemail] = useState('');
  const [pass, setpass] = useState('');
  const [allval, setallval] = useState([]);

  const formsubmit = (e) => {
    e.preventDefault();
    const newval = { email, pass };
    setallval([...allval, { ...newval, id: Date.now(), isVisible: true }]);

    // Reset form fields
    setemail('');
    setpass('');
  };

  return (
    <>
      <HeadTitle />
      <div className='forms top'>
        <div className='container'>
          <div className='sign-box' style={{marginTop:"40px"}}>
            <p>Enter Your Email and password below to log in to your account and use the benefits of our website.</p>
            <div className="input">
              <form onSubmit={formsubmit}>
                <input
                  type="email"
                  name="mail"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  placeholder='Enter Your email'
                />
                
                <input
                  type="password"
                  name="pass"
                  value={pass}
                  onChange={(e) => setpass(e.target.value)}
                  placeholder='Enter Your password'
                />
                
                <div className='flex_space'>
                  <input type='checkbox' style={{width:"100px"}}/>
                  <label>Remember Me</label>
                </div>
                <span>Forget Password? </span>
               <Link to="/"> <button type='submit' className='primary-btn'>Sign In</button></Link>
                <p>Don't have an account? <Link to='/register'>Register here</Link></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
