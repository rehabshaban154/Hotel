import React, { useState } from 'react';
import Blogcard from './Blogcard';
import Blogdata from './Blogdata';

export default function Allblog() {
  const [items, setItems] = useState(Blogdata);

  return (
    <>
      <div className='blog top'>
        <div className='container'>
          <div className='content grid'>
            {
              items.map((item) => (
                <Blogcard key={item.id} item={item} />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}
