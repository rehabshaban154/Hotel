import logo from './logo.svg';
import './App.css';
import React from 'react';
import Nav from './components/Nav/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/About/About';
import Gallary from './components/Gallary/Gallary';
import Destinations from './components/distination/Destinations';
import Singlepage from './components/singlepage/Singlepage';
import Blog from './components/blog/Blog';
import Allblog from './components/blog/Allblog';
import Blogsingle from './components/blog/blog-single-page/Blogsingle';
import Contact from './components/contact/Contact';
import Testmonial from './components/Testmonials/Testmonial';
import Login from './components/login/Login';
import Register from './components/login/Register';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallary />} />
          <Route path='/distination' element={<Destinations />} />
          <Route path='/singlepage/:id' element={<Singlepage />} />
          <Route path="/blog" element={<Allblog />} />
         <Route path="/blogpage/:id" element={<Blogsingle />} />
         <Route path="/testimonials" element={<Testmonial />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/sign-in" element={<Login />} />
         <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

