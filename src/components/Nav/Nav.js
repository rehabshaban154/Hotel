import React from 'react';
import { Link } from 'react-router-dom';
import '../Nav/nav.css';
import { useState } from 'react';
import logo from '../../Assets/logo.png';

export default function Nav() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const mobileMenu = () => setClick(false);

  return (
    <>
      <nav className='Navbar'>
        <div className='container flex-space'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} style={{ color: 'white' }}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li><Link to='/' onClick={mobileMenu}>Home</Link></li>
            <li><Link to='/about' onClick={mobileMenu}>About</Link></li>
            <li><Link to='/distination' onClick={mobileMenu}>Destinations</Link></li>
            <li><Link to='/gallery' onClick={mobileMenu}>Gallery</Link></li>
            <li><Link to='/testimonials' onClick={mobileMenu}>Testimonials</Link></li>
            <li><Link to='/blog' onClick={mobileMenu}>Blog</Link></li>
            <li><Link to='/contact' onClick={mobileMenu}>Contacts</Link></li>
          </ul>
          <div className='login'>
            <ul>
              <Link to='contact' style={{ background: 'none' }}>
                <button className='contact'>Request a Quote</button>
              </Link>
              <li>
                <Link to='register' className='login-btn'>Register</Link>
              </li>
              <li>
                <Link to='sign-in' className='login-btn'>Sign In</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
