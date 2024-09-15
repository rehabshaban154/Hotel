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
             <li> <a to='contact' style={{ background: 'none' }}>Request a Quote </a></li>
              <li>
                <a to='register' >Register</a>
              </li>
              <li>
                <a to='sign-in' >Sign In</a>
              </li>
            </ul>
        
        </div>
      </nav>
    </>
  );
}
