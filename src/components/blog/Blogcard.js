import React from 'react';
import { Link } from 'react-router-dom';

export default function Blogcard({ item: { id, date, title, category, cover, para } }) {
  return (
    <>
      <div className='items'>
        <div className='img'>
          <img src={cover} alt={title} />
        </div>
        <div className='category flex_space'>
          <span style={{ fontWeight: 'bold' }}>{date}</span>
          <label>{category}</label>
        </div>
        <div className='details'>
          <h3>{title}</h3>
          <p>{para || "No additional information available."}</p>
        </div>
        <Link to={`/blogpage/${id}`} className='blogItem-link'>
          Read More <i className="fas fa-long-arrow-alt-right"></i>
        </Link>
      </div>
    </>
  );
}
